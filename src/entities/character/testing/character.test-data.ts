import { CHARACTER_STATUS } from '../model/character.constants';
import type {
  CharacterCardModel,
  CharacterDetailsModel,
  CharacterDto,
} from '../model/character.types';

export const testAliveCharacterDto: CharacterDto = {
  id: 1,
  name: 'Rick Sanchez',
  status: CHARACTER_STATUS.alive,
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

export const testUnknownCharacterDto: CharacterDto = {
  ...testAliveCharacterDto,
  id: 2,
  name: 'Alien Parasite',
  status: 'Missing',
  species: 'Alien',
  type: 'Parasite',
  gender: 'unknown',
  location: {
    name: 'Unknown Dimension',
    url: '',
  },
};

export const testCharacterCard: CharacterCardModel = {
  id: 1,
  name: 'Rick Sanchez',
  description: 'Human, Male. Last known location: Citadel of Ricks.',
  gender: 'Male',
  imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  locationName: 'Citadel of Ricks',
  species: 'Human',
  status: CHARACTER_STATUS.alive,
};

export const testCharacterDetails: CharacterDetailsModel = {
  id: 1,
  name: 'Rick Sanchez',
  status: CHARACTER_STATUS.alive,
  species: 'Human',
  type: 'None',
  gender: 'Male',
  originName: 'Earth (C-137)',
  locationName: 'Citadel of Ricks',
  imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episodeCount: 2,
  createdAt: '2017-11-04T18:48:46.250Z',
};
