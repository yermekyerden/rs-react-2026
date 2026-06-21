import { CHARACTER_DEFAULTS } from './character.constants';
import { normalizeCharacterStatus } from './character.guards';
import type {
  CharacterCardModel,
  CharacterDetailsModel,
  CharacterDto,
} from './character.types';

export function mapCharacterDtoToCardModel(
  character: CharacterDto
): CharacterCardModel {
  return {
    id: character.id,
    name: character.name,
    description: createCharacterDescription(character),
    gender: character.gender,
    imageUrl: character.image,
    locationName: character.location.name,
    species: character.species,
    status: normalizeCharacterStatus(character.status),
  };
}

export function mapCharacterDtoToDetailsModel(
  character: CharacterDto
): CharacterDetailsModel {
  return {
    id: character.id,
    name: character.name,
    status: normalizeCharacterStatus(character.status),
    species: character.species,
    type: createCharacterType(character.type),
    gender: character.gender,
    originName: character.origin.name,
    locationName: character.location.name,
    imageUrl: character.image,
    episodeCount: character.episode.length,
    createdAt: character.created,
  };
}

function createCharacterDescription(character: CharacterDto): string {
  const typeSuffix = createCharacterTypeSuffix(character.type);
  const locationName = character.location.name;

  return `${character.species}${typeSuffix}, ${character.gender}. ${CHARACTER_DEFAULTS.locationDescriptionLabel}: ${locationName}.`;
}

function createCharacterType(characterType: string): string {
  if (characterType.length === 0) {
    return CHARACTER_DEFAULTS.fallbackType;
  }

  return characterType;
}

function createCharacterTypeSuffix(characterType: string): string {
  if (characterType.length === 0) {
    return '';
  }

  return ` (${characterType})`;
}
