import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Categories.css';

export default function Categories() {
  const categories = useSelector((state) => state.Categories);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={clickHandler} className="Rectangle-check">
        Check status
      </button>
      <h1 className="under">{categories}</h1>
    </div>
  );
}
