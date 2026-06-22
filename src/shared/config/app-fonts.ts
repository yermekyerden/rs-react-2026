import { Inter, Space_Grotesk } from 'next/font/google';

export const APP_TEXT_FONT = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-app-text',
  display: 'swap',
});

export const APP_DISPLAY_FONT = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-app-display',
  display: 'swap',
});
