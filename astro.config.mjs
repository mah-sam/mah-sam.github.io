import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mahmoud-sameh.me',
  integrations: [sitemap()],
  // /cv opens the CV in the browser (the build copies it from CV/ to dist/cv/)
  redirects: {
    '/cv': '/cv/Mahmoud_Sameh_CV.pdf',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
