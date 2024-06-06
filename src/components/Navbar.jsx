import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="flex flex-row gap-4 w-5/6 mx-auto border-b-4 border-davys-grey">
        <NavLink className={({ isActive }) => "navbar--button" + (isActive ? " navbtn--selected" : "")} end to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => "navbar--button" + (isActive ? " navbtn--selected" : "")} end to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className={({ isActive }) => "navbar--button" + (isActive ? " navbtn--selected" : "")} end to="/blog">
          Blog
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
