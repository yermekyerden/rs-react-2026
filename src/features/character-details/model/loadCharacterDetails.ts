import { fetchCharacterDetails } from '@/entities/character/api/characterApi';
import { CHARACTER_DETAILS_ERROR_MESSAGES } from './loadCharacterDetails.constants';
import type { CharacterDetailsState } from './character-details-results.types';

export async function loadCharacterDetails(
  detailsCharacterId: number | null
): Promise<CharacterDetailsState> {
  if (detailsCharacterId === null) {
    return {
      status: 'idle',
    };
  }

  try {
    const characterDetails = await fetchCharacterDetails(detailsCharacterId);

    return {
      status: 'loaded',
      characterDetails,
    };
  } catch (error) {
    return {
      status: 'failed',
      errorMessage: getCharacterDetailsErrorMessage(error),
    };
  }
}

function getCharacterDetailsErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return CHARACTER_DETAILS_ERROR_MESSAGES.unknown;
}
