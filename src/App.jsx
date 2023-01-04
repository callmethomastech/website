import React from 'react'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'

function App() {

  return (
    <div className="App">
      <Home />
      <Portfolio />
      <Blog />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
