import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBook, removeBook } from '../redux/books/books';

function Book() {
  const books = useSelector((state) => state.Books); // from the store (array)
  const dispatch = useDispatch();

  const handleCLick = (removedBook) => {
    dispatch(removeBook(removedBook));
  };

  useEffect(() => {
    dispatch(displayBook(), []);
  });

  return (
    <div>
      <div className="container">
        <div className="book-section">
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <button type="button">Comments</button>
                <button type="button" onClick={() => handleCLick(book)}>
                  Remove
                </button>
                <button type="button">Edit</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="book-degree">
          <div className="spinner" />
          <span>63%</span>
          <span>completed!</span>
        </div>
        <div className="current-book">
          <h3>Current Book</h3>
          <h4>Introduction</h4>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

export default Book;
