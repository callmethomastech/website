import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem"

function Portfolio() {
    return (
        <div id="portfolio" className="w-full flex justify-center pt-4 ">
            <div className="w-5/6 border-b-4 border-davys-grey"> 
                <div className="mb-3 text-lg md:text-xl font-medium flex flex-row">
                    <a href="https://github.com/FADEDElement?tab=repositories" target="_blank" className="hover:text-blue-green"><span className="text-blue-green">$</span>Portfolio</a>   
                </div>
                <div className="flex pb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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