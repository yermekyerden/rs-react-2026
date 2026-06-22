import { loadCharacterDetails } from '@/features/character-details/model/loadCharacterDetails';
import { loadCharacterSearchPage } from '@/features/character-search/model/loadCharacterSearchPage';
import { parseCharacterSearchParams } from '@/features/character-search/model/character-search-params.parsers';
import type { NextSearchParams } from '@/features/character-search/model/character-search-params.types';
import CharacterSearchForm from '@/features/character-search/ui/CharacterSearchForm/CharacterSearchForm';
import { parseSelectedCharacterIds } from '@/features/character-selection/model/character-selection.parsers';
import CharacterDetailsPanel from '@/widgets/character-details-panel/CharacterDetailsPanel';
import CharacterResults from '@/widgets/character-results/CharacterResults';
import { EXPLORER_INTRO_CLASS_NAMES } from '@/widgets/explorer-intro/explorer-intro.styles';
import { getTranslations, setRequestLocale } from 'next-intl/server';

interface ExplorerPageProps {
  params: Promise<{
    locale: string;
  }>;
  searchParams: Promise<NextSearchParams>;
}

export default async function ExplorerPage({
  params,
  searchParams,
}: ExplorerPageProps) {
  const { locale } = await params;
  const rawSearchParams = await searchParams;

  setRequestLocale(locale);

  const parsedSearchParams = parseCharacterSearchParams(rawSearchParams);
  const selectedCharacterIds = parseSelectedCharacterIds(rawSearchParams);

  const characterResultsState =
    await loadCharacterSearchPage(parsedSearchParams);
  const characterDetailsState = await loadCharacterDetails(
    parsedSearchParams.detailsCharacterId
  );

  const t = await getTranslations('ExplorerPage');
  const searchFormTranslations = await getTranslations('SearchForm');

  return (
    <main className={EXPLORER_INTRO_CLASS_NAMES.main}>
      <section className={EXPLORER_INTRO_CLASS_NAMES.section}>
        <p className={EXPLORER_INTRO_CLASS_NAMES.kicker}>{t('kicker')}</p>

        <h1 className={EXPLORER_INTRO_CLASS_NAMES.title}>{t('title')}</h1>

        <p className={EXPLORER_INTRO_CLASS_NAMES.description}>
          {t('description')}
        </p>

        <CharacterSearchForm
          initialSearchTerm={parsedSearchParams.searchTerm}
          inputHint={searchFormTranslations('hint')}
          inputLabel={searchFormTranslations('label')}
          inputPlaceholder={searchFormTranslations('placeholder')}
          locale={locale}
          submitButtonLabel={searchFormTranslations('submitButton')}
        />
      </section>

      <CharacterDetailsPanel
        searchParams={parsedSearchParams}
        selectedCharacterIds={selectedCharacterIds}
        state={characterDetailsState}
      />

      <CharacterResults
        searchParams={parsedSearchParams}
        selectedCharacterIds={selectedCharacterIds}
        state={characterResultsState}
      />
    </main>
  );
}
