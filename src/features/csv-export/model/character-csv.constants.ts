export const CHARACTER_CSV = {
  fileName: 'selected-characters.csv',
  contentType: 'text/csv; charset=utf-8',
  newline: '\n',
  separator: ',',
} as const;

export const CHARACTER_CSV_EXPORT = {
  path: '/api/characters/export',
} as const;

export const CHARACTER_CSV_RESPONSE = {
  emptySelectionStatus: 400,
} as const;

export const CHARACTER_CSV_RESPONSE_HEADER = {
  contentDisposition: 'Content-Disposition',
  contentType: 'Content-Type',
} as const;

export const CHARACTER_CSV_HEADER = [
  'id',
  'name',
  'status',
  'species',
  'type',
  'gender',
  'origin',
  'location',
  'episodes',
] as const;
