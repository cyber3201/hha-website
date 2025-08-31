# Holistic Health Academy Website

This is a simplified showcase website for the Holistic Health Academy built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **shadcn/ui style components**, **Framer Motion**, **Sanity**, **React Hook Form**, **Zod**, **next-intl**, **next-seo**, and **Vitest**.

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – start development server
- `npm run build` – build production bundle
- `npm run start` – run production server
- `npm run lint` – run eslint
- `npm test` – run tests
- `npm run seed` – seed Sanity dataset (requires env vars)

## Environment

Copy `.env.example` to `.env` and provide the required keys for Sanity and SMTP.

## Design Notes

- Brand colors extracted from provided assets:
  - Green `#006400`
  - Red `#B22222`
- Layout uses generous whitespace, serif headings with sans body text, and subtle motion via Framer Motion.
- Hero sections use large typography inspired by academic sites (e.g., um6p.ma).
- Placeholder images (`public/images/hero*.svg`) and illustrations are included and should be replaced with final assets.

**TODO:** Replace placeholder imagery and verify final brand palette with design team.

## Testing

Tests use `vitest` and `@testing-library/react` to exercise basic component rendering and form behaviour.

## Notes

- Content is loaded from Sanity when configured, falling back to the static text in `lib/content.ts`.
- Forms post to API routes which validate input with Zod and (optionally) send emails via Nodemailer.
- The project is i18n‑ready with English, French, and Arabic locales.
