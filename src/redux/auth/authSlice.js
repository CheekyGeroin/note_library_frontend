import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./authOperations";

const initialState = {
  user: { username: null, email: null },
  token: null,
  isLoggedIn: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.user.username,
          email: action.payload.user.email,
        },
        token: action.payload.token,
        isLoggedIn: true,
        error: null,
      };
    },
    [register.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
    [login.fulfilled]: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.user.username,
          email: action.payload.user.email,
        },
        token: action.payload.token,
        isLoggedIn: true,
        error: null,
      };
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
    [logout.fulfilled]: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
        error: null,
      };
    },
    [logout.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload.name,
      };
    },
  },
});

export const authReducer = authSlice.reducer;
