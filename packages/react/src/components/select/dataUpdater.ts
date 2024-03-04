import { Option, SelectData, SelectMetaData } from './types';
import { ChangeEvent, ChangeHandler } from '../dataProvider/DataContext';
import { updateSelectedOptionInGroups, updateSelectedGroupOptions, clearAllSelectedOptions } from './utils';
import {
  EventId,
  EventType,
  isClearOptionsClickEvent,
  isCloseEvent,
  isGroupClickEvent,
  isOpenOrCloseEvent,
  isOptionClickEvent,
  isOutsideClickEvent,
} from './events';

const MIN_USER_INTERACTION_TIME_IN_MS = 200;

const dataUpdater: ChangeHandler<SelectData, SelectMetaData> = (event, dataHandlers) => {
  const { id, type, payload } = event as ChangeEvent<EventId, EventType>;
  const current = dataHandlers.getData();
  const openOrClose = (open: boolean) => {
    const now = Date.now();
    if (now - dataHandlers.getMetaData().lastToggleCommand < MIN_USER_INTERACTION_TIME_IN_MS) {
      return false;
    }
    dataHandlers.updateData({ open });
    dataHandlers.updateMetaData({ lastToggleCommand: now });
    return true;
  };

  const updateGroups = (groups: SelectData['groups']) => {
    dataHandlers.updateData({ groups });
  };

  if (isOpenOrCloseEvent(id, type)) {
    const willOpen = !current.open;
    openOrClose(willOpen);

    return true;
  }

  if (isOptionClickEvent(id, type)) {
    const clickedOption = payload && (payload.value as Option);
    if (!clickedOption) {
      return false;
    }
    const newGroups = updateSelectedOptionInGroups(current.groups, {
      ...clickedOption,
      selected: !clickedOption.selected,
    });
    updateGroups(newGroups);
    openOrClose(false);

    return true;
  }

  if (isGroupClickEvent(id, type)) {
    const clickedOption = payload && (payload.value as Option);
    if (!clickedOption) {
      return false;
    }
    const newGroups = updateSelectedGroupOptions(current.groups, {
      ...clickedOption,
      selected: !clickedOption.selected,
    });
    updateGroups(newGroups);
    return true;
  }

  if (isClearOptionsClickEvent(id, type)) {
    const newGroups = clearAllSelectedOptions(current.groups);
    updateGroups(newGroups);
    return true;
  }

  if (isOutsideClickEvent(id, type) || isCloseEvent(id, type)) {
    return openOrClose(false);
  }

  return false;
};

export const changeChandler: ChangeHandler<SelectData, SelectMetaData> = (event, dataHandlers): boolean => {
  dataUpdater(event, dataHandlers);
  return true;
};
