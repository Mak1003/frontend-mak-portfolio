import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import './Explore.css';

function Explore() {
  useEffect(() => {
    AOS.init();  // Initialize AOS
  }, []);

  return (
    <section className="explore" id="exploreSection" data-aos="fade-up">
      <h2>Explore More</h2>
      <div className="explore-container">
        <div className="explore-item" data-aos="zoom-in">
          <img src="your-photo-1.jpg" alt="Icon 1" className="explore-photo"/>
          <p>Project 1</p>
        </div>
        <div className="explore-item" data-aos="zoom-in">
          <img src="your-photo-2.jpg" alt="Icon 2" className="explore-photo"/>
          <p>Project 2</p>
        </div>
        <div className="explore-item" data-aos="zoom-in">
          <img src="your-photo-3.jpg" alt="Icon 3" className="explore-photo"/>
          <p>Project 3</p>
        </div>
      </div>
    </section>
  );
}

export default Explore;
