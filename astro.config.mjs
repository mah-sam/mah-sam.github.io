import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mahmoud-sameh.me',
  // /cv only forwards to the CV PDF (src/pages/cv.astro), so it stays out of the sitemap
  integrations: [sitemap({ filter: (page) => !page.endsWith('/cv/') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
