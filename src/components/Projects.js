// src/components/Projects.js
import React from 'react';
import Slider from 'react-slick';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    images: [
      'https://via.placeholder.com/800x400?text=Project+1+Image+1',
      'https://via.placeholder.com/800x400?text=Project+1+Image+2',
      'https://via.placeholder.com/800x400?text=Project+1+Image+3',
    ],
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    images: [
      'https://via.placeholder.com/800x400?text=Project+2+Image+1',
      'https://via.placeholder.com/800x400?text=Project+2+Image+2',
      'https://via.placeholder.com/800x400?text=Project+2+Image+3',
    ],
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="projects">
      <h1>Our Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="carousel-container">
              <Slider {...settings} className="project-slider">
                {project.images.map((image, index) => (
                  <div key={index} className="slider-image">
                    <img src={image} alt={`${project.title} Image ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
