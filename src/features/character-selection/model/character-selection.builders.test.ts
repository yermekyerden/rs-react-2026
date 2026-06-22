import { describe, expect, it } from 'vitest';
import {
  appendSelectedCharactersToHref,
  createCharacterSelectionHref,
} from './character-selection.builders';

describe('appendSelectedCharactersToHref', () => {
  it('returns original href when no characters are selected', () => {
    const href = appendSelectedCharactersToHref({
      href: '/?search=Rick',
      selectedCharacterIds: [],
    });

    expect(href).toBe('/?search=Rick');
  });

  it('appends selected character ids to root href', () => {
    const href = appendSelectedCharactersToHref({
      href: '/',
      selectedCharacterIds: [1, 2, 3],
    });

    expect(href).toBe('/?selected=1%2C2%2C3');
  });

  it('preserves existing query params when appending selected characters', () => {
    const href = appendSelectedCharactersToHref({
      href: '/?page=2&search=Beth&details=34',
      selectedCharacterIds: [31, 34, 35],
    });

    expect(href).toBe('/?page=2&search=Beth&details=34&selected=31%2C34%2C35');
  });
});

describe('createCharacterSelectionHref', () => {
  it('adds character id when character is not selected yet', () => {
    const href = createCharacterSelectionHref({
      characterId: 3,
      currentSelectedCharacterIds: [1, 2],
      detailsCharacterId: 7,
      page: 2,
      searchTerm: 'Beth',
    });

    expect(href).toBe('/?page=2&search=Beth&details=7&selected=1%2C2%2C3');
  });

  it('removes character id when character is already selected', () => {
    const href = createCharacterSelectionHref({
      characterId: 2,
      currentSelectedCharacterIds: [1, 2, 3],
      detailsCharacterId: 7,
      page: 2,
      searchTerm: 'Beth',
    });

    expect(href).toBe('/?page=2&search=Beth&details=7&selected=1%2C3');
  });

  it('returns base href when last selected character is removed', () => {
    const href = createCharacterSelectionHref({
      characterId: 2,
      currentSelectedCharacterIds: [2],
      detailsCharacterId: null,
      page: 1,
      searchTerm: '',
    });

    expect(href).toBe('/');
  });

  it('preserves search params while toggling selection', () => {
    const href = createCharacterSelectionHref({
      characterId: 10,
      currentSelectedCharacterIds: [],
      detailsCharacterId: 10,
      page: 4,
      searchTerm: '  Summer  ',
    });

    expect(href).toBe('/?page=4&search=Summer&details=10&selected=10');
  });
});
