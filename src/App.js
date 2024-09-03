import React from 'react'
import Particles from './Components/Particles'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Work from './Work/Work'
// import Footer from './Footer/Footer'

function App() {
  return (
    <div>
      <Particles />
      <Nav />
      <Home />
      <About />
      <Services />
      <Work />
      {/* <Footer /> */}
    </div>
  )
}

export default App