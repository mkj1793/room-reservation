import React, { useState } from 'react';

import { Pagination } from './Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
  parameters: {
    controls: { expanded: true },
  },
  args: {},
};

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const Basic = (args) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  return (
    <Pagination
      language="en"
      onChange={(event, index) => {
        event.preventDefault();
        setPageIndex(index);
      }}
      pageCount={5}
      pageHref={() => '#'}
      pageIndex={pageIndex}
      paginationAriaLabel="Pagination"
    />
  );
};

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const WithTruncation = (args) => {
  const [pageIndexPagination1, setPageIndexPagination1] = useState<number>(7);
  const [pageIndexPagination2, setPageIndexPagination2] = useState<number>(7);
  const [pageIndexPagination3, setPageIndexPagination3] = useState<number>(7);

  return (
    <>
      <Pagination
        language="en"
        onChange={(event, index) => {
          event.preventDefault();
          setPageIndexPagination1(index);
        }}
        pageCount={68}
        pageHref={() => '#'}
        pageIndex={pageIndexPagination1}
        paginationAriaLabel="Pagination 1"
        siblingCount={0}
      />
      <Pagination
        language="en"
        onChange={(event, index) => {
          event.preventDefault();
          setPageIndexPagination2(index);
        }}
        pageCount={68}
        pageHref={() => '#'}
        pageIndex={pageIndexPagination2}
        paginationAriaLabel="Pagination 2"
      />
      <Pagination
        language="en"
        onChange={(event, index) => {
          event.preventDefault();
          setPageIndexPagination3(index);
        }}
        pageCount={68}
        pageHref={() => '#'}
        pageIndex={pageIndexPagination3}
        paginationAriaLabel="Pagination 3"
        siblingCount={2}
      />
    </>
  );
};

WithTruncation.storyName = 'With truncation';

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const WithoutPrevAndNextButtons = (args) => {
  const [pageIndex, setPageIndex] = useState<number>(7);

  return (
    <Pagination
      hideNextButton
      hidePrevButton
      language="en"
      onChange={(event, index) => {
        event.preventDefault();
        setPageIndex(index);
      }}
      pageCount={68}
      pageHref={() => '#'}
      pageIndex={pageIndex}
      paginationAriaLabel="Pagination"
    />
  );
};

WithoutPrevAndNextButtons.storyName = 'Without prev and next buttons';

// args is required for docs tab to show source code
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
export const CustomTheme = (args) => {
  const theme = {
    '--active-page-background-color': 'var(--color-bus)',
  };

  const [pageIndex, setPageIndex] = useState<number>(0);

  return (
    <Pagination
      language="en"
      onChange={(event, index) => {
        event.preventDefault();
        setPageIndex(index);
      }}
      pageCount={5}
      pageHref={() => '#'}
      pageIndex={pageIndex}
      paginationAriaLabel="Pagination"
      theme={theme}
    />
  );
};

CustomTheme.storyName = 'Custom theme';
