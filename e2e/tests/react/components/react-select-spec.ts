import { test, expect } from '@playwright/test';
import { takeAllStorySnapshots, getComponentStorybookUrls, takeScreenshotWithSpacing, waitFor } from '../../../helpers';
import { createSelectHelpers } from '../../component-helpers';
import { focusLocator, getFocusedElement, isLocatorFocused } from '../../element-helpers';
import { createKeyboardHelpers } from '../../keyboard-helpers';

const componentName = 'select';
const storybook = 'react';
const takeStateSnapshots = true;

test.describe(`Testing ${storybook} component "${componentName}"`, () => {
  test('Take snapshots of all stories', async ({ page, isMobile }) => {
    //await takeAllStorySnapshots({ page, isMobile, takeStateSnapshots, storybook, componentName });
  });
});

test.describe(`Testing ${storybook} component "${componentName}"`, () => {
  test('Select option and group', async ({ page, isMobile }) => {
    if (!isMobile) {
      const targetStories = await getComponentStorybookUrls(page, componentName, storybook, [
        'Multiselect With Groups',
      ]);
      //console.log('targetStories', targetStories);
      const componentUrl = targetStories[0];
      await page.goto(`file://${componentUrl}`);
      const selectId = 'hds-select-component';

      const selectComponent = createSelectHelpers(page, selectId);
      const isOpen = await selectComponent.isOptionListOpen();
      expect(isOpen).toBeFalsy();

      await selectComponent.selectOptionByIndex({ index: 1 });
      await selectComponent.selectGroupByIndex({ index: 1 });

      const screenshotName = `${storybook}-${componentUrl.split('/').pop()}-${
        isMobile ? 'mobile' : 'desktop'
      }-custom-multi-select`;

      const clip = await selectComponent.getBoundingBox();
      await expect(page).toHaveScreenshot(`${screenshotName}.png`, { clip, fullPage: true });
    }
  });
  test('Keyboard navigation', async ({ page, isMobile }) => {
    if (!isMobile) {
      const targetStories = await getComponentStorybookUrls(page, componentName, storybook, [
        'Multiselect With Groups',
      ]);
      //console.log('targetStories', targetStories);
      const componentUrl = targetStories[0];
      await page.goto(`file://${componentUrl}`);
      const selectId = 'hds-select-component';
      const selectComponent = createSelectHelpers(page, selectId);
      const keyboard = createKeyboardHelpers(page);
      expect(await selectComponent.isOptionListOpen()).toBeFalsy();

      await focusLocator(selectComponent.getElementByName('button'));

      const button = selectComponent.getElementByName('button');
      await button.focus();

      await keyboard.space(); // opens menu and moves focus to #0 (label)
      await waitFor(() => {
        return selectComponent.isOptionListOpen();
      });

      await keyboard.down(); // moves focus to #1
      await keyboard.down(); // moves focus to #2
      await keyboard.down(); // moves focus to #3

      const elHTML = await getFocusedElement(selectComponent.getElementByName('button'), true);

      const options = await selectComponent.getOptionElements({ all: true });
      const isFocused = await isLocatorFocused(options[3]);
      console.log('---isFocused', isFocused);
      await waitFor(() => {
        return isLocatorFocused(options[3]);
      });

      const screenshotName = `${storybook}-${componentUrl.split('/').pop()}-${
        isMobile ? 'mobile' : 'desktop'
      }-custom-multi-select-kb`;

      const clip = await selectComponent.getBoundingBox();
      await expect(page).toHaveScreenshot(`${screenshotName}.png`, { clip, fullPage: true });
    }
  });
});
