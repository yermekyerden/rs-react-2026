import type { CharacterDetailsModel } from '@/entities/character';
import { CHARACTER_CSV, CHARACTER_CSV_HEADER } from './character-csv.constants';

export function createCharactersCsv(
  characters: CharacterDetailsModel[]
): string {
  const rows = characters.map(createCharacterCsvRow);

  return [CHARACTER_CSV_HEADER.join(CHARACTER_CSV.separator), ...rows].join(
    CHARACTER_CSV.newline
  );
}

export function createCharacterCsvAttachmentHeader(): string {
  return `attachment; filename="${CHARACTER_CSV.fileName}"`;
}

function createCharacterCsvRow(character: CharacterDetailsModel): string {
  return [
    character.id,
    character.name,
    character.status,
    character.species,
    character.type,
    character.gender,
    character.originName,
    character.locationName,
    character.episodeCount,
  ]
    .map(String)
    .map(escapeCsvCell)
    .join(CHARACTER_CSV.separator);
}

function escapeCsvCell(value: string): string {
  const escapedValue = value.replaceAll('"', '""');

  return `"${escapedValue}"`;
}
