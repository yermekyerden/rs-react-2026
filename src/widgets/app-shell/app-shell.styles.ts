export const APP_SHELL_CLASS_NAMES = {
  body: 'min-h-screen font-[family-name:var(--font-app-text)] antialiased selection:bg-emerald-300/30',
  bodyThemeDark: 'bg-slate-950 text-slate-100',
  bodyThemeLight: 'bg-slate-100 text-slate-950',
  shell:
    'min-h-screen bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.14),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(135deg,#06111f_0%,#0f172a_52%,#111827_100%)]',
  shellThemeLight:
    'bg-[radial-gradient(circle_at_12%_8%,rgba(16,185,129,0.12),transparent_30%),radial-gradient(circle_at_88%_4%,rgba(34,211,238,0.16),transparent_28%),linear-gradient(135deg,#ecfeff_0%,#f8fafc_48%,#ecfdf5_100%)]',
  header:
    'sticky top-0 z-20 border-b border-slate-300/10 bg-slate-950/80 backdrop-blur-xl',
  headerThemeLight: 'border-slate-900/10 bg-white/80',
  headerInner:
    'mx-auto grid w-full max-w-[1760px] grid-cols-[minmax(180px,1fr)_auto_minmax(180px,1fr)] items-center gap-4 px-4 py-3 sm:px-6 lg:px-12 max-md:grid-cols-[1fr_auto]',
  brand:
    'justify-self-start rounded-full px-3 py-2 font-[family-name:var(--font-app-display)] text-sm font-black uppercase tracking-[0.18em] text-emerald-300 transition hover:bg-emerald-300/10 focus:outline-none focus:ring-2 focus:ring-emerald-300',
  brandThemeLight:
    'text-emerald-700 hover:bg-emerald-500/10 focus:ring-emerald-600',
  navigation:
    'flex items-center gap-1 justify-self-center rounded-full border border-slate-300/10 bg-slate-950/70 p-1 max-md:col-span-2 max-md:w-full',
  navigationThemeLight: 'border-slate-900/10 bg-white/80',
  navigationLink:
    'rounded-full px-4 py-2 font-[family-name:var(--font-app-display)] text-sm font-extrabold text-slate-300 transition hover:bg-emerald-300/10 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 max-md:flex-1 max-md:text-center',
  navigationLinkThemeLight:
    'text-slate-700 hover:bg-emerald-500/10 hover:text-emerald-700 focus:ring-emerald-600',
  actions: 'flex items-center justify-self-end gap-2',
} as const;
