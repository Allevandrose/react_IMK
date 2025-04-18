import React from "react";
import '../assets/css/Hero.css';
import '../assets/css/General.css';



const Hero = () =>{
    return(
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Innovative <span>Technology</span> Solutions</h1>
              <p>IMK Technologies delivers cutting-edge software solutions that transform businesses through innovation, expertise, and customer-focused development.</p>
              <a href="#services" className="btn">Our Services</a>
            </div>
          </div>
        </section>
    )
}

export default Hero;