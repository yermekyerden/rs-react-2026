import { CHARACTER_DEFAULTS } from '@/entities/character';
import { CHARACTER_SEARCH_PARAM } from './character-search-params.constants';
import type {
  CharacterSearchParams,
  NextSearchParams,
} from './character-search-params.types';

export function parseCharacterSearchParams(
  searchParams: NextSearchParams
): CharacterSearchParams {
  return {
    detailsCharacterId: parseOptionalPositiveInteger(
      getSingleSearchParamValue(searchParams[CHARACTER_SEARCH_PARAM.details])
    ),
    page: parsePageSearchParam(
      getSingleSearchParamValue(searchParams[CHARACTER_SEARCH_PARAM.page])
    ),
    searchTerm: parseSearchTermSearchParam(
      getSingleSearchParamValue(searchParams[CHARACTER_SEARCH_PARAM.search])
    ),
  };
}

function getSingleSearchParamValue(
  value: string | string[] | undefined
): string | null {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

function parsePageSearchParam(value: string | null): number {
  return parseOptionalPositiveInteger(value) ?? CHARACTER_DEFAULTS.firstPage;
}

function parseSearchTermSearchParam(value: string | null): string {
  return value?.trim() ?? '';
}

function parseOptionalPositiveInteger(value: string | null): number | null {
  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    return null;
  }

  const integerValue = Math.trunc(parsedValue);

  if (integerValue < CHARACTER_DEFAULTS.firstPage) {
    return null;
  }

  return integerValue;
}
