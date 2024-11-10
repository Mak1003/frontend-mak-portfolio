import React, { useState } from 'react';
import './Projects.css';

function MiniGame() {
  const [score, setScore] = useState(0);
  const [boxPosition, setBoxPosition] = useState({ top: '50%', left: '50%' });

  const handleClick = () => {
    setScore(score + 1);
    moveBox();
  };

  const moveBox = () => {
    const newTop = Math.random() * 80 + 10; // Random position within 10% to 90%
    const newLeft = Math.random() * 80 + 10; // Random position within 10% to 90%
    setBoxPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  return (
    <div className="mini-game">
      <h3>Mini Game: Click the Box!</h3>
      <p>Score: {score}</p>
      <div
        className="game-box"
        style={{
          position: 'absolute',
          top: boxPosition.top,
          left: boxPosition.left,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          cursor: 'pointer',
          transition: '0.3s',
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-name">Project 1</h3>
          <p className="project-description">An awesome project description.</p>
          <a href="https://github.com/Mak1003/my-portfolio/tree/master" className="project-link">View Details</a>
        </div>
        <div className="project-card">
          <h3 className="project-name">Project 2</h3>
          <p className="project-description">Another cool project description.</p>
          <a href="https://github.com/Mak1003/my-portfolio/tree/master" className="project-link">View Details</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
      <MiniGame />
    </section>
  );
}

export default Projects;