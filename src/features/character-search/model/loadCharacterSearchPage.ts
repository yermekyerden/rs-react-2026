import { fetchCharacterPage } from '@/entities/character/api/characterApi';
import type { CharacterResultsState } from './character-search-results.types';
import { CHARACTER_SEARCH_PAGE_ERROR_MESSAGES } from './loadCharacterSearchPage.constants';
import type { CharacterSearchParams } from './character-search-params.types';

export async function loadCharacterSearchPage(
  searchParams: CharacterSearchParams
): Promise<CharacterResultsState> {
  try {
    const characterPage = await fetchCharacterPage({
      page: searchParams.page,
      searchTerm: searchParams.searchTerm,
    });

    return {
      status: 'loaded',
      characterPage,
    };
  } catch (error) {
    return {
      status: 'failed',
      errorMessage: getCharacterSearchErrorMessage(error),
    };
  }
}

function getCharacterSearchErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return CHARACTER_SEARCH_PAGE_ERROR_MESSAGES.unknown;
}
