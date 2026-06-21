export interface CharacterSearchParams {
  detailsCharacterId: number | null;
  page: number;
  searchTerm: string;
}

export type NextSearchParams = Record<string, string | string[] | undefined>;

export interface CharacterSearchHrefOptions {
  detailsCharacterId?: number | null;
  page?: number;
  searchTerm?: string;
}

export interface LocalizedCharacterSearchUrlOptions extends CharacterSearchHrefOptions {
  locale: string;
}
