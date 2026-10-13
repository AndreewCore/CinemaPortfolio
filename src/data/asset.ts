/**
 * Antepone la ruta base del sitio a rutas locales ("/uploads/x.jpg").
 * Necesario en GitHub Pages, donde el sitio vive bajo /CinemaPortfolio/;
 * las URLs externas se devuelven tal cual.
 */
export function asset(path: string): string {
  if (!path.startsWith('/')) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
