import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Form() {
  const [book, setBook] = useState({ title: '', author: '' });
  const { title, author } = book;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setBook({
      title: '',
      author: '',
    });
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Book author"
          name="author"
          value={author}
          onChange={handleChange}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
}

export default Form;
