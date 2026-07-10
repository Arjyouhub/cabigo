import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <FAQ />
      <Contact />
      
      {/* Dynamic CTA Banner Section */}
      <section class="section-padding container">
        <div class="cta-banner reveal">
          <h2 class="cta-title">Turn Your Asset Into A Reliable Source of Revenue</h2>
          <p class="cta-desc">Join Bangalore's most trusted fleet management network. Let our experts handle the hassle while you enjoy direct, secure bank payouts every week.</p>
          <div class="cta-actions">
            <a 
              href="#contact" 
              class="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Onboarding
            </a>
            <a 
              href="https://wa.me/918073584852?text=Hi%20Cabigo%20Fleet,%20I'd%20like%20to%20discuss%20partnering." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp"
            >
              Chat with Fleet Manager
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
