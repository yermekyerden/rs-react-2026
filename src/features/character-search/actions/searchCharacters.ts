'use server';

import { redirect } from 'next/navigation';
import { CHARACTER_DEFAULTS } from '@/entities/character';
import { createLocalizedCharacterSearchUrl } from '../model/character-search-params.builders';
import { CHARACTER_SEARCH_PARAM } from '../model/character-search-params.constants';

export async function searchCharacters(
  locale: string,
  formData: FormData
): Promise<void> {
  const searchTerm = getSearchTermFromFormData(formData);
  const redirectUrl = createLocalizedCharacterSearchUrl({
    locale,
    page: CHARACTER_DEFAULTS.firstPage,
    searchTerm,
  });

  redirect(redirectUrl);
}

function getSearchTermFromFormData(formData: FormData): string {
  const rawSearchTerm = formData.get(CHARACTER_SEARCH_PARAM.search);

  if (typeof rawSearchTerm !== 'string') {
    return '';
  }

  return rawSearchTerm.trim();
}
