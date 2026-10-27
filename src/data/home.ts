import aboutData from './about.json';
import collageData from './collage.json';
import aboutDemo from '../placeholder/about.json';
import collageDemo from '../placeholder/collage.json';

// En `astro dev` se ven los ejemplos de src/placeholder; el sitio publicado usa solo lo del panel.
export const about = import.meta.env.DEV ? aboutDemo : aboutData;
export const collage: { clips: { video: string; poster?: string }[] } = import.meta.env.DEV ? collageDemo : collageData;
