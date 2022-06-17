import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
};

const bookSlice = createSlice(options);
export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
