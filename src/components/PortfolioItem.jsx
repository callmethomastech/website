import React from "react";

function PortfolioItem({ imgUrl, title, stack, link }) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden relative w-65">
            <img
                src={imgUrl}
                alt="portfolio item"
                className="w-full h-36 md:h-48 object-cover"
            />
            
            <div className="w-full p-4">
                <div className="w-fit text-md md:text-lg mb-2 md:mb-3 font-semibold group">
                    <span className="invisible group-hover:visible">&#123; </span>
                    <a href={link} target="_blank">{title}</a>
                    <span className="invisible group-hover:visible"> &#125;</span>
                </div>
                
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-2xl">
                            {item}
                        </span>
                    ))}
                </p>
            </div> 
        </div>
    )
}

export default PortfolioItem;