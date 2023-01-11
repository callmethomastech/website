import React from "react";
import articles from "../data/articles";
import BlogItem from "./BlogItem";

function Blog() {
    return (
        <div className="w-full flex justify-center mt-20">
            <div> 
                <div className="mb-3 text-xl font-medium grid grid-cols-2">
                    <p>./Blog</p>
                    <div className="text-right hover:cursor-pointer group">
                        <span className="invisible group-hover:visible">&#123; </span>
                        <a href="" target="_blank">View Archive</a>
                        <span className="invisible group-hover:visible"> &#125;</span>
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <div className="grid gap-4">
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