import React from 'react';

const Services = () => {
  return (
    <section class="section-padding bg-secondary-section" id="services">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-subtitle">What We Offer</span>
          <h2 class="section-title">Professional Fleet Management Services</h2>
          <p class="section-desc">We bridge the gap between car owners and professional drivers, offering a hands-off, highly profitable management ecosystem in Bangalore.</p>
        </div>
        
        <div class="services-grid">
          {/* Service 1: Uber Fleet Management */}
          <div class="service-card reveal">
            <div class="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19 15v3H5v-3h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1m-3 8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-12-6h12v1H5v-1m12-4H7V5h10v4m2-6H5c-1.1 0-2 .9-2 2v6h18V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <h3 class="service-title">Uber Fleet Management</h3>
            <p class="service-desc">Complete lifecycle management for your vehicles. We handle driver onboarding, tracking, vehicle logs, and optimization to ensure maximum utilization.</p>
            <ul class="service-bullets">
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Uber partner integration
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Daily mileage & trip tracking
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Regular maintenance logs
              </li>
            </ul>
          </div>
          
          {/* Service 2: Car Attachment Support */}
          <div class="service-card reveal delay-100">
            <div class="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <h3 class="service-title">Car Attachment Support</h3>
            <p class="service-desc">Earn passive income by attaching your car with us. Ideal for owners looking for a hands-free return on their investment without worrying about driving.</p>
            <ul class="service-bullets">
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Verified, professional drivers
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Complete vehicle security
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                High monthly returns
              </li>
            </ul>
          </div>
          
          {/* Service 3: 24/7 Driver Support */}
          <div class="service-card reveal delay-200">
            <div class="service-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 2C6.48 2 2 6.48 2 12c0 .34.02.67.06 1H4.08C4.03 12.67 4 12.34 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8v2c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </div>
            <h3 class="service-title">24-Hour Driver Support</h3>
            <p class="service-desc">We protect your assets and support our drivers around the clock. Active hotline for breakdowns, emergencies, booking assistance, and app troubleshooting.</p>
            <ul class="service-bullets">
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Breakdown and towing assistance
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Immediate replacement drivers
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                Emergency medical/police backup
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
