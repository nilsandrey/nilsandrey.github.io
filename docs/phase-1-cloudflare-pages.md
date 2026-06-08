# Phase 1 Cloudflare Pages setup

Phase 1 keeps the current static HTML/CSS site intact while validating it on Cloudflare Pages at `next.nilsandrey.com` before any final DNS cutover.

## Repository

Create a new private GitHub repository named `nilsandrey.com` under the `nilsandrey` account and mirror the current `nilsandrey/nilsandrey.github.io` repository into it so Git history is preserved.

The copied GitHub Pages `CNAME` file was removed in this branch because `nilsandrey.com` must remain served by the existing public production repository until the final manual cutover is approved.

## Cloudflare Pages configuration

Use the Cloudflare Pages GitHub integration directly connected to the private `nilsandrey.com` repository.

Recommended settings:

- Framework preset: `None` / static site.
- Build command: empty.
- Build output directory: `/`.
- Production branch: `main`.
- Production custom domain during Phase 1: `next.nilsandrey.com`.
- Branch and pull request preview deployments: enabled and public.

Do not change DNS for `nilsandrey.com` during Phase 1.

## Indexing and canonical URLs

The temporary Cloudflare-hosted site is intentionally marked `noindex` until final cutover:

- `_headers` sends `X-Robots-Tag: noindex, nofollow` for every route.
- Each HTML page includes `<meta name="robots" content="noindex,nofollow">`.

Canonical URLs should continue to point to `https://nilsandrey.com/...` during Phase 1, including on `next.nilsandrey.com` and Cloudflare preview URLs.

## Validation

Run these checks before approving Phase 1:

```bash
npm install
npm run check:links
npm run test:e2e
```

The Playwright smoke tests cover the homepage, blog index, representative post pages, canonical metadata, noindex metadata, and key asset references.
