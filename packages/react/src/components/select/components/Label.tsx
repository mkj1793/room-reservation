import React from 'react';

import { FieldLabel } from '../../../internal/field-label/FieldLabel';
import { useSelectDataHandlers } from '../hooks/useSelectDataHandlers';
import { getTextKeyFromDataHandlers } from '../texts';
import { SelectDataHandlers } from '../types';

type FieldLabelProps = Parameters<typeof FieldLabel>[0];

const createLabelProps = (dataHandlers: SelectDataHandlers): FieldLabelProps => {
  const { getData, getMetaData } = dataHandlers;
  const { required } = getData();
  const { elementIds } = getMetaData();
  const label = getTextKeyFromDataHandlers('label', dataHandlers);
  return {
    required,
    label,
    inputId: elementIds.dropdownButton,
    id: elementIds.label,
  };
};

export const Label = () => {
  const props = createLabelProps(useSelectDataHandlers());
  if (!props.label) {
    return null;
  }
  return <FieldLabel {...props} />;
};
