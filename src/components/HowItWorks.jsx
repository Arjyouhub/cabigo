import React from 'react';

const HowItWorks = () => {
  return (
    <section class="section-padding bg-secondary-section" id="process">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-subtitle">How To Join</span>
          <h2 class="section-title">Getting Onboarded is Simple</h2>
          <p class="section-desc">Our streamlined 4-step onboarding process gets your vehicle on the road and earning money in no time.</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-number">01</span>
              <h3 class="timeline-title">Submit Application</h3>
              <p class="timeline-desc">Submit our quick website contact form or send a message on WhatsApp with your vehicle model and contact details.</p>
            </div>
          </div>
          
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-number">02</span>
              <h3 class="timeline-title">Document Submission</h3>
              <p class="timeline-desc">Provide vehicle registration certificate (RC), insurance, tourist permit papers, and driver KYC documents (DL, Aadhaar).</p>
            </div>
          </div>
          
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-number">03</span>
              <h3 class="timeline-title">Inspection & Setup</h3>
              <p class="timeline-desc">Our team conducts a fast safety inspection of the car and registers the vehicle on the Uber Fleet partner platform.</p>
            </div>
          </div>
          
          <div class="timeline-item reveal">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-number">04</span>
              <h3 class="timeline-title">Start Generating Revenue</h3>
              <p class="timeline-desc">We assign a verified driver or hand you the app keys. Watch your earnings accrue daily, paid out every single Tuesday.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
