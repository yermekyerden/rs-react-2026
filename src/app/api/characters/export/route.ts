import { fetchCharacterDetails } from '@/entities/character/api/characterApi';
import { CHARACTER_DEFAULTS } from '@/entities/character/model/character.constants';
import {
  CHARACTER_SELECTION,
  CHARACTER_SELECTION_PARAM,
} from '@/features/character-selection/model/character-selection.constants';
import {
  createCharacterCsvAttachmentHeader,
  createCharactersCsv,
} from '@/features/csv-export/model/character-csv.builders';
import {
  CHARACTER_CSV,
  CHARACTER_CSV_RESPONSE,
  CHARACTER_CSV_RESPONSE_HEADER,
} from '@/features/csv-export/model/character-csv.constants';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const selectedCharacterIds = parseSelectedCharacterIdsFromUrl(url);

  if (selectedCharacterIds.length === 0) {
    return new Response('', {
      status: CHARACTER_CSV_RESPONSE.emptySelectionStatus,
    });
  }

  const characters = await Promise.all(
    selectedCharacterIds.map((characterId) =>
      fetchCharacterDetails(characterId)
    )
  );
  const csv = createCharactersCsv(characters);

  return new Response(csv, {
    headers: {
      [CHARACTER_CSV_RESPONSE_HEADER.contentDisposition]:
        createCharacterCsvAttachmentHeader(),
      [CHARACTER_CSV_RESPONSE_HEADER.contentType]: CHARACTER_CSV.contentType,
    },
  });
}

function parseSelectedCharacterIdsFromUrl(url: URL): number[] {
  const rawSelectedCharacterIds = url.searchParams.get(
    CHARACTER_SELECTION_PARAM.selected
  );

  if (rawSelectedCharacterIds === null) {
    return [];
  }

  return rawSelectedCharacterIds
    .split(CHARACTER_SELECTION.separator)
    .map(Number)
    .filter(isPositiveInteger);
}

function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value >= CHARACTER_DEFAULTS.firstPage;
}
