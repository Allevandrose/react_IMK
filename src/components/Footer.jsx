import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/Footer.css'; // Import the CSS file for styling
import '../assets/css/General.css'; // Import general styles if needed

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="IMK Technologies Logo" />
            </div>
            <p>Empowering businesses through innovative technology solutions and expert software development services.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-links-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#about"><i className="fas fa-chevron-right"></i> About Us</a></li>
              <li><a href="#services"><i className="fas fa-chevron-right"></i> Services</a></li>
              <li><a href="#portfolio"><i className="fas fa-chevron-right"></i> Portfolio</a></li>
              <li><a href="#contact"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#"><i className="fas fa-chevron-right"></i> Custom Software</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Mobile Apps</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Web Development</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> Cloud Solutions</a></li>
              <li><a href="#"><i className="fas fa-chevron-right"></i> AI & ML</a></li>
            </ul>
          </div>
          <div className="footer-links-column">
            <h3 className="footer-heading">Newsletter</h3>
            <p>Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="footer-newsletter">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 IMK Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
