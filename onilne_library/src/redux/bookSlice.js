import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    userBooks: [], // Store books added by users
  },
  reducers: {
    addBook: (state, action) => {
      state.userBooks.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
