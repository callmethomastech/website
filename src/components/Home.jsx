import React from "react";

function Home() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-10 pb-6 px-3">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">$Thomas Henderson<span className="animate-blinking">_</span></h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer aka Professional Problem Solver</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I am hobbyist programmer honing my skill so I can do it professionally. I started programming because I was inspired by some of the old mojang dev talk videos about minecraft when I was younger. This got me interested in the world of programming so I decided to start programming software in java were I learned the basics and were I decided to branch out to other more versitile languages like python.</p>
        </div>
    )
}

export default Home;