// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import optimizeMedia from './src/integrations/optimize-media';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages sirve el sitio bajo /CinemaPortfolio/; con dominio propio queda en "/".
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  // Español en "/" y inglés en "/en/".
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  // Comprime fotos y videos subidos desde el panel al publicar.
  integrations: [optimizeMedia()],
  vite: {
    plugins: [tailwindcss()]
  }
});