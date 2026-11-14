# Shunya Fujimoto — Researcher Website

Bilingual Japanese/English static researcher website built with Astro and deployed to GitHub Pages.

## Local development

Node.js 24 is required.

```powershell
npm ci
npm run dev
```

Before publishing, run `npm run verify`. It checks Astro/TypeScript, creates the production build, confirms all ten bilingual pages plus the 404 page, validates internal links and metadata, and scans the output for private-data markers.

## Updating public data

The private `research-profile` repository is the source of truth. Do not edit `src/data/` or `public/downloads/publications.bib` directly. From the private repository, run:

```powershell
python site/sync_public.py --target C:\research\AncientRome220.github.io --check
python site/sync_public.py --target C:\research\AncientRome220.github.io --write
```

The synchronizer copies only explicitly allowed profile fields, the approved public contact email, public attachment URLs, and public BibTeX. It never copies raw researchmap exports, other contact details, or attachment bodies.

## Deployment

Pushing `main` starts `.github/workflows/deploy.yml`. GitHub Actions builds with Node.js 24 and deploys to GitHub Pages. Generated `dist/` is not committed.

## TRIAD 2026 presentation

The audience page is `/talks/triad-2026/`. Its `public/talks/triad-2026/`
folder contains only `index.html`, `slides.html`, and `slides.pdf`.
The complete 28-slide deck includes references and backups; presenter notes
are removed from the public HTML. Each slide links to the same stable page.

Update these three files together using the TRIAD project's checked audience
export. Keep editable manuscripts, slide source, speech, research materials,
and private export manifests outside this public repository. The profile
synchronization remains independent. `npm run verify` also checks this export's
file allowlist, slide and QR counts, embedded assets, and private-note markers.
