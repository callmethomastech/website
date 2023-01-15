import React from "react";

function Footer() {
    return (
        <div className="mt-10">
            <div className="flex flex-row gap-2 justify-center">
                <a href ="https://youtube.com/c/FADEDElement" target="_blank"><img src="/assets/general/youtube_logo.png" /></a>
                <a href ="https://github.com/FADEDElement" target="_blank"><img src="/assets/general/github_logo.png" /></a>
                <a href ="https://discord.com/invite/XdxwyrE" target="_blank"><img src="/assets/general/discord_logo.png" /></a>
            </div>
            <p className="text-sm mt-1 opacity-50 text-center">
                &copy; {new Date().getFullYear()} Thomas Henderson. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;