import React from "react";

function BlogItem({ title, date, description, link }) {
    return (
        <div className="border-2 border-prussian-blue bg-prussian-blue rounded-md overflow-hidden p-2 text-sm md:text-base">
            <div className="flex flex-col md:flex-row md:gap-4">
                <h3>{title}</h3>
                <p className="grow">{date}</p>
                <div className="w-fit group font-semibold italic">
                    <span className="hidden group-hover:contents">&#123; </span>
                    <a href="" target="_blank">Read More</a>
                    <span className="hidden group-hover:contents"> &#125;</span>
                </div>
            </div>
            <p className="mt-4 text-platinum rounded-md bg-independence p-1">{description}</p>
        </div>
    )
}

export default BlogItem;