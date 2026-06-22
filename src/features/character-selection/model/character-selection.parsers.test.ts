import { describe, expect, it } from 'vitest';
import { parseSelectedCharacterIds } from './character-selection.parsers';

describe('parseSelectedCharacterIds', () => {
  it('returns empty selection when selected param is missing', () => {
    const selectedCharacterIds = parseSelectedCharacterIds({});

    expect(selectedCharacterIds).toEqual([]);
  });

  it('parses comma-separated selected character ids', () => {
    const selectedCharacterIds = parseSelectedCharacterIds({
      selected: '1,2,3',
    });

    expect(selectedCharacterIds).toEqual([1, 2, 3]);
  });

  it('uses first selected value when param contains an array', () => {
    const selectedCharacterIds = parseSelectedCharacterIds({
      selected: ['4,5', '6,7'],
    });

    expect(selectedCharacterIds).toEqual([4, 5]);
  });

  it('filters invalid, non-integer and non-positive values', () => {
    const selectedCharacterIds = parseSelectedCharacterIds({
      selected: '1,-2,0,abc,3.5,4',
    });

    expect(selectedCharacterIds).toEqual([1, 4]);
  });

  it('returns empty selection when all values are invalid', () => {
    const selectedCharacterIds = parseSelectedCharacterIds({
      selected: '-1,0,nope,2.5',
    });

    expect(selectedCharacterIds).toEqual([]);
  });
});
