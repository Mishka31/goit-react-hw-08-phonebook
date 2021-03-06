import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  //   error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      //   state.errorMessage = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      //   state.errorMessage = null;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      //   state.errorMessage = null;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isRefreshing = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, _) {
      state.isRefreshing = false;
    },
    // [authOperations.register.pending](state, _) {
    //   state.error = null;
    // },
    // [authOperations.register.rejected](state, { payload }) {
    //   state.error = payload;
    // },
    // [authOperations.logIn.pending](state, _) {
    //   state.error = null;
    // },
    // [authOperations.logIn.rejected](state, { payload }) {
    //   state.error = payload;
    // },
  },
});

export default authSlice.reducer;
