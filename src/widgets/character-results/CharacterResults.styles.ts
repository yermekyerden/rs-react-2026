export const CHARACTER_RESULTS_CLASS_NAMES = {
  panel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-6 rounded-[2rem] border border-slate-300/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8',
  header:
    'flex flex-col gap-3 border-b border-slate-300/10 pb-5 sm:flex-row sm:items-end sm:justify-between',
  status: 'text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-300',
  title:
    'mt-2 text-3xl font-black leading-none tracking-[-0.05em] text-slate-50 sm:text-5xl',
  summary: 'text-sm font-bold leading-6 text-slate-400',
  grid: 'grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5',
  state:
    'grid min-h-80 place-items-center rounded-[1.75rem] border border-slate-300/10 bg-slate-900/60 p-8 text-center',
  errorState:
    'grid min-h-80 place-items-center rounded-[1.75rem] border border-red-300/20 bg-red-300/10 p-8 text-center',
  stateTitle: 'text-2xl font-black leading-tight tracking-tight text-slate-50',
  stateText: 'mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-300',
  footer: 'flex justify-center border-t border-slate-300/10 pt-5',
  pagination: 'flex items-center gap-3',
  paginationLink:
    'rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-black text-emerald-200 transition hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300',
  paginationText: 'text-sm font-black text-slate-300',
} as const;
