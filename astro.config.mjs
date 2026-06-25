import { defineConfig } from 'astro/config';

// GitHub Pages project site: served under /pl-lessons/
export default defineConfig({
  site: 'https://ap-arto.github.io',
  base: '/pl-lessons/',
  build: { format: 'directory' }, // clean URLs: /lessons/<slug>/
});
