
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="intro">
        <h1>About Us</h1>
        <p>FutureDev creates innovative software solutions designed to empower businesses and transform digital landscapes.</p>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To drive innovation and deliver scalable, efficient software solutions that streamline processes and enhance user experience.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>Empowering industries with digital solutions that redefine the realms of technology, AI, and automation.</p>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <ul className="value-list">
          <li><strong>Innovation:</strong> Embracing creativity to solve complex challenges.</li>
          <li><strong>Integrity:</strong> Building trust through transparency and commitment.</li>
          <li><strong>Quality:</strong> Delivering excellence in every line of code.</li>
          <li><strong>Collaboration:</strong> Working together to achieve outstanding results.</li>
        </ul>
      </section>

     
    </div>
  );
};

export default About;
