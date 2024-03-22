import React, { useCallback, useMemo, useRef, useState } from 'react';

import { SelectProps, Option, OptionInProps, TextProvider, Texts } from './types';
import { IconLocation } from '../../icons';
import { Select } from './Select';
import { Button } from '../button/Button';
import useForceRender from '../../hooks/useForceRender';
import { useExternalGroupStorage, useSelectionHistory } from './controlHelpers';
import { defaultFilter, getSelectedOptions, pickSelectedValues } from './utils';
import { Tag } from '../tag/Tag';

export default {
  component: Select,
  title: 'Components/Select',
};

const capitalise = (str: string) => str[0].toUpperCase() + str.slice(1);

const fruitsAndVegetables = [
  'apple',
  'banana',
  'orange',
  'grape',
  'strawberry',
  'watermelon',
  'kiwi',
  'pineapple',
  'mango',
  'peach',
  'carrot',
  'broccoli',
  'potato',
  'tomato',
  'cucumber',
  'lettuce',
  'spinach',
  'bell pepper',
  'eggplant',
  'zucchini',
  'blueberry',
  'raspberry',
  'blackberry',
  'avocado',
  'pear',
  'lemon',
  'lime',
  'cherry',
  'pumpkin',
  'apricot',
  'cranberry',
  'fig',
  'grapefruit',
  'guava',
  'honeydew',
  'kale',
  'nectarine',
  'olive',
  'papaya',
  'pea',
  'plum',
  'radish',
  'rutabaga',
  'tangerine',
  'turnip',
  'watercress',
  'yam',
  'yucca',
];

const adjectives = [
  'sweet',
  'juicy',
  'ripe',
  'fresh',
  'tasty',
  'delicious',
  'crisp',
  'tangy',
  'fragrant',
  'colorful',
  'nutritious',
  'succulent',
  'flavorful',
  'sour',
  'satisfying',
  'exotic',
  'vibrant',
  'healthy',
  'aromatic',
  'wholesome',
  'tender',
  'zesty',
  'bitter',
  'spicy',
  'crunchy',
  'mellow',
  'sugary',
  'scented',
  'sapid',
  'mouthwatering',
];

function generateOptionLabels(count = -1): string[] {
  // Arrays containing names of fruits and vegetables and adjectives

  const length = count > 0 ? count : Math.floor(Math.random() * 20) + 1;

  // Using set to avoid duplicates
  const randomSet: Set<string> = new Set();
  while (randomSet.size < length) {
    // Randomly select a fruit or vegetable and an adjective
    const randomFruitIndex = Math.floor(Math.random() * fruitsAndVegetables.length);
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const randomFruit = fruitsAndVegetables[randomFruitIndex];
    const randomAdjective = adjectives[randomAdjectiveIndex];
    const description = `${capitalise(randomAdjective)} ${randomFruit}`;
    randomSet.add(description);
  }

  return Array.from(randomSet);
}

export const Singleselect = () => {
  const options = generateOptionLabels(20);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select
      options={options}
      onChange={onChange}
      icon={<IconLocation />}
      required
      texts={{ label: 'Select one fruit or vegetable', placeholder: 'Choose one' }}
    />
  );
};
export const Multiselect = () => {
  const options = generateOptionLabels(20);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select
      options={options}
      onChange={onChange}
      icon={<IconLocation />}
      required
      multiSelect
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose one' }}
    />
  );
};

export const Disabled = () => {
  const options = generateOptionLabels(20);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select
      options={options}
      onChange={onChange}
      icon={<IconLocation />}
      required
      disabled
      texts={{ label: 'Select one fruit or vegetable', placeholder: 'Choose one' }}
    />
  );
};

export const OptionsAsHtml = () => {
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select onChange={onChange} texts={{ label: 'Select one fruit or vegetable', placeholder: 'Choose one' }}>
      <optgroup label="Group 1">
        <option value="opt1">Option 1</option>
        <option value="opt2">Option 2</option>
      </optgroup>
      <optgroup label="Group 2">
        <option value="opt3">Option 3</option>
        <option value="opt4">Option 4</option>
      </optgroup>
    </Select>
  );
};

export const SingleselectWithGroups = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(40),
    },
    {
      label: 'Bad choices',
      options: [
        { value: 'Candy cane', label: 'Candy cane' },
        { value: 'Sugar bomb', label: 'Sugar bomb' },
        { value: 'Dr. Pepper', label: 'Dr. Pepper' },
      ],
    },
  ];
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changess
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      icon={<IconLocation />}
      required
      texts={{ label: 'Select one fruit or vegetable', placeholder: 'Choose one' }}
    />
  );
};

export const WithValidation = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Bad choices',
      options: [
        { value: 'Candy with choco', label: 'Candy' },
        { value: 'wrong', label: 'Do not choose me!' },
      ],
    },
    {
      label: 'Healthy choices',
      options: ['Apple', 'Carrot', 'Kale', 'Broccoli', 'Cucumber', 'Tomato', 'Banana', 'Lettuce'],
    },
  ];
  const texts: Partial<Texts> = {
    label: 'Select many fruits or vegetables',
    placeholder: 'Choose many',
  };
  const textsAsFunction: TextProvider = useCallback((key, selectedOptions) => {
    const textFromObj = texts[key];
    if (textFromObj) {
      return textFromObj;
    }
    const selectedValue = selectedOptions.length > 0 ? selectedOptions[0].value : '';
    const isError = selectedValue === 'wrong';
    if (key === 'assistive') {
      return selectedValue && !isError ? `Good choice!` : 'Please, choose a healthy option!';
    }
    if (key === 'error') {
      return isError ? `You choose poorly!` : '';
    }
    return `${key}!!`;
  }, []);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return <Select groups={groups} onChange={onChange} icon={<IconLocation />} required texts={textsAsFunction} />;
};
export const DynamicTexts = () => {
  const requiredCount = 4;
  const groups: SelectProps['groups'] = [
    {
      label: 'Bad choices',
      options: [
        { value: 'Candy with choco', label: 'Candy' },
        { value: 'wrong', label: 'Do not choose me!' },
      ],
    },
    {
      label: 'Healthy choices',
      options: ['Apple', 'Carrot', 'Kale', 'Broccoli', 'Cucumber', 'Tomato', 'Banana', 'Lettuce'],
    },
  ];
  const onChange: SelectProps['onChange'] = useCallback(() => {
    //
  }, []);

  const texts: Partial<Texts> = {
    label: 'Select many fruits or vegetables',
    placeholder: 'Choose many',
  };

  const textsAsFunction: TextProvider = useCallback((key, selectedOptions) => {
    const textFromObj = texts[key];
    if (textFromObj) {
      return textFromObj;
    }
    if (key === 'assistive') {
      if (selectedOptions.length >= requiredCount) {
        return 'All selections done';
      }
      return `Make at least ${requiredCount - selectedOptions.length} selections! Current selections ${pickSelectedValues(selectedOptions).join(' ')}`;
    }
    if (key === 'error') {
      if (pickSelectedValues(selectedOptions).includes('wrong')) {
        return `You choose poorly!`;
      }
      return '';
    }
    return `${key}!!`;
  }, []);
  return (
    <Select groups={groups} onChange={onChange} icon={<IconLocation />} required multiSelect texts={textsAsFunction} />
  );
};

export const LongLabels = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Bad choices',
      options: [
        {
          value: 'Candy with choco',
          label: 'Candy is very good source of energy and vibes and also is very good source of energy and vibes ',
        },
        { value: 'wrong', label: 'Do not choose me!' },
      ],
    },
    {
      label: 'Healthy choices',
      options: ['Apple', 'Carrot', 'Kale', 'Broccoli', 'Cucumber', 'Tomato', 'Banana', 'Lettuce'],
    },
  ];
  const onChange: SelectProps['onChange'] = useCallback(() => {
    //
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      icon={<IconLocation />}
      required
      multiSelect
      texts={{ label: 'Select one fruit or vegetable', placeholder: 'Choose one' }}
    />
  );
};

export const Error = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Bad choices',
      options: [
        { value: 'Candy with choco', label: 'Candy' },
        { value: 'wrong', label: 'Do not choose me!' },
      ],
    },
    {
      label: 'Healthy choices',
      options: ['Apple', 'Carrot', 'Kale', 'Broccoli', 'Cucumber', 'Tomato', 'Banana', 'Lettuce'],
    },
  ];
  const texts: Partial<Texts> = {
    label: 'Select one fruit or vegetable',
    placeholder: 'Choose one',
  };
  const textsAsFunction: TextProvider = useCallback((key, selectedOptions) => {
    const textFromObj = texts[key];
    if (textFromObj) {
      return textFromObj;
    }
    const selectedValue = selectedOptions.length > 0 ? selectedOptions[0].value : '';
    const isError = selectedValue === 'wrong';
    if (key === 'assistive') {
      return selectedValue && !isError ? `Good choice!` : 'Please, choose a healthy option!';
    }
    if (key === 'error') {
      if (!selectedOptions.length) {
        return 'Choose a healthy option!';
      }
      return isError ? `You choose poorly!` : '';
    }
    return `${key}!!`;
  }, []);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return <Select groups={groups} onChange={onChange} icon={<IconLocation />} required texts={textsAsFunction} />;
};

export const SingleselectWithFiltering = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(14),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(4),
    },
    {
      label: 'Even more healthy choices',
      options: generateOptionLabels(10),
    },
    {
      label: 'Bad choices',
      options: [
        { value: 'Candy', label: 'Candy' },
        { value: 'Poison', label: 'Poison' },
      ],
    },
  ];
  const texts: Partial<Texts> = {
    label: 'Select one fruit or vegetable',
    placeholder: 'Choose one',
  };
  const textsAsFunction: TextProvider = useCallback((key, selectedOptions) => {
    const textFromObj = texts[key];
    if (textFromObj) {
      return textFromObj;
    }
    const selectedValue = selectedOptions.length > 0 ? selectedOptions[0].value : '';
    const isError = selectedValue === 'Poison';
    if (key === 'assistive') {
      return selectedValue && !isError ? `Good choice!` : 'Please, choose a healthy option!';
    }
    if (key === 'error') {
      return isError ? `${selectedValue}?! Really?` : '';
    }
    return `${key}!!`;
  }, []);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);

  return (
    <Select
      groups={groups}
      onChange={onChange}
      filter={defaultFilter}
      icon={<IconLocation />}
      required
      texts={textsAsFunction}
    />
  );
};

export const MultiselectWithGroups = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(4),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(4),
    },
  ];

  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      multiSelect
      filter={defaultFilter}
      icon={<IconLocation />}
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose three or more' }}
    />
  );
};

export const MultiselectWithDisabledOptions = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(4).map((option, i) => {
        return { label: option, value: option, disabled: i === 3 };
      }),
    },
    {
      label: 'Only disabled choices',
      options: generateOptionLabels(4).map((option) => {
        return { label: option, value: option, disabled: true };
      }),
    },
  ];

  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      multiSelect
      filter={defaultFilter}
      icon={<IconLocation />}
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose three or more' }}
    />
  );
};

export const ExternalLabel = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(4).map((option, i) => {
        return { label: option, value: option, disabled: i === 3 };
      }),
    },
    {
      label: 'Only disabled choices',
      options: generateOptionLabels(4).map((option) => {
        return { label: option, value: option, disabled: true };
      }),
    },
  ];

  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <div>
      <label htmlFor="labelless-select-main-button" id="labelless-select-label">
        External label
      </label>
      <Select
        id="labelless-select"
        groups={groups}
        onChange={onChange}
        multiSelect
        filter={defaultFilter}
        icon={<IconLocation />}
        texts={{ placeholder: 'Choose three or more', dropdownButtonAriaLabel: 'Choose anything' }}
      />
    </div>
  );
};

export const MultiselectWithMinMax = () => {
  const initialGroups = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(6).map((option) => {
        return { label: option, value: option, disabled: false };
      }),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(6).map((option) => {
        return { label: option, value: option, disabled: false };
      }),
    },
  ];
  const groupStorage = useExternalGroupStorage({ groups: initialGroups });
  const history = useSelectionHistory();
  const selectionCount = useRef(0);
  const hasSelectedSomething = useRef(false);
  const requiredCount = 1;
  const maxCount = 2;
  const getAssistiveText = (selectedCount: number) => {
    return selectedCount >= requiredCount
      ? `Required number of selections done!`
      : `Please select ${requiredCount - selectedCount} more items. Up to ${maxCount} items.`;
  };
  const onChange: SelectProps['onChange'] = useCallback((selectedValues, lastClickedOption) => {
    if (!hasSelectedSomething.current && selectedValues.length) {
      hasSelectedSomething.current = true;
    }
    // If a group was selected, there might be an overflow of selections.
    const getAllowedSelections = (allSelections: Option[]) => {
      const overflow = allSelections.length - maxCount;
      if (lastClickedOption && lastClickedOption.isGroupLabel && history.getLatestOptions().length === maxCount) {
        return [];
      }
      if (overflow > 0) {
        const newSelections = [...history.getLatestOptions(), ...history.filterNewSelections(allSelections)];
        const allowed = newSelections.slice(0, maxCount);
        return allowed;
      }
      return allSelections;
    };
    const filteredSelections = getAllowedSelections(selectedValues).map((option) => option.value);
    selectionCount.current = filteredSelections.length;
    const maxReached = filteredSelections.length === maxCount;

    groupStorage.update(groupStorage.get(), (option) => {
      const isSelected = option.isGroupLabel ? option.selected : filteredSelections.includes(option.value);
      return {
        ...option,
        selected: isSelected,
        disabled: maxReached ? !isSelected : false,
      };
    });
    history.add(getSelectedOptions(groupStorage.get()), lastClickedOption);

    const returnProps = {
      groups: groupStorage.getAsProp(),
    };

    return returnProps;
  }, []);

  const texts: Partial<Texts> = {
    label: 'Select multiple fruits or vegetables',
    placeholder: 'Choose three or more',
  };
  const textsAsFunction: TextProvider = useCallback((key, selectedOptions) => {
    const textFromObj = texts[key];
    if (textFromObj) {
      return textFromObj;
    }
    const hasClearedSelections = hasSelectedSomething.current && !selectedOptions.length;
    if (key === 'assistive') {
      return getAssistiveText(selectedOptions.length);
    }
    if (key === 'error') {
      return hasClearedSelections ? `Please select ${requiredCount}-${maxCount} items` : '';
    }
    return `${key}!!`;
  }, []);

  const onBlur: SelectProps['onBlur'] = useCallback(async () => {
    if (selectionCount.current < requiredCount) {
      // setError(getAssistiveText(selectionCount.current));
    }
  }, []);
  return (
    <Select
      groups={groupStorage.getAsProp()}
      onChange={onChange}
      multiSelect
      filter={defaultFilter}
      icon={<IconLocation />}
      onBlur={onBlur}
      texts={textsAsFunction}
    />
  );
};

export const MultiselectWithPreselections = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(8).map((value, i) => {
        return {
          label: value,
          value,
          selected: i > 2,
        };
      }),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(8).map((value, i) => {
        return {
          label: value,
          value,
          selected: i === 0,
        };
      }),
    },
  ];
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      multiSelect
      filter={defaultFilter}
      icon={<IconLocation />}
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose many' }}
    />
  );
};

const createRandomGroups = (search: string) => {
  if (search === 'none') {
    return { groups: [] };
  }
  const groups: SelectProps['groups'] = [
    {
      label: 'Random items',
      options: [
        ...generateOptionLabels().map((value) => {
          return {
            value,
            label: value,
          };
        }),
      ],
    },
    {
      label: 'Common items',
      options: [
        {
          value: `${search}`,
          label: `Searched for ${search}`,
        },
        {
          value: `match`,
          label: `Same option everytime`,
        },
      ],
    },
  ];
  return { groups };
};

export const MultiselectWithSearch = () => {
  const groups: SelectProps['groups'] = [];
  const onChange: SelectProps['onChange'] = useCallback(() => {
    // track changes
  }, []);
  const onSearch: SelectProps['onSearch'] = useCallback(async (searchValue) => {
    await new Promise((res) => {
      setTimeout(res, 1000);
    });
    return Promise.resolve(searchValue ? createRandomGroups(searchValue) : {});
  }, []);
  return (
    <div>
      <Select
        groups={groups}
        onChange={onChange}
        onSearch={onSearch}
        multiSelect
        texts={{ placeholder: 'Choose many', label: 'Search and select multiple fruits or vegetables' }}
      />
      <p>Search with &quot;none&quot; to return an empty set</p>
    </div>
  );
};

export const MultiselectWithControls = () => {
  const initialGroups = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(4),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(4),
    },
  ];

  const groupStorage = useExternalGroupStorage({ groups: initialGroups });

  const propsRef = useRef<Partial<SelectProps>>({});

  const reRender = useForceRender();

  const resetSelections = () => {
    groupStorage.update(groupStorage.get(), (option) => {
      return {
        ...option,
        selected: false,
        disabled: false,
      };
    });
    propsRef.current.open = false;
    reRender();
  };
  const invertSelections = () => {
    groupStorage.update(groupStorage.get(), (option) => {
      return {
        ...option,
        selected: !option.selected,
        disabled: false,
      };
    });
    propsRef.current.open = false;
    reRender();
  };
  const selectAll = () => {
    groupStorage.update(groupStorage.get(), (option) => {
      return {
        ...option,
        selected: true,
        disabled: false,
      };
    });
    propsRef.current.open = false;
    reRender();
  };
  const toggleGroupDisable = () => {
    groupStorage.update(groupStorage.get(), (option) => {
      return {
        ...option,
        disabled: !option.disabled,
      };
    });
    propsRef.current.open = false;
    reRender();
  };
  const toggleDisable = () => {
    propsRef.current = { ...propsRef.current, disabled: !propsRef.current.disabled };
    reRender();
  };
  const toggleMenu = () => {
    propsRef.current = { ...propsRef.current, open: !propsRef.current.open };
    reRender();
  };

  const onChange: SelectProps['onChange'] = useCallback((selected) => {
    const selectedValues = selected.map((option) => option.value);
    groupStorage.update(groupStorage.get(), (option) => {
      return {
        ...option,
        selected: selectedValues.includes(option.value),
        disabled: !option.disabled,
      };
    });
  }, []);
  return (
    <>
      <style>
        {`
          .buttons{
            margin-top: 20px;
          }
          .buttons > *{
            margin-right: 10px;
          }
      `}
      </style>
      <div>
        <Select
          groups={groupStorage.getAsProp()}
          onChange={onChange}
          multiSelect
          filter={defaultFilter}
          disabled={propsRef.current.disabled}
          open={propsRef.current.open}
          texts={{ placeholder: 'Choose', label: 'Controlled select' }}
        />
        <div className="buttons">
          <Button onClick={resetSelections}>Reset selections</Button>
          <Button onClick={invertSelections}>Invert selections</Button>
          <Button onClick={selectAll}>Select all</Button>
          <Button onClick={toggleDisable}>Disable/enable component</Button>
          <Button onClick={toggleGroupDisable}>Disable/enable options</Button>
          <Button onClick={toggleMenu}>Open/Close list</Button>
        </div>
      </div>
    </>
  );
};

export const VirtualizedMultiselect = () => {
  let count = 0;
  const makeUniqueOption = (value: string) => {
    const valueWithCount = `${value} ${count}`;
    count += 1;
    return {
      label: value,
      value: valueWithCount,
    };
  };
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(1000).map(makeUniqueOption),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(1000).map(makeUniqueOption),
    },
  ];

  const onChange: SelectProps['onChange'] = useCallback((selected) => {
    return {
      assistiveText: `You have selected ${selected.length} option(s)`,
    };
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      multiSelect
      virtualize
      icon={<IconLocation />}
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose many' }}
    />
  );
};
export const VirtualizedSingleselect = () => {
  let count = 0;
  const makeUniqueOption = (value: string) => {
    const valueWithCount = `${value} ${count}`;
    count += 1;
    return {
      label: value,
      value: valueWithCount,
    };
  };
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(1000).map(makeUniqueOption),
    },
    {
      label: 'More healthy choices',
      options: generateOptionLabels(1000).map(makeUniqueOption),
    },
  ];

  const onChange: SelectProps['onChange'] = useCallback((selected) => {
    return {
      assistiveText: `You have selected ${selected.length} option(s)`,
    };
  }, []);
  return (
    <Select
      groups={groups}
      onChange={onChange}
      virtualize
      filter={defaultFilter}
      icon={<IconLocation />}
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose many' }}
    />
  );
};
export const VirtualizationWithoutGroups = () => {
  let count = 0;
  const makeUniqueOption = (value: string) => {
    const valueWithCount = `${value} ${count}`;
    count += 1;
    return {
      label: value,
      value: valueWithCount,
    };
  };
  const options: SelectProps['options'] = [
    ...generateOptionLabels(500).map(makeUniqueOption),
    ...generateOptionLabels(500).map(makeUniqueOption),
    ...generateOptionLabels(500).map(makeUniqueOption),
    ...generateOptionLabels(500).map(makeUniqueOption),
  ];

  const onChange: SelectProps['onChange'] = useCallback((selected) => {
    return {
      assistiveText: `You have selected ${selected.length} option(s)`,
    };
  }, []);
  return (
    <Select
      options={options}
      onChange={onChange}
      virtualize
      multiSelect
      filter={defaultFilter}
      icon={<IconLocation />}
      texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose many' }}
    />
  );
};

export const FocusListenerExample = () => {
  const [isFocused, setIsFocused] = useState(false);
  const groups: SelectProps['groups'] = useMemo(
    () => [
      {
        label: 'Healthy choices',
        options: generateOptionLabels(4),
      },
      {
        label: 'More healthy choices',
        options: generateOptionLabels(4),
      },
    ],
    [],
  );
  const onFocus: SelectProps['onFocus'] = useCallback(async () => {
    setIsFocused(true);
  }, []);
  const onBlur: SelectProps['onBlur'] = useCallback(async () => {
    setIsFocused(false);
  }, []);
  const onChange: SelectProps['onChange'] = useCallback(() => {
    //
  }, []);
  return (
    <>
      <style>
        {`
          .focused,
          .blurred {
            padding: 10px;
          }

          .focused {
            background-color: #defcde;
          }

          .blurred {
            background-color: #ececec;
          }

          .indicators {
            display: flex;
            flex-direction: column;
            margin: 20px 0;

            .indicator {
              padding-left: 20px;
              position: relative;
            }

            .indicator:before {
              background: #defcde;
              content: ' ';
              display: block;
              height: 10px;
              left: 0;
              position: absolute;
              top: 5px;
              width: 10px;
            }

            .indicator.blurIndicator:before {
              background: #ececec;
            }
          }

        `}
      </style>
      <div className={isFocused ? 'focused' : 'blurred'}>
        <Select
          groups={groups}
          onChange={onChange}
          multiSelect
          filter={defaultFilter}
          icon={<IconLocation />}
          onFocus={onFocus}
          onBlur={onBlur}
          texts={{ label: 'Select multiple fruits or vegetables', placeholder: 'Choose three or more' }}
        />
      </div>
      <div className="indicators">
        <div className="indicator">Focused</div>
        <div className="indicator blurIndicator">Blurred</div>
      </div>
      <Button>This is focusable</Button>
    </>
  );
};

export const WithMultipleComponents = () => {
  const [selectedTopCategory, updateSelectedTopCategory] = useState<Option | null>(null);
  const [subCategoryOptions, updateSubcategoryOptions] = useState<OptionInProps[]>([]);
  const [selectedItems, updateSelectedItems] = useState<Record<string, Option[]>>({});
  const topCategoryOptions = fruitsAndVegetables.sort().map((option) => {
    return {
      label: capitalise(option),
      value: option,
      selected: !!(selectedTopCategory && selectedTopCategory.value === option),
    };
  });
  const addToSelectedItems = (topCat: string, selections: Option[]) => {
    if (topCat) {
      const copy = { ...selectedItems };
      copy[topCat] = selections.map((s) => ({ ...s }));
      updateSelectedItems(copy);
    }
  };
  const removeFromSelectedItems = (topCat: string, subCat: string) => {
    const topCatLowerCase = topCat.toLowerCase();
    const items = selectedItems[topCatLowerCase] || [];
    const newItems = items.filter((e) => e.value !== subCat);
    addToSelectedItems(topCatLowerCase, newItems);
    if (selectedTopCategory?.value.toLowerCase() === topCatLowerCase) {
      updateSubcategoryOptions(
        subCategoryOptions.map((opt) => {
          return {
            ...opt,
            selected: !!newItems.find((o) => o.value === opt.value),
          };
        }),
      );
    }
  };

  const onTopCategoryChange: SelectProps['onChange'] = (selectedValues) => {
    const selection = selectedValues[0] || {};
    updateSelectedTopCategory(selection);
    if (selection.value) {
      const newSubCategoryOptions: OptionInProps[] = [];
      const selected = selectedItems[selection.value] || [];
      adjectives.sort().forEach((value) => {
        const label = capitalise(`${value} ${selection.value}`);
        newSubCategoryOptions.push({ label, value, selected: !!selected.find((opt) => opt.value === value) });
      });
      updateSubcategoryOptions(newSubCategoryOptions);
    } else {
      updateSubcategoryOptions([]);
    }
  };
  const onSubCategoryChange: SelectProps['onChange'] = (selectedValues) => {
    addToSelectedItems(String(selectedTopCategory && selectedTopCategory.value), selectedValues);
  };

  const SelectedValues = () => {
    const selectedTopCategories = Object.keys(selectedItems);
    if (!selectedTopCategories.length) {
      return null;
    }
    const values: OptionInProps[] = [];
    selectedTopCategories.forEach((key) => {
      const options = selectedItems[key];
      options.forEach((option) => {
        const value = `${key}: ${option.value}`;
        values.push({ label: capitalise(value), value });
      });
    });
    return (
      <>
        <style>
          {`
          .tags{
            margin-top: 20px;
          }
          .tags > *{
            margin-right: 10px;
          }
      `}
        </style>

        <div>
          <h3>Selected</h3>
          <div className="tags">
            {values.map((opt) => {
              const onDelete = () => {
                const [cat, subCat] = String(opt.label).split(': ');
                removeFromSelectedItems(cat, subCat);
              };
              return (
                <Tag onDelete={onDelete} key={opt.value}>
                  {opt.label}
                </Tag>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <Select
        options={topCategoryOptions}
        onChange={onTopCategoryChange}
        texts={{ label: 'Select your favourite', placeholder: 'Choose one' }}
      />
      {subCategoryOptions.length ? (
        <Select
          options={subCategoryOptions}
          onChange={onSubCategoryChange}
          multiSelect
          noTags
          texts={{ label: 'Select types', placeholder: 'Choose multiple' }}
        />
      ) : null}
      <SelectedValues />
    </div>
  );
};

export const WithRerenderDataStoring = () => {
  const Wrapper = () => {
    const render = useForceRender();
    const groups: SelectProps['groups'] = useMemo(
      () => [
        {
          label: 'Healthy choices',
          options: generateOptionLabels(4),
        },
        {
          label: 'More healthy choices',
          options: generateOptionLabels(4),
        },
      ],
      [],
    );

    const texts = useMemo(() => {
      return { label: 'Select multiple fruits or vegetables', placeholder: 'Choose three or more' };
    }, []);

    const onChange: SelectProps['onChange'] = useCallback(() => {
      // track changes
    }, []);
    return (
      <div>
        <Button onClick={render}>Re-render</Button>
        <Select
          groups={groups}
          onChange={onChange}
          multiSelect
          filter={defaultFilter}
          icon={<IconLocation />}
          texts={texts}
        />
      </div>
    );
  };

  const Main = () => {
    const keyRef = useRef(`${Date.now()}`);
    const render = useForceRender();
    const remount = () => {
      keyRef.current = `${Date.now()}`;
      render();
    };
    return (
      <div>
        <Button onClick={render}>Re-render</Button>
        <Button onClick={remount}>Re-mount</Button>
        <Wrapper key={keyRef.current} />
      </div>
    );
  };

  return <Main />;
};
