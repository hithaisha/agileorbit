// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

// Import images from the local assets folder
import cloudIcon from '../assets/icons/cloud.png';
import aiIcon from '../assets/icons/ai.png';
import dataIcon from '../assets/icons/data.png';
import securityIcon from '../assets/icons/security.png';

const Home = () => {
  return (
    <div className="home">
      {/* Intro Section */}
      <section className="intro">
        <h1>Welcome to Agile Orbit</h1>
        <p>
          Agile Orbit offers transformative software solutions crafted for high-performance industries. From cloud technology to AI, we propel your operations into the future.
        </p>
      </section>

      {/* Key Services Section */}
      <section className="key-services">
        <h2>Our Stellar Services</h2>
        <div className="services-list">
          <div className="service-item">
            <img src={cloudIcon} alt="Cloud Solutions" />
            <h3>Cloud Solutions</h3>
            <p>Reliable, scalable cloud infrastructure built for any environment.</p>
          </div>
          <div className="service-item">
            <img src={aiIcon} alt="AI & Machine Learning" />
            <h3>AI Integration</h3>
            <p>Intelligent, adaptive solutions powered by advanced AI algorithms.</p>
          </div>
          <div className="service-item">
            <img src={dataIcon} alt="Data Analytics" />
            <h3>Data Analytics</h3>
            <p>Data insights for informed decision-making and business growth.</p>
          </div>
          <div className="service-item">
            <img src={securityIcon} alt="Cybersecurity" />
            <h3>Cybersecurity</h3>
            <p>End-to-end security that evolves with the latest threats.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-preview">
        <h2>Projects in Orbit</h2>
        <div className="portfolio-list">
          <div className="portfolio-item">
            <img src="https://source.unsplash.com/300x200/?technology" alt="Project 1" />
            <h3>Fintech Lanka solutions</h3>
            <p>Harnessing data to foresee market trends and optimize outcomes.</p>
          </div>
          <div className="portfolio-item">
            <img src="https://source.unsplash.com/300x200/?city" alt="Project 2" />
            <h3>KKG Coco Lanka</h3>
            <p>Website with Quotes for Coconut exporter in Srilanka</p>
          </div>
          <div className="portfolio-item">
            <img src="https://source.unsplash.com/300x200/?factory" alt="Project 3" />
            <h3>Invoicing Mobile Application</h3>
            <p>Mobile Invoicing and Inventory Management Application for both Android and IOS</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Client Experiences</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p>"Agile Orbit has completely revolutionized our workflow."</p>
            <h4>- Chris Green, CTO at FutureTech</h4>
          </div>
          <div className="testimonial-item">
            <p>"Their expertise in AI is unmatched. Highly recommended."</p>
            <h4>- Sarah Lee, CEO at DataNow</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
