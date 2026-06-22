export const NOT_FOUND_CONTENT_CLASS_NAMES = {
  main: 'grid min-h-[calc(100vh-4rem)] place-items-center px-4 py-12 sm:px-6 lg:px-12',
  panel:
    'grid w-full max-w-6xl items-center gap-8 rounded-[2rem] border border-red-300/20 bg-[var(--app-panel-bg)] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:p-12',
  copy: 'min-w-0',
  kicker: 'mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-red-300',
  code: 'font-[family-name:var(--font-app-display)] text-8xl font-black leading-none tracking-[-0.08em] text-red-300 sm:text-9xl',
  title:
    'mt-4 max-w-2xl font-[family-name:var(--font-app-display)] text-4xl font-black leading-none tracking-[-0.06em] text-[var(--app-text-primary)] sm:text-6xl',
  description:
    'mt-5 max-w-2xl text-base font-semibold leading-7 text-[var(--app-text-secondary)] sm:text-lg',
  link: 'mt-8 inline-flex rounded-full border border-[color:var(--app-border-accent)] bg-[var(--app-accent-soft)] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[var(--app-accent)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
  visual:
    'grid min-h-80 place-items-center rounded-[2rem] border border-red-300/20 bg-red-300/10',
  orb: 'size-32 rounded-[2rem] border border-red-300/30 bg-red-300/20 shadow-[0_0_56px_rgba(248,113,113,0.22)]',
} as const;
