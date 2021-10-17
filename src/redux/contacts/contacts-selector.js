// import { createSelector } from "reselect";

const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getAllItems = (state) => state.contacts.items;
const getVisible = (state) => {
  const contacts = getAllItems(state);
  const filter = getFilter(state);

  const lowerFilter = filter.toLowerCase();
  return contacts.filter((contact) => contact.name.toLowerCase().includes(lowerFilter));
};

// eslint-disable-next-line
export default {
  getLoading,
  getFilter,
  getVisible,
};
