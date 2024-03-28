import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="flex flex-col p-4 items-center bg-davys-grey w-full md:flex-row z-10 fixed">
            <p className="text-xl grow"><span className="text-blue-green">&lt;/</span>fadedelement<span className="text-blue-green">&gt;</span></p>
            <div className="flex flex-row gap-4">
                <a href="/" className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Home</a>
                <a href="/timeline" className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Timeline</a>
                <a href="/portfolio" className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Portfolio</a>
                <a href="/blog" className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Blog</a>
            </div>
        </div>
    )
}

export default Navbar;