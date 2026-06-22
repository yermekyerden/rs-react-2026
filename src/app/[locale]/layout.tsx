import LanguageSwitcher from '@/features/language-switcher/ui/LanguageSwitcher/LanguageSwitcher';
import { APP_THEME } from '@/features/theme/model/theme.constants';
import { readAppTheme } from '@/features/theme/model/theme.server';
import ThemeSwitcher from '@/features/theme/ui/ThemeSwitcher/ThemeSwitcher';
import { Link } from '@/i18n/navigation';
import { routing, type AppLocale } from '@/i18n/routing';
import { APP_DISPLAY_FONT, APP_TEXT_FONT } from '@/shared/config/app-fonts';
import { APP_METADATA } from '@/shared/config/app-metadata';
import { APP_ROUTES } from '@/shared/config/app-routes';
import { cn } from '@/shared/lib/cn';
import { APP_SHELL_CLASS_NAMES } from '@/widgets/app-shell/app-shell.styles';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../../index.css';

export const metadata = APP_METADATA;

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const currentLocale = locale as AppLocale;

  setRequestLocale(locale);

  const theme = await readAppTheme();
  const isLightTheme = theme === APP_THEME.light;
  const messages = await getMessages();
  const t = await getTranslations('Layout');

  return (
    <html lang={locale} data-theme={theme}>
      <body
        className={cn(
          APP_SHELL_CLASS_NAMES.body,
          APP_TEXT_FONT.variable,
          APP_DISPLAY_FONT.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <div className={APP_SHELL_CLASS_NAMES.shell}>
            <header className={APP_SHELL_CLASS_NAMES.header}>
              <div className={APP_SHELL_CLASS_NAMES.headerInner}>
                <Link
                  className={APP_SHELL_CLASS_NAMES.brand}
                  href={APP_ROUTES.explorer}
                >
                  {t('brand')}
                </Link>

                <nav
                  className={APP_SHELL_CLASS_NAMES.navigation}
                  aria-label={t('navigationLabel')}
                >
                  <Link
                    className={APP_SHELL_CLASS_NAMES.navigationLink}
                    href={APP_ROUTES.explorer}
                  >
                    {t('explorer')}
                  </Link>

                  <Link
                    className={APP_SHELL_CLASS_NAMES.navigationLink}
                    href={APP_ROUTES.about}
                  >
                    {t('about')}
                  </Link>
                </nav>

                <div className={APP_SHELL_CLASS_NAMES.actions}>
                  <LanguageSwitcher
                    currentLocale={currentLocale}
                    label={t('languageLabel')}
                  />

                  <ThemeSwitcher
                    currentTheme={theme}
                    label={t('themeLabel')}
                    themeText={
                      isLightTheme ? t('themeLightText') : t('themeDarkText')
                    }
                  />
                </div>
              </div>
            </header>

            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
