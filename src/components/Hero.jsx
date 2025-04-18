import React from "react";
import '../assets/css/Hero.css';
import '../assets/css/General.css';



const Hero = () =>{
    return(
        <section id="home" class="hero">
          <div class="hero-grid"></div>
          <div class="container">
            <div class="hero-content">
              <h1>Innovative <span>Technology</span> Solutions</h1>
              <p>IMK Technologies delivers cutting-edge software solutions that transform businesses through innovation, expertise, and customer-focused development.</p>
              <a href="#services" class="btn">Our Services</a>
            </div>
          </div>
        </section>
    )
}

export default Hero;