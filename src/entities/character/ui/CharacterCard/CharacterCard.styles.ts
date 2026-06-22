import { CHARACTER_STATUS } from '../../model/character.constants';
import type { CharacterStatus } from '../../model/character.types';

export const CHARACTER_CARD_CLASS_NAMES = {
  card: 'group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] border bg-slate-950/75 shadow-2xl shadow-black/20 transition hover:-translate-y-1',
  imageFrame:
    'relative m-3 aspect-square overflow-hidden rounded-[1.35rem] border border-slate-300/10 bg-slate-900',
  image:
    'object-cover object-center transition duration-300 group-hover:scale-105',
  statusBadge:
    'absolute left-3 top-3 z-10 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.14em] backdrop-blur-xl',
  selectionSlot: 'absolute right-3 top-3 z-10',
  content: 'grid flex-1 grid-rows-[auto_minmax(0,1fr)_auto] gap-4 p-5 pt-2',
  name: 'line-clamp-2 font-[family-name:var(--font-app-display)] text-xl font-black leading-tight tracking-tight text-slate-50',
  metaList: 'grid content-start gap-3',
  metaRow: 'grid gap-1',
  metaLabel: 'text-xs font-black uppercase tracking-[0.14em] text-slate-500',
  metaValue: 'text-sm font-bold leading-5 text-slate-200',
  detailsLink:
    'inline-flex min-h-10 items-center justify-center rounded-2xl border bg-slate-950/55 px-4 text-sm font-black uppercase tracking-[0.1em] transition focus:outline-none focus:ring-2',
} as const;

export const CHARACTER_CARD_STATUS_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-300/45 shadow-[0_0_34px_rgba(52,211,153,0.08)] hover:border-emerald-200/80 hover:shadow-[0_0_38px_rgba(52,211,153,0.16)]',
  [CHARACTER_STATUS.dead]:
    'border-red-300/45 shadow-[0_0_34px_rgba(248,113,113,0.08)] hover:border-red-200/80 hover:shadow-[0_0_38px_rgba(248,113,113,0.16)]',
  [CHARACTER_STATUS.unknown]:
    'border-slate-300/35 shadow-[0_0_34px_rgba(148,163,184,0.06)] hover:border-slate-100/60 hover:shadow-[0_0_38px_rgba(148,163,184,0.12)]',
};

export const CHARACTER_CARD_BADGE_CLASS_NAMES: Record<CharacterStatus, string> =
  {
    [CHARACTER_STATUS.alive]:
      'border-emerald-300/45 bg-slate-950/80 text-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.18)]',
    [CHARACTER_STATUS.dead]:
      'border-red-300/45 bg-slate-950/80 text-red-300 shadow-[0_0_22px_rgba(248,113,113,0.18)]',
    [CHARACTER_STATUS.unknown]:
      'border-slate-300/45 bg-slate-950/80 text-slate-300 shadow-[0_0_22px_rgba(148,163,184,0.14)]',
  };

export const CHARACTER_CARD_DETAILS_LINK_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-300/35 text-emerald-300 hover:border-emerald-200/70 hover:bg-emerald-300/10 focus:ring-emerald-300',
  [CHARACTER_STATUS.dead]:
    'border-red-300/35 text-red-300 hover:border-red-200/70 hover:bg-red-300/10 focus:ring-red-300',
  [CHARACTER_STATUS.unknown]:
    'border-slate-300/25 text-slate-300 hover:border-slate-100/60 hover:bg-slate-300/10 focus:ring-slate-300',
};
