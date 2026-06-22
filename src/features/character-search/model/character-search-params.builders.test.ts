import { describe, expect, it } from 'vitest';
import {
  createCharacterSearchHref,
  createLocalizedCharacterSearchUrl,
} from './character-search-params.builders';

describe('createCharacterSearchHref', () => {
  it('returns explorer root when no meaningful params are provided', () => {
    const href = createCharacterSearchHref({
      detailsCharacterId: null,
      page: 1,
      searchTerm: '   ',
    });

    expect(href).toBe('/');
  });

  it('creates href with page, search term and selected dossier details', () => {
    const href = createCharacterSearchHref({
      detailsCharacterId: 34,
      page: 3,
      searchTerm: 'Beth',
    });

    expect(href).toBe('/?page=3&search=Beth&details=34');
  });

  it('trims search term before creating href', () => {
    const href = createCharacterSearchHref({
      page: 1,
      searchTerm: '  Rick Sanchez  ',
    });

    expect(href).toBe('/?search=Rick+Sanchez');
  });

  it('omits first page from href', () => {
    const href = createCharacterSearchHref({
      page: 1,
      searchTerm: 'Morty',
    });

    expect(href).toBe('/?search=Morty');
  });

  it('keeps details without forcing page param', () => {
    const href = createCharacterSearchHref({
      detailsCharacterId: 1,
      page: 1,
      searchTerm: '',
    });

    expect(href).toBe('/?details=1');
  });
});

describe('createLocalizedCharacterSearchUrl', () => {
  it('returns localized root when href has no query string', () => {
    const url = createLocalizedCharacterSearchUrl({
      locale: 'kk-KZ',
      page: 1,
      searchTerm: '',
    });

    expect(url).toBe('/kk-KZ');
  });

  it('prefixes localized URL and preserves query string', () => {
    const url = createLocalizedCharacterSearchUrl({
      detailsCharacterId: 7,
      locale: 'en-US',
      page: 2,
      searchTerm: 'Summer',
    });

    expect(url).toBe('/en-US?page=2&search=Summer&details=7');
  });
});
