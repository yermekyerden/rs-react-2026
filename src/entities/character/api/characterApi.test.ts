import {
  testAliveCharacterDto,
  testCharacterCard,
  testCharacterDetails,
} from '@/entities/character/testing/character.test-data';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchCharacterDetails, fetchCharacterPage } from './characterApi';

describe('characterApi', () => {
  const fetchMock = vi.fn<typeof fetch>();

  beforeEach(() => {
    fetchMock.mockReset();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('fetchCharacterPage', () => {
    it('fetches character page with normalized page and trimmed search term', async () => {
      fetchMock.mockResolvedValue(
        createJsonResponse({
          info: {
            count: 1,
            pages: 5,
            next: null,
            prev: null,
          },
          results: [testAliveCharacterDto],
        })
      );

      const characterPage = await fetchCharacterPage({
        page: 2,
        searchTerm: '  Rick Sanchez  ',
      });

      expect(fetchMock).toHaveBeenCalledWith(
        'https://rickandmortyapi.com/api/character?page=2&name=Rick+Sanchez',
        {
          cache: 'no-store',
        }
      );
      expect(characterPage).toEqual({
        characters: [testCharacterCard],
        currentPage: 2,
        totalCount: 1,
        totalPages: 5,
      });
    });

    it('uses first page when requested page is not finite', async () => {
      fetchMock.mockResolvedValue(
        createJsonResponse({
          info: {
            count: 1,
            pages: 1,
            next: null,
            prev: null,
          },
          results: [testAliveCharacterDto],
        })
      );

      await fetchCharacterPage({
        page: Number.NaN,
        searchTerm: '',
      });

      expect(fetchMock).toHaveBeenCalledWith(
        'https://rickandmortyapi.com/api/character?page=1',
        {
          cache: 'no-store',
        }
      );
    });

    it('throws not found message for 404 response', async () => {
      fetchMock.mockResolvedValue(new Response(null, { status: 404 }));

      await expect(
        fetchCharacterPage({
          page: 1,
          searchTerm: 'Nobody',
        })
      ).rejects.toThrow(
        'No characters found for this search. Maybe the portal opened into an empty dimension.'
      );
    });

    it('throws network message when fetch fails', async () => {
      fetchMock.mockRejectedValue(new TypeError('Network failed'));

      await expect(
        fetchCharacterPage({
          page: 1,
          searchTerm: 'Rick',
        })
      ).rejects.toThrow(
        'The portal refused the request. You may be switching dimensions too fast. Wait a moment and try again.'
      );
    });
  });

  describe('fetchCharacterDetails', () => {
    it('fetches and maps character details', async () => {
      fetchMock.mockResolvedValue(createJsonResponse(testAliveCharacterDto));

      const characterDetails = await fetchCharacterDetails(1);

      expect(fetchMock).toHaveBeenCalledWith(
        'https://rickandmortyapi.com/api/character/1',
        {
          cache: 'no-store',
        }
      );
      expect(characterDetails).toEqual(testCharacterDetails);
    });

    it('normalizes invalid details id to first character id', async () => {
      fetchMock.mockResolvedValue(createJsonResponse(testAliveCharacterDto));

      await fetchCharacterDetails(Number.NaN);

      expect(fetchMock).toHaveBeenCalledWith(
        'https://rickandmortyapi.com/api/character/1',
        {
          cache: 'no-store',
        }
      );
    });
  });
});

function createJsonResponse(body: unknown): Response {
  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 200,
  });
}
