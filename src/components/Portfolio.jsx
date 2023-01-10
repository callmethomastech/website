import React from "react";
import projects from "../data/projects";
import PortfolioItem from "./PortfolioItem"

function Portfolio() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-fit">
                <div className="mb-3 text-xl font-medium grid grid-cols-2">
                    <p>./Portfolio</p>
                    <a className="text-right hover:cursor-pointer" href="https://github.com/FADEDElement?tab=repositories" target="_blank">🕮 View More</a>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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