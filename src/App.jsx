import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Echoes from './pages/Echoes';
import Odyssey from './pages/Odyssey'; // Import Odyssey component
import Cracker from './pages/Cracker';
import Dystopia from './pages/Dystopia'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/echoes" element={<Echoes />} />
      <Route path="/odyssey" element={<Odyssey />} /> 
      <Route path="/cracker" element={<Cracker />} /> 
      <Route path="/dystopia" element={<Dystopia />} /> 
    </Routes>
  );
}

export default App;
