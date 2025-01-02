import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const getNotes = async () => {
  const { data } = await axios.get("/notes");
  console.log(data);
  return data;
};

const addNote = async (body) => {
  const { data } = await axios.post("/notes", ...body);
  return data;
};

const updNote = async (body, id) => {
  const { data } = await axios.put(`/notes/${id}`, ...body);
  return data;
};

const deleteNote = async (id) => {
  const { data } = await axios.delete(`/notes/${id}`);
  return data;
};

const notes = {
  getNotes,
  addNote,
  updNote,
  deleteNote,
};

export default notes;
