# Source Directory

This directory contains the application source code for the SolComp MVP.

## Structure

- `app/`
  Next.js App Router pages, metadata routes, and global styling entry points.
- `components/`
  Reusable UI modules such as the brand mark, FAQ accordion, link hub, and readiness board.
- `lib/`
  Shared project content, static data, and configuration objects used across the site.

## Notes

- Keep all source code and comments in English.
- Prefer adding shared UI logic to `components/` and shared data definitions to `lib/`.
- Route-specific logic should stay as close as possible to the corresponding file inside `app/`.
