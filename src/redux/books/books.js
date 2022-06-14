const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [];

// actions' creator
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book !== action.payload)];
    default:
      return state;
  }
};

export default bookReducer;
