# emwhitproject.com

The Emwhit Project's website — an npm workspaces monorepo with a single package, `packages/www`, an Astro site.

## Stack

- **Astro** (static output) with **Tailwind CSS v4** via `@tailwindcss/vite`
- **GSAP** (`ScrollTrigger`) for scroll-based entrance animations
- **Tailwind** for styling
- Content is authored as **Astro Content Collections**, not hand-rolled data loading

## Structure (`packages/www/src`)

- `pages/index.astro` — the single-page site (hero, about, news, discography sections)
- `pages/news/[slug].astro` — one dynamic route generates a page per news article
- `content.config.ts` — collection schemas for `news` (Markdown) and `discography` (JSON)
- `content/news/*.md` — one article per file; frontmatter is `title`, `date`, optional `preview`. The Markdown body is the single source of truth for content — rendered in full on the article page, and as a plain-text excerpt (`preview` or auto-derived first paragraph) on the homepage
- `content/discography/*.json` — one release per file
- `layouts/Layout.astro` — shared `<head>` (SEO/OG/JSON-LD), nav, footer; `<body>` is `flex flex-col min-h-screen` so short pages still pin the footer to the bottom
- `scripts/animations.js` — homepage-only GSAP animations (targets `#about`, `.news-item`, `.disco-item`, and the nav dark-swap on scroll past the white About section). Imported directly by `index.astro`, **not** the shared layout — pages without a white section (like news articles) must not load it
- `lib/excerpt.js` — regex-based Markdown-to-plain-text stripper for the news homepage teaser fallback
- `site.config.json` — site-wide config (socials, title/description, fontawesome kit URL)

## Conventions

- Pretty URLs come from Astro's file-based routing (dynamic `[slug].astro` routes) — no custom URL-rewriting plugin needed
- New content collection types follow the same pattern: define a schema in `content.config.ts`, add files under `src/content/<name>/`, query via `getCollection()`

## CI/CD

`.github/workflows/build-test-deploy.www-prod.yaml` — on push to `mainline`: `npm ci` → `astro build` → deploy to S3/CloudFront via a shared reusable workflow.

