import { CHARACTER_STATUS, type CharacterStatus } from '@/entities/character';

export const CHARACTER_SELECTION_TOGGLE_CLASS_NAMES = {
  link: 'group grid size-8 place-items-center rounded-xl border bg-[var(--app-status-control-bg)] shadow-sm transition backdrop-blur-xl focus:outline-none focus:ring-2 active:bg-[var(--app-status-control-bg)]',
  marker:
    'grid size-4 place-items-center rounded-[0.35rem] border text-[0.68rem] font-black leading-none transition',
} as const;

export const CHARACTER_SELECTION_TOGGLE_IDLE_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.38)] text-[rgb(var(--app-status-alive-rgb)/0.85)] shadow-[0_0_16px_rgb(var(--app-status-alive-rgb)/0.1)] hover:border-[color:rgb(var(--app-status-alive-rgb)/0.58)] hover:bg-[var(--app-status-control-bg)] focus:ring-[rgb(var(--app-status-alive-rgb)/0.56)]',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.38)] text-[rgb(var(--app-status-dead-rgb)/0.85)] shadow-[0_0_16px_rgb(var(--app-status-dead-rgb)/0.1)] hover:border-[color:rgb(var(--app-status-dead-rgb)/0.58)] hover:bg-[var(--app-status-control-bg)] focus:ring-[rgb(var(--app-status-dead-rgb)/0.56)]',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.34)] text-[rgb(var(--app-status-unknown-rgb)/0.82)] shadow-[0_0_16px_rgb(var(--app-status-unknown-rgb)/0.08)] hover:border-[color:rgb(var(--app-status-unknown-rgb)/0.54)] hover:bg-[var(--app-status-control-bg)] focus:ring-[rgb(var(--app-status-unknown-rgb)/0.48)]',
};

export const CHARACTER_SELECTION_TOGGLE_SELECTED_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.62)] text-[rgb(var(--app-status-alive-rgb)/0.92)] shadow-[0_0_22px_rgb(var(--app-status-alive-rgb)/0.18)] hover:border-[color:rgb(var(--app-status-alive-rgb)/0.74)] hover:bg-[var(--app-status-control-bg)] focus:ring-[rgb(var(--app-status-alive-rgb)/0.6)]',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.62)] text-[rgb(var(--app-status-dead-rgb)/0.92)] shadow-[0_0_22px_rgb(var(--app-status-dead-rgb)/0.18)] hover:border-[color:rgb(var(--app-status-dead-rgb)/0.74)] hover:bg-[var(--app-status-control-bg)] focus:ring-[rgb(var(--app-status-dead-rgb)/0.6)]',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.58)] text-[rgb(var(--app-status-unknown-rgb)/0.9)] shadow-[0_0_22px_rgb(var(--app-status-unknown-rgb)/0.14)] hover:border-[color:rgb(var(--app-status-unknown-rgb)/0.7)] hover:bg-[var(--app-status-control-bg)] focus:ring-[rgb(var(--app-status-unknown-rgb)/0.54)]',
};

export const CHARACTER_SELECTION_TOGGLE_MARKER_IDLE_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.58)] bg-[var(--app-badge-bg)] group-hover:scale-105',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.58)] bg-[var(--app-badge-bg)] group-hover:scale-105',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.52)] bg-[var(--app-badge-bg)] group-hover:scale-105',
};

export const CHARACTER_SELECTION_TOGGLE_MARKER_SELECTED_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.74)] bg-[rgb(var(--app-status-alive-rgb)/0.9)] text-[var(--app-text-inverse)] shadow-[0_0_0_3px_rgb(var(--app-status-alive-rgb)/0.16),0_0_16px_rgb(var(--app-status-alive-rgb)/0.26)] group-hover:scale-105',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.74)] bg-[rgb(var(--app-status-dead-rgb)/0.9)] text-[var(--app-text-inverse)] shadow-[0_0_0_3px_rgb(var(--app-status-dead-rgb)/0.14),0_0_16px_rgb(var(--app-status-dead-rgb)/0.24)] group-hover:scale-105',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.7)] bg-[rgb(var(--app-status-unknown-rgb)/0.86)] text-[var(--app-text-inverse)] shadow-[0_0_0_3px_rgb(var(--app-status-unknown-rgb)/0.12),0_0_16px_rgb(var(--app-status-unknown-rgb)/0.2)] group-hover:scale-105',
};
