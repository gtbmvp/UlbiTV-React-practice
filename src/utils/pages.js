export const getPageCount = (totalEntriesCount, entriesPerPage) => {
  return Math.ceil(totalEntriesCount / entriesPerPage);
};
