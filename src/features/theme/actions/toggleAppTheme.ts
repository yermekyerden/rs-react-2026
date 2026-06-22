'use server';

import { cookies } from 'next/headers';
import { APP_THEME, APP_THEME_COOKIE } from '../model/theme.constants';
import type { AppTheme } from '../model/theme.types';

export async function toggleAppTheme(currentTheme: AppTheme): Promise<void> {
  const nextTheme = getNextTheme(currentTheme);
  const cookieStore = await cookies();

  cookieStore.set(APP_THEME_COOKIE.name, nextTheme, {
    maxAge: APP_THEME_COOKIE.maxAgeSeconds,
    path: APP_THEME_COOKIE.path,
    sameSite: 'lax',
  });
}

function getNextTheme(currentTheme: AppTheme): AppTheme {
  if (currentTheme === APP_THEME.dark) {
    return APP_THEME.light;
  }

  return APP_THEME.dark;
}
