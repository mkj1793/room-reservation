import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { SelectedOptionsContainer } from './SelectedOptionsContainer';
// eslint-disable-next-line jest/no-mocks-import
import {
  resetMockData,
  mockUseSelectDataHandlersContents,
  getCurrentMockMetaData,
  resetMockMetaData,
  getCurrentMockData,
} from '../../hooks/__mocks__/useSelectDataHandlers';

jest.mock('../../hooks/useSelectDataHandlers', () => ({
  useSelectDataHandlers: () => mockUseSelectDataHandlersContents,
}));

describe('<SelectedOptionsContainer />', () => {
  beforeEach(() => {
    resetMockData();
    resetMockMetaData();
  });
  const initTests = () => {
    const result = render(<SelectedOptionsContainer />);
    const getElementById = (id?: string) => {
      return id ? result.container.querySelector(`#${id}`) : null;
    };
    return {
      ...result,
      getElementById,
      metaData: getCurrentMockMetaData(),
      data: getCurrentMockData(),
    };
  };

  it('Main button and arrow button are in rendered', () => {
    const { getElementById, metaData } = initTests();
    expect(getElementById(metaData.elementIds.button)).not.toBeNull();
    expect(getElementById(metaData.elementIds.arrowButton)).not.toBeNull();
  });
  it('Clear button is not found when there are no selected options', () => {
    const { getElementById, metaData } = initTests();
    expect(getElementById(metaData.elementIds.clearButton)).toBeNull();
  });
  it('Placeholder is rendered if there are no selected options', () => {
    const { getElementById, data, metaData } = initTests();
    const { placeholder } = data;
    const button = getElementById(metaData.elementIds.button) as HTMLButtonElement;
    expect(button.innerHTML.includes(String(placeholder))).toBeTruthy();
  });
});
