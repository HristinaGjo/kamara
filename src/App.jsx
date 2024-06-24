import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Echoes from './pages/Echoes';
import Odyssey from './pages/Odyssey'; // Import Odyssey component

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/echoes" element={<Echoes />} />
      <Route path="/odyssey" element={<Odyssey />} /> {/* Ensure this matches the Link 'to' path */}
    </Routes>
  );
}

export default App;
