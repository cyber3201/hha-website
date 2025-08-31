export const locales = ['en', 'fr', 'ar'] as const;
export const defaultLocale = 'en';
export type Locale = (typeof locales)[number];
