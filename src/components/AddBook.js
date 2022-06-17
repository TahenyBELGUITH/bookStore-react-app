import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './AddBook.css';

function Form() {
  const [book, setBook] = useState({ title: '', author: '', category: '' });
  const { title, author, category } = book;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
      category: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <hr className="Line" />
      <h3 className="TitleAdd">ADD NEW BOOK</h3>
      <form onSubmit={submitHandler}>
        <input
          className="input-Panel"
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          className="input-Panel"
          type="text"
          placeholder="Book author"
          name="author"
          value={author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Book Category"
          className="input-Panel"
          onChange={handleChange}
          value={category}
          name="category"
          required
        />
        <input type="submit" value="Add Book" className="ADD-BOOK" />
      </form>
    </div>
  );
}

export default Form;
