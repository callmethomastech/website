import React from "react";

function Navbar() {
  console.log(window.location.pathname)

  return (
    <div>
      <div className="flex flex-row gap-4 w-5/6 mx-auto border-b-4 border-davys-grey">
        <a href="/" class="navbar--button ${window.location.pathname=="/" ? ".navbtn--selected" : ""}">
          Home
        </a>
        <a href="/portfolio" class="navbar--button">
          Portfolio
        </a>
        <a href="/blog" class="navbar--button">
          Blog
        </a>
      </div>
    </div>
  );
}

export default Navbar;
