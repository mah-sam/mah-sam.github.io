# mahmoud-sameh.me

Personal website for Mahmoud Sameh — AI Solution Engineer.

## Project Overview

| Key | Value |
|-----|-------|
| **Framework** | Astro 5 |
| **Styling** | Tailwind CSS 4 (CSS-first config via `@tailwindcss/vite`) |
| **Content** | Markdown files with Zod-validated frontmatter (Astro Content Collections) |
| **Fonts** | Inter (sans) + JetBrains Mono (monospace accents) |
| **Deployment** | GitHub Pages via GitHub Actions (repo: `mah-sam/mah-sam.github.io`) |
| **Domain** | mahmoud-sameh.me |
| **Analytics** | Google Tag Manager (GTM-5JWKJPT) + Google Analytics (G-9461TF3354) |

## Design Philosophy

All future changes MUST comply with these principles:

### Visual Identity
- **Dark-first**: Primary background `#0a0a0f`, with optional light mode
- **Accent colors**: Electric blue (`#3b82f6`) and violet (`#8b5cf6`) — never warm/earthy tones
- **Glass-morphism cards**: Translucent backgrounds (`rgba(255,255,255,0.03)`), subtle borders, glow on hover
- **Typography**: Inter for body text, JetBrains Mono for code, tags, tech elements, and decorative accents
- **Dot grid background**: Subtle CSS radial-gradient pattern on hero sections — no heavy JS particle libraries

### UX Principles
- **Minimalist**: Generous whitespace, max content width ~1200px
- **Purposeful animation**: Scroll-triggered fade-up (IntersectionObserver), subtle hover transforms. No gratuitous animation
- **Performance**: Zero JS by default (Astro islands). No client-side frameworks unless absolutely necessary
- **Accessible**: Proper heading hierarchy, ARIA labels, focus states, sufficient color contrast
- **Mobile-first**: Responsive at 320px, 768px, 1024px, 1440px breakpoints

### What NOT to Do
- Do not add particle.js, three.js, or heavy animation libraries
- Do not introduce React/Vue/Svelte unless an interactive island genuinely requires it
- Do not use Bootstrap, jQuery, or other legacy libraries
- Do not hardcode content in page files — always use Content Collections
- Do not use colors outside the defined palette without updating the theme tokens

## Architecture

```
src/
├── layouts/          # Page shells (BaseLayout → PageLayout → specific pages)
├── components/       # Reusable .astro components (no framework deps)
├── content/          # Markdown content (posts/, projects/, publications/)
├── pages/            # File-based routing
├── styles/           # global.css with Tailwind + theme tokens
└── lib/              # Utility functions (utils.ts)
```

### Content Collections

Defined in `src/content.config.ts`. Three collections:

- **posts**: Blog articles. File: `src/content/posts/<slug>.md`
- **projects**: Portfolio items. File: `src/content/projects/<slug>.md`
- **publications**: Academic papers. File: `src/content/publications/<slug>.md`

### Adding Content

**New blog post:**
```bash
# Create src/content/posts/my-new-post.md
---
title: "Post Title"
description: "Brief description"
date: 2026-02-26
tags: ["ai", "engineering"]
draft: false
---
Post content in Markdown...
```

**New project:**
```bash
# Create src/content/projects/my-project.md
---
title: "Project Name"
description: "What it does"
date: 2026-01-01
tags: ["Python", "AI"]
github: "https://github.com/..."
featured: true
order: 1
---
Extended description...
```

**New publication:**
```bash
# Create src/content/publications/my-paper.md
---
title: "Paper Title"
authors: ["Mahmoud Sameh", "Co-Author"]
venue: "Conference Name 2026"
date: 2026-01-01
doi: "10.1234/example"
pdf: "/cv/paper.pdf"
abstract: "Paper abstract..."
tags: ["NLP", "LLM"]
---
```

## Conventions

### File Naming
- Components: `PascalCase.astro` (e.g., `ProjectCard.astro`)
- Pages: `kebab-case.astro` or `index.astro`
- Content: `kebab-case.md` (e.g., `my-new-post.md`)
- Utilities: `camelCase.ts`

### Commit Messages
- Format: `type: description` (e.g., `feat: add publications page`, `fix: nav mobile menu`, `content: new blog post`)
- Types: `feat`, `fix`, `content`, `style`, `refactor`, `chore`, `docs`

### Component Conventions
- Props interface at the top of frontmatter
- Inline SVG icons (no icon libraries)
- CSS classes via Tailwind utilities + custom CSS variables from `global.css`
- Client-side JS only in `<script>` tags, kept minimal

### Development
```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

## Changelog

### v1.0.0 — 2026-02-26
- Complete rebuild from static HTML to Astro 5 + Tailwind CSS 4
- Dark-first design with blue/violet accent palette
- Content Collections for posts, projects, and publications
- Responsive navigation with mobile menu
- Dark/light theme toggle with localStorage persistence
- Scroll-triggered animations (IntersectionObserver)
- Glass-morphism card components
- Hero section with animated gradient orbs and dot grid
- Projects page with tag-based filtering
- Blog with markdown rendering and reading time
- Publications page (ready for future content)
- SEO: Open Graph, Twitter cards, canonical URLs, sitemap
- GitHub Actions deployment to GitHub Pages
- Migrated all existing content (1 post, 4 projects)
