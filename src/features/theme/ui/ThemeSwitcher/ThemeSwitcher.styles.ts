import { APP_THEME } from '../../model/theme.constants';
import type { AppTheme } from '../../model/theme.types';

export const THEME_SWITCHER_CLASS_NAMES = {
  form: 'contents',
  button:
    'group relative inline-grid min-h-10 grid-cols-[auto_auto] items-center gap-2 rounded-full border px-2 py-1 text-sm font-black uppercase tracking-[0.12em] transition focus:outline-none focus:ring-2',
  label: 'sr-only',
  track: 'relative h-7 w-14 overflow-hidden rounded-full border transition',
  thumb:
    'absolute top-1/2 size-5 -translate-y-1/2 rounded-full border transition-all duration-300',
  text: 'hidden pr-2 sm:inline',
} as const;

export const THEME_SWITCHER_BUTTON_CLASS_NAMES: Record<AppTheme, string> = {
  [APP_THEME.dark]:
    'border-emerald-300/30 bg-slate-950/80 text-emerald-200 shadow-[0_0_24px_rgba(52,211,153,0.12)] hover:border-emerald-200/60 hover:bg-emerald-300/10 focus:ring-emerald-300',
  [APP_THEME.light]:
    'border-cyan-500/30 bg-white/85 text-cyan-950 shadow-[0_0_24px_rgba(34,211,238,0.18)] hover:border-cyan-500/70 hover:bg-white focus:ring-cyan-400',
};

export const THEME_SWITCHER_TRACK_CLASS_NAMES: Record<AppTheme, string> = {
  [APP_THEME.dark]:
    'border-emerald-300/30 bg-[radial-gradient(circle_at_28%_50%,rgba(52,211,153,0.32),transparent_34%),#020617]',
  [APP_THEME.light]:
    'border-cyan-500/30 bg-[radial-gradient(circle_at_72%_50%,rgba(34,211,238,0.34),transparent_34%),#e0f2fe]',
};

export const THEME_SWITCHER_THUMB_CLASS_NAMES: Record<AppTheme, string> = {
  [APP_THEME.dark]:
    'left-1 border-emerald-200/70 bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.48)]',
  [APP_THEME.light]:
    'left-8 border-cyan-300/70 bg-cyan-500 shadow-[0_0_18px_rgba(34,211,238,0.48)]',
};
