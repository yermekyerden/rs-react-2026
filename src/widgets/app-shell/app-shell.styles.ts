export const APP_SHELL_CLASS_NAMES = {
  body: 'min-h-screen bg-[var(--app-body-bg)] font-[family-name:var(--font-app-text)] text-[var(--app-text-primary)] antialiased selection:bg-emerald-300/30',
  shell: 'min-h-screen [background:var(--app-shell-bg)]',
  header:
    'sticky top-0 z-20 border-b border-[color:var(--app-border-subtle)] bg-[var(--app-header-bg)] backdrop-blur-xl',
  headerInner:
    'mx-auto grid w-full max-w-[1760px] grid-cols-[minmax(180px,1fr)_auto_minmax(180px,1fr)] items-center gap-4 px-4 py-3 sm:px-6 lg:px-12 max-md:grid-cols-[1fr_auto]',
  brand:
    'justify-self-start rounded-full px-3 py-2 font-[family-name:var(--font-app-display)] text-base font-black uppercase tracking-[0.18em] text-[var(--app-accent)] transition hover:bg-[var(--app-accent-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
  navigation:
    'flex items-center gap-1 justify-self-center rounded-full border border-[color:var(--app-border-subtle)] bg-[var(--app-control-bg)] p-1 max-md:col-span-2 max-md:w-full',
  navigationLink:
    'rounded-full px-4 py-2 font-[family-name:var(--font-app-display)] text-sm font-extrabold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-accent-soft)] hover:text-[var(--app-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)] max-md:flex-1 max-md:text-center',
  actions: 'flex items-center justify-self-end gap-2',
} as const;
