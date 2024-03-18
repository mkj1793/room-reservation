import { uniqueId } from 'lodash';
import React, { ReactElement, useMemo, createRef, useEffect } from 'react';

import { SelectProps, SelectMetaData, SelectData } from './types';
import { Container } from './components/Container';
import { Label } from './components/Label';
import { changeChandler } from './dataUpdater';
import { propsToGroups, childrenToGroups, getSelectedOptions } from './utils';
import { DataProvider } from '../dataProvider/DataProvider';
import { SelectedOptionsContainer } from './components/selectedOptions/SelectedOptionsContainer';
import { SelectionsAndListsContainer } from './components/SelectionsAndListsContainer';
import { List } from './components/list/List';
import { ListAndInputContainer } from './components/list/ListAndInputContainer';
import { ErrorNotification } from './components/Error';
import { AssistiveText } from './components/AssistiveText';
import { SearchOrFilterInput } from './components/list/searchAndFilter/SearchOrFilterInput';
import { SearchAndFilterInfo } from './components/list/searchAndFilter/SearchAndFilterInfo';
import { TagList } from './components/tagList/TagList';
import { ArrowButton } from './components/selectedOptions/ArrowButton';
import { ButtonWithSelectedOptions } from './components/selectedOptions/ButtonWithSelectedOptions';
import { ClearButton } from './components/selectedOptions/ClearButton';

export function Select({
  options,
  open,
  groups,
  multiSelect,
  placeholder,
  icon,
  label,
  required,
  onChange,
  onSearch,
  children,
  assistiveText,
  virtualize,
  id,
  onFocus,
  onBlur,
  error,
  disabled,
  noTags,
  ariaLabel,
  visibleOptions,
  filter,
}: SelectProps<ReactElement<HTMLOptGroupElement | HTMLOptionElement>>) {
  const initialData = useMemo<SelectData>(() => {
    return {
      groups: propsToGroups({ options, groups }) || childrenToGroups(children) || [],
      label,
      open: !!open,
      required: !!required,
      disabled: !!disabled,
      multiSelect: !!multiSelect,
      virtualize: !!virtualize,
      noTags: !!noTags,
      placeholder: placeholder || '',
      assistiveText: assistiveText || '',
      error: error || '',
      visibleOptions: visibleOptions || 5.5,
      ariaLabel,
      onSearch,
      onChange,
      onFocus,
      onBlur,
      filterFunction: filter,
    };
  }, [options, open, groups, disabled]);

  const metaData = useMemo((): SelectMetaData => {
    const containerId = `${id || uniqueId('hds-select-')}`;
    const optionIds = new Map<string, string>();
    let optionIdCounter = 0;
    const getListInputType = () => {
      if (!initialData.onSearch && !initialData.filterFunction) {
        return undefined;
      }
      return initialData.onSearch ? 'search' : 'filter';
    };
    return {
      didSearchChange: false,
      didSelectionsChange: false,
      filter: '',
      search: '',
      isSearching: false,
      showAllTags: false,
      cancelCurrentSearch: undefined,
      focusTarget: undefined,
      lastClickedOption: undefined,
      lastToggleCommand: 0,
      icon,
      activeDescendant: undefined,
      refs: {
        listContainer: createRef<HTMLDivElement>(),
        list: createRef<HTMLUListElement>(),
        container: createRef<HTMLDivElement>(),
        tagList: createRef<HTMLDivElement>(),
        showAllButton: createRef<HTMLButtonElement>(),
        dropdownButton: createRef<HTMLButtonElement>(),
        searchOrFilterInput: createRef<HTMLInputElement>(),
      },
      elementIds: {
        container: containerId,
        dropdownButton: `${containerId}-dropdown-button`,
        list: `${containerId}-list`,
        clearButton: `${containerId}-clear-button`,
        arrowButton: `${containerId}-arrow-button`,
        label: `${containerId}-label`,
        tagList: `${containerId}-tag-list`,
        searchOrFilterInput: `${containerId}-input-element`,
        searchOrFilterInputLabel: `${containerId}-input-element-label`,
        clearAllButton: `${containerId}-clear-all-button`,
        showAllButton: `${containerId}-show-all-button`,
      },
      selectedOptions: getSelectedOptions(initialData.groups),
      getOptionId: (option) => {
        const identifier = option.isGroupLabel ? `hds-group-${option.label}` : option.value;
        const current = optionIds.get(identifier);
        if (!current) {
          const optionId = `${containerId}-option-${optionIdCounter}`;
          optionIdCounter += 1;
          optionIds.set(identifier, optionId);
          return optionId;
        }
        return current;
      },
      listInputType: getListInputType(),
    };
  }, [id, initialData.groups, initialData.onSearch, initialData.filterFunction]);

  useEffect(() => {
    return () => {
      // untested
      if (metaData.cancelCurrentSearch) {
        metaData.cancelCurrentSearch();
      }
    };
  }, []);

  return (
    <DataProvider<SelectData, SelectMetaData> initialData={initialData} metaData={metaData} onChange={changeChandler}>
      <Container>
        <Label />
        <SelectionsAndListsContainer>
          <SelectedOptionsContainer>
            <ButtonWithSelectedOptions />
            <ClearButton />
            <ArrowButton />
          </SelectedOptionsContainer>
          <ListAndInputContainer>
            <SearchOrFilterInput />
            <List />
            <SearchAndFilterInfo />
          </ListAndInputContainer>
        </SelectionsAndListsContainer>
        <ErrorNotification />
        <AssistiveText />
        <TagList />
      </Container>
    </DataProvider>
  );
}
