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

// One folder per album under content/discography/. _album.json holds the
// album's own metadata; every other file in that folder is a track. The
// folder name is the album slug — tracks link to their album implicitly via
// that shared path prefix, not a manually-typed reference field.
const albums = defineCollection({
  loader: glob({
    pattern: '*/_album.json',
    base: './src/content/discography',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Single', 'EP', 'Album']),
    date: z.coerce.date(),
    cover: z.string(),
    description: z.string(),
    exclude: z.boolean().optional(),
  }),
});

const tracks = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/discography' }),
  schema: z.object({
    title: z.string(),
    track: z.number(),
    length: z.string()
  }),
});

export const collections = { news, albums, tracks };
