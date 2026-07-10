import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Success! ${email} has been added to our newsletter list.`);
    setEmail('');
  };

  const handleScrollTo = (id) => {
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
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          {/* Brand */}
          <div class="footer-brand">
            <a href="#" class="logo" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>
              <div class="logo-icon">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="4"/>
                  <path d="M 68,30 C 58,18 38,18 28,32 C 18,46 20,66 32,74 C 42,82 60,82 68,70" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"/>
                  <path d="M 38,58 L 62,58 L 65,52 L 58,52 L 54,46 L 46,46 L 42,52 L 35,52 Z" fill="currentColor"/>
                  <circle cx="43" cy="62" r="3" fill="currentColor"/>
                  <circle cx="57" cy="62" r="3" fill="currentColor"/>
                </svg>
              </div>
              <div class="logo-text">
                CABIGO
                <span>FLEET MANAGEMENT</span>
              </div>
            </a>
            <p>Cabigo Fleet is Bangalore's leading vehicle management and driver leasing agency. Dedicated to efficiency, transparency, and superior support since 2026.</p>
          </div>
          
          {/* Company links */}
          <div>
            <h4 class="footer-col-title">Cabigo Fleet</h4>
            <ul class="footer-links">
              <li><a href="#home" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>Home</a></li>
              <li><a href="#services" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Our Services</a></li>
              <li><a href="#process" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('process'); }}>How to Join</a></li>
            </ul>
          </div>
          
          {/* Services links */}
          <div>
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links">
              <li><a href="#services" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Uber Fleet Attachment</a></li>
              <li><a href="#services" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Driver Leasing</a></li>
              <li><a href="#services" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>Weekly Payouts</a></li>
              <li><a href="#faq" class="footer-link" onClick={(e) => { e.preventDefault(); handleScrollTo('faq'); }}>FAQ Support</a></li>
            </ul>
          </div>
          
          {/* Subscription newsletter */}
          <div class="footer-subscribe">
            <h4 class="footer-col-title">Stay Updated</h4>
            <p>Subscribe to our newsletter to receive the latest updates, tips, and driver opportunities in Bangalore.</p>
            <form class="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                class="subscribe-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" class="btn-subscribe" aria-label="Subscribe">
                <svg viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div class="footer-bottom">
          <p class="copyright">&copy; 2026 Cabigo Fleet Management. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#" class="footer-bottom-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" class="footer-bottom-link" onClick={(e) => e.preventDefault()}>Terms of Service</a>
            <a href="#contact" class="footer-bottom-link" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
