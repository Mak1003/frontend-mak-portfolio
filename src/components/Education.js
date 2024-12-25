import React from 'react';
import './Education.css';
import { Link } from 'react-router-dom';
function Education() {
  return (
    <section className="education" id="education">
      <h2 className="education-title">Educational Details</h2>
      <div className="education-item">
        <h3 className="degree">Bachelor of Science in Computer Engineering</h3>
        <p className="institution">Symbiosis Institute Of Technology</p>
        <p className="duration">2022 - 2026</p>
        <p className="details">A comprehensive program covering software development, hardware systems, and computer networks.</p>
        <Link to="/academics"> 
                <button className="InstButton">View Academics</button>
        </Link>
        <p/>
        <a href='https://www.sitpune.edu.in/' target='_blank' rel="noreferrer">
          <button className='InstButton'>Visit the Institute</button>
        </a>
      </div>
      <div className="education-item">
        <h3 className="degree">Diploma in plastic Technology</h3>
        <p className="institution">Central Institute Of petrochemical Engineering and Technology </p>
        <p className="duration">2020 - 2023</p>
        <p className="details">Focused on Chemical engineering and Technology.</p>
        <Link to="/academics"> 
                <button className="InstButton">View Academics</button>
        </Link>
        <p/>
        <a href='https://www.cipet.gov.in/' target='_blank' rel="noreferrer">
          <button className='InstButton'>Visit the Institute</button>
        </a>
      </div>
      <div className="education-item">
        <h3 className="degree">12th Standard PCM (Physics, Chemistry, Maths)</h3>
        <p className="institution">Kendriya Vidyalaya Abad cantt</p>
        <p className="duration">2019 - 2020</p>
        <p className="details">Focused on Intermidate level of Physics, Chemistry and Maths.</p> 
        <Link to="/academics"> 
                <button className="InstButton">View Academics</button>
        </Link>
        <p/>
        <a href='https://aurangabadcantt.kvs.ac.in/' target='_blank' rel="noreferrer">
          <button className='InstButton'>Visit the Institute</button>
        </a>
      </div>
      {/* Add more education items here */}
    </section>
  );
}

export default Education;
