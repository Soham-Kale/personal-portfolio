# Personal Portfolio — Portfolio OS

A desktop-OS-style personal portfolio built with **Next.js (App Router) + TypeScript**.

Mac-style draggable windows, a dock, desktop widgets (live GitHub contribution graph,
calendar, visitor counter, theme switcher), and an interactive terminal.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Editing content

All site content — bio, experience, projects, writing, notes, quotes, links —
lives in a single file: [`lib/data.ts`](lib/data.ts). Edit it and the whole site updates.

## Building / deploying

The project is configured for **static export** (`output: "export"` in
`next.config.mjs`):

```bash
npm run build    # outputs a fully static site to ./out
```

Deploy `out/` anywhere — Vercel, Netlify, or GitHub Pages.

- **Vercel**: just import the repo; it detects Next.js automatically.
- **GitHub Pages (project page)**: add `basePath: "/<repo-name>"` to
  `next.config.mjs` before building, then publish `out/`.

## Structure

```
app/            layout, page, global styles
components/     Desktop (window manager), Window, Dock, MenuBar,
                Widgets (quote / links / calendar / GitHub graph / ...),
                AppWindows (About, Experience, Projects, Terminal, ...)
lib/            data.ts (all content), icons.tsx
```
