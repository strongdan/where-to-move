# Where to Move Redirect Site

This repository owns the redirect-only behavior for the defensive/marketing domain `where-to-move.com`.

## Canonical URL strategy

| Surface | URL | Role |
| --- | --- | --- |
| Canonical product app | `https://wheretomove.placesignals.com` | Primary Where to Move app destination |
| Redirect-only domain | `https://where-to-move.com` | Defensive/marketing domain that redirects to the canonical app |
| Redirect-only www domain | `https://www.where-to-move.com` | Should also redirect to the canonical app |
| Parent brand | `https://placesignals.com` | Place Signals suite marketing shell |

`where-to-move.com` should not become a second canonical product app. It should preserve path and query strings while redirecting to `wheretomove.placesignals.com`.

## Implementation

`next.config.ts` defines the legacy Vercel permanent redirect:

```ts
source: "/:path*"
destination: "https://wheretomove.placesignals.com/:path*"
permanent: true
```

The Cloudflare replacement is `cloudflare/redirect-worker.mjs`, configured by `wrangler.jsonc`. It returns an HTTP 308 redirect to the canonical host while preserving the incoming path and query string. The Worker intentionally has no production Custom Domain declared in repository configuration: attach `where-to-move.com` and `www.where-to-move.com` only through the authorized Cloudflare DNS/Workers cutover after the Worker is deployed and verified.

Automatic Vercel Git deployments are disabled by `vercel.json`. Keep the existing known-good Vercel production deployment only as rollback until the Cloudflare custom-domain cutover is verified.

This means:

```text
https://where-to-move.com/sample/path?x=1
```

should resolve to:

```text
https://wheretomove.placesignals.com/sample/path?x=1
```

## Cloudflare deployment

Deploy the redirect Worker from an authenticated Cloudflare environment:

```bash
npx wrangler deploy
```

Verify the generated `workers.dev` URL before attaching production domains. Then attach both redirect-only hostnames as Worker Custom Domains and verify TLS plus redirect semantics before removing the Vercel domain bindings.

## Local development

Install dependencies:

```bash
npm ci
```

Run the dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Validation

After deployment, verify DNS, SSL, and redirect behavior:

```bash
curl -I https://where-to-move.com
curl -I https://www.where-to-move.com
curl -I "https://where-to-move.com/sample/path?x=1"
curl -I https://wheretomove.placesignals.com
```

Expected result:

- root redirects to `https://wheretomove.placesignals.com`;
- `www` redirects to the same canonical host;
- path and query strings are preserved;
- HTTPS works without certificate errors;
- there is no redirect loop.

## Role boundaries

This repo owns:

- redirect-only behavior;
- DNS/SSL/deploy verification notes;
- defensive domain handoff.

This repo does not own:

- the canonical Where to Move product UI;
- consumer relocation scoring;
- Place Signals API logic;
- owner/architecture documentation.

Canonical architecture source of truth: `strongdan/place-signal-architecture`.
