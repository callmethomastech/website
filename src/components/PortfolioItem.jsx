import React from "react";

function PortfolioItem({ imgUrl, title, stack, link }) {
    return (
        <div className="hover:scale-105 hover:shadow-lg hover:shadow-[#0abdd1] hover:border-2 hover:border-jet-grey">
            <a href={link} target="_blank">
                <img src={imgUrl} alt="portfolio item" className="object-cover w-full " />
                
                <div className="py-2">
                    <a className="font-bold text-base">{title}</a>
                    
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start">
                        {stack.map(item => (
                            <span className="flex flex-row text-dim-grey text-sm">
                                {item}
                            </span>
                        ))}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default PortfolioItem;