import React from "react";
import events from "../data/events";

function Index() {
  return (
    <div className="w-5/6 min-h-screen h-fill pt-28 md:pt-20 pb-10 items-center mx-auto">

      <div className="w-full flex justify-center pt-5">
        <div>
          <a className="text-lg md:text-xl font-medium">
            <span className="text-blue-green">$</span>Timeline
          </a>
          <div className="flex flex-col md:flex-row justify-center py-5">
            <div className="w-full">
              {events.map((item) => (
                <ol className="flex flex-col md:flex-row relative border-l-2 border-blue-green">
                  <li className="mb-6 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-green rounded-full mt-1.5 -left-1.5" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                      <span className="inline-block px-2 py-1 font-semibold bg-blue-green text-jet-grey rounded-md">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <div className="my-1 text-sm font-normal leading-none text-dim-grey">
                        {item.duration}
                      </div>
                    </p>
                    <p className="my-2 text-base font-normal text-dim-grey p-1 rounded-md">
                      {item.description}
                    </p>
                  </li>
                </ol>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
