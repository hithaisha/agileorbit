import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Importing technology images
import aws from '../assets/icons/aws.png';
import azure from '../assets/icons/azure.png';
import flutter from '../assets/icons/flutter.png';
import react from '../assets/icons/react.png';
import net from '../assets/icons/net.png';
import angular from '../assets/icons/angular.png';
import oracle from '../assets/icons/oracle.png';
import java from '../assets/icons/java.webp';
import mysql from '../assets/icons/mysql.png';
import springboot from '../assets/icons/springboot.png';
import reactnative from '../assets/icons/reactnative.png';
import mssql from '../assets/icons/mssql.png';
import googlecloud from '../assets/icons/googlecloud.png';


const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content glass">
          <h1>Experience the Future of Technology</h1>
          <p>At Agile Orbit, we create solutions that empower businesses and inspire innovation.</p>
          <Link to="/about">
            <button className="cta-button">Discover More</button>
          </Link>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item" style={{ '--delay-index': 1 }}>
            <h3>Custom Software Development</h3>
            <p>Creating tailored solutions that drive your business forward.</p>
          </div>
          <div className="service-item" style={{ '--delay-index': 2 }}>
            <h3>Cloud Solutions</h3>
            <p>Scalable, secure cloud solutions for modern enterprises.</p>
          </div>
          <div className="service-item" style={{ '--delay-index': 3 }}>
            <h3>Mobile Application Development</h3>
            <p>Build engaging and intuitive mobile experiences across platforms to reach your customers anytime, anywhere.</p>
          </div>
          <div className="service-item" style={{ '--delay-index': 4 }}>
            <h3>ERP Solutions</h3>
            <p>Streamline business processes and integrate various functions with robust ERP solutions tailored to your needs.</p>
          </div>
          <div className="service-item" style={{ '--delay-index': 5 }}>
            <h3>Web Development</h3>
            <p>Design and develop responsive websites and web applications that deliver exceptional user experiences.</p>
          </div>
        </div>
      </section>

      <section className="technologies">
        <h2>Technologies We Use</h2>
        <p>We leverage cutting-edge tools to deliver innovative solutions:</p>
        <div className="tech-grid">
          <div className="tech-item">
            <img src={react} alt="React" />
            <p>React</p>
          </div>
          <div className="tech-item">
            <img src={flutter} alt="Flutter" />
            <p>Flutter</p>
          </div>
          <div className="tech-item">
            <img src={angular} alt="Angular" />
            <p>Angular</p>
          </div>
          <div className="tech-item">
            <img src={springboot} alt="Sprintboot" />
            <p>Springboot</p>
          </div>
          <div className="tech-item">
            <img src={reactnative} alt="react native" />
            <p>React Native</p>
          </div>
          <div className="tech-item">
            <img src={net} alt=".Net" />
            <p>.Net</p>
          </div>
          <div className="tech-item">
            <img src={java} alt="Java" />
            <p>Java</p>
          </div>
          <div className="tech-item">
            <img src={mssql} alt="mssql" />
            <p>MS Sql</p>
          </div>
          <div className="tech-item">
            <img src={mysql} alt="mysql" />
            <p>My Sql</p>
          </div>
          <div className="tech-item">
            <img src={googlecloud} alt="googlecloud" />
            <p>Google Cloud</p>
          </div>
          <div className="tech-item">
            <img src={aws} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="tech-item">
            <img src={oracle} alt="Oracle" />
            <p>Oracle</p>
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
