import React, { memo } from 'react';

import styles from '../../../Select.module.scss';
import classNames from '../../../../../utils/classNames';
import { DivElementProps, LiElementProps } from '../../../types';
import { Checkbox, CheckboxProps } from '../../../../checkbox/Checkbox';
import { eventIds, eventTypes } from '../../../events';
import { SelectItemProps } from '../common';

type CommonMultiSelectOptionProps = {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  disabled: boolean;
};

export type MultiSelectOptionProps = (DivElementProps | LiElementProps) &
  CommonMultiSelectOptionProps & { isInGroup: boolean };

const createMultiSelectItemProps = ({
  option,
  trigger,
  getOptionId,
  isInGroup,
}: SelectItemProps & { isInGroup: boolean }): MultiSelectOptionProps => {
  const { label, selected, disabled } = option;
  return {
    className: classNames(
      styles.listItem,
      styles.selectableListItem,
      styles.focusableListItem,
      styles.multiSelectListItem,
      selected && styles.selected,
      disabled && styles.disabledOption,
    ),
    children: null,
    disabled,
    label,
    checked: selected,
    role: 'checkbox',
    'aria-checked': selected,
    'aria-label': label,
    'aria-disabled': disabled,
    tabIndex: -1,
    onClick: (originalEvent: React.MouseEvent) => {
      if (disabled) {
        return;
      }
      trigger({
        id: eventIds.listItem,
        type: eventTypes.click,
        payload: { originalEvent, value: option },
      });
    },
    isInGroup,
    id: getOptionId(option),
  };
};

export function MultiSelectOptionElement(props: MultiSelectOptionProps) {
  const { label, disabled, checked, indeterminate, isInGroup, ...attr } = props;
  const checkboxId = `${attr.id}-checkbox`;
  const checkboxProps: CheckboxProps = {
    indeterminate,
    disabled,
    id: checkboxId,
    onChange: (e) => {
      e.preventDefault();
    },
    checked,
    tabIndex: -1,
  };
  const Content = () => {
    // aria-hidden is not passed to checkbox, so added a wrapper to hide it.
    // checkbox's label does not expand to full width so had to add external
    return (
      <div aria-hidden className={styles.checkboxContainer}>
        <Checkbox {...checkboxProps} />
        <label htmlFor={checkboxId}>{label}</label>
      </div>
    );
  };
  if (isInGroup) {
    return (
      <div {...(attr as DivElementProps)}>
        <Content />
      </div>
    );
  }
  return (
    <li {...(attr as LiElementProps)}>
      <Content />
    </li>
  );
}

export function MultiSelectOption(props: SelectItemProps & { isInGroup: boolean }) {
  const elementProps = createMultiSelectItemProps(props);
  return <MultiSelectOptionElement {...elementProps} />;
}

export const MemoizedMultiSelectOption = memo<SelectItemProps & { isInGroup: boolean }>(
  MultiSelectOption,
  ({ option: oldOption }, { option: newOption }) => {
    return oldOption.selected === newOption.selected && oldOption.disabled === newOption.disabled;
  },
);
