export const CHARACTER_SEARCH_FORM_CLASS_NAMES = {
  form: 'mx-auto mt-8 grid max-w-3xl gap-3 rounded-[2rem] border border-slate-300/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:grid-cols-[minmax(0,1fr)_auto] sm:p-5',
  fieldGroup: 'grid gap-2',
  label:
    'px-2 text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-300',
  input:
    'min-h-12 rounded-2xl border border-slate-300/10 bg-slate-900/80 px-4 text-base font-bold text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-emerald-300/60 focus:ring-4 focus:ring-emerald-300/10',
  button:
    'min-h-12 rounded-2xl bg-emerald-300 px-6 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:bg-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-300/20 sm:self-end',
  hint: 'px-2 text-sm font-semibold leading-6 text-slate-400 sm:col-span-2',
} as const;
