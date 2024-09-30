import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = false;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.loggedIn = true;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFail,
  loginStart,
  loginSuccess,
  loginFail,
  logoutStart,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
