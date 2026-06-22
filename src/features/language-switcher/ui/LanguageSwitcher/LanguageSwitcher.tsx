'use client';

import { routing, type AppLocale } from '@/i18n/routing';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/shared/lib/cn';
import { useSearchParams } from 'next/navigation';
import { LANGUAGE_SWITCHER_LOCALE_LABEL } from '../../model/language-switcher.constants';
import { LANGUAGE_SWITCHER_CLASS_NAMES } from './LanguageSwitcher.styles';

export interface LanguageSwitcherProps {
  currentLocale: AppLocale;
  label: string;
}

export default function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const href = createLanguageSwitchHref({
    pathname,
    searchParams,
  });

  return (
    <div className={LANGUAGE_SWITCHER_CLASS_NAMES.root} aria-label={label}>
      {routing.locales.map((locale) => {
        const isActiveLocale = locale === currentLocale;
        const className = cn(
          LANGUAGE_SWITCHER_CLASS_NAMES.link,
          isActiveLocale
            ? LANGUAGE_SWITCHER_CLASS_NAMES.active
            : LANGUAGE_SWITCHER_CLASS_NAMES.idle
        );

        return (
          <Link
            aria-current={isActiveLocale ? 'page' : undefined}
            className={className}
            href={href}
            key={locale}
            locale={locale}
            scroll={false}
          >
            {LANGUAGE_SWITCHER_LOCALE_LABEL[locale]}
          </Link>
        );
      })}
    </div>
  );
}

interface CreateLanguageSwitchHrefOptions {
  pathname: string;
  searchParams: URLSearchParams;
}

function createLanguageSwitchHref({
  pathname,
  searchParams,
}: CreateLanguageSwitchHrefOptions): string {
  const queryString = searchParams.toString();

  if (queryString.length === 0) {
    return pathname;
  }

  return `${pathname}?${queryString}`;
}
