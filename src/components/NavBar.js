import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="panel">
      <h1 className="Bookstore-CMS">TAHTOUHA</h1>
      <nav>
        <ul>
          <NavLink to="/" className="BOOKS">
            Books
          </NavLink>
          <NavLink to="/category" className="CATEGORIES">
            Categories
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
