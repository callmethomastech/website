import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem"

function Portfolio() {
    return (
        <div id="portfolio" className="w-full flex justify-center">
            <div className="w-5/6 border-b-4 border-davys-grey"> 
                <div className="py-5 text-lg md:text-xl font-medium flex flex-row">
                    <p className="grow"><span className="text-blue-green">$</span>Portfolio</p>
                    <a href="https://github.com/FADEDElement?tab=repositories" target="_blank" className="hover:text-blue-green"><span className="text-blue-green">//</span>View Archive</a> 
                </div>
                <div className="flex pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
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