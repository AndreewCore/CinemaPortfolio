import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { designTypes } from './data/site';

// Cada foto lleva su texto alternativo opcional; si falta, se genera con el título.
const media = z.object({
  src: z.string(),
  alt: z.string().optional(),
  alt_en: z.string().optional(),
});

// Los archivos de estas carpetas los crea y edita Decap CMS desde /admin.
// Los campos `*_en` son la traducción opcional; si están vacíos se usa el español.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    date: z.coerce.date(),
    photos: z.array(media).default([]),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    position: z.string(),
    youtube: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    image_alt_en: z.string().optional(),
    order: z.number().default(0),
  }),
});

const makeup = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/makeup' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    photos: z.array(media).default([]),
    order: z.number().default(0),
  }),
});

const design = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/design' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    type: z.enum(designTypes),
    images: z.array(media).default([]),
    video: z.string().optional(),
    youtube: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { events, videos, makeup, design };
