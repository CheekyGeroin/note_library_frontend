import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const registration = async (newUser) => {
  const { data } = await axios.post("/auth/register", ...newUser);
  return data;
};
const login = async (user) => {
  const { data } = await axios.post("/auth/login", ...user);
  return data;
};
const logout = async () => {
  const { data } = await axios.post("/auth/logout");
  return data;
};

const auth = { registration, login, logout };

export default auth;
