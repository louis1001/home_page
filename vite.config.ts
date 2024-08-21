import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import { isoImport } from 'vite-plugin-iso-import'

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		isoImport()
	]
});
