import { cookies } from 'next/headers';
import { APP_THEME, APP_THEME_COOKIE } from './theme.constants';
import type { AppTheme } from './theme.types';

export async function readAppTheme(): Promise<AppTheme> {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get(APP_THEME_COOKIE.name);

  if (isAppTheme(themeCookie?.value)) {
    return themeCookie.value;
  }

  return APP_THEME.dark;
}

function isAppTheme(value: string | undefined): value is AppTheme {
  return value === APP_THEME.dark || value === APP_THEME.light;
}
