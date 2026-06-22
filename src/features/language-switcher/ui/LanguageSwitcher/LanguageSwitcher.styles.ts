export const LANGUAGE_SWITCHER_CLASS_NAMES = {
  root: 'flex items-center gap-1 rounded-full border border-slate-300/10 bg-slate-950/70 p-1',
  link: 'rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-emerald-300',
  active:
    'bg-emerald-300 text-slate-950 shadow-[0_0_18px_rgba(52,211,153,0.24)]',
  idle: 'text-slate-400 hover:bg-emerald-300/10 hover:text-emerald-200',
} as const;
