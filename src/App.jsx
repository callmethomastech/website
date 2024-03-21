import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App bg-jet-grey text-alice-blue font-inter">
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;