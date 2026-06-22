import { testCharacterDetails } from '@/entities/character/testing/character.test-data';
import { describe, expect, it } from 'vitest';
import {
  createCharacterCsvAttachmentHeader,
  createCharactersCsv,
} from './character-csv.builders';

describe('createCharactersCsv', () => {
  it('creates CSV header and character rows', () => {
    const csv = createCharactersCsv([testCharacterDetails]);

    expect(csv).toBe(
      [
        'id,name,status,species,type,gender,origin,location,episodes',
        '"1","Rick Sanchez","Alive","Human","None","Male","Earth (C-137)","Citadel of Ricks","2"',
      ].join('\n')
    );
  });

  it('escapes commas and double quotes inside cells', () => {
    const csv = createCharactersCsv([
      {
        ...testCharacterDetails,
        id: 2,
        name: 'Birdperson, "Phoenixperson"',
        originName: 'Earth, C-137',
        locationName: 'Jerry "Daycare"',
        type: 'Alien, Friend',
      },
    ]);

    expect(csv).toBe(
      [
        'id,name,status,species,type,gender,origin,location,episodes',
        '"2","Birdperson, ""Phoenixperson""","Alive","Human","Alien, Friend","Male","Earth, C-137","Jerry ""Daycare""","2"',
      ].join('\n')
    );
  });

  it('creates CSV with only header for empty character list', () => {
    const csv = createCharactersCsv([]);

    expect(csv).toBe(
      'id,name,status,species,type,gender,origin,location,episodes'
    );
  });
});

describe('createCharacterCsvAttachmentHeader', () => {
  it('creates attachment header with CSV file name', () => {
    const header = createCharacterCsvAttachmentHeader();

    expect(header).toBe('attachment; filename="selected-characters.csv"');
  });
});
