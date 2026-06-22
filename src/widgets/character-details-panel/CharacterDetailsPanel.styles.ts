import { CHARACTER_STATUS, type CharacterStatus } from '@/entities/character';

export const CHARACTER_DETAILS_PANEL_CLASS_NAMES = {
  panel:
    'mx-auto mt-10 grid w-full max-w-[1760px] overflow-hidden rounded-[2.25rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-panel-bg)] shadow-2xl shadow-black/10 backdrop-blur-xl',
  failedPanel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-4 rounded-[2rem] border border-red-300/25 bg-[var(--app-panel-bg)] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8',
  header:
    'flex items-center justify-between gap-4 border-b border-[color:var(--app-border-subtle)] px-5 py-4 sm:px-7',
  eyebrow:
    'text-xs font-black uppercase tracking-[0.2em] text-[var(--app-accent)]',
  closeLink:
    'inline-flex min-h-9 items-center justify-center rounded-full border border-[color:var(--app-border-control)] bg-[var(--app-control-bg)] px-4 text-xs font-black uppercase tracking-[0.1em] text-[var(--app-text-secondary)] transition hover:border-[color:var(--app-border-accent)] hover:bg-[var(--app-accent-soft)] hover:text-[var(--app-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
  body: 'grid gap-6 p-5 sm:p-7 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-stretch',
  imageFrame:
    'relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-[color:var(--app-border-control)] bg-[var(--app-card-inner-bg)] shadow-[0_18px_42px_rgb(0_0_0/0.08)] sm:min-h-[22rem] lg:min-h-full',
  image: 'object-cover object-center',
  statusBadge:
    'absolute left-4 top-4 z-10 rounded-full border bg-[var(--app-badge-bg)] px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] shadow-sm backdrop-blur-xl',
  content: 'grid content-center gap-6',
  titleBlock: 'min-w-0',
  subjectLabel:
    'text-xs font-black uppercase tracking-[0.16em] text-[var(--app-text-muted)]',
  title:
    'font-[family-name:var(--font-app-display)] text-4xl font-black leading-none tracking-[-0.06em] text-[var(--app-text-primary)] sm:text-6xl',
  subtitle:
    'mt-4 max-w-3xl text-base font-semibold leading-7 text-[var(--app-text-secondary)]',
  chips: 'flex flex-wrap gap-2',
  chip: 'rounded-full border border-[color:var(--app-border-subtle)] bg-[var(--app-control-bg)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-[var(--app-text-secondary)]',
  metaGrid: 'grid gap-3 sm:grid-cols-2 xl:grid-cols-3',
  metaCard:
    'rounded-2xl border border-[color:var(--app-border-subtle)] bg-[var(--app-control-bg)] p-4 shadow-xl shadow-black/5',
  metaLabel:
    'text-xs font-black uppercase tracking-[0.14em] text-[var(--app-text-muted)]',
  metaValue: 'mt-2 text-sm font-bold leading-5 text-[var(--app-text-primary)]',
  failedTitle:
    'font-[family-name:var(--font-app-display)] text-3xl font-black leading-tight tracking-[-0.05em] text-[var(--app-text-primary)]',
  failedText:
    'max-w-3xl text-base font-semibold leading-7 text-[var(--app-text-secondary)]',
} as const;

export const CHARACTER_DETAILS_STATUS_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-[color:rgb(var(--app-status-alive-rgb)/0.42)] text-[rgb(var(--app-status-alive-rgb)/0.88)] shadow-[0_0_18px_rgb(var(--app-status-alive-rgb)/0.12)]',
  [CHARACTER_STATUS.dead]:
    'border-[color:rgb(var(--app-status-dead-rgb)/0.42)] text-[rgb(var(--app-status-dead-rgb)/0.86)] shadow-[0_0_18px_rgb(var(--app-status-dead-rgb)/0.12)]',
  [CHARACTER_STATUS.unknown]:
    'border-[color:rgb(var(--app-status-unknown-rgb)/0.38)] text-[rgb(var(--app-status-unknown-rgb)/0.84)] shadow-[0_0_18px_rgb(var(--app-status-unknown-rgb)/0.1)]',
};
