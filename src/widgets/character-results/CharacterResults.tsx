import {
  CharacterCard,
  CHARACTER_DEFAULTS,
  type CharacterCardCopy,
  type CharacterCardModel,
} from '@/entities/character';
import { createCharacterSearchHref } from '@/features/character-search/model/character-search-params.builders';
import type { CharacterSearchParams } from '@/features/character-search/model/character-search-params.types';
import type { CharacterResultsState } from '@/features/character-search/model/character-search-results.types';
import {
  appendSelectedCharactersToHref,
  createCharacterSelectionHref,
} from '@/features/character-selection/model/character-selection.builders';
import {
  CHARACTER_SELECTION,
  CHARACTER_SELECTION_PARAM,
} from '@/features/character-selection/model/character-selection.constants';
import CharacterSelectionToggle from '@/features/character-selection/ui/CharacterSelectionToggle/CharacterSelectionToggle';
import { CHARACTER_CSV_EXPORT } from '@/features/csv-export/model/character-csv.constants';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { CHARACTER_RESULTS } from './CharacterResults.constants';
import { CHARACTER_RESULTS_CLASS_NAMES } from './CharacterResults.styles';

type Translator = Awaited<ReturnType<typeof getTranslations>>;

export interface CharacterResultsProps {
  searchParams: CharacterSearchParams;
  selectedCharacterIds: number[];
  state: CharacterResultsState;
}

export default async function CharacterResults({
  searchParams,
  selectedCharacterIds,
  state,
}: CharacterResultsProps) {
  const t = await getTranslations('CharacterResults');
  const characterCardTranslations = await getTranslations('CharacterCard');

  if (state.status === 'failed') {
    return (
      <section
        className={CHARACTER_RESULTS_CLASS_NAMES.panel}
        aria-labelledby={CHARACTER_RESULTS.titleId}
      >
        <header className={CHARACTER_RESULTS_CLASS_NAMES.header}>
          <div className={CHARACTER_RESULTS_CLASS_NAMES.headerCopy}>
            <p className={CHARACTER_RESULTS_CLASS_NAMES.status}>
              {t('unstableStatus')}
            </p>

            <h2
              className={CHARACTER_RESULTS_CLASS_NAMES.title}
              id={CHARACTER_RESULTS.titleId}
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
  const hasSelectedCharacters = selectedCharacterIds.length > 0;
  const hasPreviousPage =
    characterPage.currentPage > CHARACTER_DEFAULTS.firstPage;
  const hasNextPage = characterPage.currentPage < characterPage.totalPages;

  return (
    <section
      className={CHARACTER_RESULTS_CLASS_NAMES.panel}
      aria-labelledby={CHARACTER_RESULTS.titleId}
    >
      <header className={CHARACTER_RESULTS_CLASS_NAMES.header}>
        <div className={CHARACTER_RESULTS_CLASS_NAMES.headerCopy}>
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
            id={CHARACTER_RESULTS.titleId}
          >
            {t('title')}
          </h2>
        </div>

        <div className={CHARACTER_RESULTS_CLASS_NAMES.headerActions}>
          <p className={CHARACTER_RESULTS_CLASS_NAMES.summary}>
            {t('summary', {
              totalCount: characterPage.totalCount,
            })}
          </p>

          {hasSelectedCharacters ? (
            <a
              className={CHARACTER_RESULTS_CLASS_NAMES.exportLink}
              href={createCsvExportHref(selectedCharacterIds)}
            >
              {t('exportSelected')}
            </a>
          ) : null}
        </div>
      </header>

      {hasCharacters ? (
        <ul className={CHARACTER_RESULTS_CLASS_NAMES.grid}>
          {characterPage.characters.map((character, characterIndex) => {
            const isSelected = selectedCharacterIds.includes(character.id);
            const detailsHref = createPersistentSearchHref({
              href: createCharacterSearchHref({
                detailsCharacterId: character.id,
                page: characterPage.currentPage,
                searchTerm: searchParams.searchTerm,
              }),
              selectedCharacterIds,
            });
            const selectionHref = createCharacterSelectionHref({
              characterId: character.id,
              currentSelectedCharacterIds: selectedCharacterIds,
              detailsCharacterId: searchParams.detailsCharacterId,
              page: characterPage.currentPage,
              searchTerm: searchParams.searchTerm,
            });

            return (
              <li
                className={CHARACTER_RESULTS_CLASS_NAMES.gridItem}
                key={character.id}
              >
                <CharacterCard
                  character={character}
                  detailsHref={detailsHref}
                  isPriorityImage={
                    characterIndex === CHARACTER_RESULTS.firstVisibleCardIndex
                  }
                  copy={createCharacterCardCopy({
                    character,
                    translations: characterCardTranslations,
                  })}
                  selectionSlot={
                    <CharacterSelectionToggle
                      href={selectionHref}
                      isSelected={isSelected}
                      selectedLabel={characterCardTranslations('selectedText')}
                      unselectedLabel={characterCardTranslations('selectText')}
                    />
                  }
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
                href={createPersistentSearchHref({
                  href: createCharacterSearchHref({
                    page: characterPage.currentPage - 1,
                    searchTerm: searchParams.searchTerm,
                  }),
                  selectedCharacterIds,
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
                href={createPersistentSearchHref({
                  href: createCharacterSearchHref({
                    page: characterPage.currentPage + 1,
                    searchTerm: searchParams.searchTerm,
                  }),
                  selectedCharacterIds,
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
  t: Translator;
}

interface CreateCharacterCardCopyOptions {
  character: CharacterCardModel;
  translations: Translator;
}

interface CreatePersistentSearchHrefOptions {
  href: string;
  selectedCharacterIds: number[];
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

function createCharacterCardCopy({
  character,
  translations,
}: CreateCharacterCardCopyOptions): CharacterCardCopy {
  return {
    cardAriaLabel: translations('cardAriaLabel', {
      characterName: character.name,
    }),
    genderLabel: translations('genderLabel'),
    locationLabel: translations('locationLabel'),
    openDetailsLabel: translations('openDetailsLabel', {
      characterName: character.name,
    }),
    openDetailsText: translations('openDetailsText'),
    speciesLabel: translations('speciesLabel'),
  };
}

function createPersistentSearchHref({
  href,
  selectedCharacterIds,
}: CreatePersistentSearchHrefOptions): string {
  return appendSelectedCharactersToHref({
    href,
    selectedCharacterIds,
  });
}

function createCsvExportHref(selectedCharacterIds: number[]): string {
  const searchParams = new URLSearchParams();

  searchParams.set(
    CHARACTER_SELECTION_PARAM.selected,
    selectedCharacterIds.join(CHARACTER_SELECTION.separator)
  );

  return `${CHARACTER_CSV_EXPORT.path}?${searchParams.toString()}`;
}
