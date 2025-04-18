import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import '../assets/css/Nav.css'; // Optional: If you have your styles there
import '../assets/css/General.css';

// You can import the Font Awesome library in the main entry file if not done already
import '@fortawesome/fontawesome-free/css/all.min.css';

const Test = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Manage body overflow when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="IMK Technologies Logo" />
          </div>
          <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {/* Font Awesome icons for the hamburger menu and close icon */}
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Test;
