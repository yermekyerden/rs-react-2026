import { CHARACTER_STATUS } from './character.constants';
import type { CharacterStatus } from './character.types';

type SupportedCharacterStatus =
  | typeof CHARACTER_STATUS.alive
  | typeof CHARACTER_STATUS.dead;

export function isSupportedCharacterStatus(
  status: string
): status is SupportedCharacterStatus {
  const isAliveStatus = status === CHARACTER_STATUS.alive;
  const isDeadStatus = status === CHARACTER_STATUS.dead;

  return isAliveStatus || isDeadStatus;
}

export function normalizeCharacterStatus(status: string): CharacterStatus {
  if (isSupportedCharacterStatus(status)) {
    return status;
  }

  return CHARACTER_STATUS.unknown;
}
