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

The synchronizer copies only explicitly allowed profile fields, public attachment URLs, and public BibTeX. It never copies raw researchmap exports or attachment bodies.

## Deployment

Pushing `main` starts `.github/workflows/deploy.yml`. GitHub Actions builds with Node.js 24 and deploys to GitHub Pages. Generated `dist/` is not committed.
