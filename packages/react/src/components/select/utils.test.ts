import React from 'react';

// eslint-disable-next-line jest/no-mocks-import
import {
  createDataWithSelectedOptions,
  getTriggeredEvents,
  mockUseSelectDataHandlersContents,
  resetAllMocks,
} from './hooks/__mocks__/useSelectDataHandlers';
import {
  clearAllSelectedOptions,
  createInputOnChangeListener,
  createOnClickListener,
  getAllOptions,
  getOptionGroupIndex,
  getSelectedOptions,
  iterateAndCopyGroup,
  OptionIterator,
  updateSelectedOptionInGroups,
} from './utils';
import { Option, SelectDataHandlers } from './types';
import { ChangeEvent, ChangeEventPayload } from '../dataProvider/DataContext';
import { eventTypes } from './events';

describe('utils', () => {
  const createMultipleGroups = () => {
    const prefixOptionLabelsAndValues = (prefix: string, options: Option[]) => {
      return options.map((opt) => {
        return {
          ...opt,
          label: `${prefix} ${opt.label}`,
          value: `${prefix} ${opt.value}`,
        };
      });
    };
    const group1 = createDataWithSelectedOptions({ selectedOptionsCount: 0 }).groups[0];
    const group2 = createDataWithSelectedOptions({ selectedOptionsCount: 0 }).groups[0];
    const group3 = createDataWithSelectedOptions({ selectedOptionsCount: 0 }).groups[0];
    group1.options = prefixOptionLabelsAndValues('group1', group1.options);
    group2.options = prefixOptionLabelsAndValues('group2', group2.options);
    group3.options = prefixOptionLabelsAndValues('group3', group3.options);
    return { groups: [group1, group2, group3] };
  };
  describe('iterateAndCopyGroup', () => {
    it('clones a group with each option cloned by the given iterator function. If function returns undefined, option is cloned.', () => {
      const createNewOptionValue: OptionIterator = (option, group, optionIndex, groupIndex) => {
        return {
          value: `${option.label} ${optionIndex} ${groupIndex} ${group.options[0].label}`,
        } as Option;
      };
      const iterator: OptionIterator = (option, group, optionIndex, groupIndex) => {
        if (groupIndex === 0) {
          return {
            ...option,
            ...createNewOptionValue(option, group, optionIndex, groupIndex),
          };
        }

        return undefined;
      };
      const { groups } = createMultipleGroups();
      const stringBackup = JSON.stringify(groups);
      const newGroups = iterateAndCopyGroup(groups, iterator);
      expect(JSON.stringify(groups)).toBe(stringBackup);
      newGroups.forEach((group, groupIndex) => {
        group.options.forEach((option, optionIndex) => {
          if (groupIndex === 0) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(option.value).toBe((createNewOptionValue(option, group, optionIndex, groupIndex) as Option).value);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(option).toMatchObject(groups[groupIndex].options[optionIndex]);
          }
        });
      });
    });
  });
  describe('getOptionGroupIndex', () => {
    it('Returns index of the group where the given option is found.', () => {
      const { groups } = createMultipleGroups();
      groups.forEach((group, index) => {
        group.options.forEach((option) => {
          expect(getOptionGroupIndex(groups, option)).toBe(index);
        });
      });
    });
    it('If same label is in many groups, the index of the first group is returned', () => {
      const { groups } = createMultipleGroups();
      const group1 = groups[0];
      const group2 = groups[1];
      const sameGroupMultipleTimes = [group1, group2, group1, group2];
      sameGroupMultipleTimes.forEach((group, index) => {
        group.options.forEach((option) => {
          const assumedIndex = index === 0 || index === 2 ? 0 : 1;
          expect(getOptionGroupIndex(sameGroupMultipleTimes, option)).toBe(assumedIndex);
        });
      });
    });
    it('Returns -1  if group is not found', () => {
      const { groups } = createMultipleGroups();
      groups.forEach((group) => {
        group.options.forEach(() => {
          expect(getOptionGroupIndex(groups, { label: 'X' })).toBe(-1);
        });
      });
    });
    it('Only option "value" and "isGroupLabel" are compared.', () => {
      const { groups } = createMultipleGroups();
      const commonProps: Partial<Option> = {
        selected: true,
        disabled: true,
        label: '',
      };
      const mutualGroups = groups.map((group) => {
        return {
          options: group.options.map((option) => {
            return {
              ...commonProps,
              value: option.value,
              isGroupLabel: option.isGroupLabel,
            } as Option;
          }),
        };
      });
      mutualGroups.forEach((mutualGroup, index) => {
        mutualGroup.options.forEach((option) => {
          expect(getOptionGroupIndex(groups, option)).toBe(index);
        });
      });
    });
  });
  describe('createOnClickListener creates object with an onClick function which triggers a changeEvent', () => {
    const dataHandlers = mockUseSelectDataHandlersContents as SelectDataHandlers;
    const mouseEvent = {} as unknown as React.MouseEvent;
    const id = 'eventId';
    const type = 'eventType';
    beforeEach(() => {
      resetAllMocks();
    });
    it('triggered event id is the given id, default type is eventTypes.click and originalEvent is the mouse event', () => {
      const { onClick } = createOnClickListener({ id, trigger: dataHandlers.trigger });
      onClick(mouseEvent);
      const triggeredEvent = getTriggeredEvents()[0] as ChangeEvent;
      expect(triggeredEvent.id).toBe(id);
      expect(triggeredEvent.type).toBe(eventTypes.click);
      expect(triggeredEvent.payload?.originalEvent).toBe(mouseEvent);
    });
    it('type can be set', () => {
      const { onClick } = createOnClickListener({ id, type, trigger: dataHandlers.trigger });
      onClick(mouseEvent);
      const triggeredEvent = getTriggeredEvents()[0] as ChangeEvent;
      expect(triggeredEvent.id).toBe(id);
      expect(triggeredEvent.type).toBe(type);
      expect(triggeredEvent.payload?.originalEvent).toBe(mouseEvent);
    });
  });
  describe('createInputOnChangeListener creates object with an onChange function which triggers a changeEvent', () => {
    const dataHandlers = mockUseSelectDataHandlersContents as SelectDataHandlers;
    const keyboardEvent = { currentTarget: { value: 'text' } } as unknown as React.ChangeEvent<HTMLInputElement>;
    const id = 'eventId';
    const type = 'eventType';
    beforeEach(() => {
      resetAllMocks();
    });
    it('triggered event id is the given id, default type is eventTypes.change and originalEvent is the keyboard event', () => {
      const { onChange } = createInputOnChangeListener({ id, trigger: dataHandlers.trigger });
      onChange(keyboardEvent);
      const triggeredEvent = getTriggeredEvents()[0] as ChangeEvent;
      expect(triggeredEvent.id).toBe(id);
      expect(triggeredEvent.type).toBe(eventTypes.change);
      expect(triggeredEvent.payload?.originalEvent).toBe(keyboardEvent);
    });
    it('type can be set', () => {
      const { onChange } = createInputOnChangeListener({ id, type, trigger: dataHandlers.trigger });
      onChange(keyboardEvent);
      const triggeredEvent = getTriggeredEvents()[0] as ChangeEvent;
      expect(triggeredEvent.type).toBe(type);
    });
    it('Payload value is the input element value picked from keyboard event', () => {
      const { onChange } = createInputOnChangeListener({ id, type, trigger: dataHandlers.trigger });
      onChange(keyboardEvent);
      const triggeredEvent = getTriggeredEvents()[0] as ChangeEvent;
      expect((triggeredEvent.payload as ChangeEventPayload).value).toBe(keyboardEvent.currentTarget.value);
    });
  });
  describe('updateSelectedOptionInGroups', () => {
    it('sets given option as selected or unselected', () => {
      const { groups } = createMultipleGroups();
      expect(getSelectedOptions(groups)).toHaveLength(0);
      const selectedOption = groups[1].options[10];
      // select an option
      selectedOption.selected = true;
      const newGroups = updateSelectedOptionInGroups(groups, selectedOption);
      const selectedOptionInResults = newGroups[1].options[10];
      expect(selectedOptionInResults.selected).toBeTruthy();
      expect(getSelectedOptions(newGroups)).toHaveLength(1);
      const assumedResult = [...groups];
      assumedResult[1].options[10].selected = true;
      expect(assumedResult).toMatchObject(newGroups);

      // unselect same option
      selectedOptionInResults.selected = false;
      const latestGroups = updateSelectedOptionInGroups(newGroups, selectedOptionInResults);
      const unselectedOptionInResults = latestGroups[1].options[10];
      expect(unselectedOptionInResults.selected).toBeFalsy();
      const assumedLastResult = [...latestGroups];
      assumedLastResult[1].options[10].selected = false;
      expect(assumedLastResult).toMatchObject(latestGroups);
      expect(getSelectedOptions(latestGroups)).toHaveLength(0);
    });
    it('clones the given groups and options and does not mutate', () => {
      const { groups } = createMultipleGroups();
      const stringBackup = JSON.stringify(groups);
      groups.forEach((group) => {
        group.options.forEach((option) => {
          const updatedGroups = updateSelectedOptionInGroups(groups, option);
          updatedGroups.forEach((updatedGroup) => {
            updatedGroup.options.forEach((updatedGroupOption) => {
              Reflect.deleteProperty(updatedGroupOption, 'label');
              Reflect.set(updatedGroupOption, 'value', '');
            });
          });
          expect(JSON.stringify(updatedGroups)).not.toBe(stringBackup);
          expect(JSON.stringify(groups)).toBe(stringBackup);
        });
      });

      // clones...
    });
  });
  describe('clearAllSelectedOptions', () => {
    it('Clones the groups and sets all options as unselected', () => {
      const { groups } = createMultipleGroups();
      getAllOptions(groups).forEach((opt) => {
        // eslint-disable-next-line  no-param-reassign
        opt.selected = true;
      });
      const stringBackup = JSON.stringify(groups);
      expect(getSelectedOptions(groups)).toHaveLength(60);
      const newGroups = clearAllSelectedOptions(groups);
      expect(getSelectedOptions(newGroups)).toHaveLength(0);
      expect(getSelectedOptions(groups)).toHaveLength(60);
      expect(JSON.stringify(groups)).toBe(stringBackup);
    });
  });
});
