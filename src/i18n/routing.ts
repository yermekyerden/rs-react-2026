import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en-US', 'kk-KZ'],
  defaultLocale: 'en-US',
});

export type AppLocale = (typeof routing.locales)[number];
