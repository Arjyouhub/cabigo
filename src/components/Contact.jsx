import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace('contact-', '');
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fleetWhatsAppNumber = '918073584852';
    // Format service selection for text display
    let interestText = formData.service;
    if (formData.service === 'attach_sedan') interestText = 'Attach Sedan / Hatchback';
    if (formData.service === 'attach_suv') interestText = 'Attach SUV (Innova / Ertiga)';
    if (formData.service === 'driver_job') interestText = 'Join as Driver';
    if (formData.service === 'other') interestText = 'Other Inquiry';

    const customMsg = `Hi Cabigo Fleet,%0A%0AI want to submit an inquiry:%0A- Name: ${encodeURIComponent(formData.name)}%0A- Phone: ${encodeURIComponent(formData.phone)}%0A- Interest: ${encodeURIComponent(interestText)}%0A- Message: ${encodeURIComponent(formData.message)}`;
    const waUrl = `https://wa.me/${fleetWhatsAppNumber}?text=${customMsg}`;

    setShowSuccess(true);

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1800);
  };

  const handleReset = () => {
    setShowSuccess(false);
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <section class="section-padding bg-secondary-section" id="contact">
      <div class="container">
        <div class="contact-grid">
          {/* Info Column */}
          <div class="contact-info reveal">
            <div>
              <span class="section-subtitle" style={{ textAlign: 'left' }}>Connect With Us</span>
              <h2 class="contact-info-title">Let’s Start Earning Together</h2>
              <p class="contact-info-desc">Visit our office or call us to finalize your onboarding. Let’s get your car generating passive income.</p>
            </div>
            
            <div class="contact-details">
              <div class="contact-detail-item">
                <div class="contact-detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="contact-detail-content">
                  <h4>Our Location</h4>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>
              
              <div class="contact-detail-item">
                <div class="contact-detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.57c-2.83-1.48-5.13-3.77-6.61-6.61l1.58-1.58c.27-.27.35-.65.24-1C8.76 6.32 8.56 5.13 8.56 3.9c0-.5-.4-.9-.9-.9h-3.1c-.5 0-.9.4-.9.9 0 9.38 7.62 17 17 17 .5 0 .9-.4.9-.9v-3.1c0-.5-.4-.9-.9-.9z"/>
                  </svg>
                </div>
                <div class="contact-detail-content">
                  <h4>Call Support</h4>
                  <p><a href="tel:+918073584852">+91 80735 84852</a> (24/7 Support Line)</p>
                </div>
              </div>
              
              <div class="contact-detail-item">
                <div class="contact-detail-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="contact-detail-content">
                  <h4>Email Inquiries</h4>
                  <p><a href="mailto:info@cabigofleet.com">info@cabigofleet.com</a></p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Follow Us</h4>
              <div class="social-links">
                <a href="https://instagram.com/cabigofleet" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 4.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Form Column */}
          <div class="contact-form-card reveal delay-200" style={{ position: 'relative' }}>
            {/* Success State Overlay */}
            <div class={`form-success-overlay ${showSuccess ? 'active' : ''}`} id="form-success-overlay">
              <div class="success-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '320px' }}>Thank you for reaching out. We have received your query and will contact you shortly.</p>
              <button class="btn btn-secondary" onClick={handleReset}>Send Another Message</button>
            </div>
            
            <form id="contact-form" onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    class="form-input" 
                    placeholder="e.g., Ramesh Kumar" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    class="form-input" 
                    placeholder="e.g., 9876543210" 
                    pattern="[0-9]{10}" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div class="form-group">
                <label htmlFor="contact-service">Interested Service</label>
                <select 
                  id="contact-service" 
                  class="form-input" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Please select service</option>
                  <option value="attach_sedan">Attach Sedan / Hatchback</option>
                  <option value="attach_suv">Attach SUV (Innova / Ertiga)</option>
                  <option value="driver_job">Join as Driver</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              
              <div class="form-group">
                <label htmlFor="contact-message">Additional Notes / Message</label>
                <textarea 
                  id="contact-message" 
                  class="form-input textarea-input" 
                  placeholder="Tell us about your car (model, year) or your driving experience..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary btn-block" style={{ marginTop: '1.5rem' }}>Send Online Inquiry</button>
              
              <div class="form-submit-wrapper">
                <span class="form-divider">Or Contact Immediately</span>
              </div>
              
              <div class="contact-actions-row">
                <a 
                  href="https://wa.me/918073584852?text=Hi%20Cabigo%20Fleet,%20I%20want%20to%20know%20more%20about%20attaching%20my%20car." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-whatsapp"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.282 3.507 8.491-.005 6.66-5.342 11.997-11.953 11.997-2.005-.001-3.973-.504-5.717-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.793 1.453 5.485.002 9.948-4.453 9.951-9.943.002-2.66-1.033-5.159-2.91-7.04C16.545 1.745 14.053.71 11.998.71c-5.488 0-9.95 4.457-9.953 9.949-.001 1.693.456 3.34 1.32 4.825L2.33 21.68l6.317-1.656c1.39.757 2.923 1.13 4.382 1.13zM18.2 15.36c-.3-.15-1.77-.875-2.043-.976-.275-.102-.475-.152-.674.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.893-.797-1.496-1.782-1.67-2.083-.175-.3-.018-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.625-.925-2.225-.244-.589-.492-.51-.675-.52-.174-.01-.374-.012-.574-.012s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.105 3.213 5.097 4.506.71.31 1.267.494 1.702.632.715.227 1.36.195 1.872.118.571-.085 1.77-.724 2.02-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"/>
                  </svg>
                  WhatsApp Chat
                </a>
                <a href="tel:+918073584852" class="btn btn-secondary" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.57c-2.83-1.48-5.13-3.77-6.61-6.61l1.58-1.58c.27-.27.35-.65.24-1C8.76 6.32 8.56 5.13 8.56 3.9c0-.5-.4-.9-.9-.9h-3.1c-.5 0-.9.4-.9.9 0 9.38 7.62 17 17 17 .5 0 .9-.4.9-.9v-3.1c0-.5-.4-.9-.9-.9z"/>
                  </svg>
                  Call Support
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
