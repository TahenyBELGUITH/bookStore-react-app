import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = {
  Books: bookReducer,
  Categories: categoriesReducer,
};

const store = createStore(combineReducers(rootReducer));

export default store;
