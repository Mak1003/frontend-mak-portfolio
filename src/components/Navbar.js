import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">My Portfolio</div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;