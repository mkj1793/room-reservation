import React, { useCallback, useState } from 'react';

import { Group, SelectProps } from './types';
import { IconLocation } from '../../icons';
import { Select } from './Select';
import { Button } from '../button/Button';
import { clearAllSelectedOptions, propsToGroups } from './utils';

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

const dummyOnChange: SelectProps['onChange'] = () => ({});

export const Example = () => {
  const options = generateOptionLabels(20);
  return (
    <Select options={options} label="Label" placeholder="Choose one" icon={<IconLocation />} onChange={dummyOnChange} />
  );
};

export const OptionsAsHtml = () => {
  return (
    <Select label="Label" placeholder="Choose one" onChange={dummyOnChange}>
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

export const WithGroups = () => {
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

  return (
    <Select groups={groups} label="Label" placeholder="Choose one" icon={<IconLocation />} onChange={dummyOnChange}>
      <optgroup label="Group label">
        <option value="label">Text</option>
      </optgroup>
    </Select>
  );
};

export const WithControls = () => {
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

  const onChange: SelectProps['onChange'] = useCallback(() => {
    // not needed
  }, []);

  const [props, updateProps] = useState<SelectProps>({
    groups: propsToGroups({ groups: initialGroups }),
    onChange,
    required: true,
    disabled: false,
    open: false,
    invalid: false,
    placeholder: 'Choose',
    label: 'Controlled select',
  });

  const resetSelections = () => {
    updateProps({ ...props, groups: clearAllSelectedOptions(props.groups as Group[]), open: false });
  };

  const toggleDisable = () => {
    const current = props.disabled;
    updateProps({ ...props, disabled: !current });
  };

  const toggleMenu = () => {
    const current = props.open;
    updateProps({ ...props, open: !current });
  };

  const toggleInvalid = () => {
    const current = props.invalid;
    updateProps({ ...props, invalid: !current });
  };

  const toggleRequired = () => {
    const current = props.required;
    updateProps({ ...props, required: !current });
  };
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
        <Select {...props} />
        <div className="buttons">
          <Button onClick={resetSelections}>Reset selections</Button>
          <Button onClick={toggleDisable}>Disable/enable component</Button>
          <Button onClick={toggleMenu}>Open/Close list</Button>
          <Button onClick={toggleInvalid}>Set valid/invalid</Button>
          <Button onClick={toggleRequired}>Toggle required</Button>
        </div>
      </div>
    </>
  );
};

export const WithValidation = () => {
  const groups: SelectProps['groups'] = [
    {
      label: 'Healthy choices',
      options: generateOptionLabels(3),
    },
    {
      label: 'Bad choices',
      options: [
        { value: 'invalid1', label: 'Candy cane' },
        { value: 'invalid2', label: 'Sugar bomb' },
        { value: 'invalid3', label: 'Dr. Pepper' },
      ],
    },
  ];

  const onChange: SelectProps['onChange'] = (selectedOptions) => {
    const hasErrorSelection = !!selectedOptions.find((option) => option.value.includes('invalid'));
    return {
      invalid: hasErrorSelection,
    };
  };

  return <Select groups={groups} label="Pick a healty choice" placeholder="Choose one" onChange={onChange} />;
};