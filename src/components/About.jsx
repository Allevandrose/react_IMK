import React from "react";
import '../assets/css/General.css';
import '../assets/css/About.css'; // Import the CSS file for styling
import team from '../assets/images/team.png';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Learn more about our company and what drives us forward</p>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src={team} alt="IMK Technologies Team" />
          </div>
          <div className="about-text">
            <h3>Pioneering Technology Excellence</h3>
            <p>
              IMK Technologies is a leading software development company
              dedicated to delivering innovative solutions that empower
              businesses to thrive in the digital landscape.
            </p>
            <p>
              Since our inception, we've been passionate about leveraging
              cutting-edge technologies to solve complex business challenges and
              create meaningful impact for our clients across various
              industries.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>200+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Expert Developers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
