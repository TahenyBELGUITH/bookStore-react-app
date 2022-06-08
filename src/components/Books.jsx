import React from 'react'
import AddBook from "./AddBook"

export default function Books() {
  return (
    <>
    <div className='container'>
     <div className="book-section">
      <h3 className='type'>Action</h3>
      <h2 className='book-name'>The Hunger Name</h2>
      <h3 className='writer'>Suzanne Collins</h3>
      <div className="buttons">
       <button>Comments</button>
       <button>Remove</button>
       <button>Edit</button>
      </div>
     </div>
     <div className="book-degree">
      <progress id="file" value="62" max="100"> 62% </progress>
      <label for="file">completed!</label>
     </div>
     <div className="current-book">
      <h3>Current Book</h3>
      <h4>Introduction</h4>
      <button>UPDATE PROGRESS</button>
     </div>
    </div>
          <AddBook />
          </>

  )
}
