import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_SATE = {
  name: "",
  email: "",
  token: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "user",
  initialState: INITIAL_SATE,
  reducers: {
    registerSuccess: (state, action) => {
      console.log("Register Succes");
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    registerError: (state, action) => {
      state.error = action.payload.error;
    },

    loginSuccess: (state, action) => {},

    loginError: (state, action) => {
      state.error = action.payload.error;
    },
    logoutSuccess: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
} = loginSlice.actions;
