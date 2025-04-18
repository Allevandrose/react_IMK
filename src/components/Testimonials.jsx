import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css' // Default Splide styles
import '../assets/css/testimonials.css' // Your external CSS file

const testimonials = [
  {
    text: `"IMK Technologies delivered a custom software solution that transformed our business operations. Their team's expertise and dedication to quality exceeded our expectations."`,
    name: 'Michael Anderson',
    title: 'CEO, TechInnovate',
    image: '/api/placeholder/60/60',
  },
  {
    text: `"The mobile app developed by IMK Technologies helped us increase customer engagement by 40%. Their attention to detail and user-focused design set them apart from other developers."`,
    name: 'Sarah Thompson',
    title: 'Marketing Director, Nexus Retail',
    image: '/api/placeholder/60/60',
  },
  {
    text: `"Working with IMK Technologies was a game-changer for our startup. Their cloud solutions provided the scalability we needed to grow rapidly while maintaining security and performance."`,
    name: 'David Chen',
    title: 'CTO, GrowthWave',
    image: '/api/placeholder/60/60',
  },
  {
    text: "IMK Technologies brought our vision to life with a sleek and intuitive web platform. Their team's professionalism, responsiveness, and technical skill made the entire process smooth and successful.",
    name: 'Linda Mwangi',
    title: 'Product Manager, DigiNova',
    image: '/api/placeholder/60/60',
  }
  
]

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>What our clients say about our services and solutions</p>
        </div>

        <Splide
          options={{
            type: 'loop',          // Enables infinite looping
            autoplay: true,        // Enables autoplay
            interval: 3000,      // Autoplay interval in milliseconds
            perPage: 3,
            perMove: 1,
            gap: '20px',
            pagination: true,
            arrows: true,
            breakpoints: {
              992: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
            },
          }}
          aria-label="Client testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index}>
              <div className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-img"
                  />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Testimonials;
