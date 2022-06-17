import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import Error from './components/Error';
import { displayBook } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayBook());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/category" element={<Categories />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
