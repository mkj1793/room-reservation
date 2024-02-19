import uniqueId from 'lodash.uniqueid';
import React, { ReactElement, useMemo, createRef } from 'react';
import debounce from 'lodash.debounce';

import { SelectProps, SelectMetaData, SelectData, SearchFunction } from './types';
import { Container } from './components/Container';
import { Label } from './components/Label';
import { dataUpdater } from './dataUpdater';
import { propsToGroups, getSelectedOptions, childrenToGroups } from './utils';
import DataContainer, { ChangeEvent, ChangeHandler, Tools } from '../dataContext/DataContext';
import { SelectedOptions } from './components/SelectedOptions';
import { SelectionsAndListsContainer } from './components/SelectionsAndListsContainer';
import { OptionsList } from './components/OptionsList';
import { ListAndInputContainer } from './components/ListAndInputContainer';
import { ErrorNotification } from './components/Error';
import { AssistiveText } from './components/AssistiveText';
import { FilterInput } from './components/FilterInput';
import { SearchInput } from './components/SearchInput';
import { SearchAndFilterInfo } from './components/SearchAndFilterInfo';
import { TagList } from './components/TagList';
import { eventIds, eventTypes } from './events';

export function Select({
  options,
  open,
  groups,
  multiSelect,
  showFiltering,
  showSearch,
  placeholder,
  icon,
  required,
  onChange,
  onSearch,
  children,
  assistiveText,
  virtualize,
  id,
}: SelectProps<ReactElement<HTMLOptGroupElement | HTMLOptionElement>>) {
  const initialData = useMemo<SelectData>(
    () => ({
      groups: propsToGroups({ options, groups }) || childrenToGroups(children) || [],
      label: 'Label',
      open: !!open,
      required: !!required,
      multiSelect: !!multiSelect,
      showFiltering: !!showFiltering,
      showSearch: !!showSearch,
      virtualize: !!virtualize,
      placeholder: placeholder || '',
      assistiveText: assistiveText || '',
    }),
    [options, open, groups],
  );
  const metaData = useMemo((): SelectMetaData => {
    const containerId = `${id || uniqueId('hds-select')}`;
    return {
      listContainerRef: createRef<HTMLDivElement>(),
      listRef: createRef<HTMLUListElement>(),
      tagListRef: createRef<HTMLDivElement>(),
      showAllButtonRef: createRef<HTMLButtonElement>(),
      selectionButtonRef: createRef<HTMLButtonElement>(),
      searchUpdate: -1,
      selectionUpdate: -1,
      filter: '',
      search: '',
      isSearching: false,
      showAllTags: false,
      cancelCurrentSearch: undefined,
      icon,
      elementIds: {
        button: `${containerId}-button`,
        label: `${containerId}-label`,
        tagList: `${containerId}-tag-list`,
        container: containerId,
      },
    };
  }, [id]);

  const executeSearch = (search: string, searchFunc: SearchFunction): [() => void, Promise<ChangeEvent>] => {
    let isCancelled = false;
    const request = new Promise<ChangeEvent>((resolve) => {
      searchFunc(search as string, [], {} as SelectData)
        .then((res) => {
          if (isCancelled) {
            resolve({ id: eventIds.searchResult, type: eventTypes.cancelled });
          }
          resolve({ id: eventIds.searchResult, type: eventTypes.success, payload: { value: res } });
        })
        .catch(() => {
          resolve({ id: eventIds.searchResult, type: eventTypes.error });
        });
    });
    const cancel = () => {
      isCancelled = true;
    };
    return [cancel, request];
  };

  const debouncedSearch = debounce((tools: Tools<SelectData, SelectMetaData>) => {
    if (!onSearch) {
      return;
    }
    const { cancelCurrentSearch, search } = tools.getMetaData();
    if (cancelCurrentSearch) {
      cancelCurrentSearch();
    }
    if (!search) {
      return;
    }
    const [cancel, request] = executeSearch(search, onSearch);
    tools.updateMetaData({ cancelCurrentSearch: cancel });
    tools.asyncRequestWithTrigger(request);
  }, 300);

  const handleChanges: ChangeHandler<SelectData, SelectMetaData> = (event, tools): boolean => {
    const { updateMetaData, updateData, getData, getMetaData } = tools;
    const lastSelectionUpdate = getMetaData().selectionUpdate;
    const lastSearchUpdate = getMetaData().searchUpdate;
    dataUpdater(event, tools);

    if (getMetaData().searchUpdate > lastSearchUpdate && onSearch) {
      tools.updateMetaData({ isSearching: !!getMetaData().search });
      debouncedSearch(tools);
      /* const { cancelCurrentSearch, search } = getMetaData();
      if (cancelCurrentSearch) {
        cancelCurrentSearch();
      }
      // const current = getData();
      const [cancel, request] = executeSearch(search, onSearch);
      updateMetaData({ isSearching: true, cancelCurrentSearch: cancel });
      asyncRequestWithTrigger(request);
      onSearch(
        getMetaData().search as string,
        getSelectedOptions(current.groups).map((opt) => opt.value),
        current,
      )
        .then((res) => {
          console.log('then', res);
          updateMetaData({ isSearching: false });
          updateData({ groups: mergeSearchResultsToCurrent(res, current.groups) });
        })
        .catch(() => {
          // ignore
        });
        */
    }
    if (getMetaData().selectionUpdate !== lastSelectionUpdate) {
      const current = getData();
      const newProps = onChange(
        getSelectedOptions(current.groups).map((opt) => opt.value),
        current,
      );
      updateMetaData({ selectionUpdate: Date.now() });
      if (newProps) {
        updateData(newProps);
      }
    }
    // needs fixing:
    return true;
  };

  // unmount => cancel asyncs

  return (
    <DataContainer<SelectData, SelectMetaData> initialData={initialData} metaData={metaData} onChange={handleChanges}>
      <Container>
        <Label key="label" />
        <SelectionsAndListsContainer key="selectionsAndListsContainer">
          <SelectedOptions />
          <ListAndInputContainer>
            {initialData.showFiltering && <FilterInput />}
            {initialData.showSearch && <SearchInput />}
            <OptionsList />
            <SearchAndFilterInfo />
          </ListAndInputContainer>
        </SelectionsAndListsContainer>
        <ErrorNotification />
        <AssistiveText />
        {initialData.multiSelect && <TagList />}
      </Container>
    </DataContainer>
  );
}
