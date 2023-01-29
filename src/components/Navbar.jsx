import React from "react";

function Navbar() {
    return (
        <div className="flex flex-col p-4 items-center bg-davys-grey w-full fixed md:flex-row z-10">
            <p className="text-xl grow"><span className="text-blue-green">&lt;/</span>fadedelement<span className="text-blue-green">&gt;</span></p>
            <div className="flex flex-row gap-4">
                <button onClick={() => document.getElementById("home").scrollIntoView({behavior:"smooth"})} className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Home</button>
                <button onClick={() => document.getElementById("portfolio").scrollIntoView({behavior:"smooth"})} className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Portfolio</button>
                {/*<a href="/blog" className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Blog</a>*/}
                <button onClick={() => document.getElementById("timeline").scrollIntoView({behavior:"smooth"})} className="relative after:absolute after:content-[''] after:bg-blue-green after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:duration-300 after:hover:w-[100%]">Timeline</button>
            </div>
        </div>
    )
}

export default Navbar;