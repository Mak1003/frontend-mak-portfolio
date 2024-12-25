// Academics.js
import React from 'react';
import './Sitacademics.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Academics () {
  console.log('Academics component rendered');
  return (
    <div className="academics">
      <h4>ACADEMICS</h4>
      <p>Here are some of the subjects I have studied:</p>
      <ul>
        <li>Computer Science</li>
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Chemistry</li>
      </ul>
      <p>For more details, you can view my academic records:</p>
      
      <Link to="/academics"> 
        <button className="InstButton">View Academics</button>
      </Link>
    </div>
  );
};

export default Academics;
