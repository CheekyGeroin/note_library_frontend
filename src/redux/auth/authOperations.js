import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import auth from "../../services/authAPI";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ` `;
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const newUser = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };
      const data = await auth.register(newUser);
      token.set(data.token);
      toast.success(`User with name ${newUser.name} has been created`);
      return data;
    } catch (err) {
      toast.error(`Something went wrong`);
      return rejectWithValue(err);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const user = {
        email: credentials.email,
        password: credentials.password,
      };

      const data = await auth.login(user);
      token.set(data.token);
      toast.success(`Welcome, ${data.username}`);
      return data;
    } catch (err) {
      toast.error(`Something went wrong`);
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await auth.logout();
      token.unset();
      toast.success(`Come back as soon as possible :D`);
      return data;
    } catch (err) {
      toast.error(`Something went wrong`);
      return rejectWithValue(err);
    }
  }
);
