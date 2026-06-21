export const ABOUT_CONTENT_CLASS_NAMES = {
  main: 'px-4 py-12 sm:px-6 lg:px-12 lg:py-16',
  panel:
    'mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-300/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-12',
  hero: 'grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]',
  kicker:
    'mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-emerald-300',
  title:
    'text-4xl font-black leading-none tracking-[-0.06em] text-slate-50 sm:text-6xl',
  lead: 'mt-5 max-w-3xl text-base font-semibold leading-7 text-slate-300 sm:text-lg',
  cardGrid: 'grid gap-4 md:grid-cols-2',
  card: 'rounded-3xl border border-slate-300/10 bg-slate-900/60 p-6',
  cardTitle: 'mt-2 text-2xl font-black tracking-tight text-slate-50',
  cardText: 'mt-3 text-sm font-semibold leading-7 text-slate-300',
  portalCard:
    'grid min-h-64 place-items-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8',
  portalOrb:
    'size-32 rounded-[2rem] border border-emerald-300/30 bg-emerald-300/20 shadow-[0_0_48px_rgba(52,211,153,0.18)]',
} as const;
