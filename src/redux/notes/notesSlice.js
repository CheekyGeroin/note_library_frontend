import { createSlice } from "@reduxjs/toolkit";
import {
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
} from "./notesOperations";

const initialState = {
  notes: [],
  error: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  extraReducers: {
    [getAllNotes.fulfilled]: (state, action) => {
      return {
        ...state,
        notes: [...action.payload],
        error: null,
      };
    },
    [getAllNotes.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [addNewNote.fulfilled]: (state, action) => {
      return {
        ...state,
        notes: [...state.notes, ...action.payload],
        error: null,
      };
    },
    [addNewNote.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [updateNote.fulfilled]: (state, action) => {
      const updatedNote = action.payload;
      const index = state.notes.findIndex((note) => note.id === updatedNote.id);

      if (index !== -1) {
        state.notes[index] = { ...state.notes[index], ...updatedNote };
      }
      return {
        ...state,
        error: null,
      };
    },
    [updateNote.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    [deleteNote.fulfilled]: (state, action) => {
      return {
        ...state,
        notes: [state.notes.filter(({ id }) => id !== action.payload.id)],
        error: null,
      };
    },
    [deleteNote.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const notesReducer = notesSlice.reducer;
