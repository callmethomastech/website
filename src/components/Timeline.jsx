import React from "react";
import events from "../data/events";
import TimelineItem from "./TimelineItem";

function Timeline() {
    return (
        <div className="w-full flex justify-center mt-20">
            <div className="max-w-3xl w-2/3">
                <p className="mb-3 text-lg md:text-xl font-medium">./Timeline</p>
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