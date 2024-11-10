// src/components/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      {/* Introduction Section */}
      <section className="intro">
        <h1>About FutureDev</h1>
        <p>Redefining digital experiences and empowering industries with innovative, high-performance software solutions.</p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="card mission">
          <h2>Our Mission</h2>
          <p>To deliver scalable, high-quality software solutions that streamline processes and enhance user experiences across industries.</p>
        </div>
        <div className="card vision">
          <h2>Our Vision</h2>
          <p>To be at the forefront of digital transformation, empowering organizations to reach their full potential through cutting-edge technology.</p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2>Our Expertise</h2>
        <p>With years of experience in software development, we bring a wealth of expertise in cloud computing, data analytics, AI, and cybersecurity. Our solutions are crafted to address unique industry challenges, ensuring performance, scalability, and security.</p>
      </section>

      {/* Approach Section */}
      <section className="approach">
        <h2>Our Unique Approach</h2>
        <p>We follow a client-first approach, aligning our development process closely with your goals. From concept to deployment, we engage collaboratively with your team to ensure our solutions integrate seamlessly into your business. By adopting agile methodologies and focusing on continuous improvement, we provide software that grows and adapts to your evolving needs.</p>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <h2>Client Success Stories</h2>
        <p>FutureDev has partnered with organizations across sectors to create impactful digital solutions. From enhancing customer engagement for retail brands to developing secure platforms for fintech, our projects reflect our commitment to excellence and client satisfaction.</p>
      </section>
    </div>
  );
};

export default About;
