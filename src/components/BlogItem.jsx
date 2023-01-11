import React from "react";

function BlogItem({ title, date, description, link }) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden relative group p-2">
            <div className="flex flex-row gap-4">
                <h3>{title}</h3>
                <p className="grow">{date}</p>
                <div className="group">
                    <span className="invisible group-hover:visible">&#123; </span>
                    <a href="" target="_blank">Read More</a>
                    <span className="invisible group-hover:visible"> &#125;</span>
                </div>
            </div>
            <p className="mt-4">{description}</p>
        </div>
    )
}

export default BlogItem;