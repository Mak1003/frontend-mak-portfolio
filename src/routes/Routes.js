import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';  // Import Education Component

const Routes = () => (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/education" element={<Education />} /> {/* Education Route */}
  </>
);

export default Routes;
