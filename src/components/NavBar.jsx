import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='d-flex'>
     <h1 className='Bookstore-CMS'>TaHtouHa_Store</h1>
     <nav>
       <ul>
         <NavLink to="/" className='BOOKS' >Books</NavLink>
         <NavLink to="/category" className='CATEGORIES' >Categories</NavLink>
       </ul>
     </nav>
    </div>
  )
}
