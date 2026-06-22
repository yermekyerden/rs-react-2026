import type { CharacterStatus } from '@/entities/character';
import { Link } from '@/i18n/navigation';
import { cn } from '@/shared/lib/cn';
import { CHARACTER_SELECTION_TOGGLE_SYMBOL } from './CharacterSelectionToggle.constants';
import {
  CHARACTER_SELECTION_TOGGLE_CLASS_NAMES,
  CHARACTER_SELECTION_TOGGLE_IDLE_CLASS_NAMES,
  CHARACTER_SELECTION_TOGGLE_MARKER_IDLE_CLASS_NAMES,
  CHARACTER_SELECTION_TOGGLE_MARKER_SELECTED_CLASS_NAMES,
  CHARACTER_SELECTION_TOGGLE_SELECTED_CLASS_NAMES,
} from './CharacterSelectionToggle.styles';

export interface CharacterSelectionToggleProps {
  href: string;
  isSelected: boolean;
  selectedLabel: string;
  status: CharacterStatus;
  unselectedLabel: string;
}

export default function CharacterSelectionToggle({
  href,
  isSelected,
  selectedLabel,
  status,
  unselectedLabel,
}: CharacterSelectionToggleProps) {
  const className = cn(
    CHARACTER_SELECTION_TOGGLE_CLASS_NAMES.link,
    isSelected
      ? CHARACTER_SELECTION_TOGGLE_SELECTED_CLASS_NAMES[status]
      : CHARACTER_SELECTION_TOGGLE_IDLE_CLASS_NAMES[status]
  );
  const markerClassName = cn(
    CHARACTER_SELECTION_TOGGLE_CLASS_NAMES.marker,
    isSelected
      ? CHARACTER_SELECTION_TOGGLE_MARKER_SELECTED_CLASS_NAMES[status]
      : CHARACTER_SELECTION_TOGGLE_MARKER_IDLE_CLASS_NAMES[status]
  );

  return (
    <Link
      className={className}
      href={href}
      scroll={false}
      aria-label={isSelected ? selectedLabel : unselectedLabel}
    >
      <span className={markerClassName} aria-hidden="true">
        {isSelected ? CHARACTER_SELECTION_TOGGLE_SYMBOL.selected : null}
      </span>
    </Link>
  );
}
