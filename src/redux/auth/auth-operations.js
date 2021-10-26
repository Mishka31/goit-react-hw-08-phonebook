import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common["Authorization"] = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    // <Redirect to="/" />;
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const logIn = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const tokenLocal = state.auth.token;
  if (tokenLocal === null) {
    return thunkAPI.RejectWithValue();
  }
  token.set(tokenLocal);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
