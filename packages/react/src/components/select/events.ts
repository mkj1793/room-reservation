export const eventIds = {
  selectedOptions: 'selectedOptions',
  listItem: 'listItem',
  listGroup: 'listGroup',
  clearButton: 'clearButton',
  clearAllButton: 'clearAllButton',
  showAllButton: 'showAllButton',
  arrowButton: 'arrowButton',
  tag: 'tag',
  filter: 'filter',
  search: 'search',
  searchResult: 'searchResult',
};
export const eventTypes = {
  click: 'click',
  outSideclick: 'outsideClick',
  change: 'change',
  success: 'success',
  error: 'error',
  cancelled: 'cancelled',
};

export const events = {
  selectedOptionsClick: `${eventIds.selectedOptions}_${eventTypes.click}`,
  listItemClick: `${eventIds.listItem}_${eventTypes.click}`,
  listGroupClick: `${eventIds.listGroup}_${eventTypes.click}`,
  clearClick: `${eventIds.clearButton}_${eventTypes.click}`,
  clearAllClick: `${eventIds.clearAllButton}_${eventTypes.click}`,
  showAllClick: `${eventIds.showAllButton}_${eventTypes.click}`,
  arrowClick: `${eventIds.arrowButton}_${eventTypes.click}`,
  tagClick: `${eventIds.tag}_${eventTypes.click}`,
  filterChange: `${eventIds.filter}_${eventTypes.change}`,
  searchChange: `${eventIds.search}_${eventTypes.change}`,
  searchResultSuccess: `${eventIds.searchResult}_${eventTypes.success}`,
  searchResultError: `${eventIds.searchResult}_${eventTypes.error}`,
  searchResultCancelled: `${eventIds.searchResult}_${eventTypes.cancelled}`,
};
