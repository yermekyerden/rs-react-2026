import { Link } from '@/i18n/navigation';
import { CharacterCard, CHARACTER_DEFAULTS } from '@/entities/character';
import type { CharacterResultsState } from '@/features/character-search/model/character-search-results.types';
import { createCharacterSearchHref } from '@/features/character-search/model/character-search-params.builders';
import type { CharacterSearchParams } from '@/features/character-search/model/character-search-params.types';
import { getTranslations } from 'next-intl/server';
import { CHARACTER_RESULTS } from './CharacterResults.constants';
import { CHARACTER_RESULTS_CLASS_NAMES } from './CharacterResults.styles';

export interface CharacterResultsProps {
  searchParams: CharacterSearchParams;
  state: CharacterResultsState;
}

export default async function CharacterResults({
  searchParams,
  state,
}: CharacterResultsProps) {
  const t = await getTranslations('CharacterResults');
  const characterCardTranslations = await getTranslations('CharacterCard');

  if (state.status === 'failed') {
    return (
      <section
        className={CHARACTER_RESULTS_CLASS_NAMES.panel}
        aria-labelledby="character-results-title"
      >
        <header className={CHARACTER_RESULTS_CLASS_NAMES.header}>
          <div>
            <p className={CHARACTER_RESULTS_CLASS_NAMES.status}>
              {t('unstableStatus')}
            </p>

            <h2
              className={CHARACTER_RESULTS_CLASS_NAMES.title}
              id="character-results-title"
            >
              {t('title')}
            </h2>
          </div>
        </header>

        <div className={CHARACTER_RESULTS_CLASS_NAMES.errorState}>
          <div>
            <h3 className={CHARACTER_RESULTS_CLASS_NAMES.stateTitle}>
              {t('errorTitle')}
            </h3>

            <p className={CHARACTER_RESULTS_CLASS_NAMES.stateText}>
              {state.errorMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const { characterPage } = state;
  const hasCharacters = characterPage.characters.length > 0;
  const hasPreviousPage =
    characterPage.currentPage > CHARACTER_DEFAULTS.firstPage;
  const hasNextPage = characterPage.currentPage < characterPage.totalPages;

  return (
    <section
      className={CHARACTER_RESULTS_CLASS_NAMES.panel}
      aria-labelledby="character-results-title"
    >
      <header className={CHARACTER_RESULTS_CLASS_NAMES.header}>
        <div>
          <p className={CHARACTER_RESULTS_CLASS_NAMES.status}>
            {createStatusText({
              currentPage: characterPage.currentPage,
              searchTerm: searchParams.searchTerm,
              totalPages: characterPage.totalPages,
              t,
            })}
          </p>

          <h2
            className={CHARACTER_RESULTS_CLASS_NAMES.title}
            id="character-results-title"
          >
            {t('title')}
          </h2>
        </div>

        <p className={CHARACTER_RESULTS_CLASS_NAMES.summary}>
          {t('summary', {
            totalCount: characterPage.totalCount,
          })}
        </p>
      </header>

      {hasCharacters ? (
        <ul className={CHARACTER_RESULTS_CLASS_NAMES.grid}>
          {characterPage.characters.map((character, characterIndex) => {
            const detailsHref = createCharacterSearchHref({
              detailsCharacterId: character.id,
              page: characterPage.currentPage,
              searchTerm: searchParams.searchTerm,
            });

            return (
              <li key={character.id}>
                <CharacterCard
                  character={character}
                  detailsHref={detailsHref}
                  isPriorityImage={
                    characterIndex === CHARACTER_RESULTS.firstVisibleCardIndex
                  }
                  copy={{
                    cardAriaLabel: characterCardTranslations('cardAriaLabel', {
                      characterName: character.name,
                    }),
                    genderLabel: characterCardTranslations('genderLabel'),
                    locationLabel: characterCardTranslations('locationLabel'),
                    openDetailsLabel: characterCardTranslations(
                      'openDetailsLabel',
                      {
                        characterName: character.name,
                      }
                    ),
                    openDetailsText:
                      characterCardTranslations('openDetailsText'),
                    speciesLabel: characterCardTranslations('speciesLabel'),
                  }}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={CHARACTER_RESULTS_CLASS_NAMES.state}>
          <div>
            <h3 className={CHARACTER_RESULTS_CLASS_NAMES.stateTitle}>
              {t('emptyTitle')}
            </h3>

            <p className={CHARACTER_RESULTS_CLASS_NAMES.stateText}>
              {t('emptyDescription')}
            </p>
          </div>
        </div>
      )}

      {hasCharacters ? (
        <footer className={CHARACTER_RESULTS_CLASS_NAMES.footer}>
          <nav
            className={CHARACTER_RESULTS_CLASS_NAMES.pagination}
            aria-label={t('paginationLabel')}
          >
            {hasPreviousPage ? (
              <Link
                className={CHARACTER_RESULTS_CLASS_NAMES.paginationLink}
                href={createCharacterSearchHref({
                  page: characterPage.currentPage - 1,
                  searchTerm: searchParams.searchTerm,
                })}
              >
                {t('previousPage')}
              </Link>
            ) : null}

            <p className={CHARACTER_RESULTS_CLASS_NAMES.paginationText}>
              {t('pageSummary', {
                currentPage: characterPage.currentPage,
                totalPages: characterPage.totalPages,
              })}
            </p>

            {hasNextPage ? (
              <Link
                className={CHARACTER_RESULTS_CLASS_NAMES.paginationLink}
                href={createCharacterSearchHref({
                  page: characterPage.currentPage + 1,
                  searchTerm: searchParams.searchTerm,
                })}
              >
                {t('nextPage')}
              </Link>
            ) : null}
          </nav>
        </footer>
      ) : null}
    </section>
  );
}

interface CreateStatusTextOptions {
  currentPage: number;
  searchTerm: string;
  totalPages: number;
  t: Awaited<ReturnType<typeof getTranslations>>;
}

function createStatusText({
  currentPage,
  searchTerm,
  totalPages,
  t,
}: CreateStatusTextOptions): string {
  if (searchTerm.length === 0) {
    return t('browsingStatus', {
      currentPage,
      totalPages,
    });
  }

  return t('searchStatus', {
    currentPage,
    searchTerm,
    totalPages,
  });
}
