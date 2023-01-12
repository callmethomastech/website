import React from "react";
import articles from "../data/articles";
import BlogItem from "./BlogItem";

function Blog() {
    return (
        <div className="w-full flex justify-center mt-20">
            <div className="max-w-3xl w-2/3"> 
                <div className="mb-3 text-lg md:text-xl font-medium flex flex-row">
                    <p className="grow">./Blog</p>
                    <div className="w-fit hover:cursor-pointer group font-semibold italic">
                        <span className="hidden group-hover:contents">&#123; </span>
                        <a href="" target="_blank">View Archive</a>
                        <span className="hidden group-hover:contents"> &#125;</span>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col justify-center">
                    <div className="grid gap-4 w-full">
                        {articles.map(article => (
                            <BlogItem 
                                title={article.title} 
                                date={article.date} 
                                description={article.description} 
                                link={article.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;