// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

// Importing technology images
import aws from '../assets/icons/aws.png';
import azure from '../assets/icons/azure.png';
import flutter from '../assets/icons/flutter.png';
import react from '../assets/icons/react.png';
import net from '../assets/icons/net.png';
import java from '../assets/icons/java.webp';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Experience the Future of Technology</h1>
          <p>At Agile Orbit, we create solutions that empower businesses and inspire innovation.</p>
          <button className="cta-button">Discover More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Custom Software Development</h3>
            <p>Creating tailored solutions that drive your business forward.</p>
          </div>
          <div className="service-item">
            <h3>Cloud Solutions</h3>
            <p>Scalable, secure cloud solutions for modern enterprises.</p>
          </div>
          <div className="service-item">
            <h3>Data Analytics & AI</h3>
            <p>Unlock actionable insights with advanced analytics.</p>
          </div>
          <div className="service-item">
            <h3>Cybersecurity</h3>
            <p>Comprehensive security strategies to safeguard your data.</p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies">
        <h2>Technologies We Use</h2>
        <p>We leverage cutting-edge tools to deliver innovative solutions:</p>
        <div className="tech-grid">
          <div className="tech-item">
            <img src={aws} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="tech-item">
            <img src={react} alt="React" />
            <p>React</p>
          </div>
          <div className="tech-item">
            <img src={java} alt="Java" />
            <p>Java</p>
          </div>
          <div className="tech-item">
            <img src={flutter} alt="flutter" />
            <p>Flutter</p>
          </div>
          <div className="tech-item">
            <img src={net} alt=".net" />
            <p>.Net</p>
          </div>
          <div className="tech-item">
            <img src={azure} alt="Azure" />
            <p>Azure</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
