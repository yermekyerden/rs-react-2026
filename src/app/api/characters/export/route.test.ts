import { fetchCharacterDetails } from '@/entities/character/api/characterApi';
import { testCharacterDetails } from '@/entities/character/testing/character.test-data';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { GET } from './route';

vi.mock('@/entities/character/api/characterApi', () => ({
  fetchCharacterDetails: vi.fn(),
}));

const fetchCharacterDetailsMock = vi.mocked(fetchCharacterDetails);

describe('GET /api/characters/export', () => {
  beforeEach(() => {
    fetchCharacterDetailsMock.mockReset();
  });

  it('returns 400 when no characters are selected', async () => {
    const response = await GET(
      new Request('http://localhost/api/characters/export')
    );

    expect(response.status).toBe(400);
    expect(fetchCharacterDetailsMock).not.toHaveBeenCalled();
    expect(await response.text()).toBe('');
  });

  it('returns 400 when selected query contains no valid ids', async () => {
    const response = await GET(
      new Request(
        'http://localhost/api/characters/export?selected=abc,-1,0,2.5'
      )
    );

    expect(response.status).toBe(400);
    expect(fetchCharacterDetailsMock).not.toHaveBeenCalled();
    expect(await response.text()).toBe('');
  });

  it('fetches selected characters and returns CSV response', async () => {
    fetchCharacterDetailsMock
      .mockResolvedValueOnce(testCharacterDetails)
      .mockResolvedValueOnce({
        ...testCharacterDetails,
        id: 2,
        name: 'Morty Smith',
      });

    const response = await GET(
      new Request('http://localhost/api/characters/export?selected=1,2')
    );

    expect(fetchCharacterDetailsMock).toHaveBeenNthCalledWith(1, 1);
    expect(fetchCharacterDetailsMock).toHaveBeenNthCalledWith(2, 2);
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Disposition')).toBe(
      'attachment; filename="selected-characters.csv"'
    );
    expect(response.headers.get('Content-Type')).toBe(
      'text/csv; charset=utf-8'
    );
    expect(await response.text()).toBe(
      [
        'id,name,status,species,type,gender,origin,location,episodes',
        '"1","Rick Sanchez","Alive","Human","None","Male","Earth (C-137)","Citadel of Ricks","2"',
        '"2","Morty Smith","Alive","Human","None","Male","Earth (C-137)","Citadel of Ricks","2"',
      ].join('\n')
    );
  });

  it('ignores invalid ids while keeping valid ids', async () => {
    fetchCharacterDetailsMock.mockResolvedValueOnce(testCharacterDetails);

    const response = await GET(
      new Request(
        'http://localhost/api/characters/export?selected=abc,1,-5,0,2.5'
      )
    );

    expect(fetchCharacterDetailsMock).toHaveBeenCalledOnce();
    expect(fetchCharacterDetailsMock).toHaveBeenCalledWith(1);
    expect(response.status).toBe(200);
  });
});
