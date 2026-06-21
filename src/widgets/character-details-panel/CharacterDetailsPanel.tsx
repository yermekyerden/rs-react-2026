import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { createCharacterSearchHref } from '@/features/character-search/model/character-search-params.builders';
import type { CharacterSearchParams } from '@/features/character-search/model/character-search-params.types';
import type { CharacterDetailsState } from '@/features/character-details/model/character-details-results.types';
import { getTranslations } from 'next-intl/server';
import {
  CHARACTER_DETAILS_IMAGE,
  CHARACTER_DETAILS_PANEL,
} from './CharacterDetailsPanel.constants';
import { CHARACTER_DETAILS_PANEL_CLASS_NAMES } from './CharacterDetailsPanel.styles';

export interface CharacterDetailsPanelProps {
  searchParams: CharacterSearchParams;
  state: CharacterDetailsState;
}

export default async function CharacterDetailsPanel({
  searchParams,
  state,
}: CharacterDetailsPanelProps) {
  const t = await getTranslations('CharacterDetailsPanel');

  if (state.status === 'idle') {
    return null;
  }

  const closeHref = createCharacterSearchHref({
    page: searchParams.page,
    searchTerm: searchParams.searchTerm,
  });

  if (state.status === 'failed') {
    return (
      <section className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.failedPanel}>
        <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.eyebrow}>
          {t('failedEyebrow')}
        </p>

        <h2 className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.failedTitle}>
          {t('failedTitle')}
        </h2>

        <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.failedText}>
          {state.errorMessage}
        </p>

        <Link
          className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.closeLink}
          href={closeHref}
        >
          {t('closeLink')}
        </Link>
      </section>
    );
  }

  const { characterDetails } = state;

  return (
    <section
      className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.panel}
      aria-labelledby={CHARACTER_DETAILS_PANEL.titleId}
    >
      <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.imageFrame}>
        <Image
          className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.image}
          src={characterDetails.imageUrl}
          alt={characterDetails.name}
          width={CHARACTER_DETAILS_IMAGE.width}
          height={CHARACTER_DETAILS_IMAGE.height}
          sizes={CHARACTER_DETAILS_IMAGE.sizes}
          loading={CHARACTER_DETAILS_IMAGE.loading}
        />
      </div>

      <div className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.content}>
        <div>
          <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.eyebrow}>
            {t('eyebrow')}
          </p>

          <h2
            className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.title}
            id={CHARACTER_DETAILS_PANEL.titleId}
          >
            {characterDetails.name}
          </h2>
        </div>

        <p className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.statusBadge}>
          {characterDetails.status}
        </p>

        <dl className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.metaGrid}>
          <CharacterDetailsMetaItem
            label={t('speciesLabel')}
            value={characterDetails.species}
          />

          <CharacterDetailsMetaItem
            label={t('typeLabel')}
            value={characterDetails.type}
          />

          <CharacterDetailsMetaItem
            label={t('genderLabel')}
            value={characterDetails.gender}
          />

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
        </dl>

        <Link
          className={CHARACTER_DETAILS_PANEL_CLASS_NAMES.closeLink}
          href={closeHref}
        >
          {t('closeLink')}
        </Link>
      </div>
    </section>
  );
}

interface CharacterDetailsMetaItemProps {
  label: string;
  value: string;
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
