// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Lyrics rely on single line breaks within a verse; standard Markdown
  // collapses those into spaces, so remark-breaks turns them into <br>.
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});
