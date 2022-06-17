import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

function Book() {
  const books = useSelector((state) => state.books); // from the store (array)
  const dispatch = useDispatch();

  const handleCLick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div className="container">
        <div className="book-section">
          <ul>
            {books.map((book) => (
              <li key={book.id} className="wrapper">
                <div className="panelBook">
                  <div className="wrapper_p">
                    <p className="category">{book.category}</p>
                    <p className="Title">{book.title}</p>
                    <p className="Author">{book.author}</p>
                  </div>
                  <div className="buttons">
                    <button type="button" className="Comments">
                      Comments
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCLick(book.id)}
                      className="Remove"
                    >
                      Remove
                    </button>
                    <button type="button" className="Edit">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="spinner" />
                  <div className="book-degree ">
                    <div className="Percent-Complete">63%</div>
                    <span className="Completed">completed!</span>
                  </div>
                </div>
                <div className="current-book ">
                  <h3 className="Current-Chapter">Current Book</h3>
                  <h4 className="Current-Lesson">Introduction</h4>
                  <button type="button" className="Rectangle-2">
                    UPDATE PROGRESS
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Book;
