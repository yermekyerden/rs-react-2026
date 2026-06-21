import type { CharacterPageModel } from '@/entities/character';

export type CharacterResultsState =
  | LoadedCharacterResultsState
  | FailedCharacterResultsState;

interface LoadedCharacterResultsState {
  status: 'loaded';
  characterPage: CharacterPageModel;
}

interface FailedCharacterResultsState {
  status: 'failed';
  errorMessage: string;
}
