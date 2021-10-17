import { createAction } from "@reduxjs/toolkit";

const fetchRequest = createAction("contacts/fetchRequest");
const fetchSuccess = createAction("contacts/fetchSucces");
const fetchError = createAction("contacts/fetchError");

const addRequest = createAction("contacts/addRequest");
const addSuccess = createAction("contacts/addSucces");
const addError = createAction("contacts/addError");

const deleteRequest = createAction("contacts/deleteRequest");
const deleteSuccess = createAction("contacts/deleteSucces");
const deleteError = createAction("contacts/deleteError");

const changeFilter = createAction("contact/find");
// export const changeFilter = (value) => ({
//   type: types.FIND,
//   payload: value,
// });

// eslint-disable-next-line
export default {
  addRequest,
  addSuccess,
  addError,
  deleteSuccess,
  deleteError,
  deleteRequest,
  changeFilter,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
