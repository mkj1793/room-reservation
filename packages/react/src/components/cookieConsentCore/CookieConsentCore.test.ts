import { fireEvent, waitFor } from '@testing-library/dom';
import fetchMock, { disableFetchMocks, enableFetchMocks } from 'jest-fetch-mock';

import { CookieConsentCore } from './cookieConsentCore';
import * as settingsJSON from './example/helfi_sitesettings.json';

type Options = {
  siteSettingsJsonUrl: string;
  language: string;
  theme?: string;
  targetSelector?: string;
  spacerParentSelector?: string;
  pageContentSelector?: string;
  submitEvent?: string;
  settingsPageSelector?: string;
};

jest.mock('hds-core/lib/components/cookie-consent/cookieConsent', () => ({
  default: '/* We are not using styles inside jest yet */',
}));

type CookieConsentClass = InstanceType<typeof CookieConsentCore>;

describe('cookieConsentCore', () => {
  let mockTextEncoderDisposer: () => void;
  let mockCryptoDisposer: () => void;
  let instance: CookieConsentClass;
  const rootId = 'hds-cc';
  const formId = 'hds-cc-form';
  const showDetailsButtonSelector = `#${rootId} .hds-cc__aligner button`;
  const acceptAllButtonSelector = `.hds-cc__buttons button[data-approved="all"]`;
  const acceptRequiredButtonSelector = `.hds-cc__buttons button[data-approved="required"]`;
  const essentialCookiesCheckboxSelector = `#essential-cookies`;
  const containerSelector = `.hds-cc__container`;

  const options: Options = {
    siteSettingsJsonUrl: 'http://localhost/helfi_sitesettings.json',
    // siteSettingsObj,
    language: 'fi', // Lang code defaults to 'en'
    // theme: 'black', // Defaults to 'bus'
    // targetSelector: 'body', // Defaults to 'body'
    // spacerParentSelector: 'body', // Defaults to 'body'
    // pageContentSelector: 'body', // Defaults to 'body'
    // submitEvent: 'cookie-consent-changed', // If this string is set, triggers a window level event with that string and detail.acceptedGroups before closing banner. If not set, reloads page instead
    settingsPageSelector: '#hds-cookie-consent-full-page', // If this string is set and matching element is found on page, instead of banner, show a full page cookie settings replacing the matched element.
  };

  const getShadowRoot = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const shadowRoots = Array.from(body.children).map((n) => n.shadowRoot);
    return shadowRoots[0] as ShadowRoot;
  };
  const getRootElement = () => {
    return getShadowRoot().getElementById(rootId) as HTMLDivElement;
  };

  const getFormElement = () => {
    return getShadowRoot().getElementById(formId) as HTMLFormElement;
  };

  const getContainerElement = () => {
    return getRootElement().querySelector(containerSelector) as HTMLDivElement;
  };

  const getShowDetailsButtonElement = () => {
    return getRootElement().querySelector(showDetailsButtonSelector) as HTMLButtonElement;
  };

  const getAcceptAllButtonElement = () => {
    return getRootElement().querySelector(acceptAllButtonSelector) as HTMLButtonElement;
  };

  const getAcceptRequiredButtonElement = () => {
    return getRootElement().querySelector(acceptRequiredButtonSelector) as HTMLButtonElement;
  };

  const getEssentialCookiesCheckbox = () => {
    return getRootElement().querySelector(essentialCookiesCheckboxSelector) as HTMLInputElement;
  };

  const isDetailsExpanded = () => {
    const button = getShowDetailsButtonElement();
    return button.getAttribute('aria-expanded') === 'true';
  };

  const createDomRect = (props: Partial<DOMRect>): DOMRect => {
    const rect = {
      left: props.left || props.x || 0,
      top: props.top || props.y || 0,
      width: props.width || 0,
      height: props.height || 0,
      right: props.right || 0,
      bottom: props.bottom || 0,
    };

    const right = Math.max(rect.right, rect.left + rect.width);
    const bottom = Math.max(rect.bottom, rect.top + rect.height);
    const width = Math.max(rect.width, rect.right - rect.left);
    const height = Math.max(rect.height, rect.bottom - rect.top);

    return {
      left: rect.left,
      top: rect.top,
      width,
      height,
      right,
      bottom,
      x: rect.left,
      y: rect.top,
      toJSON: () => '',
    };
  };

  const addBoundingClientRect = (element: HTMLElement, rect?: DOMRect) => {
    jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => {
      return rect || createDomRect({});
    });
  };

  const addMutationEntries = (entries: ResizeObserverEntry[]) => {
    return entries.map((e) => {
      return {
        ...e,
        contentRect: createDomRect({}),
        target: getContainerElement(),
      };
    });
  };

  const initMockTextEncoder = (responseList: string[]) => {
    const current = global.TextEncoder;
    const mockTextEncoder = function MockTextEncoder() {
      this.prototype = Object.create(null).prototype;
      this.encode = () => {
        return responseList.shift();
      };
    } as unknown as TextEncoder;

    // @ts-ignore
    global.TextEncoder = mockTextEncoder;

    return () => {
      if (current) {
        global.TextEncoder = current;
      }
    };
  };
  const initCryptoTextEncoder = (responseList: string[]) => {
    const current = global.crypto;
    const mockCrypto = {
      subtle: {
        digest: () => {
          return Promise.resolve(responseList.shift() || 'hash');
        },
      },
    };

    // @ts-ignore
    global.crypto = mockCrypto;

    return () => {
      if (current) {
        global.crypto = current;
      }
    };
  };

  const returnSettingsJSON = () =>
    Promise.resolve({
      body: JSON.stringify(settingsJSON),
      headers: {
        'content-type': 'application/json',
      },
    });

  const waitForRoot = async () => {
    await waitFor(() => {
      const root = getRootElement();
      if (!root) {
        throw new Error('No root');
      }
    });
  };

  beforeAll(() => {
    enableFetchMocks();
    fetchMock.mockResponse((req) => {
      if (req.url.includes(options.siteSettingsJsonUrl)) {
        return returnSettingsJSON();
      }
      return Promise.reject(new Error(`Unknown url ${req.url}`));
    });
    // @ts-ignore next-line
    global.ResizeObserverEntrySpy = addMutationEntries;
  });

  beforeEach(() => {
    try {
      const el = getRootElement();
      if (el) {
        el.remove();
      }
    } catch (e) {
      // it is normal to fail
    }
    mockTextEncoderDisposer = initMockTextEncoder(['xx']);
    mockCryptoDisposer = initCryptoTextEncoder(['xx']);
    instance = new CookieConsentCore(options);
  });

  afterEach(() => {
    if (mockCryptoDisposer) {
      mockCryptoDisposer();
    }
    if (mockTextEncoderDisposer) {
      mockTextEncoderDisposer();
    }
  });

  afterAll(() => {
    disableFetchMocks();
    // @ts-ignore next-line
    global.ResizeObserverEntrySpy = undefined;
  });

  it('adds elements to shadowRoot', async () => {
    await waitForRoot();
    expect(instance).toBeDefined();
    expect(getFormElement()).not.toBeNull();
    expect(getContainerElement()).not.toBeNull();
    expect(getAcceptAllButtonElement()).not.toBeNull();
    expect(getAcceptRequiredButtonElement()).not.toBeNull();
    expect(getShowDetailsButtonElement()).not.toBeNull();
    expect(getEssentialCookiesCheckbox()).not.toBeNull();
    expect(isDetailsExpanded()).toBeFalsy();
  });

  it('Changes on button click', async () => {
    await waitForRoot();
    addBoundingClientRect(getContainerElement());
    fireEvent.click(getShowDetailsButtonElement());
    expect(isDetailsExpanded()).toBeTruthy();
  });

  // ## Config
  // - Is the settings file properly linked?

  it('should throw an error if siteSettingsJsonUrl and siteSettingsObj is not defined', () => {
    expect(() => {
      // eslint-disable-next-line no-new
      new CookieConsentCore({ ...options, siteSettingsJsonUrl: '' });
    }).toThrow('Cookie consent: siteSettingsJsonUrl or siteSettingsObj is required');
  });

  /* eslint-disable jest/no-commented-out-tests */

  // This is not yet working
  // it('should throw an error if siteSettingsJsonUrl is not found', () => {
  //   expect(() => {
  //     fetchMock.mockResponseOnce(JSON.stringify({}), { status: 404 });
  //     // eslint-disable-next-line no-new
  //     new CookieConsentCore({ ...options });
  //   }).toThrow('Unable to fetch cookie consent settings: Error: 404');
  // });

  // - If the banner is set for custom targets, are the selectors available on DOM?
  // it('should throw error if targetSelector is set but not found on DOM', () => {});
  // it('should throw error if spacerParentSelector is set but not found on DOM', () => {});
  // it('should throw error if pageContentSelector is set but not found on DOM', () => {});

  // - Are there whitelisted groups available in window scope?
  // it('should not allow consenting from API to a group that is not whitelisted', () => {});

  // - Does the settings file have required group set with consent cookie?
  // it('should throw error if required group with the consent cookie is missing from siteSettings', () => {});

  // - Is the settings file properly formatted?
  // it('should throw error if required group properties can not be accessed', () => {});

  // ## Functionalities
  // - When user enters the site first time with empty cookies, does the banner show up?
  // it('should render banner if the consent cookie is not set', () => {});

  // - When user accepts essential cookies, the cookie should be written with essential groups.
  // it('should add consentCookie with all groups when user consents to all groups', () => {});

  // - When user accepts all cookies, the cookie should be written with all groups mentioned in settings.
  // it('should add consentCookie with only required groups when user consents only to required groups', () => {});

  // - When user selects certain groups, the cookie should be written according to those.
  // it('should add consentCookie with required groups and selected groups when user consents to selected cookie groups', () => {});

  // - If the user removes group permission, the groups should be removed from the consentCookie
  // it('should modify consentCookie to contain only required and consented groups when user changes their consent', () => {});

  // - If the user removes group permission, the related items should be removed.
  // it('should remove cookies that were previously consented when user removes consent and it should not report them as illegal when monitoring', () => {});
  // it('should remove localStorage items that were previously consented when user removes consent and it should not report them as illegal when monitoring', () => {});
  // it('should remove sessionStorage items that were previously consented when user removes consent and it should not report them as illegal when monitoring', () => {});
  // it('should remove indexedDb items that were previously consented when user removes consent and it should not report them as illegal when monitoring', () => {});
  // it('should remove cache storage items that were previously consented when user removes consent and it should not report them as illegal when monitoring', () => {});

  // - It should monitor and report items that have not been consented to if monitor interval parameter is set in siteSettings above 0
  // it('should monitor and report cookies that have not been consented to if monitor interval parameter is set in siteSettings above 0', () => {});
  // it('should monitor and report localStorage items that have not been consented to if monitor interval parameter is set in siteSettings above 0', () => {});
  // it('should monitor and report sessionStorage items that have not been consented to if monitor interval parameter is set in siteSettings above 0', () => {});
  // it('should monitor and report indexedDb items that have not been consented to if monitor interval parameter is set in siteSettings above 0', () => {});
  // it('should monitor and report cache storage items that have not been consented to if monitor interval parameter is set in siteSettings above 0', () => {});

  // - It should remove items that have not been consented to if remove parameter is set in siteSettings
  // it('should remove cookies that have not been consented to if remove parameter is set in siteSettings', () => {});
  // it('should remove localStorage items that have not been consented to if remove parameter is set in siteSettings', () => {});
  // it('should remove sessionStorage items that have not been consented to if remove parameter is set in siteSettings', () => {});
  // it('should remove indexedDb items that have not been consented to if remove parameter is set in siteSettings', () => {});
  // it('should remove cache storage items that have not been consented to if remove parameter is set in siteSettings', () => {});

  // ## State changes
  // - If the settings file has changed, the banner should appear
  // it('should show banner if the hashes do not match in any consented group', () => {});

  // - If the settings are changed, the banner should recognize the changes
  // it('should remove only invalid (checksum mismatch) groups from cookie', () => {});

  // ## Visual issues
  // - Do the checkboxes in banner describe the accepted categories?
  // it('should have same checkbox checked values with cookie string', () => {});

  // - Does the banner hide footer?
  // it('should have footer element offsetTop not overlapping with banner', () => {});
});
