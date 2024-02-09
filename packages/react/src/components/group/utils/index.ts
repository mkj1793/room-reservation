import {
  SyntheticEvent,
  FunctionComponent,
  HtmlHTMLAttributes,
  PropsWithChildren,
  ComponentType,
  MutableRefObject,
} from 'react';

import { StorageData, Storage } from './storage';

export type ChangeEventPayload = { value?: unknown; originalEvent?: SyntheticEvent };
export type ChangeEvent = { id: string; type?: string; payload?: ChangeEventPayload };
export type ChangeHandlerProps = ChangeEvent & { controller: Controller };
export type ChangeHandler = (props: ChangeHandlerProps) => unknown;
export type HTMLElementAttributesWithChildren = PropsWithChildren<HtmlHTMLAttributes<HTMLElement>>;
export type DefaultGroupElementProps = HTMLElementAttributesWithChildren & {
  key?: string; // needed?
  forwardedController?: Controller;
  'data-hds-group-id'?: string;
};

export type ElementRef = MutableRefObject<HTMLElement | null>;

export type Controller = {
  getProps: ({ id: string, elementProps: DefaultGroupElementProps }) => ReturnType<PropSetter>;
  updateData: (props: { data: StorageData; updateKeys?: string[] }) => StorageData;
  getData: Storage['get'];
  getMetaData: () => StorageData;
  updateMetaData: (appended: StorageData) => StorageData;
  triggerChange: (change: ChangeEvent) => unknown;
};

export type ControllerProps = {
  reRenderer: () => void;
  propSetter: PropSetter;
  initialData: StorageData;
  metaData?: StorageData;
  onChange: ChangeHandler;
};

export type PropSetter<T = DefaultGroupElementProps> = (props: {
  id: string;
  controller: Controller;
  key: string;
  elementProps: HTMLElementAttributesWithChildren;
}) => T;

export type PropHandler = {
  getProps: (props: {
    id: string;
    controller: Controller;
    elementProps: DefaultGroupElementProps;
  }) => HTMLElementAttributesWithChildren & DefaultGroupElementProps;
  updateKey: (id: string) => void;
};

export type GroupChildFunction = FunctionComponent<{ controller: Controller }>;

export type GroupChild<P = DefaultGroupElementProps> = ComponentType<HTMLElementAttributesWithChildren & P>;

export type GroupProps<T = HTMLElementAttributesWithChildren> = Omit<HTMLElementAttributesWithChildren, 'onChange'> & {
  propSetter: PropSetter<T>;
  initialData: StorageData;
  metaData?: StorageData;
  onChange?: ChangeHandler;
};

export const isFunctionOrObject = (checkTarget: unknown) => {
  // typeof null === object, so checking that too here:
  const typeOfTarget = checkTarget ? typeof checkTarget : '';
  return typeOfTarget === 'object' || typeOfTarget === 'function';
};
