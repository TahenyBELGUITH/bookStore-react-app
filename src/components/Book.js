import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";
import "./Book.css";

function Book() {
  const books = useSelector((state) => state.books); // from the store (array)
  const dispatch = useDispatch();

  const handleCLick = (removedBook) => {
    dispatch(removeBook(removedBook));
  };

  return (
    <div>
      <div className="container Lesson-Panel">
        <div className="book-section">
          <ul>
            {books.map((book) => (
              <li key={book.id} className="wrapper">
                <div className="wrapper_p">
                  <p className="category">{book.category}</p>
                  <p className="Title">{book.title}</p>
                  <p className="Author">{book.author}</p>
                </div>
                <button type="button" className="Comments">
                  Comments
                </button>
                <button
                  type="button"
                  onClick={() => handleCLick(book)}
                  className="Remove"
                >
                  Remove
                </button>
                <button type="button" className="Edit">
                  Edit
                </button>

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
