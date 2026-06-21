import { Link } from '@/i18n/navigation';
import { APP_ROUTES } from '@/shared/config/app-routes';
import { NOT_FOUND_CONTENT_CLASS_NAMES } from '@/widgets/not-found-content/not-found-content.styles';
import { getTranslations } from 'next-intl/server';

export default async function NotFoundPage() {
  const t = await getTranslations('NotFoundPage');

  return (
    <main className={NOT_FOUND_CONTENT_CLASS_NAMES.main}>
      <section className={NOT_FOUND_CONTENT_CLASS_NAMES.panel}>
        <div className={NOT_FOUND_CONTENT_CLASS_NAMES.copy}>
          <p className={NOT_FOUND_CONTENT_CLASS_NAMES.kicker}>{t('kicker')}</p>

          <p className={NOT_FOUND_CONTENT_CLASS_NAMES.code}>{t('code')}</p>

          <h1 className={NOT_FOUND_CONTENT_CLASS_NAMES.title}>{t('title')}</h1>

          <p className={NOT_FOUND_CONTENT_CLASS_NAMES.description}>
            {t('description')}
          </p>

          <Link
            className={NOT_FOUND_CONTENT_CLASS_NAMES.link}
            href={APP_ROUTES.explorer}
          >
            {t('backLink')}
          </Link>
        </div>

        <div
          className={NOT_FOUND_CONTENT_CLASS_NAMES.visual}
          aria-hidden="true"
        >
          <div className={NOT_FOUND_CONTENT_CLASS_NAMES.orb} />
        </div>
      </section>
    </main>
  );
}
