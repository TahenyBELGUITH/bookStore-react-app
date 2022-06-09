import React from 'react'

export default function AddBook() {
  return (
    <div>
     <h3>ADD NEW BOOK</h3>
     <form>
      <input type="text" placeholder='Book title' />
      <select id="books" name="books">
        <option >Robonson Crusoé</option>
        <option > C# </option>
        <option > C# </option>
        <option > C# </option>
      </select>
     </form>
    </div>
  )
}
