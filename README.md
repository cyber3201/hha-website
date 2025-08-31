# Holistic Health Academy Website

This is a simplified showcase website for the Holistic Health Academy built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **shadcn/ui style components**, **Framer Motion**, **React Hook Form**, **Zod**, **next-intl**, **next-seo**, and **Vitest**.

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
- `npm run analyze` – build with bundle analyzer

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

- Content is sourced from the static text in `lib/content.ts`.
- Forms validate input on the client only and log submissions to the console.
- The project is i18n‑ready with English, French, and Arabic locales.
