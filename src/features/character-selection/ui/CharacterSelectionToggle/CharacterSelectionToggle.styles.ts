import { CHARACTER_STATUS, type CharacterStatus } from '@/entities/character';

export const CHARACTER_SELECTION_TOGGLE_CLASS_NAMES = {
  link: 'group grid size-8 place-items-center rounded-xl border transition backdrop-blur-xl focus:outline-none focus:ring-2',
  marker:
    'grid size-4 place-items-center rounded-[0.35rem] border text-[0.68rem] font-black leading-none transition',
} as const;

export const CHARACTER_SELECTION_TOGGLE_IDLE_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-300/55 bg-slate-950/90 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.18)] hover:border-emerald-200/85 hover:bg-emerald-950/90 focus:ring-emerald-300',
  [CHARACTER_STATUS.dead]:
    'border-red-300/55 bg-slate-950/90 text-red-300 shadow-[0_0_20px_rgba(248,113,113,0.18)] hover:border-red-200/85 hover:bg-red-950/80 focus:ring-red-300',
  [CHARACTER_STATUS.unknown]:
    'border-slate-300/55 bg-slate-950/90 text-slate-300 shadow-[0_0_20px_rgba(148,163,184,0.14)] hover:border-slate-100/75 hover:bg-slate-800/90 focus:ring-slate-300',
};

export const CHARACTER_SELECTION_TOGGLE_SELECTED_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-300/75 bg-emerald-950/90 text-emerald-200 shadow-[0_0_28px_rgba(52,211,153,0.32)] hover:border-emerald-100/90 hover:bg-emerald-900/90 focus:ring-emerald-300',
  [CHARACTER_STATUS.dead]:
    'border-red-300/75 bg-red-950/90 text-red-200 shadow-[0_0_28px_rgba(248,113,113,0.32)] hover:border-red-100/90 hover:bg-red-900/90 focus:ring-red-300',
  [CHARACTER_STATUS.unknown]:
    'border-slate-200/75 bg-slate-800/95 text-slate-100 shadow-[0_0_28px_rgba(148,163,184,0.22)] hover:border-slate-50/90 hover:bg-slate-700/95 focus:ring-slate-300',
};

export const CHARACTER_SELECTION_TOGGLE_MARKER_IDLE_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-300/65 bg-slate-950/75 group-hover:bg-emerald-300/10',
  [CHARACTER_STATUS.dead]:
    'border-red-300/65 bg-slate-950/75 group-hover:bg-red-300/10',
  [CHARACTER_STATUS.unknown]:
    'border-slate-300/65 bg-slate-950/75 group-hover:bg-slate-300/10',
};

export const CHARACTER_SELECTION_TOGGLE_MARKER_SELECTED_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-200/80 bg-emerald-300/20 text-emerald-200',
  [CHARACTER_STATUS.dead]: 'border-red-200/80 bg-red-300/20 text-red-200',
  [CHARACTER_STATUS.unknown]:
    'border-slate-100/80 bg-slate-300/20 text-slate-100',
};
