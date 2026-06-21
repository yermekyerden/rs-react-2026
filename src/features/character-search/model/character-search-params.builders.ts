import { APP_ROUTES } from '@/shared/config/app-routes';
import { CHARACTER_DEFAULTS } from '@/entities/character';
import { CHARACTER_SEARCH_PARAM } from './character-search-params.constants';
import type {
  CharacterSearchHrefOptions,
  LocalizedCharacterSearchUrlOptions,
} from './character-search-params.types';

export function createCharacterSearchHref({
  detailsCharacterId,
  page,
  searchTerm,
}: CharacterSearchHrefOptions): string {
  const searchParams = createCharacterSearchParams({
    detailsCharacterId,
    page,
    searchTerm,
  });
  const queryString = searchParams.toString();

  if (queryString.length === 0) {
    return APP_ROUTES.explorer;
  }

  return `${APP_ROUTES.explorer}?${queryString}`;
}

export function createLocalizedCharacterSearchUrl({
  locale,
  detailsCharacterId,
  page,
  searchTerm,
}: LocalizedCharacterSearchUrlOptions): string {
  const href = createCharacterSearchHref({
    detailsCharacterId,
    page,
    searchTerm,
  });

  if (href === APP_ROUTES.explorer) {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

function createCharacterSearchParams({
  detailsCharacterId,
  page,
  searchTerm,
}: CharacterSearchHrefOptions): URLSearchParams {
  const searchParams = new URLSearchParams();

  if (page !== undefined && page > CHARACTER_DEFAULTS.firstPage) {
    searchParams.set(CHARACTER_SEARCH_PARAM.page, String(page));
  }

  if (searchTerm !== undefined && searchTerm.trim().length > 0) {
    searchParams.set(CHARACTER_SEARCH_PARAM.search, searchTerm.trim());
  }

  if (detailsCharacterId !== undefined && detailsCharacterId !== null) {
    searchParams.set(
      CHARACTER_SEARCH_PARAM.details,
      String(detailsCharacterId)
    );
  }

  return searchParams;
}
