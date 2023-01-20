import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'

function App() {

  return (
    <div className="App bg-jet-grey text-alice-blue font-inter">
      <Home />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
