import React from "react";

function Footer() {
  return (
    <div className="w-full flex justify-center">
      <div className="py-4 text-sm mt-1 text-center border-t-4 border-davys-grey w-5/6">
        <p className="pb-2">
          <a
            href="https://www.youtube.com/c/FADEDElement"
            target="_blank"
            className="hover:text-blue-green">
            YouTube
          </a>
          <span> · </span>
          <a
            href="https://github.com/FADEDElement"
            target="_blank"
            className="hover:text-blue-green">
            GitHub
          </a>
          <span> · </span>
          <a
            href="https://discord.com/invite/XdxwyrE"
            target="_blank"
            className="hover:text-blue-green">
            Discord
          </a>
        </p>
        <p className="opacity-50">
          &copy; {new Date().getFullYear()} Thomas Henderson. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
