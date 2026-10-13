// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages sirve el sitio bajo /CinemaPortfolio/; con dominio propio queda en "/".
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH ?? '/',
  vite: {
    plugins: [tailwindcss()]
  }
});