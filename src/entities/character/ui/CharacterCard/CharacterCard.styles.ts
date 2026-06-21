import { CHARACTER_STATUS } from '../../model/character.constants';
import type { CharacterStatus } from '../../model/character.types';

export const CHARACTER_CARD_CLASS_NAMES = {
  card: 'group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] border bg-slate-950/75 shadow-2xl shadow-black/20 transition hover:-translate-y-1',
  imageFrame:
    'relative m-3 aspect-square overflow-hidden rounded-[1.35rem] border border-slate-300/10 bg-slate-900',
  image: 'object-cover transition duration-300 group-hover:scale-105',
  statusBadge:
    'absolute left-3 top-3 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.14em] backdrop-blur-xl',
  content: 'grid flex-1 grid-rows-[auto_minmax(0,1fr)_auto] gap-4 p-5 pt-2',
  name: 'line-clamp-2 text-xl font-black leading-tight tracking-tight text-slate-50',
  metaList: 'grid content-start gap-3',
  metaRow: 'grid gap-1',
  metaLabel: 'text-xs font-black uppercase tracking-[0.14em] text-slate-500',
  metaValue: 'text-sm font-bold leading-5 text-slate-200',
  detailsLink:
    'inline-flex min-h-10 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-4 text-sm font-black uppercase tracking-[0.1em] text-emerald-200 transition hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300',
} as const;

export const CHARACTER_CARD_STATUS_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]: 'border-emerald-300/30 hover:border-emerald-300/60',
  [CHARACTER_STATUS.dead]: 'border-red-300/30 hover:border-red-300/60',
  [CHARACTER_STATUS.unknown]: 'border-slate-300/20 hover:border-slate-300/40',
};

export const CHARACTER_CARD_BADGE_CLASS_NAMES: Record<CharacterStatus, string> =
  {
    [CHARACTER_STATUS.alive]:
      'border-emerald-300/40 bg-emerald-300/10 text-emerald-200',
    [CHARACTER_STATUS.dead]: 'border-red-300/40 bg-red-300/10 text-red-200',
    [CHARACTER_STATUS.unknown]:
      'border-slate-300/30 bg-slate-300/10 text-slate-200',
  };
