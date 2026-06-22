import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { cn } from '@/shared/lib/cn';
import { createCharacterSearchHref } from '@/features/character-search/model/character-search-params.builders';
import type { CharacterSearchParams } from '@/features/character-search/model/character-search-params.types';
import type { CharacterDetailsState } from '@/features/character-details/model/character-details-results.types';
import { appendSelectedCharactersToHref } from '@/features/character-selection/model/character-selection.builders';
import { getTranslations } from 'next-intl/server';
import {
  CHARACTER_DETAILS_DATE,
  CHARACTER_DETAILS_IMAGE,
  CHARACTER_DETAILS_PANEL,
} from './CharacterDetailsPanel.constants';
import {
  CHARACTER_DETAILS_PANEL_CLASS_NAMES,
  CHARACTER_DETAILS_STATUS_CLASS_NAMES,
} from './CharacterDetailsPanel.styles';

export interface CharacterDetailsPanelProps {
  searchParams: CharacterSearchParams;
  selectedCharacterIds: number[];
  state: CharacterDetailsState;
}

export default async function CharacterDetailsPanel({
  searchParams,
  selectedCharacterIds,
  state,
}: CharacterDetailsPanelProps) {
  const t = await getTranslations('CharacterDetailsPanel');

  if (state.status === 'idle') {
    return null;
  }

  const closeHref = createCloseDetailsHref({
    searchParams,
    selectedCharacterIds,
  });

  if (state.status === 'failed') {
    return (
      <section className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.failedPanel}>
        <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.header}>
          <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.eyebrow}>
            {t('failedEyebrow')}
          </p>

          <Link
            className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.closeLink}
            href={closeHref}
          >
            {t('closeLink')}
          </Link>
        </div>

        <h2 className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.failedTitle}>
          {t('failedTitle')}
        </h2>

        <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.failedText}>
          {state.errorMessage}
        </p>
      </section>
    );
  }

  const { characterDetails } = state;
  const statusBadgeClassName = cn(
    CHARACTER_DETAILS_PANEL_CLASS_NAMES.statusBadge,
    CHARACTER_DETAILS_STATUS_CLASS_NAMES[characterDetails.status]
  );

  return (
    <section
      className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.panel}
      aria-labelledby={CHARACTER_DETAILS_PANEL.titleId}
    >
      <header className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.header}>
        <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.eyebrow}>
          {t('eyebrow')}
        </p>

        <Link
          className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.closeLink}
          href={closeHref}
        >
          {t('closeLink')}
        </Link>
      </header>

      <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.body}>
        <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.imageFrame}>
          <Image
            className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.image}
            src={characterDetails.imageUrl}
            alt={characterDetails.name}
            fill={CHARACTER_DETAILS_IMAGE.fill}
            sizes={CHARACTER_DETAILS_IMAGE.sizes}
            loading={CHARACTER_DETAILS_IMAGE.loading}
          />

          <span className={statusBadgeClassName}>
            {characterDetails.status}
          </span>
        </div>

        <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.content}>
          <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.titleBlock}>
            <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.subjectLabel}>
              {t('subjectLabel')}
            </p>

            <h2
              className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.title}
              id={CHARACTER_DETAILS_PANEL.titleId}
            >
              {characterDetails.name}
            </h2>

            <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.subtitle}>
              {t('subtitle', {
                characterName: characterDetails.name,
                locationName: characterDetails.locationName,
              })}
            </p>
          </div>

          <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.chips}>
            <span className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.chip}>
              {characterDetails.species}
            </span>

            <span className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.chip}>
              {characterDetails.gender}
            </span>

            <span className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.chip}>
              {characterDetails.type}
            </span>
          </div>

          <dl className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.metaGrid}>
            <CharacterDetailsMetaItem
              label={t('originLabel')}
              value={characterDetails.originName}
            />

            <CharacterDetailsMetaItem
              label={t('locationLabel')}
              value={characterDetails.locationName}
            />

            <CharacterDetailsMetaItem
              label={t('episodesLabel')}
              value={t('episodesValue', {
                episodeCount: characterDetails.episodeCount,
              })}
            />

            <CharacterDetailsMetaItem
              label={t('createdLabel')}
              value={formatCharacterCreatedAt(characterDetails.createdAt)}
            />
          </dl>
        </div>
      </div>
    </section>
  );
}

interface CharacterDetailsMetaItemProps {
  label: string;
  value: string;
}

interface CreateCloseDetailsHrefOptions {
  searchParams: CharacterSearchParams;
  selectedCharacterIds: number[];
}

function CharacterDetailsMetaItem({
  label,
  value,
}: CharacterDetailsMetaItemProps) {
  return (
    <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.metaCard}>
      <dt className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.metaLabel}>{label}</dt>

      <dd className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.metaValue}>{value}</dd>
    </div>
  );
}

function createCloseDetailsHref({
  searchParams,
  selectedCharacterIds,
}: CreateCloseDetailsHrefOptions): string {
  const baseHref = createCharacterSearchHref({
    page: searchParams.page,
    searchTerm: searchParams.searchTerm,
  });

  return appendSelectedCharactersToHref({
    href: baseHref,
    selectedCharacterIds,
  });
}

function formatCharacterCreatedAt(createdAt: string): string {
  return createdAt.slice(0, CHARACTER_DETAILS_DATE.isoDateLength);
}
