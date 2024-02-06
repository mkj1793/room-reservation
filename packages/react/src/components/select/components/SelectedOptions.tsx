import React from 'react';

import styles from '../Select.module.scss';
import classNames from '../../../utils/classNames';
import { Controller, DefaultGroupElementProps, PropSetter } from '../../group/utils';
import { createOnClickListener } from '../../group/utils/propSetterHelpers';
import { getMultiSelectState, getSelectDataFromController, getSelectedOptions } from '../utils';
import { ButtonElementProps, SelectedTag, selectedTagPropSetter } from './SelectedTag';
import { IconCrossCircle, IconAngleDown } from '../../../icons';
import { DivElementProps, groupIds, Option } from '..';

type TagControllerProps = DivElementProps & { options: Option[]; placeholder: string; controller: Controller };
type SingleOptionButtonProps = ButtonElementProps & { option?: Option; placeholder: string };
type SelectedOptionsProps = DivElementProps & {
  singleOptionButtonProps?: SingleOptionButtonProps;
  clearButtonProps: ButtonElementProps;
  arrowButtonProps: ButtonElementProps;
  tagContainerProps?: TagControllerProps;
};

export function ClearButton(props: ButtonElementProps) {
  return (
    <button type="button" {...props}>
      <IconCrossCircle className={styles.angleIcon} aria-hidden />
    </button>
  );
}

export function ArrowButton(props: ButtonElementProps) {
  return (
    <button type="button" {...props}>
      <IconAngleDown className={styles.angleIcon} aria-hidden />
    </button>
  );
}

export function SingleSelectButton(props: SingleOptionButtonProps) {
  const { option, placeholder, ...attr } = props || {};
  const value = (option && option.label) || placeholder;
  return (
    <button type="button" {...attr}>
      {value}
    </button>
  );
}
export function Tags(props: TagControllerProps) {
  const { options, placeholder, controller, ...attr } = props || {};
  const children =
    options && options.length
      ? options.map((option) => <SelectedTag {...selectedTagPropSetter({ option, controller })} key={option.value} />)
      : placeholder;
  return <div {...attr}>{children}</div>;
}

export const selectedOptionsPropSetter: PropSetter<SelectedOptionsProps> = (propSetterProps) => {
  const { controller } = propSetterProps;
  const { groups, placeholder } = getSelectDataFromController(controller);
  const isMultiSelect = getMultiSelectState(controller);
  const selectedOptions = getSelectedOptions(groups);
  const clearButtonProps = {
    className: classNames(styles.button, styles.icon),
    ...createOnClickListener({ id: groupIds.clearButton, controller }),
  };
  const arrowButtonProps = {
    className: classNames(styles.button, styles.icon),
    ...createOnClickListener({ id: groupIds.arrowButton, controller }),
  };

  if (isMultiSelect && selectedOptions.length) {
    return {
      className: classNames(styles.selectedOptionsContainer),
      clearButtonProps,
      arrowButtonProps,
      tagContainerProps: {
        className: classNames(styles.tagContainer),
        options: selectedOptions,
        placeholder,
        controller,
        // this onCLick goes to div!
        ...createOnClickListener(propSetterProps),
      },
    };
  }
  return {
    className: classNames(styles.selectedOptionsContainer),
    clearButtonProps,
    arrowButtonProps,
    singleOptionButtonProps: {
      className: classNames(styles.button, styles.selection),
      option: selectedOptions[0],
      ...createOnClickListener(propSetterProps),
      placeholder,
    },
  };
};

export function SelectedOptions(props: DefaultGroupElementProps) {
  const {
    clearButtonProps,
    arrowButtonProps,
    singleOptionButtonProps,
    tagContainerProps,
    ...attr
  } = (props as unknown) as SelectedOptionsProps;
  const showClearButton =
    (singleOptionButtonProps && singleOptionButtonProps.option) ||
    (tagContainerProps && tagContainerProps.options.length);
  return (
    <div {...attr}>
      {singleOptionButtonProps && <SingleSelectButton {...singleOptionButtonProps} />}
      {tagContainerProps && <Tags {...tagContainerProps} />}
      {showClearButton && <ClearButton {...clearButtonProps} />}
      <ArrowButton {...arrowButtonProps} />
    </div>
  );
}

/*  export const selectedOptionsPropSetter: PropSetter<ButtonElementProps> = (propSetterProps) => {
  const { controller } = propSetterProps;
  const { groups, placeholder } = getSelectDataFromController(controller);
  const isMultiSelect = getMultiSelectState(controller);
  const selectedOptions = getSelectedOptions(groups);
  const children = isMultiSelect
    ? selectedOptions.map((option) => (
        <SelectedTag {...selectedTagPropSetter({ option, controller })} key={option.value} />
      ))
    : (selectedOptions[0] && selectedOptions[0].value) || placeholder;
  return {
    className: classNames(styles.button),
    ...createOnClickListener(propSetterProps),
    children,
  };
};

*/
