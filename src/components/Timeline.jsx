import React from "react";
import events from "../data/events";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div id="timeline" className="w-full flex justify-center pt-5">
            <div className="w-5/6 border-b-4 border-davys-grey"> 
                <a className="text-lg md:text-xl font-medium"><span className="text-blue-green">$</span>Timeline</a>
                <div className="flex flex-col md:flex-row justify-center py-5">
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