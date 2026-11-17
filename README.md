# Sugar & Aura

A complete, responsive luxury home-beauty website with 16 independent routes. Built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Motion and Lucide. All photographs, brand SVGs and fonts are local. The homepage and distinct editorial page layouts retain the established plum, cream and champagne identity.

## Installation and local development

Repository: [GulbaharTobaccoInternational/Sugar-aura](https://github.com/GulbaharTobaccoInternational/Sugar-aura).

Use Node.js **24.x** and npm. The committed lockfile gives reproducible installations.

```sh
git clone https://github.com/GulbaharTobaccoInternational/Sugar-aura.git
cd Sugar-aura
npm ci
npm run dev
```

Open http://127.0.0.1:3055. To change ports, append `-- --port 3060` to `npm run dev` or `npm start`. Stop the dev server before production start on the same port.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

The default production build is a standard Next.js application, with responsive image optimization enabled. `npm start` runs that production server; it requires a successful `npm run build` first. No secret keys or backend credentials are required for the current website.

## GitHub and Vercel

1. The complete application lives at the root of [GulbaharTobaccoInternational/Sugar-aura](https://github.com/GulbaharTobaccoInternational/Sugar-aura) on the `main` branch. The `.gitignore` excludes dependencies, builds, environment files, private preview metadata and generated reports. Only the commented `.env.example` is included.
2. In Vercel, choose **Add New → Project**, import **GulbaharTobaccoInternational/Sugar-aura** and use **`.`** as the Root Directory.
3. Keep the **Next.js** framework preset, **Node.js 24.x**, install command `npm ci`, and build command `npm run build`. Leave Output Directory at its framework default. Do not set `SUGAR_STATIC_EXPORT` for Vercel.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to the final HTTPS custom domain. Otherwise the Vercel production domain supplies canonical, sitemap and Open Graph origins. Deploy. Future pushes to the connected production branch deploy automatically.
5. Confirm the production domain, booking CTA and custom-domain canonical URLs after launch. The GitHub upload prepares the project for Vercel; create the Vercel project separately using these settings.

References: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [Vercel builds](https://vercel.com/docs/builds), [Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions), [production domain environment variable](https://vercel.com/docs/environment-variables/system-environment-variables).

## Booking and business configuration

`lib/booking.ts` centrally manages the official WhatsApp number **+971 50 507 1965**, approved copy, service and emirate types, URL encoding and route inference. Main booking buttons open the existing accessible native dialog. Its CTA opens `wa.me` in a new tab with `noopener noreferrer`. Service detail routes infer their service; emirate CTAs pass their location. Selections are remembered in memory during the current visit so known service and location contexts can be combined. No message is sent automatically and no appointment is confirmed by this website.

The utility has tests for the default message, three service messages, seven emirate messages, 21 combined messages and route inference. To change the number, edit only `WHATSAPP_NUMBER` and its human-readable display in `lib/booking.ts`.

`lib/config/business.ts` holds optional verified email, call number, hours and social links. These remain empty until confirmed. `lib/config/areas.ts` contains the seven intended enquiry locations. `coverageConfirmed` defaults to **false**; wording must not promise UAE-wide appointment availability until verified.

The contact form is deliberately a local demonstration: native validation and a review notice only. It sends nothing, persists nothing and never reports a successful delivery. Live booking enquiries use WhatsApp. Update the form and privacy policy together if a backend is introduced.

## Routes and content

- `/` — original home campaign
- `/services` — service collection and explorer
- `/services/sudanese-sweet` — signature tradition and ritual process
- `/services/hair-styling` — styling, gallery, consultation and preparation
- `/services/manicure-pedicure` — hand/foot tabs, gallery and care
- `/why-us` — at-home benefits and preference guide
- `/about` — brand story and philosophy
- `/areas` — seven-emirate editorial enquiry mosaic
- `/contact` — WhatsApp channel and clearly labelled local preview form
- `/faq` — searchable, filterable answers
- `/privacy`, `/terms` — policies reflecting current behavior
- `/journal` and its three articles — substantive beauty editorial

Service and FAQ copy: `lib/content/services.ts` and `lib/content/phase-two.ts`. Journal copy: `lib/content/journal.ts`. Styles: `app/globals.css`, `app/phase-two.css`, `app/refinements.css`. Motion respects reduced-motion preferences; reveal content starts visible in server HTML. Dialogs support Escape, focus trapping/restoration, outside-click closing and scroll lock.

## Images and optional static preview

Production Next.js supplies responsive `srcset` sizes and WebP optimization on demand. Source WebPs are already compressed; below-fold images are lazy-loaded. Hero images are prioritized. Fontsource imports load only the Latin subsets used by the English site. Image provenance and prompts are documented in `docs/`.

For a static-only host or the private Sites preview, explicitly opt in:

```sh
npm run build:site
npm run verify:export
npm run preview:site
```

This produces `out/` with precompressed local imagery. The static host must resolve trailing-slash paths to `index.html`. The normal Vercel build does not force an export. The existing local `.openai` preview identity is omitted from the portable ZIP.

## Portable source archive

```sh
npm run package:source
```

Requires Python 3 and writes `../Sugar-and-Aura-GitHub-Ready.zip`. It includes application source, local assets, configuration, tests, scripts, docs and the npm lockfile. Dependency folders, caches, exports, git history, local preview metadata, logs and secrets are excluded. The original project stays intact.
