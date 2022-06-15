import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'A',
    author: 'me',
  },
  {
    id: uuidv4(),
    title: 'B',
    author: 'you',
  },
];

// actions' creator
export const addBook = (book) => ({
  type: 'Books/addBook',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'Books/removeBook',
  payload: book,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Books/addBook':
      return [...state, action.payload];
    case 'Books/removeBook':
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};

export default bookReducer;
