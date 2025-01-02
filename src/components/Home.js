import React, { useRef } from 'react';
import './Home.css';
import './ExploreButton.css';
import ExploreButton from './ExploreButton';

function Home() {
  const resumeRef = useRef(null);

  const scrollToResume = () => {
    if (resumeRef.current) {
      resumeRef.current.scrollIntoView({ behavior: 'smooth' });
      resumeRef.current.classList.add('visible');
    }
  };
  

  return (
    <><section className="home" id="home">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-description">
          My name is Mahesh and I am a software developer with a passion for creating innovative web applications.
        </p>
        <button className="spaceship-button" onClick={scrollToResume}>
          <ExploreButton />
        </button>
      </div>
      <div ref={resumeRef} className="resume-section">
        <h2 className='headname'>My Resume</h2>
        <div className="resume-content">
          <h3>Mahesh Anil Kharote.</h3>
          <p><strong>Email:</strong> maheshkharote2580@gmail.com</p>
          <p><strong>Phone:</strong> 123456789</p>
          <p><strong>LinkedIn:</strong> www.linkedin.com/in/mahesh-kharote-64abb7185</p>
          <p><strong>GitHub:</strong> https://github.com/Mak1003</p>

          <h4>PROFESSIONAL SUMMARY</h4>
          <p>Dedicated software developer with over 1 year of experience in web application development. Proficient in JavaScript and React, with a strong foundation in software engineering principles.</p>

          <h4>TECHNICAL SKILLS</h4>
          <ul>
            <li>Languages: JavaScript, Python, Java</li>
            <li>Frameworks: React, Node.js, Express</li>
            <li>Databases: MongoDB, MySQL</li>
            <li>Tools: Git, Docker, Webpack</li>
          </ul>

          <h4>EDUCATION</h4>
          <p>Persuing Bachelor of Technology in Computer Science,(Graduating: july 2026)</p>
          <p>For more details tap on EDUCATION on navigation bar above</p>

          <h4>PROJECTS</h4>
          <h5>Portfolio Website</h5>
          <p>Developed a personal portfolio website using React.</p>

          <h5>Task Management App</h5>
          <p>Created a task management application using the MERN stack.</p>

          <h4>CERTIFICATIONS</h4>
          <p>Certified JavaScript Developer (2021)</p>
          <p>Certified Python Developer (2022)</p>

          <h4>REFERENCES</h4>
          <p>Available upon request.</p>
        </div>
      </div>

    </section>
    <div class="middleblock">
      <div class="middleblock-content">
        <h2>About me</h2>
        <div class="project-grid">
          <div class="project-card">
            <img src="https://via.placeholder.com/300" alt="Project" />
            <h3>My journy</h3>
            <p>Project description goes here.</p>
            </div>
            <div class="project-card">
            <img src="https://via.placeholder.com/300" alt="Project" />
            <h3>My journy</h3>
            <p>Project description goes here.</p>
            </div>
            <div class="project-card">
            <img src="https://via.placeholder.com/300" alt="Project" />
            <h3>My journy</h3>
            <p>Project description goes here.</p>
            </div>
          </div>
        </div>
      </div>
    <div class="footer">
      <div class="container">© 2024 Mahesh Kharote. All rights reserved.</div>
    </div>
    </>
  );
}

export default Home;