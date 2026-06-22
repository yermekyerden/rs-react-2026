export const APP_THEME = {
  dark: 'dark',
  light: 'light',
} as const;

export const APP_THEME_COOKIE = {
  name: 'character-explorer-theme',
  maxAgeSeconds: 60 * 60 * 24 * 365,
  path: '/',
} as const;
