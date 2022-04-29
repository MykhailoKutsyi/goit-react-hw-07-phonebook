export const getFilter = state => state.filter;

export const getFilteredContacts = (filter, contacts) => {
  const normalizeFilter = filter.toLowerCase();
  return contacts?.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(normalizeFilter) ||
      phone.includes(normalizeFilter)
  );
};
