import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { designTypes } from './data/site';

// Los archivos de estas carpetas los crea y edita Decap CMS desde /admin.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    photos: z.array(z.string()).default([]),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    position: z.string(),
    youtube: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const makeup = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/makeup' }),
  schema: z.object({
    title: z.string(),
    photos: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const design = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/design' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(designTypes),
    images: z.array(z.string()).default([]),
    video: z.string().optional(),
    youtube: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { events, videos, makeup, design };
