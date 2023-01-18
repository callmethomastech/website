import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem"

function Portfolio() {
    return (
        <div className="w-full flex justify-center pt-4">
            <div className=" w-5/6"> 
                <div className="mb-3 text-lg md:text-xl font-medium flex flex-row">
                    <p className="grow"><span className="text-blue-green">$</span>Portfolio</p>
                    <a href="https://github.com/FADEDElement?tab=repositories" target="_blank" className="hover:text-blue-green">View Portfolio<span className="text-blue-green">...</span></a>
                    
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-50">
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