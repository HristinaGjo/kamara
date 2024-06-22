import React from 'react'
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import About from './pages/About'
import Echoes from './pages/Echoes'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <Navbar/>

    <Routes>
    <Route path="/" element={<LandingPage />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/echoes" element={<Echoes />}/>
    </Routes>

    </>
  )
}

export default App
