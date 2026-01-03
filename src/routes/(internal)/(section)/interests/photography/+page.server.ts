import { readFile } from "node:fs/promises";
import path from "node:path";
import type { PageServerLoad } from "./$types";

type ManifestEntry = {
  file: string;
  alt: string;
  original: { src: string; width: number | null; height: number | null };
  display: { src: string; width: number | null; height: number | null };
};

const manifestPath = path.resolve("static/photos/manifest.json");

async function readManifest(): Promise<ManifestEntry[]> {
  try {
    const contents = await readFile(manifestPath, "utf-8");
    return JSON.parse(contents) as ManifestEntry[];
  } catch (err) {
    console.error("[photography] manifest missing or unreadable", err);
    return [];
  }
}

export const load: PageServerLoad = async () => {
  console.info("[photography] load start");

  const manifest = await readManifest();
  if (!manifest.length) {
    console.warn("[photography] no manifest entries; returning empty list");
    return { photos: [] };
  }

  const photos = manifest.map((entry) => ({
    fullImage: {
      src: entry.original.src,
      w: entry.original.width ?? undefined,
      h: entry.original.height ?? undefined
    },
    display: {
      src: entry.display.src,
      w: entry.display.width ?? undefined,
      h: entry.display.height ?? undefined
    },
    alt: entry.alt
  }));

  console.info("[photography] photo list built", photos.length);
  return { photos };
};
