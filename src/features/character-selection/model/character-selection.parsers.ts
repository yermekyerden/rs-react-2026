import { CHARACTER_DEFAULTS } from '@/entities/character';
import type { NextSearchParams } from '@/features/character-search/model/character-search-params.types';
import {
  CHARACTER_SELECTION,
  CHARACTER_SELECTION_PARAM,
} from './character-selection.constants';

export function parseSelectedCharacterIds(
  searchParams: NextSearchParams
): number[] {
  const rawSelectedCharacters = getSingleSearchParamValue(
    searchParams[CHARACTER_SELECTION_PARAM.selected]
  );

  if (rawSelectedCharacters === null) {
    return [];
  }

  return rawSelectedCharacters
    .split(CHARACTER_SELECTION.separator)
    .map(Number)
    .filter(isPositiveInteger);
}

function getSingleSearchParamValue(
  value: string | string[] | undefined
): string | null {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value >= CHARACTER_DEFAULTS.firstPage;
}
