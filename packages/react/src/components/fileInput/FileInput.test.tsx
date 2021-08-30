import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { FileInput } from './FileInput';

// eslint-disable-next-line
const onChangeTest = () => {};

describe('<FileInput /> spec', () => {
  it('renders the component', () => {
    const { asFragment } = render(
      <FileInput
        id="test-file-input"
        label="Choose a file"
        buttonLabel="Add file"
        language="en"
        accept=".png,.jpg"
        helperText="Only .png and .jpg files."
        onChange={onChangeTest}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(
      <FileInput
        id="test-file-input"
        label="Choose a file"
        buttonLabel="Add file"
        language="en"
        accept=".png,.jpg"
        helperText="Only .png and .jpg files."
        onChange={onChangeTest}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should list added files', async () => {
    const inputLabel = 'Choose files';
    const listAriaLabel = 'Added files';
    const fileNameA = 'test-image-a.png';
    const fileA = new File([''], fileNameA, { type: 'image/png' });
    Object.defineProperty(fileA, 'size', { value: 12.5 * 1024 * 1024 });
    const fileNameB = 'test-doc-b.json';
    const fileB = new File([''], fileNameB, { type: 'application/json' });
    Object.defineProperty(fileB, 'size', { value: 110 * 1024 });
    const fileNameC = 'test-image-c.png';
    const fileC = new File([''], fileNameC, { type: 'image/png' });
    Object.defineProperty(fileC, 'size', { value: 3.3 * 1024 * 1024 * 1024 });
    const files: File[] = [fileA, fileB, fileC];
    render(
      <FileInput
        id="test-file-input"
        label={inputLabel}
        buttonLabel="Add files"
        language="en"
        onChange={onChangeTest}
        multiple
      />,
    );
    const fileUpload = screen.getByLabelText(inputLabel);
    userEvent.upload(fileUpload, files);
    const list = screen.getByLabelText(listAriaLabel);
    const { getAllByRole } = within(list);
    const fileListItems = getAllByRole('listitem');
    expect(fileListItems.length).toBe(3);

    const fileItemA = fileListItems.find((i) => i.innerHTML.includes(fileNameA));
    const { getByText: getByTextInA, getByLabelText: getByLabelInA } = within(fileItemA);
    expect(getByTextInA('(12.5 MB)')).toBeInTheDocument();
    expect(getByLabelInA(`Remove ${fileNameA} from the added files list.`)).toBeInTheDocument();

    const fileItemB = fileListItems.find((i) => i.innerHTML.includes(fileNameB));
    const { getByText: getByTextInB, getByLabelText: getByLabelInB } = within(fileItemB);
    expect(getByTextInB('(110 kB)')).toBeInTheDocument();
    expect(getByLabelInB(`Remove ${fileNameB} from the added files list.`)).toBeInTheDocument();

    const fileItemC = fileListItems.find((i) => i.innerHTML.includes(fileNameC));
    const { getByText: getByTextInC, getByLabelText: getByLabelInC } = within(fileItemC);
    expect(getByTextInC('(3.3 GB)')).toBeInTheDocument();
    expect(getByLabelInC(`Remove ${fileNameC} from the added files list.`)).toBeInTheDocument();
  });

  it('should call onChange with a list of files', async () => {
    let testFileHolder;
    const onChangeCallback = (files: File[]) => {
      testFileHolder = files;
    };
    const inputLabel = 'Choose files';
    const file = new File(['test-file'], 'test-file', { type: 'image/png' });
    render(
      <FileInput
        id="test-file-input"
        label={inputLabel}
        buttonLabel="Add files"
        language="en"
        onChange={onChangeCallback}
        multiple
      />,
    );
    const fileUpload = screen.getByLabelText(inputLabel);
    userEvent.upload(fileUpload, [file]);
    expect(testFileHolder).toEqual([file]);
  });

  it('should append files to list', async () => {
    const inputLabel = 'Choose files';
    const firstFileName = 'test-file-a';
    const firstFile = new File(['test-file'], firstFileName, { type: 'image/png' });
    const secondFileName = 'test-file-b';
    const secondFile = new File(['test-file'], secondFileName, { type: 'image/png' });
    render(
      <FileInput id="test-file-input" label={inputLabel} buttonLabel="Add files" onChange={onChangeTest} multiple />,
    );
    const fileUpload = screen.getByLabelText(inputLabel);
    userEvent.upload(fileUpload, [firstFile]);
    userEvent.upload(fileUpload, [secondFile]);
    expect(screen.getByText(firstFileName)).toBeInTheDocument();
    expect(screen.getByText(secondFileName)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toEqual(2);
  });

  it('should validate files based on maxSize property', async () => {
    const inputLabel = 'Choose files';
    const maxSize = 10;
    const firstFileName = 'test-file-a';
    const firstFile = new File(['test'], firstFileName, { type: 'image/png' });
    const secondFileName = 'test-file-b';
    const secondFile = new File(['test-file-with-too-long-content'], secondFileName, { type: 'image/png' });
    render(
      <FileInput
        id="test-file-input"
        maxSize={maxSize}
        label={inputLabel}
        buttonLabel="Add files"
        language="en"
        onChange={onChangeTest}
        multiple
      />,
    );
    const fileUpload = screen.getByLabelText(inputLabel);
    userEvent.upload(fileUpload, [firstFile, secondFile]);
    expect(screen.getByText(firstFileName)).toBeInTheDocument();
    expect(screen.getByText('1/2 file(s) added', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('File processing failed for 1/2 files:', { exact: false })).toBeInTheDocument();
    expect(
      screen.getByText(`File, ${secondFileName}, is too large (31 B). Max size is 10 B.`, { exact: false }),
    ).toBeInTheDocument();
  });

  it('should remove files from the files list', async () => {
    let testFileHolder;
    const onChangeCallback = (files: File[]) => {
      testFileHolder = files;
    };
    const inputLabel = 'Choose files';
    const listAriaLabel = 'Added files';
    const fileNameA = 'test-file-a';
    const fileA = new File(['test-file'], fileNameA, { type: 'image/png' });
    const fileNameB = 'test-file-b';
    const fileB = new File(['test-file'], fileNameB, { type: 'image/png' });
    render(
      <FileInput
        id="test-file-input"
        label={inputLabel}
        buttonLabel="Add files"
        language="en"
        onChange={onChangeCallback}
        multiple
      />,
    );
    const fileUpload = screen.getByLabelText(inputLabel);
    userEvent.upload(fileUpload, [fileA, fileB]);
    const list = screen.getByLabelText(listAriaLabel);
    const { getAllByRole } = within(list);
    const fileListItems = getAllByRole('listitem');
    expect(fileListItems.length).toBe(2);
    expect(testFileHolder).toEqual([fileA, fileB]);
    await act(async () => {
      userEvent.click(screen.getByLabelText(`Remove ${fileNameB} from the added files list.`));
    });
    const updatedListItems = getAllByRole('listitem');
    expect(updatedListItems.length).toBe(1);
    expect(testFileHolder).toEqual([fileA]);
    expect(updatedListItems[0]).toHaveFocus();
  });
});
