import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static configuration for GitHub Pages
export default defineConfig({
  site: 'https://elitelayouts.github.io/tshikhuthula-school', // GitHub Pages URL for this repository
  base: '/tshikhuthula-school', // Base path for GitHub Pages project repository
  output: 'static',
  integrations: [sitemap()],
  vite: {
    define: {
      global: 'globalThis'
    },
    build: {
      assetsDir: 'assets',
      minify: true,
      sourcemap: false
    }
  },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});