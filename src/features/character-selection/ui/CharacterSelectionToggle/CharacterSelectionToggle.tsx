import { Link } from '@/i18n/navigation';
import { cn } from '@/shared/lib/cn';
import { CHARACTER_SELECTION_TOGGLE_SYMBOL } from './CharacterSelectionToggle.constants';
import { CHARACTER_SELECTION_TOGGLE_CLASS_NAMES } from './CharacterSelectionToggle.styles';

export interface CharacterSelectionToggleProps {
  href: string;
  isSelected: boolean;
  selectedLabel: string;
  unselectedLabel: string;
}

export default function CharacterSelectionToggle({
  href,
  isSelected,
  selectedLabel,
  unselectedLabel,
}: CharacterSelectionToggleProps) {
  const className = cn(
    CHARACTER_SELECTION_TOGGLE_CLASS_NAMES.link,
    isSelected
      ? CHARACTER_SELECTION_TOGGLE_CLASS_NAMES.selected
      : CHARACTER_SELECTION_TOGGLE_CLASS_NAMES.idle
  );

  return (
    <Link
      className={className}
      href={href}
      scroll={false}
      aria-label={isSelected ? selectedLabel : unselectedLabel}
    >
      <span aria-hidden="true">
        {isSelected
          ? CHARACTER_SELECTION_TOGGLE_SYMBOL.selected
          : CHARACTER_SELECTION_TOGGLE_SYMBOL.idle}
      </span>
    </Link>
  );
}
