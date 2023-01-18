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
                <a href={link} target="_blank" className="font-bold hover:text-blue-green">{title}</a>
                
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="flex flex-row text-dim-grey">
                            {item}
                        </span>
                    ))}
                </p>
            </div> 
        </div>
    )
}

export default PortfolioItem;