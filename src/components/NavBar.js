import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h1>BOOKSTORE CMS</h1>
      <nav>
        <ul>
          <NavLink to="/">Books</NavLink>
          <NavLink to="/category">Categories</NavLink>
        </ul>
      </nav>
    </div>
  );
}
