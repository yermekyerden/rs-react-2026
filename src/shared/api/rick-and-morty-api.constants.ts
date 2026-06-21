export const RICK_AND_MORTY_API = {
  baseUrl: 'https://rickandmortyapi.com/api',
  characterPath: '/character',
} as const;

export const HTTP_STATUS = {
  notFound: 404,
  tooManyRequests: 429,
} as const;
