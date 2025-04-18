import React, { useState } from 'react'
import ecommerce from '../assets/images/ecommerce.png'
import fitness from '../assets/images/fitness.png'
import crm from '../assets/images/crm.jpeg'
import smart from '../assets/images/smart.png'
import health from '../assets/images/health.jpeg'
import learning from '../assets/images/learning.jpeg'
import '../assets/css/Portfolio.css' // Import the CSS file for styling
import '../assets/css/General.css' // Import general styles if needed
// If you're using Font Awesome via library, import the icons here

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with inventory management and payment processing',
      image: ecommerce,
      type: 'web',
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'Mobile application for tracking workouts, nutrition, and fitness goals',
      image: fitness,
      type: 'mobile',
    },
    {
      id: 3,
      title: 'Business CRM System',
      description: 'Custom CRM solution with lead management and analytics dashboard',
      image: crm,
      type: 'software',
    },
    {
      id: 4,
      title: 'Smart Home System',
      description: 'IoT-based solution for home automation and energy efficiency',
      image: smart,
      type: 'software',
    },
    {
      id: 5,
      title: 'Healthcare Management',
      description: 'Comprehensive system for patient records and hospital administration',
      image: health,
      type: 'software',
    },
    {
      id: 6,
      title: 'Educational Platform',
      description: 'Online learning platform with course management and student progress tracking',
      image: learning,
      type: 'web',
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.type === activeFilter)

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <p>Explore our latest projects and success stories</p>
        </div>

        <div className="portfolio-filter">
          {['all', 'web', 'mobile', 'software'].map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} className="portfolio-img" />
              <div className="portfolio-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  <a href="#"><i className="fas fa-link"></i></a>
                  <a href="#"><i className="fas fa-search"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
