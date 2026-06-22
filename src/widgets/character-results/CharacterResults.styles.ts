export const CHARACTER_RESULTS_CLASS_NAMES = {
  panel:
    'mx-auto mt-10 grid w-full max-w-[1760px] gap-6 rounded-[2rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-panel-bg)] p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-6 lg:p-8',
  header:
    'flex flex-col gap-4 border-b border-[color:var(--app-border-subtle)] pb-5 lg:flex-row lg:items-end lg:justify-between',
  headerCopy: 'min-w-0',
  headerActions: 'flex flex-col gap-3 sm:flex-row sm:items-center',
  status:
    'text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--app-accent)]',
  title:
    'mt-2 font-[family-name:var(--font-app-display)] text-3xl font-black leading-none tracking-[-0.05em] text-[var(--app-text-primary)] sm:text-5xl',
  summary: 'text-base font-bold leading-6 text-[var(--app-text-muted)]',
  grid: 'grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5',
  gridItem: 'h-full',
  state:
    'grid min-h-80 place-items-center rounded-[1.75rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-card-inner-bg)] p-8 text-center',
  errorState:
    'grid min-h-80 place-items-center rounded-[1.75rem] border border-red-300/20 bg-red-300/10 p-8 text-center',
  stateTitle:
    'font-[family-name:var(--font-app-display)] text-2xl font-black leading-tight tracking-tight text-[var(--app-text-primary)]',
  stateText:
    'mt-3 max-w-2xl text-base font-semibold leading-7 text-[var(--app-text-secondary)]',

  footer:
    'sticky bottom-4 z-10 mt-2 flex flex-col items-center justify-center gap-3 rounded-[1.5rem] border border-[color:var(--app-border-subtle)] bg-[var(--app-footer-bg)] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl',

  pagination: 'flex items-center gap-3',
  paginationLink:
    'min-w-24 rounded-2xl border border-[color:var(--app-border-accent)] bg-[var(--app-accent-soft)] px-4 py-2 text-center text-base font-black text-[var(--app-accent)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
  paginationLinkDisabled:
    'pointer-events-none min-w-24 rounded-2xl border border-[color:var(--app-border-subtle)] bg-[var(--app-control-bg)] px-4 py-2 text-center text-base font-black text-[var(--app-text-muted)] opacity-55',
  paginationText:
    'min-w-28 text-center text-base font-black text-[var(--app-text-secondary)]',

  selectedPanel:
    'grid w-full gap-3 rounded-2xl border border-[color:var(--app-border-accent)] bg-[image:var(--app-selected-bg)] p-4 shadow-[0_0_20px_rgb(34_197_94/0.045)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center',
  selectedKicker:
    'text-xs font-black uppercase tracking-[0.16em] text-[var(--app-accent)]',
  selectedSummary:
    'mt-1 font-[family-name:var(--font-app-display)] text-lg font-black leading-tight tracking-tight text-[var(--app-text-primary)]',
  selectedDescription:
    'mt-1 max-w-2xl text-sm font-semibold leading-6 text-[var(--app-text-muted)] max-sm:hidden',
  selectedActions: 'flex flex-col gap-2 sm:flex-row sm:items-center',
  clearSelectionLink:
    'inline-flex min-h-11 items-center justify-center rounded-xl border border-[color:var(--app-border-control)] bg-[var(--app-control-bg)] px-4 text-sm font-black text-[var(--app-text-secondary)] transition hover:bg-[var(--app-accent-soft)] hover:text-[var(--app-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
  exportLink:
    'inline-flex min-h-11 items-center justify-center rounded-xl border border-[color:var(--app-border-accent)] bg-[var(--app-accent-soft)] px-4 text-sm font-black text-[var(--app-accent)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[var(--app-accent)]',
} as const;
