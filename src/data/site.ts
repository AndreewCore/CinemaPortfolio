// Si se cambian, actualizar también las opciones en public/admin/config.yml.
export const filmmakingRoles = ['Dirección', 'Producción', 'Postproducción', 'Dirección de Fotografía'];

// Áreas de trabajo: chips del hero y opciones del formulario de contacto.
export const areas = [...filmmakingRoles, 'Fotografía', 'Maquillaje', 'Diseño Gráfico'];

// Tipos de pieza de Diseño Gráfico; mantener igual a las opciones de public/admin/config.yml.
export const designTypes = ['Carrusel', 'Reel', 'Pieza'] as const;

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Fotografía', href: '#fotografia' },
  { label: 'Filmmaking', href: '#filmmaking' },
  { label: 'Maquillaje', href: '#maquillaje' },
  { label: 'Diseño', href: '#diseno' },
  { label: 'Contacto', href: '#contacto' },
];

// Placeholder: reemplazar por los datos reales.
export const contact = {
  email: 'hola@edithjordan.com',
  instagram: '@edithjordan',
  instagramUrl: 'https://instagram.com/',
};
