import { CHARACTER_SEARCH_PARAM } from '../../model/character-search-params.constants';
import { searchCharacters } from '../../actions/searchCharacters';
import { CHARACTER_SEARCH_FORM_CLASS_NAMES } from './CharacterSearchForm.styles';

export interface CharacterSearchFormProps {
  initialSearchTerm: string;
  inputHint: string;
  inputLabel: string;
  inputPlaceholder: string;
  locale: string;
  submitButtonLabel: string;
}

export default function CharacterSearchForm({
  initialSearchTerm,
  inputHint,
  inputLabel,
  inputPlaceholder,
  locale,
  submitButtonLabel,
}: CharacterSearchFormProps) {
  const searchAction = searchCharacters.bind(null, locale);

  return (
    <form
      className={CHARACTER_SEARCH_FORM_CLASS_NAMES.form}
      action={searchAction}
    >
      <div className={CHARACTER_SEARCH_FORM_CLASS_NAMES.fieldGroup}>
        <label
          className={CHARACTER_SEARCH_FORM_CLASS_NAMES.label}
          htmlFor={CHARACTER_SEARCH_PARAM.search}
        >
          {inputLabel}
        </label>

        <input
          className={CHARACTER_SEARCH_FORM_CLASS_NAMES.input}
          id={CHARACTER_SEARCH_PARAM.search}
          name={CHARACTER_SEARCH_PARAM.search}
          type="search"
          defaultValue={initialSearchTerm}
          placeholder={inputPlaceholder}
        />
      </div>

      <button
        className={CHARACTER_SEARCH_FORM_CLASS_NAMES.button}
        type="submit"
      >
        {submitButtonLabel}
      </button>

      <p className={CHARACTER_SEARCH_FORM_CLASS_NAMES.hint}>{inputHint}</p>
    </form>
  );
}
