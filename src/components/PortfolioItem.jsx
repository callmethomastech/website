import React from "react";

function PortfolioItem({ imgUrl, title, stack, link }) {
    return (
        <div>
            <img src={imgUrl} alt="portfolio item" className="object-cover w-full" />
            
            <div className="py-2">
                <a href={link} target="_blank" className="font-bold hover:text-blue-green text-base">{title}</a>
                
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start">
                    {stack.map(item => (
                        <span className="flex flex-row text-dim-grey text-sm">
                            {item}
                        </span>
                    ))}
                </p>
            </div> 
        </div>
    )
}

export default PortfolioItem;