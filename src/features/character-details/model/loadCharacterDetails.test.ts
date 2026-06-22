import { fetchCharacterDetails } from '@/entities/character/api/characterApi';
import { testCharacterDetails } from '@/entities/character/testing/character.test-data';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CHARACTER_DETAILS_ERROR_MESSAGES } from './loadCharacterDetails.constants';
import { loadCharacterDetails } from './loadCharacterDetails';

vi.mock('@/entities/character/api/characterApi', () => ({
  fetchCharacterDetails: vi.fn(),
}));

const fetchCharacterDetailsMock = vi.mocked(fetchCharacterDetails);

describe('loadCharacterDetails', () => {
  beforeEach(() => {
    fetchCharacterDetailsMock.mockReset();
  });

  it('returns idle state when no details character id is provided', async () => {
    const state = await loadCharacterDetails(null);

    expect(fetchCharacterDetailsMock).not.toHaveBeenCalled();
    expect(state).toEqual({
      status: 'idle',
    });
  });

  it('returns loaded state with fetched character details', async () => {
    fetchCharacterDetailsMock.mockResolvedValue(testCharacterDetails);

    const state = await loadCharacterDetails(testCharacterDetails.id);

    expect(fetchCharacterDetailsMock).toHaveBeenCalledWith(
      testCharacterDetails.id
    );
    expect(state).toEqual({
      status: 'loaded',
      characterDetails: testCharacterDetails,
    });
  });

  it('returns failed state with error message when API throws Error', async () => {
    fetchCharacterDetailsMock.mockRejectedValue(new Error('Dossier failed'));

    const state = await loadCharacterDetails(1);

    expect(state).toEqual({
      status: 'failed',
      errorMessage: 'Dossier failed',
    });
  });

  it('returns unknown failed state when thrown value is not Error', async () => {
    fetchCharacterDetailsMock.mockRejectedValue('Unexpected failure');

    const state = await loadCharacterDetails(1);

    expect(state).toEqual({
      status: 'failed',
      errorMessage: CHARACTER_DETAILS_ERROR_MESSAGES.unknown,
    });
  });
});
