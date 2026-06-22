import { CHARACTER_STATUS } from '../../model/character.constants';
import type { CharacterStatus } from '../../model/character.types';

export const CHARACTER_CARD_CLASS_NAMES = {
  card: 'group relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] border bg-[var(--app-card-bg)] shadow-2xl shadow-black/10 transition hover:-translate-y-1',
  imageFrame:
    'relative m-3 aspect-square overflow-hidden rounded-[1.35rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-card-inner-bg)]',
  image:
    'object-cover object-center transition duration-300 group-hover:scale-105',
  statusBadge:
    'absolute left-3 top-3 z-10 rounded-full border bg-[var(--app-badge-bg)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] shadow-sm backdrop-blur-xl',
  selectionSlot: 'absolute right-3 top-3 z-10',
  content: 'grid flex-1 grid-rows-[auto_minmax(0,1fr)_auto] gap-4 p-5 pt-2',
  name: 'line-clamp-2 font-[family-name:var(--font-app-display)] text-xl font-black leading-tight tracking-tight text-[var(--app-text-primary)]',
  metaList: 'grid content-start gap-3',
  metaRow: 'grid gap-1',
  metaLabel:
    'text-xs font-black uppercase tracking-[0.14em] text-[var(--app-text-muted)]',
  metaValue: 'text-sm font-bold leading-5 text-[var(--app-text-primary)]',
  detailsLink:
    'inline-flex min-h-10 items-center justify-center rounded-2xl border bg-[var(--app-control-bg)] px-4 text-sm font-black uppercase tracking-[0.1em] transition focus:outline-none focus:ring-2',
} as const;

export const CHARACTER_CARD_STATUS_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.28)] bg-[image:radial-gradient(circle_at_top_left,rgb(var(--app-status-alive-rgb)/0.075),transparent_16rem)] shadow-[0_14px_30px_rgb(0_0_0/0.08)] hover:border-[color:rgb(var(--app-status-alive-rgb)/0.46)] hover:shadow-[0_20px_42px_rgb(0_0_0/0.1),0_0_28px_rgb(var(--app-status-alive-rgb)/0.1)]',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.28)] bg-[image:radial-gradient(circle_at_top_left,rgb(var(--app-status-dead-rgb)/0.055),transparent_16rem)] shadow-[0_14px_30px_rgb(0_0_0/0.08)] hover:border-[color:rgb(var(--app-status-dead-rgb)/0.46)] hover:shadow-[0_20px_42px_rgb(0_0_0/0.1),0_0_28px_rgb(var(--app-status-dead-rgb)/0.09)]',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.24)] bg-[image:radial-gradient(circle_at_top_left,rgb(var(--app-status-unknown-rgb)/0.045),transparent_16rem)] shadow-[0_14px_30px_rgb(0_0_0/0.07)] hover:border-[color:rgb(var(--app-status-unknown-rgb)/0.42)] hover:shadow-[0_20px_42px_rgb(0_0_0/0.09),0_0_28px_rgb(var(--app-status-unknown-rgb)/0.08)]',
};

export const CHARACTER_CARD_BADGE_CLASS_NAMES: Record<CharacterStatus, string> =
  {
    [CHARACTER_STATUS.alive]:
      'border-[color:rgb(var(--app-status-alive-rgb)/0.42)] text-[rgb(var(--app-status-alive-rgb)/0.9)] shadow-[0_0_18px_rgb(var(--app-status-alive-rgb)/0.12)]',
    [CHARACTER_STATUS.dead]:
      'border-[color:rgb(var(--app-status-dead-rgb)/0.42)] text-[rgb(var(--app-status-dead-rgb)/0.88)] shadow-[0_0_18px_rgb(var(--app-status-dead-rgb)/0.12)]',
    [CHARACTER_STATUS.unknown]:
      'border-[color:rgb(var(--app-status-unknown-rgb)/0.38)] text-[rgb(var(--app-status-unknown-rgb)/0.86)] shadow-[0_0_18px_rgb(var(--app-status-unknown-rgb)/0.1)]',
  };

export const CHARACTER_CARD_DETAILS_LINK_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.28)] text-[rgb(var(--app-status-alive-rgb)/0.86)] hover:border-[color:rgb(var(--app-status-alive-rgb)/0.48)] hover:bg-[rgb(var(--app-status-alive-rgb)/0.075)] focus:ring-[rgb(var(--app-status-alive-rgb)/0.58)]',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.28)] text-[rgb(var(--app-status-dead-rgb)/0.86)] hover:border-[color:rgb(var(--app-status-dead-rgb)/0.48)] hover:bg-[rgb(var(--app-status-dead-rgb)/0.065)] focus:ring-[rgb(var(--app-status-dead-rgb)/0.58)]',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.22)] text-[rgb(var(--app-status-unknown-rgb)/0.82)] hover:border-[color:rgb(var(--app-status-unknown-rgb)/0.42)] hover:bg-[rgb(var(--app-status-unknown-rgb)/0.065)] focus:ring-[rgb(var(--app-status-unknown-rgb)/0.5)]',
};
