import React from "react";

function TimelineItem({ year, title, duration, description }) {
    return (
        <ol className="flex flex-col md:flex-row relative border-l-2 border-mint-cream">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-mint-cream rounded-full mt-1.5 -left-1.5 border border-mint-cream" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold bg-prussian-blue rounded-md">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold">
                        {title}
                    </h3>
                    <div className="my-1 text-sm font-normal leading-none text-platinum">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-platinum bg-independence p-1 rounded-md">
                    {description}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;