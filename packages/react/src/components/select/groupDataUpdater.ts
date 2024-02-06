import { Option, eventTypes, groupIdEvents } from '.';
import { ChangeHandler } from '../group/utils';
import {
  getSelectDataFromController,
  updateControllerSelectData,
  updateSelectedOptionInGroups,
  updateSelectedGroupOptions,
  filterOptions,
  mergeSearchResultsToCurrent,
  clearAllSelectedOptions,
} from './utils';

export const groupDataUpdater: ChangeHandler = ({ id, type, controller, payload }) => {
  const current = getSelectDataFromController(controller);
  console.log('id,type', id, type, payload);

  const groupIdWithType = `${id}_${type}`;

  if (groupIdWithType === groupIdEvents.selectedOptionsClick || groupIdWithType === groupIdEvents.arrowClick) {
    controller.updateData({ data: { open: !current.open } });
  } else if (groupIdWithType === groupIdEvents.listItemClick || groupIdWithType === groupIdEvents.tagClick) {
    const clickedOption = payload && (payload.value as Required<Option>);
    if (!clickedOption) {
      return;
    }
    updateControllerSelectData(controller, {
      groups: updateSelectedOptionInGroups(
        current.groups,
        { ...clickedOption, selected: !clickedOption.selected },
        current.multiSelect,
      ),
      open: current.multiSelect,
    });
    controller.updateMetaData({ selectionUpdate: Date.now() });
  } else if (groupIdWithType === groupIdEvents.listGroupClick) {
    const clickedOption = payload && (payload.value as Required<Option>);
    if (!clickedOption) {
      return;
    }
    updateControllerSelectData(controller, {
      groups: updateSelectedGroupOptions(current.groups, { ...clickedOption, selected: !clickedOption.selected }),
      open: true,
    });
    controller.updateMetaData({ selectionUpdate: Date.now() });
  } else if (groupIdWithType === groupIdEvents.clearClick) {
    updateControllerSelectData(controller, {
      groups: clearAllSelectedOptions(current.groups),
    });
    controller.updateMetaData({ selectionUpdate: Date.now() });
  } else if (type === eventTypes.outSideclick) {
    controller.updateData({ data: { open: false } });
  } else if (groupIdWithType === groupIdEvents.filterChange) {
    const filterValue = (payload && (payload.value as string)) || '';
    controller.updateMetaData({ filter: filterValue });
    controller.updateData({ data: { groups: filterOptions(current.groups, filterValue) } });
  } else if (groupIdWithType === groupIdEvents.searchChange) {
    const searchValue = (payload && (payload.value as string)) || '';
    controller.updateMetaData({ search: searchValue, searchUpdate: searchValue ? Date.now() : -1 });
    // just to re-render:
    controller.updateData({ data: !searchValue ? { groups: mergeSearchResultsToCurrent({}, current.groups) } : {} });
  }
};
