import { cn } from '@/shared/lib/cn';
import { toggleAppTheme } from '../../actions/toggleAppTheme';
import type { AppTheme } from '../../model/theme.types';
import {
  THEME_SWITCHER_BUTTON_CLASS_NAMES,
  THEME_SWITCHER_CLASS_NAMES,
  THEME_SWITCHER_THUMB_CLASS_NAMES,
  THEME_SWITCHER_TRACK_CLASS_NAMES,
} from './ThemeSwitcher.styles';

export interface ThemeSwitcherProps {
  currentTheme: AppTheme;
  label: string;
  themeText: string;
}

export default function ThemeSwitcher({
  currentTheme,
  label,
  themeText,
}: ThemeSwitcherProps) {
  const toggleThemeAction = toggleAppTheme.bind(null, currentTheme);

  return (
    <form
      className={THEME_SWITCHER_CLASS_NAMES.form}
      action={toggleThemeAction}
    >
      <button
        className={cn(
          THEME_SWITCHER_CLASS_NAMES.button,
          THEME_SWITCHER_BUTTON_CLASS_NAMES[currentTheme]
        )}
        type="submit"
      >
        <span className={THEME_SWITCHER_CLASS_NAMES.label}>{label}</span>

        <span
          className={cn(
            THEME_SWITCHER_CLASS_NAMES.track,
            THEME_SWITCHER_TRACK_CLASS_NAMES[currentTheme]
          )}
          aria-hidden="true"
        >
          <span
            className={cn(
              THEME_SWITCHER_CLASS_NAMES.thumb,
              THEME_SWITCHER_THUMB_CLASS_NAMES[currentTheme]
            )}
          />
        </span>

        <span className={THEME_SWITCHER_CLASS_NAMES.text}>{themeText}</span>
      </button>
    </form>
  );
}
