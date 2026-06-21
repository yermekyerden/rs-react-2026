import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cn } from '@/shared/lib/cn';
import type { CharacterCardModel } from '../../model/character.types';
import { CHARACTER_CARD_IMAGE } from './CharacterCard.constants';
import {
  CHARACTER_CARD_BADGE_CLASS_NAMES,
  CHARACTER_CARD_CLASS_NAMES,
  CHARACTER_CARD_STATUS_CLASS_NAMES,
} from './CharacterCard.styles';

export interface CharacterCardCopy {
  cardAriaLabel: string;
  genderLabel: string;
  locationLabel: string;
  openDetailsLabel: string;
  openDetailsText: string;
  speciesLabel: string;
}

export interface CharacterCardProps {
  character: CharacterCardModel;
  copy: CharacterCardCopy;
  detailsHref: string;
  isPriorityImage?: boolean;
}

export default function CharacterCard({
  character,
  copy,
  detailsHref,
  isPriorityImage = false,
}: CharacterCardProps) {
  const cardClassName = cn(
    CHARACTER_CARD_CLASS_NAMES.card,
    CHARACTER_CARD_STATUS_CLASS_NAMES[character.status]
  );
  const badgeClassName = cn(
    CHARACTER_CARD_CLASS_NAMES.statusBadge,
    CHARACTER_CARD_BADGE_CLASS_NAMES[character.status]
  );

  return (
    <article className={cardClassName} aria-label={copy.cardAriaLabel}>
      <div className={CHARACTER_CARD_CLASS_NAMES.imageFrame}>
        <Image
          className={CHARACTER_CARD_CLASS_NAMES.image}
          src={character.imageUrl}
          alt={character.name}
          width={CHARACTER_CARD_IMAGE.width}
          height={CHARACTER_CARD_IMAGE.height}
          sizes={CHARACTER_CARD_IMAGE.sizes}
          loading={
            isPriorityImage
              ? CHARACTER_CARD_IMAGE.loading.priority
              : CHARACTER_CARD_IMAGE.loading.regular
          }
        />

        <span className={badgeClassName}>{character.status}</span>
      </div>

      <div className={CHARACTER_CARD_CLASS_NAMES.content}>
        <h3 className={CHARACTER_CARD_CLASS_NAMES.name}>{character.name}</h3>

        <dl className={CHARACTER_CARD_CLASS_NAMES.metaList}>
          <div className={CHARACTER_CARD_CLASS_NAMES.metaRow}>
            <dt className={CHARACTER_CARD_CLASS_NAMES.metaLabel}>
              {copy.speciesLabel}
            </dt>
            <dd className={CHARACTER_CARD_CLASS_NAMES.metaValue}>
              {character.species}
            </dd>
          </div>

          <div className={CHARACTER_CARD_CLASS_NAMES.metaRow}>
            <dt className={CHARACTER_CARD_CLASS_NAMES.metaLabel}>
              {copy.genderLabel}
            </dt>
            <dd className={CHARACTER_CARD_CLASS_NAMES.metaValue}>
              {character.gender}
            </dd>
          </div>

          <div className={CHARACTER_CARD_CLASS_NAMES.metaRow}>
            <dt className={CHARACTER_CARD_CLASS_NAMES.metaLabel}>
              {copy.locationLabel}
            </dt>
            <dd className={CHARACTER_CARD_CLASS_NAMES.metaValue}>
              {character.locationName}
            </dd>
          </div>
        </dl>

        <Link
          className={CHARACTER_CARD_CLASS_NAMES.detailsLink}
          href={detailsHref}
          aria-label={copy.openDetailsLabel}
        >
          {copy.openDetailsText}
        </Link>
      </div>
    </article>
  );
}
