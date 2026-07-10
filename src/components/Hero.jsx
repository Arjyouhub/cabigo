import React, { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map widget ids to formData fields
    const fieldName = id.replace('widget-', '');
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fleetWhatsAppNumber = '918073584852';
    let serviceText = 'Attach Car';
    if (formData.service === 'driver') serviceText = 'Driver Opportunity';
    if (formData.service === 'general') serviceText = 'General Partnership';

    const customMsg = `Hi Cabigo Fleet, I am interested in: ${serviceText}. Details:%0A- Name: ${encodeURIComponent(formData.name)}%0A- Phone: ${encodeURIComponent(formData.phone)}%0A`;
    const waUrl = `https://wa.me/${fleetWhatsAppNumber}?text=${customMsg}`;

    setTimeout(() => {
      setFormData({ name: '', phone: '', service: '' });
      setIsSubmitting(false);
      window.open(waUrl, '_blank');
    }, 1000);
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
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content reveal">
          <div class="badge">
            <span class="pulse"></span> Uber Fleet Partner - Bangalore
          </div>
          <h1 class="hero-title">Maximize Your Car's Earning Potential with <span class="text-gold">Cabigo Fleet</span></h1>
          <p class="hero-description">Attach your commercial car with Bangalore’s premium fleet manager. Get worry-free operations, 24/7 driver management, and transparent weekly payouts directly to your account.</p>
          
          <div class="hero-actions">
            <a 
              href="#contact" 
              class="btn btn-primary" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}
            >
              Attach Your Car
            </a>
            <a 
              href="https://wa.me/918073584852?text=Hi%20Cabigo%20Fleet,%20I%20want%20to%20join%20as%20a%20driver." 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-secondary"
            >
              Join as Driver
            </a>
          </div>
          
          <div class="hero-stats">
            <div class="stat-item">
              <h3>24/7</h3>
              <p>Driver Support</p>
            </div>
            <div class="stat-item">
              <h3>Weekly</h3>
              <p>Guaranteed Payout</p>
            </div>
            <div class="stat-item">
              <h3>100%</h3>
              <p>Stress Free</p>
            </div>
          </div>
        </div>
        
        {/* Quick Inquiry Widget */}
        <div class="hero-widget reveal delay-200">
          <h3 class="widget-title">Get Started Today</h3>
          <p class="widget-subtitle">Fill in your details and our fleet experts will call you back within 24 hours.</p>
          <form id="hero-quick-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="widget-name">Full Name</label>
              <input 
                type="text" 
                id="widget-name" 
                class="form-input" 
                placeholder="Enter your name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="widget-phone">Mobile Number</label>
              <input 
                type="tel" 
                id="widget-phone" 
                class="form-input" 
                placeholder="Enter 10-digit number" 
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <label htmlFor="widget-service">How can we help?</label>
              <select 
                id="widget-service" 
                class="form-input" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="attach">Attach My Car to Uber</option>
                <option value="driver">Join as a Driver</option>
                <option value="general">General Partnership</option>
              </select>
            </div>
            <button 
              type="submit" 
              class="btn btn-primary btn-block" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Connecting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
