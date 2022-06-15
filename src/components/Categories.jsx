import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {checkStatus} from "../redux/categories/categories"

export default function Categories() {
  const categories = useSelector(state => state.Categories)
  const dispatch = useDispatch()

  const clickHandler=()=>{
  dispatch(checkStatus())
  }


  return (
    <div>
     <button type='button' onClick={clickHandler}>Check status</button>
     <h1>{categories}</h1>
    </div>
  )
}
