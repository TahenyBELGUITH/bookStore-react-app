import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = {
  Books: bookReducer,
  Categories: categoriesReducer,
};

const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));

export default store;
