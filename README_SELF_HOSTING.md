# The Quantum Imperative — Self-Hosting Package

This package contains a production-ready static build and the editable React source.

## Iteration 2

This revision adds an opaque fullscreen mobile navigation overlay with scroll lock, Twitter Card metadata, schema.org Book JSON-LD, a moderately tighter mobile Stack/Covenant rhythm, and the clearer line “The power to decide is the answer.” No Sentry, copy controls, Executive Brief, or additional analytics were added.

## Quick deployment

Upload the contents of `site/` to your static web root. Keep the included `_redirects` file for Netlify-compatible hosts or `.htaccess` for Apache so `/imprint` and `/privacy` resolve to the single-page application.

The current package is intentionally private-staging safe: `robots.txt` blocks all crawlers and the document uses `noindex, nofollow, noarchive`. Remove those directives only when the legal pages are complete and production publication is approved.

## Edit and rebuild

1. Run `./prepare-source-assets.sh` from the package root.
2. Change into `source/`.
3. Run `pnpm install`.
4. Run `pnpm dev` for editing or `pnpm build` for a production build.

All book, author, Forum, seal, video-poster, video, and font assets used by the website are included in `site/assets/media/`. The Amazon URL is centralized in `source/client/src/content/siteData.ts`.

## Before production cutover

Replace the bilingual Imprint and Privacy placeholders with verified legal details. Decide whether analytics should remain enabled and complete the privacy language accordingly. Remove `noindex` and the crawler block only after review. No DNS or live-domain change is included in this package.
