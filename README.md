# Sugar & Aura

A single-page Next.js site for traditional Sudanese Halwa depilation, hair styling and manicure and pedicure at home in the UAE.

## Development

Use Node.js 24.x and npm.

```sh
npm ci
npm run dev
```

The development server runs at http://127.0.0.1:3055. To verify a production build, stop the development server and run:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Vercel

Use the Next.js framework preset and the repository root. The site uses the existing Next.js server build for image optimization and permanent redirects. No environment variables are required. Set `NEXT_PUBLIC_SITE_URL` when publishing under a different canonical domain.

The sitemap lists the homepage only. Former service and journal URLs, plus the previous About, Areas, Contact, FAQ, Why Us, Privacy and Terms URLs, permanently redirect to the homepage.

## Assets and booking

The deployed logo and favicon derive from the approved JPEG. The unchanged original is in `docs/branding/`. The hero, hair and manicure photographs are retained. Asset provenance is documented in `docs/asset-provenance.md`.

Both Book Now links read the direct WhatsApp URL from `lib/config/business.ts`. They open a new tab with no preset message.

Run `npm run package:source` with Python 3 to create a portable source ZIP beside the project.
