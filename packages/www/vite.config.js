import { defineConfig } from 'vite';
import { readFileSync, readdirSync } from 'fs';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import config from './site.config.json';

function loadData(folder) {
  const dir = resolve(__dirname, `data/${folder}`);
  return readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => {
      const entry = JSON.parse(readFileSync(resolve(dir, f), 'utf-8'));
      return { ...entry, date: new Date(entry.date + 'T00:00:00Z') };
    })
    .sort((a, b) => b.date - a.date);
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    createHtmlPlugin({
      inject: {
        data: {
          config,
          discography: loadData('discography'),
          news: loadData('news'),
        },
      },
    }),
  ],
});
