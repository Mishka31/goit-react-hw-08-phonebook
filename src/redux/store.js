import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
import contactsReducer from "./contacts/contacts-reducer.js";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
