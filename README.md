# Solomon Oshinde — Portfolio

Personal portfolio built with Next.js, React, TypeScript and Tailwind CSS. It exports as a static site and is hosted on Netlify.

## Sections

- **Hero**: intro with the outlined name behind the headline
- **Work**: key case studies and an expanding accordion of shipped projects, each with a coded UI mockup
- **About**
- **Stack**: an interactive "periodic table" of tools with a filter and an inspector panel
- **Experience**: scroll-driven timeline
- **Academic**
- **Milestones**: pinned horizontal gallery with count-up numbers
- **Contact**: email with copy button, socials and a spinning badge

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the static site into `out/` |

## Editing content

Most content lives in two files:

- `src/data/site.ts`: name, intro, about text, experience timeline, academic items, milestones, case studies, projects and socials
- `src/data/stack.ts`: the stack table

Colours and animations are in `src/app/globals.css`.

## Deployment

Netlify builds the site using `netlify.toml` (`npm run build`, publishing the `out` folder). Pushing to `main` triggers a deploy.
