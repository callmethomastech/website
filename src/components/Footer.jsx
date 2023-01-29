import React from "react";

function Footer() {
    return (
        <div className="py-4 text-sm mt-1 text-center">
            <p className="opacity-80 pb-2">
                <a href="" target="_blank" className="hover:text-blue-green">YouTube · </a>
                <a href="" target="_blank" className="hover:text-blue-green">GitHub · </a>
                <a href="" target="_blank" className="hover:text-blue-green">Discord</a>
            </p>
            <p className="opacity-50">
                &copy; {new Date().getFullYear()} Thomas Henderson. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;