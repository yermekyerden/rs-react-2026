export const NOT_FOUND_CONTENT_CLASS_NAMES = {
  main: 'grid min-h-[calc(100vh-4rem)] place-items-center px-4 py-12 sm:px-6 lg:px-12',
  panel:
    'grid w-full max-w-6xl items-center gap-8 rounded-[2rem] border border-red-300/20 bg-slate-950/75 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:p-12',
  copy: 'min-w-0',
  kicker: 'mb-3 text-sm font-extrabold uppercase tracking-[0.2em] text-red-300',
  code: 'text-8xl font-black leading-none tracking-[-0.08em] text-red-300 sm:text-9xl',
  title:
    'mt-4 max-w-2xl text-4xl font-black leading-none tracking-[-0.06em] text-slate-50 sm:text-6xl',
  description:
    'mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-300 sm:text-lg',
  link: 'mt-8 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-emerald-200 transition hover:bg-emerald-300/20 focus:outline-none focus:ring-2 focus:ring-emerald-300',
  visual:
    'grid min-h-80 place-items-center rounded-[2rem] border border-red-300/20 bg-red-300/10',
  orb: 'size-32 rounded-[2rem] border border-red-300/30 bg-red-300/20 shadow-[0_0_56px_rgba(248,113,113,0.22)]',
} as const;
