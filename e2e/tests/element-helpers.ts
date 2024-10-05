import { ElementHandle, Locator, Page } from '@playwright/test';
import { getLocatorOrHandlePage } from '../helpers';

export async function isElementVisible(element: ElementHandle | Locator | null) {
  if (!element || !element.isVisible) {
    return false;
  }
  return element.isVisible();
}

// Evaluate runs the given function outside of window context
// and returning the element, returns a Node, even if "el" is HTMLELement in function's scope.
// https://playwright.dev/docs/evaluating
// PS: console.log inside evaluateLocator does not output!
export async function evaluateLocator<T = unknown>(
  locator: Locator,
  func: (element: HTMLElement | SVGElement) => T,
): Promise<T> {
  return locator.evaluate(func);
}

// checking element, so function and each getAttribute() does not need to be async
export function isHTMLElementSelectedOrChecked(element: HTMLElement | SVGElement): boolean {
  const isValueTruthy = (value: string | null) => {
    if (!value || value === 'false') {
      return false;
    }
    return true;
  };

  return (
    isValueTruthy(element.getAttribute('checked')) ||
    isValueTruthy(element.getAttribute('selected')) ||
    isValueTruthy(element.getAttribute('aria-checked')) ||
    isValueTruthy(element.getAttribute('aria-selected'))
  );
}

export async function isLocatorSelectedOrChecked(element: Locator): Promise<boolean> {
  return evaluateLocator<boolean>(element, isHTMLElementSelectedOrChecked);
}

export async function waitForElementToBeVisible(element: Locator | null) {
  if (!element || !element.waitFor) {
    return Promise.reject(new Error('No element for waitForElementVisible'));
  }

  return element.waitFor({ state: 'visible' });
}

export async function waitForElementToBeHidden(element: Locator | null) {
  if (!element || !element.waitFor) {
    return Promise.reject(new Error('No element for waitForElementToBeHidden'));
  }

  return element.waitFor({ state: 'hidden' });
}

export async function isLocatorFocused(element: Locator) {
  return element.evaluate((el) => {
    const active = document.activeElement;
    return el === active;
  });
}

// console.log() do not work inside evaluate, so for debugging an element, its outerHTML is returned.
export async function getFocusedElement(anyLocator: Locator, debug = false) {
  return anyLocator.evaluate((el, debug) => {
    const active = document.activeElement;
    return debug && active ? active.outerHTML : active;
  }, debug);
}

export async function focusLocator(element: Locator) {
  await element.focus();
  return element;
}

// does not assume element could be higher than container etc.
// scrolls only vertically
// scrolls to center
export async function getScrollAmountToCenterElement(element: Locator, container: Locator) {
  const containerBox = await container.boundingBox();
  const elementBox = await element.boundingBox();
  if (!containerBox || !elementBox) {
    return 0;
  }
  const viewportMaxY = containerBox.y + containerBox.height;
  const elementMaxY = elementBox.y + elementBox.height;
  if (elementMaxY < viewportMaxY && elementBox.y > containerBox.y) {
    // already visible
    return 0;
  }
  if (elementBox.y < containerBox.y) {
    return elementBox.y - containerBox.y;
  }
  const vpCenter = containerBox.y + containerBox.height / 2;
  return elementBox.y + elementBox.height / 2 - vpCenter;
}

// moves mouse to the middle of the element and uses mouse wheel to scroll.
// useful when scrolled element is inside an element which is inside a container, like a dropdown list.
export async function scrollWithMouse(element: Locator, scrollAmount: number) {
  if (scrollAmount == 0) {
    return false;
  }
  const page = await getLocatorOrHandlePage(element);
  const elementBox = await element.boundingBox();
  if (!elementBox) {
    return Promise.resolve(false);
  }
  await page.mouse.move(elementBox.x + elementBox.width / 2, elementBox.y + elementBox.height / 2);
  await page.mouse.wheel(0, scrollAmount);

  return Promise.resolve(true);
}

// not tested yet:
export async function scrollTo(element: Locator, scrollAmount: number) {
  if (scrollAmount == 0) {
    return false;
  }

  return element.evaluate((el, y) => {
    el.scrollTop = y;
  }, scrollAmount);
}
