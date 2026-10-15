# CinemaPortfolio — Edith Jordan

Astro + Tailwind + Decap CMS.

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm cms        # en otra terminal: habilita /admin en local sin login
pnpm build
```

## Contenido
- Eventos de fotografía: `src/content/events/*.md`
- Filmmaking: `src/content/videos/*.md`
- Correo e Instagram: `src/data/contact.json` (panel → Inicio → Contacto)
- Colores, roles y áreas: `src/data/site.ts` y `src/styles/global.css`

Español en `/` e inglés en `/en/`. Textos fijos en `src/i18n/ui.ts`; el contenido
usa los campos opcionales "en inglés" del panel (`title_en`, `bio_en`) y, si están vacíos, el español.

Se editan desde `/admin`. Las subidas van a `public/uploads/`.

## Publicar en Cloudflare Pages
1. Subir el repo a GitHub y conectarlo en Cloudflare Pages (build `pnpm build`, salida `dist`).
2. Crear una OAuth App en GitHub con callback `https://DOMINIO/api/callback`.
3. En Cloudflare Pages agregar las variables `GITHUB_CLIENT_ID` y `GITHUB_CLIENT_SECRET`.
4. En `public/admin/config.yml` reemplazar `repo` y `base_url`.

## GitHub Pages
Cada merge a `main` publica el sitio con `.github/workflows/deploy.yml` en
`https://<usuario>.github.io/CinemaPortfolio/`. El panel `/admin` sólo inicia sesión
en Cloudflare Pages (necesita las funciones de `functions/`).

## Créditos de logos
Logos de herramientas en `src/assets/logos/`: Simple Icons 13.21.0 (CC0), CapCut de Hugeicons (MIT)
y Reaper de FontAudio por @fefanto (CC BY 4.0). Las marcas pertenecen a sus dueños.
