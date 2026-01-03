#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PHOTOS_DIR = path.join(ROOT, 'src/lib/assets/photos');
const STATIC_DIR = path.join(ROOT, 'static/photos');
const PREVIEW_DIR = path.join(STATIC_DIR, 'preview');
const MANIFEST_PATH = path.join(STATIC_DIR, 'manifest.json');

const PREVIEW_LONG_EDGE = 1400; // px for grid display
const QUALITY = 82;

const args = new Set(process.argv.slice(2));
const FORCE = args.has('--force');

const FILENAME_FALLBACK = 'image';

function stripDiacritics(value) {
  return value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
}

function normalizeFilename(filename) {
  const parsed = path.parse(filename);
  const base = stripDiacritics(parsed.name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const safeBase = base || FILENAME_FALLBACK;
  const ext = parsed.ext.toLowerCase();
  return `${safeBase}${ext}`;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function nextAvailableName(targetName, claimed, currentFile) {
  const parsed = path.parse(targetName);
  let candidate = targetName;
  let suffix = 1;

  while (
    claimed.has(candidate) ||
    (candidate !== currentFile && (await fileExists(path.join(PHOTOS_DIR, candidate))))
  ) {
    candidate = `${parsed.name}-${suffix}${parsed.ext}`;
    suffix += 1;
  }

  return candidate;
}

async function readManifestSafe() {
  try {
    const contents = await fs.readFile(MANIFEST_PATH, 'utf-8');
    return JSON.parse(contents);
  } catch {
    return null;
  }
}

async function outputsAreCurrent(files) {
  const manifest = await readManifestSafe();
  if (!manifest || !Array.isArray(manifest)) return false;
  if (manifest.length !== files.length) return false;

  const manifestNames = new Set(manifest.map((m) => m.file));
  for (const file of files) {
    if (!manifestNames.has(file)) return false;

    const previewName = `${path.parse(file).name}.jpg`;
    const previewPath = path.join(PREVIEW_DIR, previewName);
    const originalPath = path.join(STATIC_DIR, 'original', file);
    try {
      await fs.stat(previewPath);
      await fs.stat(originalPath);
    } catch {
      return false;
    }
  }

  return true;
}

async function cleanOutputs() {
  await fs.rm(PREVIEW_DIR, { recursive: true, force: true });
  await fs.rm(path.join(STATIC_DIR, 'original'), { recursive: true, force: true });
  await fs.rm(MANIFEST_PATH, { force: true });
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function readPhotos() {
  const entries = await fs.readdir(PHOTOS_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isFile()).map((e) => e.name);
}

async function normalizePhotoFilenames(files) {
  const normalized = [];
  const claimed = new Set();

  for (const file of files) {
    const desired = normalizeFilename(file);
    const finalName = await nextAvailableName(desired, claimed, file);
    const srcPath = path.join(PHOTOS_DIR, file);
    const destPath = path.join(PHOTOS_DIR, finalName);

    if (file !== finalName) {
      console.log(`[photos:preprocess] renaming ${file} -> ${finalName}`);
      await fs.rename(srcPath, destPath);
    }

    claimed.add(finalName);
    normalized.push(finalName);
  }

  return normalized;
}

function buildAlt(filename) {
  return filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

async function processPhoto(filename) {
  const inputPath = path.join(PHOTOS_DIR, filename);
  const basename = path.parse(filename).name;
  const ext = path.parse(filename).ext.toLowerCase();

  const meta = await sharp(inputPath).metadata();
  const { width, height } = meta;

  const previewName = `${basename}.jpg`;
  const previewPath = path.join(PREVIEW_DIR, previewName);

  const processed = sharp(inputPath)
    .resize({
      width: PREVIEW_LONG_EDGE,
      height: PREVIEW_LONG_EDGE,
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .withMetadata();

  const { width: outW, height: outH } = await processed.toFile(previewPath);

  return {
    file: filename,
    alt: buildAlt(filename),
    original: {
      src: `/photos/original/${filename}`,
      width,
      height
    },
    display: {
      src: `/photos/preview/${previewName}`,
      width: outW ?? null,
      height: outH ?? null
    }
  };
}

async function copyOriginal(filename) {
  const srcPath = path.join(PHOTOS_DIR, filename);
  const destPath = path.join(STATIC_DIR, 'original', filename);
  await ensureDir(path.dirname(destPath));
  await fs.copyFile(srcPath, destPath);
}

async function main() {
  console.log('[photos:preprocess] start');
  await ensureDir(STATIC_DIR);

  const photos = await readPhotos();
  console.log(`[photos:preprocess] found ${photos.length} files`);
  const normalizedPhotos = await normalizePhotoFilenames(photos);

  if (normalizedPhotos.length) {
    console.log('[photos:preprocess] filenames normalized');
  }

  if (!FORCE && (await outputsAreCurrent(normalizedPhotos))) {
    console.log('[photos:preprocess] outputs current; skipping');
    return;
  }

  if (FORCE) {
    console.log('[photos:preprocess] force enabled; cleaning outputs');
    await cleanOutputs();
  }

  await ensureDir(PREVIEW_DIR);
  await ensureDir(path.join(STATIC_DIR, 'original'));

  const manifest = [];
  for (const file of normalizedPhotos) {
    console.log(`[photos:preprocess] processing ${file}`);
    const record = await processPhoto(file);
    await copyOriginal(file);
    manifest.push(record);
  }

  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`[photos:preprocess] wrote manifest to ${MANIFEST_PATH}`);
  console.log('[photos:preprocess] done');
}

main().catch((err) => {
  console.error('[photos:preprocess] failed', err);
  process.exit(1);
});
