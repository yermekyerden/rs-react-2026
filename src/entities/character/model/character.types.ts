import { CHARACTER_STATUS } from './character.constants';

export type CharacterStatus =
  (typeof CHARACTER_STATUS)[keyof typeof CHARACTER_STATUS];

export interface CharacterLocationDto {
  name: string;
  url: string;
}

export interface CharacterDto {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterLocationDto;
  location: CharacterLocationDto;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterApiPageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterApiResponse {
  info: CharacterApiPageInfo;
  results: CharacterDto[];
}

export interface CharacterPageRequest {
  page: number;
  searchTerm: string;
}

export interface CharacterCardModel {
  id: number;
  name: string;
  description: string;
  gender: string;
  imageUrl: string;
  locationName: string;
  species: string;
  status: CharacterStatus;
}

export interface CharacterDetailsModel {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  originName: string;
  locationName: string;
  imageUrl: string;
  episodeCount: number;
  createdAt: string;
}

export interface CharacterPageModel {
  characters: CharacterCardModel[];
  currentPage: number;
  totalCount: number;
  totalPages: number;
}
