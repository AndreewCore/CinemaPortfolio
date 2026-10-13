const svgs = import.meta.glob<string>('../assets/logos/*.svg', { query: '?raw', import: 'default', eager: true });

/**
 * Devuelve el SVG de `src/assets/logos/<name>.svg` listo para incrustar: sin
 * <title> ni tamaño fijo y pintado con currentColor, para que el color y el
 * tamaño los controle el CSS del contenedor.
 */
export function inlineLogo(name: string): string {
  const raw = svgs[`../assets/logos/${name}.svg`] ?? '';
  return raw
    .replace(/<title>.*?<\/title>/, '')
    .replace(/\s(width|height)="[^"]*"/g, '')
    .replace('<svg', '<svg fill="currentColor" aria-hidden="true" class="h-full w-full"');
}
