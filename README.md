# CV Web App

Single-page CV document app built with React, TypeScript, and Vite.

## Features

- Formal CV layout with left sidebar and right content column
- Language switch: `ES` / `EN`
- Profile switch: `.NET` / `Node`
- Profile-specific summary, expertise emphasis, and tech stacks
- One icon-only action to export the current DOM as multi-page A4 PDF

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content Source

All CV content is centralized in `src/content/cvContent.ts` with:

- shared/common data
- profile-specific variants (`dotnet` and `node`)
- localized labels/content (`es` and `en`)

Update social URLs in one place:

- `links.linkedin`
- `links.github`
- `links.twitter`
- `links.whatsapp`

## Editing Guide

For practical content updates, see:

- `docs/cv-editing-guide.md`
