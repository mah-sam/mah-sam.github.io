import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { cvs } from './src/cv-links.mjs';

export default defineConfig({
  site: 'https://mahmoud-sameh.me',
  // The CV links (/fai, /ais, /ee...) only forward to PDFs, so they stay out of the sitemap
  integrations: [
    sitemap({ filter: (page) => !cvs.some(({ slug }) => page.endsWith(`/${slug}/`)) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
