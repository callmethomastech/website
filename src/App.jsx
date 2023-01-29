import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./components/Index";
import Blog from "./components/Blog";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App bg-jet-grey text-alice-blue font-inter">
            <Navbar />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;