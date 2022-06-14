import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';

import categoriesReducer from './categories/categories';

const reducers = {
  addBook: bookReducer,
  checkCategory: categoriesReducer,
};

const store = createStore(combineReducers(reducers));

export default store;
