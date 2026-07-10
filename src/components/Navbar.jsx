import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section tracking
      const sections = ['home', 'services', 'process', 'faq', 'contact'];
      let current = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
          <div className="logo-icon">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="4"/>
              <path d="M 68,30 C 58,18 38,18 28,32 C 18,46 20,66 32,74 C 42,82 60,82 68,70" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
              <path d="M 38,58 L 62,58 L 65,52 L 58,52 L 54,46 L 46,46 L 42,52 L 35,52 Z" fill="currentColor"/>
              <circle cx="43" cy="62" r="3" fill="currentColor"/>
              <circle cx="57" cy="62" r="3" fill="currentColor"/>
            </svg>
          </div>
          <div className="logo-text">
            CABIGO
            <span>FLEET MANAGEMENT</span>
          </div>
        </a>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li>
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#process" 
              className={`nav-link ${activeSection === 'process' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('process'); }}
            >
              How It Works
            </a>
          </li>
          <li>
            <a 
              href="#faq" 
              className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('faq'); }}
            >
              FAQ
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="nav-link btn btn-secondary"
              onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
              style={{ color: 'var(--text-primary)' }}
            >
              Contact Us
            </a>
          </li>
        </ul>
        
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
