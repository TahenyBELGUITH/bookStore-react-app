import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const urlAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3LSTJ9VY1B6y9Gs7jQ0l/books';

// async Action
export const displayBook = createAsyncThunk('books/loadBook', async () => {
  const response = await fetch(urlAPI);
  const books = await response.json();
  const booksArray = [
    Object.keys(books).map((key) => ({
      id: key,
      ...books[key][0],
    })),
  ];
  return booksArray;
});

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ title, author, category }, thunkAPI) => {
    await fetch(urlAPI, {
      method: 'POST',
      body: JSON.stringify({
        item_id: uuidv4(),
        title,
        author,
        category,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }).then(() => thunkAPI.dispatch(displayBook())); // update the store
    const { books } = thunkAPI.getState().books; // update the view
    return books;
  },
);

export const removeBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    await fetch(`${urlAPI}/${id}`, {
      method: 'DELETE',
    }).then(() => thunkAPI.dispatch(displayBook())); // update the store
    const { books } = thunkAPI.getState().books; // update the view
    return books;
  },
);

const options = {
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: {
    [displayBook.fulfilled]: (state, action) => action.payload[0],
    [addBook.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
};
const bookSlice = createSlice(options);
export default bookSlice.reducer;
