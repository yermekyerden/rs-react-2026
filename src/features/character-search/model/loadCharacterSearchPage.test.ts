import { fetchCharacterPage } from '@/entities/character/api/characterApi';
import type { CharacterPageModel } from '@/entities/character/model/character.types';
import { testCharacterCard } from '@/entities/character/testing/character.test-data';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CHARACTER_SEARCH_PAGE_ERROR_MESSAGES } from './loadCharacterSearchPage.constants';
import { loadCharacterSearchPage } from './loadCharacterSearchPage';

vi.mock('@/entities/character/api/characterApi', () => ({
  fetchCharacterPage: vi.fn(),
}));

const fetchCharacterPageMock = vi.mocked(fetchCharacterPage);

describe('loadCharacterSearchPage', () => {
  beforeEach(() => {
    fetchCharacterPageMock.mockReset();
  });

  it('returns loaded state with fetched character page', async () => {
    const characterPage: CharacterPageModel = {
      characters: [testCharacterCard],
      currentPage: 2,
      totalCount: 1,
      totalPages: 5,
    };

    fetchCharacterPageMock.mockResolvedValue(characterPage);

    const state = await loadCharacterSearchPage({
      detailsCharacterId: null,
      page: 2,
      searchTerm: 'Rick',
    });

    expect(fetchCharacterPageMock).toHaveBeenCalledWith({
      page: 2,
      searchTerm: 'Rick',
    });
    expect(state).toEqual({
      status: 'loaded',
      characterPage,
    });
  });

  it('returns failed state with error message when API throws Error', async () => {
    fetchCharacterPageMock.mockRejectedValue(new Error('Portal failed'));

    const state = await loadCharacterSearchPage({
      detailsCharacterId: null,
      page: 1,
      searchTerm: '',
    });

    expect(state).toEqual({
      status: 'failed',
      errorMessage: 'Portal failed',
    });
  });

  it('returns unknown failed state when thrown value is not Error', async () => {
    fetchCharacterPageMock.mockRejectedValue('Unexpected failure');

    const state = await loadCharacterSearchPage({
      detailsCharacterId: null,
      page: 1,
      searchTerm: '',
    });

    expect(state).toEqual({
      status: 'failed',
      errorMessage: CHARACTER_SEARCH_PAGE_ERROR_MESSAGES.unknown,
    });
  });
});
