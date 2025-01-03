import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route from react-router-dom
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Academics from './components/Sitacademics';
import Cacademics from './components/cipetacademics'; 
import Sacademics from './components/Schoolacademics'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/academic" element={<Academics />} />
        <Route path="/cacademics" element={<Cacademics />} />
        <Route path="/sacademics" element={<Sacademics />} />
      </Routes>
    </Router>
  );
}

export default App;
