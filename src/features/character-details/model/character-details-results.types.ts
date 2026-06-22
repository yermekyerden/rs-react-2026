import type { CharacterDetailsModel } from '@/entities/character';

export type CharacterDetailsState =
  | IdleCharacterDetailsState
  | LoadedCharacterDetailsState
  | FailedCharacterDetailsState;

interface IdleCharacterDetailsState {
  status: 'idle';
}

interface LoadedCharacterDetailsState {
  status: 'loaded';
  characterDetails: CharacterDetailsModel;
}

interface FailedCharacterDetailsState {
  status: 'failed';
  errorMessage: string;
}
