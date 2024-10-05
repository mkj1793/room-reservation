import { getElementIds } from '../../packages/react/src/components/select/utils';
import { SelectMetaData } from '../../packages/react/src/components/select/types';
import { Locator, Page } from '@playwright/test';
import {
  isElementVisible,
  isLocatorSelectedOrChecked,
  getScrollAmountToCenterElement,
  waitForElementToBeHidden,
  waitForElementToBeVisible,
  scrollWithMouse,
} from './element-helpers';
import { waitFor } from '../helpers';

type OptionFiltering = {
  includeOptions?: boolean;
  includeSingleSelectGroupLabels?: boolean;
  includeMultiSelectGroupLabels?: boolean;
  all?: boolean;
};

// sadly selectors defined in the Select's React files are not usable here as React's "styles" objects do not exist.
const singleSelectOptionSelector = 'li[role="option"][aria-selected]';
const singleSelectGroupLabelSelector = 'li[role="presentation"]';
// multiselect is a div if in group.
// otherwise singleSelect selector matches
const multiSelectOptionSelector = `div[role="checkbox"][aria-checked],${singleSelectOptionSelector}`;
const multiSelectGroupLabelSelector = 'div[role="checkbox"]';

export const createSelectHelpers = (page: Page, componentId: string) => {
  const getElementId = (componentId: string, elementName: keyof SelectMetaData['elementIds']) => {
    return getElementIds(componentId)[elementName];
  };

  const getElementByName = (elementName: keyof SelectMetaData['elementIds']) => {
    const id = getElementId(componentId, elementName);
    if (!id) {
      throw new Error(`Unknown select element ${elementName}. Id not found.`);
    }
    return page.locator(`#${id}`) as Locator;
  };

  const isOptionListOpen = async (): Promise<boolean> => {
    const listElement = getElementByName('list');
    return isElementVisible(listElement);
  };

  const openList = async (): Promise<Locator> => {
    const listElement = getElementByName('list');
    if (await isElementVisible(listElement)) {
      return Promise.resolve(listElement);
    }
    const button = getElementByName('button');
    await button.click({ timeout: 2000 });
    await waitForElementToBeVisible(getElementByName('list'));
    return Promise.resolve(getElementByName('list'));
  };

  const closeList = async (): Promise<Locator> => {
    const listElement = getElementByName('list');
    if (!(await isElementVisible(listElement))) {
      return Promise.resolve(listElement);
    }
    const button = getElementByName('button');
    await button.click({ timeout: 2000 });
    await waitForElementToBeHidden(getElementByName('list'));
    return Promise.resolve(getElementByName('list'));
  };

  const getOptionElements = async ({
    includeOptions = true,
    includeSingleSelectGroupLabels = false,
    includeMultiSelectGroupLabels = true,
    all = false,
  }: OptionFiltering = {}) => {
    const listElement = await openList();
    const selectorList = includeOptions || all ? [singleSelectOptionSelector, multiSelectOptionSelector] : [];
    if (includeMultiSelectGroupLabels || all) {
      selectorList.push(multiSelectGroupLabelSelector);
    }
    if (includeSingleSelectGroupLabels || all) {
      selectorList.push(singleSelectGroupLabelSelector);
    }
    const res = listElement.locator(selectorList.join(','));
    return res.all();
  };

  const getGroups = async () => {
    const listElement = await openList();
    return listElement.locator('div[role="group"]').all();
  };

  const getItemsInGroup = async (index: number) => {
    const groups = await getGroups();
    const group = groups[index];
    if (!group) {
      throw new Error(`No group found in index "${index}"`);
    }
    return group.locator('> *').all();
  };

  const getOptionsInGroup = async (index: number) => {
    const items = await getItemsInGroup(index);
    return items.slice(1);
  };

  const getGroupLabel = async (index: number) => {
    const items = await getItemsInGroup(index);
    return items.shift() as Locator;
  };

  const countOptionsInGroup = async (index: number) => {
    const items = await getOptionsInGroup(index);
    return items.length;
  };

  // this seems overcomplicated (and it is);
  // Encountered problems:
  // 1. using > div span:not[data-testid="placeholder"] will result failure when testing results with count() or all():
  // "not" engine expects non-empty selector list
  // 2. placeHolder.textContent hangs if count is not checked first
  // 3.locator().filter() never worked with any combinations
  const getSelectedOptionsInButton = async () => {
    const buttonElement = getElementByName('button');
    const placeHolder = buttonElement.locator('> div span[data-testid="placeholder"]');
    const hasPlaceholder = await placeHolder.count();
    const text = hasPlaceholder ? (await placeHolder.textContent()) || '' : '';
    return buttonElement.locator('> div span').filter({ hasNotText: text });
  };

  const getSelectedOptionsInTags = async () => {
    const tagList = getElementByName('tagList');
    return tagList.locator('> *');
  };

  const getSelectedOptionsCount = async () => {
    const currentOptions = await getSelectedOptionsInButton();
    return currentOptions.count();
  };

  const isOptionSelected = async (option: Locator) => {
    const isSelected = await isLocatorSelectedOrChecked(option);
    if (isSelected) {
      return Promise.resolve(option);
    }
    const currentOptions = await getSelectedOptionsInButton();
    const optionLabel = await option.innerText();
    const matchingOption = currentOptions.getByText(optionLabel);
    const matchingOptionCount = await matchingOption.count();
    if (matchingOptionCount > 0) {
      return Promise.resolve(option);
    }
    return Promise.resolve(null);
  };

  const waitUntilSelectedOptionCountMatches = async (expectedCount: number) => {
    await waitFor(async () => {
      const selectionCount = await getSelectedOptionsCount();
      if (selectionCount != expectedCount) {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    });
  };

  const waitUntilSelectedOptionCountChanges = async (currentCount: number) => {
    await waitFor(async () => {
      const selectionCount = await getSelectedOptionsCount();
      if (selectionCount == currentCount) {
        return Promise.resolve(false);
      }
      return Promise.resolve(true);
    });
  };

  const getOptionByIndex = async (props: OptionFiltering & { index: number }) => {
    await openList();
    const { index, ...rest } = props;
    const option = (await getOptionElements(rest))[index];
    if (!option) {
      throw new Error(`No option found in index "${index}"`);
    }
    return Promise.resolve(option);
  };

  const selectOptionByIndex = async (props: OptionFiltering & { index: number }) => {
    const currentCount = await getSelectedOptionsCount();
    const option = await getOptionByIndex(props);
    const isSelected = await isOptionSelected(option);
    if (isSelected) {
      return Promise.resolve(option);
    }
    await option.click();
    // if single select, the menu is closed, so cannot check the option element itself
    await waitUntilSelectedOptionCountMatches(currentCount + 1);
    return Promise.resolve(option);
  };

  const scrollOptionInToView = async (option: Locator) => {
    const listContainer = getElementByName('selectionsAndListsContainer');
    const scrollTo = await getScrollAmountToCenterElement(option, listContainer);
    await scrollWithMouse(listContainer, scrollTo);
  };

  const selectGroupByIndex = async ({ index }: { index: number }) => {
    const currentCount = await getSelectedOptionsCount();
    const groupLabel = await getGroupLabel(index);
    const isSelected = await isOptionSelected(groupLabel);
    if (isSelected) {
      return Promise.resolve(groupLabel);
    }
    await groupLabel.click();
    // if single select, the menu is closed, so cannot check the option element itself
    await waitUntilSelectedOptionCountChanges(currentCount);

    const options = await getOptionsInGroup(index);
    await scrollOptionInToView(options[options.length - 1]);
    return Promise.resolve(groupLabel);
  };

  const getBoundingBox = async (spacing = 10) => {
    const box = { x: 0, y: 0, height: 0, width: 0 };
    const container = getElementByName('container');
    const selectionsAndListsContainer = getElementByName('selectionsAndListsContainer');
    const cBox = (await container.boundingBox()) as DOMRect;
    const sBox = (await selectionsAndListsContainer.boundingBox()) as DOMRect;
    console.log('cBox', cBox);
    console.log('sBox', sBox);
    const maxX = Math.max(cBox.x + cBox.width, sBox.x + sBox.width);
    const maxY = Math.max(cBox.y + cBox.height, sBox.y + sBox.height);
    box.x = Math.min(cBox.x, sBox.x) - spacing;
    box.y = Math.min(cBox.y, sBox.y) - spacing;
    box.width = Math.min(maxX - box.x) + spacing;
    box.height = Math.min(maxY - box.y) + spacing;
    return box;
  };

  return {
    closeList,
    countOptionsInGroup,
    getBoundingBox,
    getGroupLabel,
    getGroups,
    getElementByName,
    getItemsInGroup,
    getOptionByIndex,
    getOptionElements,
    getOptionsInGroup,
    getSelectedOptionsInButton,
    getSelectedOptionsInTags,
    isOptionListOpen,
    openList,
    scrollOptionInToView,
    selectGroupByIndex,
    selectOptionByIndex,
  };
};
