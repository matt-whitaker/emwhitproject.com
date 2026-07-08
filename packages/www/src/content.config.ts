import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    preview: z.string().optional(),
  }),
});

const discography = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/discography' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    date: z.coerce.date(),
    cover: z.string(),
    description: z.string(),
    exclude: z.boolean().optional(),
  }),
});

export const collections = { news, discography };
