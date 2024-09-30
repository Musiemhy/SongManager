import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  registerStart,
  registerSuccess,
  registerFail,
  loginStart,
  loginSuccess,
  loginFail,
  logoutStart,
  logout,
} from "./authSlice";

function* handleRegister(action) {
  try {
    console.log("Register action received", action.payload);
    const apiAddUserUrl = import.meta.env.VITE_API_ADD_USER;
    const response = yield call(axios.post, apiAddUserUrl, action.payload);
    console.log("API response", response);
    yield put(registerSuccess(response.data));
  } catch (error) {
    console.log("API Error:", error);
    yield put(
      registerFail(error.response?.data?.message || "An error occurred.")
    );
  }
}

function* handleLogin(action) {
  try {
    const apiGetUserUrl = import.meta.env.VITE_API_GET_USER;
    const response = yield call(axios.post, apiGetUserUrl, action.payload);
    yield put(loginSuccess(response.data));
    localStorage.setItem("userId", response.data._id);
    localStorage.setItem("name", response.data.name);
  } catch (error) {
    yield put(loginFail(error.response?.data?.message || "An error occurred."));
  }
}

function* handleLogout() {
  try {
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    yield put(logout());
  } catch (error) {
    console.log("Logout failed:", error);
  }
}

export function* watchAuth() {
  yield takeLatest(registerStart.type, handleRegister);
  yield takeLatest(loginStart.type, handleLogin);
  yield takeLatest(logoutStart.type, handleLogout);
}
