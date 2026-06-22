import { CHARACTER_STATUS, type CharacterStatus } from '@/entities/character';

export const CHARACTER_DETAILS_PANEL_CLASS_NAMES = {
  panel:
    'mx-auto mt-10 grid w-full max-w-[1760px] overflow-hidden rounded-[2.25rem] border border-cyan-300/25 bg-[radial-gradient(circle_at_12%_20%,rgba(52,211,153,0.2),transparent_28%),radial-gradient(circle_at_90%_8%,rgba(34,211,238,0.18),transparent_30%),rgba(2,6,23,0.82)] shadow-2xl shadow-black/25 backdrop-blur-xl',
  failedPanel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-4 rounded-[2rem] border border-red-300/25 bg-red-400/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8',
  header:
    'flex items-center justify-between gap-4 border-b border-slate-200/10 px-5 py-4 sm:px-7',
  eyebrow: 'text-xs font-black uppercase tracking-[0.2em] text-emerald-200',
  closeLink:
    'inline-flex min-h-9 items-center justify-center rounded-full border border-slate-200/15 bg-slate-950/60 px-4 text-xs font-black uppercase tracking-[0.1em] text-slate-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15 hover:text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-300',
  body: 'grid gap-6 p-5 sm:p-7 lg:grid-cols-[22rem_minmax(0,1fr)] lg:items-stretch',
  imageFrame:
    'relative min-h-[18rem] overflow-hidden rounded-[1.75rem] border border-cyan-200/25 bg-slate-950/70 shadow-[0_0_48px_rgba(34,211,238,0.14)] sm:min-h-[22rem] lg:min-h-full',
  image: 'object-cover object-center',
  statusBadge:
    'absolute left-4 top-4 z-10 rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] backdrop-blur-xl',
  content: 'grid content-center gap-6',
  titleBlock: 'min-w-0',
  subjectLabel: 'text-xs font-black uppercase tracking-[0.16em] text-slate-400',
  title:
    'font-[family-name:var(--font-app-display)] text-4xl font-black leading-none tracking-[-0.06em] text-slate-50 sm:text-6xl',
  subtitle: 'mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-300',
  chips: 'flex flex-wrap gap-2',
  chip: 'rounded-full border border-slate-200/10 bg-slate-950/55 px-3 py-1.5 text-xs font-black uppercase tracking-[0.1em] text-slate-100',
  metaGrid: 'grid gap-3 sm:grid-cols-2 xl:grid-cols-3',
  metaCard:
    'rounded-2xl border border-slate-200/10 bg-slate-950/55 p-4 shadow-xl shadow-black/10',
  metaLabel: 'text-xs font-black uppercase tracking-[0.14em] text-slate-500',
  metaValue: 'mt-2 text-sm font-bold leading-5 text-slate-100',
  failedTitle:
    'font-[family-name:var(--font-app-display)] text-3xl font-black leading-tight tracking-[-0.05em] text-slate-50',
  failedText: 'max-w-3xl text-base font-semibold leading-7 text-slate-300',
} as const;

export const CHARACTER_DETAILS_STATUS_CLASS_NAMES: Record<
  CharacterStatus,
  string
> = {
  [CHARACTER_STATUS.alive]:
    'border-emerald-100/80 bg-emerald-300/55 text-emerald-950 shadow-[0_0_28px_rgba(52,211,153,0.28)]',
  [CHARACTER_STATUS.dead]:
    'border-red-100/80 bg-red-400/55 text-red-50 shadow-[0_0_28px_rgba(248,113,113,0.28)]',
  [CHARACTER_STATUS.unknown]:
    'border-slate-100/70 bg-slate-200/35 text-slate-50 shadow-[0_0_28px_rgba(226,232,240,0.16)]',
};
