export const LANGUAGE_SWITCHER_CLASS_NAMES = {
  root: 'flex items-center gap-1 rounded-full border border-[color:var(--app-border-subtle)] bg-[var(--app-control-bg)] p-1',
  link: 'rounded-full px-3 py-1.5 text-sm font-black uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
  active:
    'bg-[var(--app-accent)] text-[var(--app-text-inverse)] shadow-[0_0_18px_rgba(52,211,153,0.24)]',
  idle: 'text-[var(--app-text-muted)] hover:bg-[var(--app-accent-soft)] hover:text-[var(--app-accent)]',
} as const;
