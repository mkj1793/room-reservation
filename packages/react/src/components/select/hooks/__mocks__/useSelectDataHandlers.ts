import { getMockCalls } from '../../../../utils/testHelpers';
import { ChangeEvent } from '../../../dataProvider/DataContext';
import { SelectData, SelectMetaData } from '../../types';
import { propsToGroups } from '../../utils';

export type OptionalSelectData = Partial<SelectData>;
export type OptionalSelectMetaData = Omit<Partial<SelectMetaData>, 'elementIds' | 'refs'> & {
  elementIds: Partial<SelectMetaData['elementIds']>;
  refs: Partial<SelectMetaData['refs']>;
};

const mockData: { current: OptionalSelectData; default: OptionalSelectData } = {
  current: {},
  default: {
    label: 'Label',
    placeholder: 'Placeholder',
    groups: propsToGroups({ options: ['Option 1'] }),
  },
};

const mockDataUpdateTracker = jest.fn();

export function updateMockData(data: OptionalSelectData) {
  mockData.current = {
    ...mockData.current,
    ...data,
  };
}

export function resetMockData() {
  mockData.current = {
    ...mockData.default,
  };
  mockDataUpdateTracker.mockReset();
}

export function getCurrentMockData() {
  return mockData.current;
}

const mockMetaData: { current: OptionalSelectMetaData; default: OptionalSelectMetaData } = {
  current: { elementIds: {}, refs: {} },
  default: {
    elementIds: {
      label: 'label-id',
      button: 'button-id',
      arrowButton: 'arrow-id',
      clearButton: 'clear-id',
    },
    refs: {
      selectionButton: { current: null },
    },
  },
};

export function updateMockMetaData(data: OptionalSelectMetaData) {
  mockMetaData.current = {
    ...mockMetaData.current,
    ...data,
  };
}

const mockMetaDataUpdateTracker = jest.fn();

export function resetMockMetaData() {
  mockMetaData.current = {
    ...mockMetaData.default,
  };
  mockMetaDataUpdateTracker.mockReset();
}

export function getCurrentMockMetaData() {
  return mockMetaData.current;
}

const triggerTracker = jest.fn();

export function getTriggeredEvents() {
  return getMockCalls(triggerTracker);
}

export function getDataUpdates() {
  return getMockCalls(mockDataUpdateTracker);
}

export function getMetaDataUpdates() {
  return getMockCalls(mockMetaDataUpdateTracker);
}

// name must start with "mock"
export const mockUseSelectDataHandlersContents = {
  getData: (): OptionalSelectData => {
    return mockData.current;
  },
  updateData: (newData: Partial<SelectData>) => {
    mockDataUpdateTracker(newData);
    updateMockData(newData);
  },
  getMetaData: (): OptionalSelectMetaData => {
    return mockMetaData.current;
  },
  updateMetaData: (newMetaData: Partial<SelectMetaData>) => {
    mockDataUpdateTracker(newMetaData);
    mockMetaDataUpdateTracker(newMetaData);
  },
  trigger: (event: ChangeEvent) => {
    triggerTracker(event);
  },
};
