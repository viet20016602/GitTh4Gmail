# Synaptic Swarm Protocol (SYNS)

Synaptic Swarm Protocol (SYNS) is a public MVP repository for a neuromorphic swarm intelligence protocol narrative. It ships a branded website, protocol documentation, governance files, CI, release automation, and static deployment for a GitHub-first launch.

## What is included

- A dark, protocol-native Next.js + TypeScript website with a neural systems visual language
- A `/docs` experience for the MVP thesis, primitives, execution loop, and repository workflow
- Root documentation for contributors, security reporting, changelog discipline, and open-source collaboration
- GitHub Actions for CI, GitHub Pages deployment, and automated releases on semantic tags
- Issue forms, PR template, and release note configuration for a public repository from day one

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- GitHub Actions
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

This repository is configured for static export and GitHub Pages deployment.

- Push to `main` to trigger the Pages workflow
- The expected site URL is `https://viet20016602.github.io/SolComp/`
- Push a semantic version tag such as `v0.1.0` to generate a GitHub Release with a built static artifact

## Repository map

```text
src/
  app/               App Router pages and metadata routes
  components/        Brand and visualization components
  lib/               Shared content and constants
public/              Static social preview assets
docs/                Repository-side protocol notes
.github/
  ISSUE_TEMPLATE/    Bug and feature templates
  workflows/         CI, Pages deploy, and release workflows
```

## Branding note

The current repository uses a custom `SYNS` mark built in SVG so the project can launch immediately without waiting on a separate asset pipeline. If an official logo asset is provided later, replace the current mark in `src/components/brand-mark.tsx` and `src/app/icon.svg`.

## Governance

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [SECURITY.md](./SECURITY.md)
- [CHANGELOG.md](./CHANGELOG.md)
- [docs/PROTOCOL.md](./docs/PROTOCOL.md)

## License

This project is released under the [MIT License](./LICENSE).
