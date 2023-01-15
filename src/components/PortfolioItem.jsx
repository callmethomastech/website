import React from "react";

function PortfolioItem({ imgUrl, title, stack, link }) {
    return (
        <div className="bg-prussian-blue rounded-md overflow-hidden p-2">
            <img
                src={imgUrl}
                alt="portfolio item"
                className="h-36 object-cover"
            />
            
            <div className="py-2">
                <div className="w-fit text-md md:text-lg mb-2 md:mb-3 font-semibold italic group">
                    <span className="hidden group-hover:contents">&#123; </span>
                    <a href={link} target="_blank">{title}</a>
                    <span className="hidden group-hover:contents"> &#125;</span>
                </div>
                
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-independence bg-independence rounded-2xl">
                            {item}
                        </span>
                    ))}
                </p>
            </div> 
        </div>
    )
}

export default PortfolioItem;