import { APP_METADATA } from '@/shared/config/app-metadata';
import { APP_ROUTES } from '@/shared/config/app-routes';
import { APP_DISPLAY_FONT, APP_TEXT_FONT } from '@/shared/config/app-fonts';
import { cn } from '@/shared/lib/cn';
import LanguageSwitcher from '@/features/language-switcher/ui/LanguageSwitcher/LanguageSwitcher';
import { APP_SHELL_CLASS_NAMES } from '@/widgets/app-shell/app-shell.styles';
import { Link } from '@/i18n/navigation';
import type { AppLocale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
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
  const currentLocale = locale as AppLocale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const t = await getTranslations('Layout');

  return (
    <html lang={locale}>
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
                </div>

                <div className={APP_SHELL_CLASS_NAMES.actions} />
              </div>
            </header>

            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
