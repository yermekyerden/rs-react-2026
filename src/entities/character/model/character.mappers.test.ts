import { describe, expect, it } from 'vitest';
import { CHARACTER_STATUS } from './character.constants';
import {
  mapCharacterDtoToCardModel,
  mapCharacterDtoToDetailsModel,
} from './character.mappers';
import {
  testAliveCharacterDto,
  testCharacterCard,
  testCharacterDetails,
  testUnknownCharacterDto,
} from '../testing/character.test-data';

describe('mapCharacterDtoToCardModel', () => {
  it('maps character DTO to character card model', () => {
    const characterCard = mapCharacterDtoToCardModel(testAliveCharacterDto);

    expect(characterCard).toEqual(testCharacterCard);
  });

  it('includes character type in description when type is provided', () => {
    const expectedDescription =
      'Alien (Parasite), unknown. Last known location: Unknown Dimension.';

    const characterCard = mapCharacterDtoToCardModel(testUnknownCharacterDto);

    expect(characterCard.description).toBe(expectedDescription);
  });

  it('normalizes unsupported character status to unknown', () => {
    const characterCard = mapCharacterDtoToCardModel(testUnknownCharacterDto);

    expect(characterCard.status).toBe(CHARACTER_STATUS.unknown);
  });
});

describe('mapCharacterDtoToDetailsModel', () => {
  it('maps character DTO to character details model', () => {
    const characterDetails = mapCharacterDtoToDetailsModel(
      testAliveCharacterDto
    );

    expect(characterDetails).toEqual(testCharacterDetails);
  });

  it('keeps provided character type in details model', () => {
    const characterDetails = mapCharacterDtoToDetailsModel(
      testUnknownCharacterDto
    );

    expect(characterDetails.type).toBe('Parasite');
  });
});
