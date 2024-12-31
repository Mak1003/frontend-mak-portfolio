import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Academics from './components/Sitacademics';
import Cacademics from './components/cipetacademics'; 
import Sacademics from './components/Schoolacademics';  // Import Education Component

const Routes = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/education" element={<Education />} />
    <Route path="/academic" element={<Academics />} />
    <Route path="/cacademics" element={<Cacademics />} />
    <Route path="/sacademics" element={<Sacademics />} />
    
  </>
);

export default Routes;
