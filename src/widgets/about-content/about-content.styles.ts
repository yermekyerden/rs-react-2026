export const ABOUT_CONTENT_CLASS_NAMES = {
  main: 'px-4 py-12 sm:px-6 lg:px-12 lg:py-16',
  panel:
    'mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-panel-bg)] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8 lg:p-12',
  hero: 'grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]',
  kicker:
    'mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--app-accent)]',
  title:
    'font-[family-name:var(--font-app-display)] text-4xl font-black leading-none tracking-[-0.06em] text-[var(--app-text-primary)] sm:text-6xl',
  lead: 'mt-5 max-w-3xl text-base font-semibold leading-7 text-[var(--app-text-secondary)] sm:text-lg',
  cardGrid: 'grid gap-4 md:grid-cols-2',
  card: 'rounded-3xl border border-[color:var(--app-border-subtle)] bg-[var(--app-control-bg)] p-6',
  cardTitle:
    'mt-2 font-[family-name:var(--font-app-display)] text-2xl font-black tracking-tight text-[var(--app-text-primary)]',
  cardText:
    'mt-3 text-sm font-semibold leading-7 text-[var(--app-text-secondary)]',
  portalCard:
    'grid min-h-64 place-items-center rounded-3xl border border-[color:var(--app-border-accent)] bg-[var(--app-accent-soft)] p-8',
  portalOrb:
    'size-32 rounded-[2rem] border border-[color:var(--app-border-accent)] bg-[var(--app-accent-soft)] shadow-[0_0_48px_rgba(52,211,153,0.18)]',
} as const;
