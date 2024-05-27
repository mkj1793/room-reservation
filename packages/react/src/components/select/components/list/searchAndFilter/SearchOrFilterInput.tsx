import React from 'react';

import styles from '../../../Select.module.scss';
import { TextInput, TextInputProps } from '../../../../textInput/TextInput';
import { SelectDataHandlers, SelectMetaData } from '../../../types';
import classNames from '../../../../../utils/classNames';
import { createInputOnChangeListener, getVisibleGroupLabels } from '../../../utils';
import { eventIds } from '../../../events';
import { useSelectDataHandlers } from '../../../hooks/useSelectDataHandlers';

const createFilterInputProps = (
  { getMetaData, trigger, getData }: SelectDataHandlers,
  inputType: Exclude<SelectMetaData['listInputType'], undefined>,
): TextInputProps => {
  const { filter, elementIds, refs, search, activeDescendant } = getMetaData();
  const { multiSelect, groups } = getData();
  const hasVisibleGroupLabels = getVisibleGroupLabels(groups).length > 0;
  const isSearchInput = inputType === 'search';
  const value = isSearchInput ? search : filter;
  return {
    className: classNames(styles.searchOrFilterInput),
    ...createInputOnChangeListener({ id: eventIds[inputType], trigger }),
    onButtonClick: (e) => {
      e.preventDefault();
    },
    id: elementIds.searchOrFilterInput,
    key: elementIds.searchOrFilterInput,
    clearButtonAriaLabel: `Clear ${inputType}`,
    label: isSearchInput ? 'Search' : 'Filter',
    value,
    placeholder: isSearchInput ? 'Type a search term' : 'Type text to filter results with',
    ref: refs.searchOrFilterInput,
    'aria-controls': elementIds.list,
    'aria-expanded': true,
    'aria-activedescendant': activeDescendant || '',
    'aria-labelledby': `${elementIds.searchOrFilterInputLabel} ${elementIds.label}`,
    'aria-haspopup': multiSelect && hasVisibleGroupLabels ? 'dialog' : 'listbox',
    role: 'combobox',
    labelId: elementIds.searchOrFilterInputLabel,
    clearButton: true,
  };
};

export function SearchOrFilterInput() {
  const dataHandlers = useSelectDataHandlers();
  const { getMetaData } = dataHandlers;
  const { listInputType } = getMetaData();
  if (!listInputType) {
    return null;
  }
  const inputProps = createFilterInputProps(dataHandlers, listInputType);
  return <TextInput {...inputProps} />;
}
