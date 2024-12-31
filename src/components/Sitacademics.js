// Academics.js
import React from 'react';
import './Sitacademics.css';
//import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Academics () {
  console.log('Academics component rendered');
  return (
    <section className="sitacademics" id="academics">
      <div className="academics-item">
        <h2>Academic Programs</h2>
        <h3>Computer Engineering</h3>
        <p>Symbiosis Institute Of Technology</p>

      </div>
    </section>
    
  );
}

export default Academics;
