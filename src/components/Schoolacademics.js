// Academics.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sacademics = ({ children }) => {
  return (
    <div className="academics">
      {children}
      <Link to="/academics"> 
        <button className="InstButton">View Academics</button>
      </Link>
    </div>
  );
};

export default Sacademics;