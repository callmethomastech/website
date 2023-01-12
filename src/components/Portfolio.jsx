import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem"

function Portfolio() {
    return (
        <div className="w-full flex justify-center">
            <div className="max-w-3xl w-2/3"> 
                <div className="mb-3 text-lg md:text-xl font-medium flex flex-row">
                    <p className="grow">./Portfolio</p>
                    <div className="w-fit hover:cursor-pointer group font-semibold italic">
                        <span className="hidden group-hover:contents">&#123; </span>
                        <a href="https://github.com/FADEDElement?tab=repositories" target="_blank">View Portfolio</a>
                        <span className="hidden group-hover:contents"> &#125;</span>
                    </div>
                    
                </div>
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {projects.map(project => (
                            <PortfolioItem 
                                imgUrl={project.imgUrl} 
                                title={project.title} 
                                stack={project.stack} 
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;