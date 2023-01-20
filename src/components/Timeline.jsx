import React from "react";
import events from "../data/events";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div id="portfolio" className="w-full flex justify-center pt-4 ">
            <div className="w-5/6 border-b-4 border-davys-grey"> 
                <a className="mb-3 text-lg md:text-xl font-medium"><span className="text-blue-green">$</span>Timeline</a>
                <div className="flex flex-col md:flex-row justify-center my-2">
                    <div className="w-full">
                        {events.map(item => (
                            <TimelineItem
                                year={item.year}
                                title={item.title}
                                duration={item.duration}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;