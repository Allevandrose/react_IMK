import React from "react";
import "../assets/css/Contacts.css"; // Import the CSS file for styling
import "../assets/css/General.css"; // Import general styles if needed

const Contacts = () => {
  return (
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for more information</p>
        </div>
        <div class="contact-container">
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-text">
                <h3>Our Location</h3>
                <p>123 Tech Avenue, Innovation District, CA 94103</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="contact-text">
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:+11234567890">+25704218853</a>
                </p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-text">
                <h3>Email Address</h3>
                <p>
                  <a href="mailto:info@imktech.com">info@imktech.com</a>
                </p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-text">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <form>
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="message">Your Message</label>
                <textarea
                  id="message"
                  class="form-control"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;