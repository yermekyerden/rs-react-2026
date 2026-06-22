import { ABOUT_CONTENT_CLASS_NAMES } from '@/widgets/about-content/about-content.styles';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-static';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('AboutPage');

  return (
    <main className={ABOUT_CONTENT_CLASS_NAMES.main}>
      <section className={ABOUT_CONTENT_CLASS_NAMES.panel}>
        <div className={ABOUT_CONTENT_CLASS_NAMES.hero}>
          <div>
            <p className={ABOUT_CONTENT_CLASS_NAMES.kicker}>{t('kicker')}</p>

            <h1 className={ABOUT_CONTENT_CLASS_NAMES.title}>{t('title')}</h1>

            <p className={ABOUT_CONTENT_CLASS_NAMES.lead}>{t('description')}</p>
          </div>

          <div className={ABOUT_CONTENT_CLASS_NAMES.portalCard}>
            <div
              className={ABOUT_CONTENT_CLASS_NAMES.portalOrb}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className={ABOUT_CONTENT_CLASS_NAMES.cardGrid}>
          <section className={ABOUT_CONTENT_CLASS_NAMES.card}>
            <p className={ABOUT_CONTENT_CLASS_NAMES.kicker}>
              {t('authorKicker')}
            </p>

            <h2 className={ABOUT_CONTENT_CLASS_NAMES.cardTitle}>
              {t('authorName')}
            </h2>

            <p className={ABOUT_CONTENT_CLASS_NAMES.cardText}>
              {t('authorDescription')}
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
