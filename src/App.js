import React from 'react'
import About from './components/about/About'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Trips from './components/trips/Trips'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Trips/>
      <About/>
    </div>
  )
}

export default App
