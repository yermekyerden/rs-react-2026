import { createCharacterSearchHref } from '@/features/character-search/model/character-search-params.builders';
import {
  CHARACTER_SELECTION,
  CHARACTER_SELECTION_PARAM,
  RELATIVE_URL_BASE,
} from './character-selection.constants';
import type { CharacterSelectionHrefOptions } from './character-selection.types';

export function createCharacterSelectionHref({
  characterId,
  currentSelectedCharacterIds,
  detailsCharacterId,
  page,
  searchTerm,
}: CharacterSelectionHrefOptions): string {
  const selectedCharacterIds = toggleCharacterId({
    characterId,
    currentSelectedCharacterIds,
  });
  const baseHref = createCharacterSearchHref({
    detailsCharacterId,
    page,
    searchTerm,
  });

  if (selectedCharacterIds.length === 0) {
    return baseHref;
  }

  const url = new URL(baseHref, RELATIVE_URL_BASE);

  url.searchParams.set(
    CHARACTER_SELECTION_PARAM.selected,
    selectedCharacterIds.join(CHARACTER_SELECTION.separator)
  );

  return `${url.pathname}${url.search}`;
}

interface ToggleCharacterIdOptions {
  characterId: number;
  currentSelectedCharacterIds: number[];
}

function toggleCharacterId({
  characterId,
  currentSelectedCharacterIds,
}: ToggleCharacterIdOptions): number[] {
  const isAlreadySelected = currentSelectedCharacterIds.includes(characterId);

  if (isAlreadySelected) {
    return currentSelectedCharacterIds.filter(
      (selectedCharacterId) => selectedCharacterId !== characterId
    );
  }

  return [...currentSelectedCharacterIds, characterId];
}
