import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import notes from "../../services/notesAPI";

export const getAllNotes = createAsyncThunk(
  "notes/getAll",
  async (__, { rejectWithValue }) => {
    try {
      const data = await notes.getNotes();
      if (data.length < 1) {
        toast.error(`You don't have any notes`);
      }

      toast.success(`${data.length} notes are loaded`);

      return data;
    } catch (err) {
      toast.error("Something went wrong");
      return rejectWithValue(err);
    }
  }
);

export const addNewNote = createAsyncThunk(
  "notes/add",
  async (credentials, { rejectWithValue }) => {
    try {
      const newNote = {
        title: credentials.title,
        text: credentials.text,
      };

      const data = await notes.addNote(newNote);

      toast.success("New note was successfully added");
      return data;
    } catch (err) {
      toast.error("Something went wrong");
      return rejectWithValue(err);
    }
  }
);

export const updateNote = createAsyncThunk(
  "notes/update",
  async (credentials, { rejectWithValue }) => {
    try {
      const updNote = {
        title: credentials.title,
        text: credentials.text,
      };

      const data = await notes.updNote(updNote);

      toast.success("Note was successfully updated");

      return data;
    } catch (err) {
      toast.error("Something went wrong");
      return rejectWithValue(err);
    }
  }
);

export const deleteNote = createAsyncThunk(
  "notes/delete",
  async (__, { rejectWithValue }) => {
    try {
      const data = await notes.deleteNote();

      toast.success("Note was successfully deleted");
      return data;
    } catch (err) {
      toast.error("Something went wrong");
      return rejectWithValue(err);
    }
  }
);
