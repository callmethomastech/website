import React from "react";

import projects from "../data/projects";

function Portfolio() {
  return (
    <div className="w-5/6 min-h-screen h-fill pt-28 md:pt-20 pb-10 items-center mx-auto">
      <div className="w-full flex justify-center">
        <div className="border-b-4 border-davys-grey">
          <div className="py-5 text-lg md:text-xl font-medium flex flex-row">
            <p className="grow">
              <span className="text-blue-green">$</span>Portfolio
            </p>
            <a
              href="https://github.com/FADEDElement?tab=repositories"
              target="_blank"
              className="hover:text-blue-green">
              <span className="text-blue-green">//</span>View Archive
            </a>
          </div>
          <div className="flex pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {projects.map((project) => (
                <div className="hover:scale-105 hover:shadow-lg hover:shadow-[#0abdd1] hover:border-2 hover:border-jet-grey">
                  <a href={project.link} target="_blank">
                    <img
                      src={project.imgUrl}
                      alt="portfolio item"
                      className="object-cover w-full "
                    />

                    <div className="py-2">
                      <p className="font-bold text-base">{project.title}</p>

                      <p className="flex flex-wrap gap-2 flex-row items-center justify-start">
                        {project.stack.map((item) => (
                          <span className="flex flex-row text-dim-grey text-sm">
                            {item}
                          </span>
                        ))}
                      </p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
