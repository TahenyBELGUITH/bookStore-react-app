import axios from 'axios';

const urlApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3LSTJ9VY1B6y9Gs7jQ0l/books/';
const initialState = [];

const ADD_BOOK = 'Books/addBook';
const REMOVE_BOOK = 'Books/removeBook';
const DISPLAY_BOOK = 'Books/displayBook';

// actions' creator
export const addBook = (book) => async (dispatch) => {
  try {
    await axios.post(urlApi, book);
    return dispatch({ type: ADD_BOOK, payload: book });
  } catch (error) {
    return error;
  }
};

export const removeBook = (id) => async (dispatch) => {
  const deleteUrl = `${urlApi}/${id}`;
  try {
    await axios({
      method: 'delete',
      url: deleteUrl,
      data: JSON.stringify({ item_id: id }),
    });
    dispatch({ type: REMOVE_BOOK, payload: id });
  } catch (error) {
    return error;
  }
};

export const displayBook = () => async (dispatch) => {
  try {
    const response = await axios.get(urlApi);
    return dispatch({ type: DISPLAY_BOOK, payload: response.data });
  } catch (error) {
    return error;
  }
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_BOOK:
      return Object.keys(action.payload).map((el) => ({
        ...action.payload[el][0],
        id: el,
      }));
    case 'Books/addBook':
      return [...state, action.payload];
    case 'Books/removeBook':
      return [...state.filter((book) => book.id !== action.payload.id)];
    default:
      return state;
  }
};

export default bookReducer;
