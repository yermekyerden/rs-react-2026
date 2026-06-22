import {
  HTTP_STATUS,
  RICK_AND_MORTY_API,
} from '@/shared/api/rick-and-morty-api.constants';
import { CHARACTER_DEFAULTS } from '../model/character.constants';
import {
  mapCharacterDtoToCardModel,
  mapCharacterDtoToDetailsModel,
} from '../model/character.mappers';
import type {
  CharacterApiResponse,
  CharacterDetailsModel,
  CharacterDto,
  CharacterPageModel,
  CharacterPageRequest,
} from '../model/character.types';

const CHARACTER_API_ERROR_MESSAGES = {
  notFound:
    'No characters found for this search. Maybe the portal opened into an empty dimension.',
  generic: 'Could not load characters from the API. Please try again later.',
  networkOrRateLimit:
    'The portal refused the request. You may be switching dimensions too fast. Wait a moment and try again.',
} as const;

interface CharacterPageRequestUrlOptions {
  currentPage: number;
  searchTerm: string;
}

export async function fetchCharacterPage({
  searchTerm,
  page,
}: CharacterPageRequest): Promise<CharacterPageModel> {
  const currentPage = normalizePositiveInteger(page);
  const url = createCharacterPageRequestUrl({
    currentPage,
    searchTerm,
  });

  const response = await fetchCharacterApiResponse(url);

  if (!response.ok) {
    throw new Error(createCharacterApiErrorMessage(response.status));
  }

  const characterApiResponse = (await response.json()) as CharacterApiResponse;

  return {
    characters: characterApiResponse.results.map(mapCharacterDtoToCardModel),
    currentPage,
    totalPages: characterApiResponse.info.pages,
    totalCount: characterApiResponse.info.count,
  };
}

export async function fetchCharacterDetails(
  characterId: number
): Promise<CharacterDetailsModel> {
  const url = createCharacterDetailsRequestUrl(characterId);
  const response = await fetchCharacterApiResponse(url);

  if (!response.ok) {
    throw new Error(createCharacterApiErrorMessage(response.status));
  }

  const characterDto = (await response.json()) as CharacterDto;

  return mapCharacterDtoToDetailsModel(characterDto);
}

async function fetchCharacterApiResponse(url: string): Promise<Response> {
  try {
    return await fetch(url, {
      cache: 'no-store',
    });
  } catch {
    throw new Error(CHARACTER_API_ERROR_MESSAGES.networkOrRateLimit);
  }
}

function createCharacterPageRequestUrl({
  currentPage,
  searchTerm,
}: CharacterPageRequestUrlOptions): string {
  const url = new URL(
    `${RICK_AND_MORTY_API.baseUrl}${RICK_AND_MORTY_API.characterPath}`
  );

  url.searchParams.set('page', String(currentPage));

  const trimmedSearchTerm = searchTerm.trim();

  if (trimmedSearchTerm.length > 0) {
    url.searchParams.set('name', trimmedSearchTerm);
  }

  return url.toString();
}

function createCharacterDetailsRequestUrl(characterId: number): string {
  const normalizedCharacterId = normalizePositiveInteger(characterId);

  return `${RICK_AND_MORTY_API.baseUrl}${RICK_AND_MORTY_API.characterPath}/${normalizedCharacterId}`;
}

function normalizePositiveInteger(value: number): number {
  if (!Number.isFinite(value)) {
    return CHARACTER_DEFAULTS.firstPage;
  }

  return Math.max(CHARACTER_DEFAULTS.firstPage, Math.trunc(value));
}

function createCharacterApiErrorMessage(statusCode: number): string {
  if (statusCode === HTTP_STATUS.notFound) {
    return CHARACTER_API_ERROR_MESSAGES.notFound;
  }

  if (statusCode === HTTP_STATUS.tooManyRequests) {
    return CHARACTER_API_ERROR_MESSAGES.networkOrRateLimit;
  }

  return CHARACTER_API_ERROR_MESSAGES.generic;
}
