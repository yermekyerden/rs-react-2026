export const CHARACTER_SEARCH_FORM_CLASS_NAMES = {
  form: 'mx-auto mt-8 grid max-w-3xl gap-3 rounded-[2rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-panel-bg)] p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:grid-cols-[minmax(0,1fr)_auto] sm:p-5',
  fieldGroup: 'grid gap-2',
  label:
    'px-2 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--app-accent)]',
  input:
    'min-h-12 rounded-2xl border border-[color:var(--app-border-control)] bg-[var(--app-input-bg)] px-4 text-base font-bold text-[var(--app-text-primary)] outline-none transition placeholder:text-[var(--app-text-muted)] focus:border-[color:var(--app-border-accent)] focus:ring-4 focus:ring-emerald-300/10',
  button:
    'min-h-12 rounded-2xl bg-[var(--app-accent)] px-6 text-sm font-black uppercase tracking-[0.12em] text-[var(--app-text-inverse)] transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-300/20 sm:self-end',
  hint: 'px-2 text-sm font-semibold leading-6 text-[var(--app-text-muted)] sm:col-span-2',
} as const;
