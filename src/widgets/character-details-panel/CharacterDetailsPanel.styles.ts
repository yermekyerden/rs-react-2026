export const CHARACTER_DETAILS_PANEL_CLASS_NAMES = {
  panel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-6 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:grid-cols-[22rem_minmax(0,1fr)] lg:p-8',
  imageFrame:
    'relative aspect-square overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-slate-950/70',
  image: 'object-cover',
  content: 'grid content-center gap-6',
  eyebrow: 'text-sm font-extrabold uppercase tracking-[0.16em] text-cyan-200',
  title:
    'text-4xl font-black leading-none tracking-[-0.06em] text-slate-50 sm:text-6xl',
  statusBadge:
    'inline-flex w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-emerald-200',
  metaGrid: 'grid gap-3 sm:grid-cols-2 xl:grid-cols-3',
  metaCard: 'rounded-2xl border border-slate-300/10 bg-slate-950/60 p-4',
  metaLabel: 'text-xs font-black uppercase tracking-[0.14em] text-slate-500',
  metaValue: 'mt-2 text-base font-bold leading-6 text-slate-100',
  closeLink:
    'inline-flex min-h-11 w-fit items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 text-sm font-black uppercase tracking-[0.12em] text-cyan-100 transition hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300',
  failedPanel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-4 rounded-[2rem] border border-red-300/20 bg-red-300/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8',
  failedTitle:
    'text-3xl font-black leading-tight tracking-[-0.05em] text-slate-50',
  failedText: 'max-w-3xl text-base font-semibold leading-7 text-slate-300',
} as const;
