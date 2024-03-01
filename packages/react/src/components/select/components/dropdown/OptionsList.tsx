import React from 'react';

import styles from '../../Select.module.scss';
import classNames from '../../../../utils/classNames';
import { DivElementProps, Option, SelectData, SelectDataHandlers, SelectMetaData } from '../../types';
import {
  createMultiSelectGroupLabelProps,
  createMultiSelectItemProps,
  createSingleSelectGroupLabelProps,
  createSingleSelectItemProps,
  LiElementWithCheckboxProps,
  MultiSelectGroupLabelProps,
  MultiSelectOptionListItem,
  OptionListItem,
} from './OptionListItem';
import { getAllOptions, getOptionGroupIndex, getSelectedOptionsPerc, getVisibleGroupLabels } from '../../utils';
import { useSelectDataHandlers } from '../../hooks/useSelectDataHandlers';
import { ChangeTrigger } from '../../../dataProvider/DataContext';
import { VirtualizedListElement } from './VirtualizedListElement';

const createOptionsListItemProps = ({
  option,
  isMultiSelect,
  isIntermediate,
  isGroupDisabled,
  trigger,
}: MultiSelectGroupLabelProps): LiElementWithCheckboxProps => {
  const { isGroupLabel } = option;

  if (isGroupLabel) {
    return !isMultiSelect
      ? createSingleSelectGroupLabelProps(option)
      : createMultiSelectGroupLabelProps({ option, trigger, isIntermediate, isMultiSelect, isGroupDisabled });
  }
  return isMultiSelect
    ? createMultiSelectItemProps({ option, trigger })
    : createSingleSelectItemProps({ option, trigger });
};

const createOptionElements = (groups: SelectData['groups'], trigger: ChangeTrigger, isMultiSelect: boolean) => {
  const getGroupLabelIntermediateState = (option: Option): boolean => {
    if (!option.isGroupLabel) {
      return false;
    }
    const optionGroup = groups[getOptionGroupIndex(groups, option)];
    const perc = optionGroup ? getSelectedOptionsPerc(optionGroup) : 0;
    return perc < 1 && perc > 0;
  };
  const getGroupLabelDisabledState = (option: Option): boolean => {
    if (!option.isGroupLabel) {
      return false;
    }
    const optionGroup = groups[getOptionGroupIndex(groups, option)];
    return !optionGroup.options.some((opt) => !opt.isGroupLabel && !opt.disabled);
  };
  return getAllOptions(groups, false)
    .map((option) => {
      const { children, ...attr } = createOptionsListItemProps({
        option,
        isMultiSelect,
        isIntermediate: getGroupLabelIntermediateState(option),
        isGroupDisabled: getGroupLabelDisabledState(option),
        trigger,
      });
      if (!option.visible) {
        return null;
      }
      const Component = isMultiSelect ? MultiSelectOptionListItem : OptionListItem;
      return (
        <Component {...attr} key={option.value as string}>
          {children}
        </Component>
      );
    })
    .filter((option) => !!option);
};

const createOptionsListChildren = ({ getData, getMetaData, trigger }: SelectDataHandlers) => {
  const { open, groups, multiSelect } = getData() as SelectData;
  const { isSearching } = getMetaData() as SelectMetaData;
  return {
    children: open && !isSearching ? createOptionElements(groups, trigger, multiSelect) : null,
  };
};

const createContainerProps = (): DivElementProps => {
  return {
    className: styles.listContainer,
  };
};

const createListElementProps = ({ getData, getMetaData }: SelectDataHandlers) => {
  const { groups, multiSelect } = getData() as SelectData;
  const { refs, elementIds } = getMetaData() as SelectMetaData;
  const hasVisibleGroupLabels = getVisibleGroupLabels(groups).length > 0;

  return {
    className: classNames(
      styles.list,
      hasVisibleGroupLabels && styles.shiftOptions,
      multiSelect && styles.multiSelectList,
    ),
    ref: refs.list,
    tabIndex: -1,
    id: elementIds.list,
  };
};

export const OptionsList = () => {
  const handlers = useSelectDataHandlers();
  const { children } = createOptionsListChildren(handlers);
  if (!children || (Array.isArray(children) && !children.length)) {
    return null;
  }
  const { virtualize } = handlers.getData();
  const listElementProps = createListElementProps(handlers);
  return (
    <div {...createContainerProps()}>
      {virtualize ? (
        <VirtualizedListElement {...listElementProps}>{children}</VirtualizedListElement>
      ) : (
        <ul {...listElementProps}>{children}</ul>
      )}
    </div>
  );
};
