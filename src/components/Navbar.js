import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo/agilelogo.png';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo-image" />
        <h1 className="navbar-logo">Agile Orbit</h1>
      </div>
      <div className="divider"></div> 
      <ul className="navbar-links">
        <li><Link to="/" style={{ '--link-index': 1 }}>Home</Link></li>
        <li><Link to="/about" style={{ '--link-index': 2 }}>About</Link></li>
        <li><Link to="/contact" style={{ '--link-index': 3 }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
