import React from 'react';
import '../assets/css/Services.css'; // Import the CSS file for styling
import '../assets/css/General.css'; // Import general styles if needed

const Services = () => {
    return (
        <section id="services" class="section services">
        <div class="container">
          <div class="section-header">
            <h2>Our Services</h2>
            <p>We offer a wide range of technology services to meet your business needs</p>
          </div>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-code"></i>
              </div>
              <h3>Custom Software Development</h3>
              <p>Tailored software solutions designed to address your specific business challenges and requirements.</p>
              <a href="#contact" class="btn">Learn More</a>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile App Development</h3>
              <p>Innovative and user-friendly mobile applications for iOS and Android platforms.</p>
              <a href="#contact" class="btn">Learn More</a>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-globe"></i>
              </div>
              <h3>Web Development</h3>
              <p>Responsive and dynamic websites that enhance your online presence and user engagement.</p>
              <a href="#contact" class="btn">Learn More</a>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-cloud"></i>
              </div>
              <h3>Cloud Solutions</h3>
              <p>Secure and scalable cloud infrastructure to optimize your business operations.</p>
              <a href="#contact" class="btn">Learn More</a>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-robot"></i>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>Advanced AI solutions that transform data into actionable insights for your business.</p>
              <a href="#contact" class="btn">Learn More</a>
            </div>
            <div class="service-card">
              <div class="service-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Cybersecurity Services</h3>
              <p>Comprehensive security solutions to protect your digital assets and sensitive information.</p>
              <a href="#contact" class="btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    
    )
}

export default Services;