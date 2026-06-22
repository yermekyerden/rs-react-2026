export const CHARACTER_RESULTS_CLASS_NAMES = {
  panel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-6 rounded-[2rem] border border-slate-300/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8',
  header:
    'flex flex-col gap-4 border-b border-slate-300/10 pb-5 lg:flex-row lg:items-end lg:justify-between',
  headerCopy: 'min-w-0',
  headerActions: 'flex flex-col gap-3 sm:flex-row sm:items-center',
  status: 'text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-300',
  title:
    'mt-2 text-3xl font-black leading-none tracking-[-0.05em] text-slate-50 sm:text-5xl',
  summary: 'text-sm font-bold leading-6 text-slate-400',
  grid: 'grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5',
  gridItem: 'h-full',
  state:
    'grid min-h-80 place-items-center rounded-[1.75rem] border border-slate-300/10 bg-slate-900/60 p-8 text-center',
  errorState:
    'grid min-h-80 place-items-center rounded-[1.75rem] border border-red-300/20 bg-red-300/10 p-8 text-center',
  stateTitle: 'text-2xl font-black leading-tight tracking-tight text-slate-50',
  stateText: 'mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-300',

  footer:
    'sticky bottom-4 z-10 mt-2 flex flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-slate-300/10 bg-slate-950/85 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl',

  pagination: 'flex items-center gap-3',
  paginationLink:
    'min-w-24 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-center text-sm font-black text-emerald-200 transition hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300',
  paginationLinkDisabled:
    'pointer-events-none min-w-24 rounded-2xl border border-slate-300/10 bg-slate-900/50 px-4 py-2 text-center text-sm font-black text-slate-500 opacity-55',
  paginationText: 'min-w-28 text-center text-sm font-black text-slate-300',

  selectedPanel:
    'grid w-full gap-3 rounded-2xl border border-emerald-300/20 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.12),transparent_14rem),rgba(2,6,23,0.72)] p-3 shadow-[0_0_24px_rgba(52,211,153,0.06)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center',
  selectedKicker:
    'text-[0.68rem] font-black uppercase tracking-[0.16em] text-emerald-300',
  selectedSummary:
    'mt-1 text-base font-black leading-tight tracking-tight text-slate-50',
  selectedDescription:
    'mt-1 max-w-xl text-xs font-semibold leading-5 text-slate-400 max-sm:hidden',
  selectedActions: 'flex flex-col gap-2 sm:flex-row sm:items-center',
  clearSelectionLink:
    'inline-flex min-h-10 items-center justify-center rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 text-sm font-black text-slate-200 transition hover:border-slate-100/40 hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-slate-300',
  exportLink:
    'inline-flex min-h-10 items-center justify-center rounded-xl border border-emerald-300/40 bg-emerald-300/15 px-4 text-sm font-black text-emerald-200 transition hover:border-emerald-200/70 hover:bg-emerald-300/25 focus:outline-none focus:ring-2 focus:ring-emerald-300',
} as const;
