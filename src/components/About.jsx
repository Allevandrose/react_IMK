import React from "react";
import '../assets/css/About.css'; // Import the CSS file for styling
import '../assets/css/General.css';
import team from '../assets/images/team.png';

const About = () => {
  return (
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <h2>About Us</h2>
          <p>Learn more about our company and what drives us forward</p>
        </div>
        <div class="about-content">
          <div class="about-img">
            <img src={team} alt="IMK Technologies Team" />
          </div>
          <div class="about-text">
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
            <div class="stats">
              <div class="stat-item">
                <h4>10+</h4>
                <p>Years Experience</p>
              </div>
              <div class="stat-item">
                <h4>200+</h4>
                <p>Projects Completed</p>
              </div>
              <div class="stat-item">
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
