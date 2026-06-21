import { EXPLORER_INTRO_CLASS_NAMES } from '@/widgets/explorer-intro/explorer-intro.styles';
import { getTranslations, setRequestLocale } from 'next-intl/server';

interface ExplorerPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ExplorerPage({ params }: ExplorerPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('ExplorerPage');

  return (
    <main className={EXPLORER_INTRO_CLASS_NAMES.main}>
      <section className={EXPLORER_INTRO_CLASS_NAMES.section}>
        <p className={EXPLORER_INTRO_CLASS_NAMES.kicker}>{t('kicker')}</p>

        <h1 className={EXPLORER_INTRO_CLASS_NAMES.title}>{t('title')}</h1>

        <p className={EXPLORER_INTRO_CLASS_NAMES.description}>
          {t('description')}
        </p>

        <p className={EXPLORER_INTRO_CLASS_NAMES.status}>{t('status')}</p>
      </section>
    </main>
  );
}
