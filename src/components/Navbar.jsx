import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col p-4 items-center bg-davys-grey w-full md:flex-row z-10 fixed">
      <p className="text-xl grow">
        <span className="text-blue-green">&lt;/</span>fadedelement
        <span className="text-blue-green">&gt;</span>
      </p>
      <div className="flex flex-row gap-4">
        <a href="/" class="navbar--button">
          Home
        </a>
        <a href="/portfolio" class="navbar--button">
          Portfolio
        </a>
        <a href="/blog" class="navbar--button">
          Blog
        </a>
        <a href="/timeline" class="navbar--button">
          Timeline
        </a>
      </div>
    </div>
  );
}

export default Navbar;
