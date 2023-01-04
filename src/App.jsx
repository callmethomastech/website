import React from 'react'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Timeline from './components/Timeline'

function App() {

  return (
    <div className="App">
      <Home />
      <Projects />
      <Blog />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
