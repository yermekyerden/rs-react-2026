import { describe, expect, it } from 'vitest';
import { parseCharacterSearchParams } from './character-search-params.parsers';

describe('parseCharacterSearchParams', () => {
  it('returns default search params when URL params are empty', () => {
    const searchParams = parseCharacterSearchParams({});

    expect(searchParams).toEqual({
      detailsCharacterId: null,
      page: 1,
      searchTerm: '',
    });
  });

  it('parses page, search term and details id', () => {
    const searchParams = parseCharacterSearchParams({
      details: '25',
      page: '3',
      search: '  Rick  ',
    });

    expect(searchParams).toEqual({
      detailsCharacterId: 25,
      page: 3,
      searchTerm: 'Rick',
    });
  });

  it('uses first value when Next search param contains an array', () => {
    const searchParams = parseCharacterSearchParams({
      details: ['8', '9'],
      page: ['4', '2'],
      search: ['Morty', 'Rick'],
    });

    expect(searchParams).toEqual({
      detailsCharacterId: 8,
      page: 4,
      searchTerm: 'Morty',
    });
  });

  it('normalizes invalid page and details values', () => {
    const searchParams = parseCharacterSearchParams({
      details: '-5',
      page: 'not-a-page',
      search: '  ',
    });

    expect(searchParams).toEqual({
      detailsCharacterId: null,
      page: 1,
      searchTerm: '',
    });
  });

  it('truncates decimal positive integers consistently', () => {
    const searchParams = parseCharacterSearchParams({
      details: '9.8',
      page: '2.9',
      search: 'Beth',
    });

    expect(searchParams).toEqual({
      detailsCharacterId: 9,
      page: 2,
      searchTerm: 'Beth',
    });
  });

  it('uses default values when search param arrays are empty', () => {
    const searchParams = parseCharacterSearchParams({
      details: [],
      page: [],
      search: [],
    });

    expect(searchParams).toEqual({
      detailsCharacterId: null,
      page: 1,
      searchTerm: '',
    });
  });
});
