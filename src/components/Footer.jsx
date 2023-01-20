import React from "react";

function Footer() {
    return (
        <div className="mt-10 pb-4">
            <p className="text-sm mt-1 opacity-50 text-center">
                &copy; {new Date().getFullYear()} Thomas Henderson. All rights reserved.
            </p>
        </div>
    )
}

export default Footer;