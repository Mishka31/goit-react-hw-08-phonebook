import axios from "axios";
// import actions from "./contacts-actions.js";
import { SERVER_URL } from "../service/api.js";
import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
} from "./slice.js";

axios.defaults.baseURL = SERVER_URL;

export function register(user) {
  return function (dispatch) {
    dispatch({ type: "REGISTER_REQUEST" });

    return axios
      .post("/users/signup", { ...user })
      .then(function (res) {
        const {
          user: { name, email },
          token,
        } = res.data;
        dispatch(registerSuccess({ name, email, token }));
      })
      .catch((error) => dispatch(registerError(error)));
  };
}

export function login(iiiiiiiiii) {
  return function (dispatch) {
    dispatch({ type: "LOGIN_REQUEST" });

    return axios
      .post("/users/login", iiiiiiiiii)
      .then(({ data }) => dispatch(loginSuccess(data)))
      .catch((error) => dispatch(loginError(error)));
  };
}

export function logout() {
  return function (dispatch) {
    dispatch({ type: "LOGOUT_REQUEST" });

    return axios
      .delete("/users/logout")
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => dispatch({ type: "LOGOUT_REQUEST", payload: error }));
  };
}
