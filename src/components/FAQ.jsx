import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "How do weekly payouts work?",
    answer: "Our billing week runs from Monday 4:00 AM to the following Monday 4:00 AM. Uber transfers the payout directly to our fleet portal. We clear your accounts and deposit your share directly into your bank account every Tuesday morning via IMPS/NEFT, accompanied by a transparent earnings report."
  },
  {
    question: "What documents are required to attach my car?",
    answer: "To list a vehicle with Cabigo Fleet, we require: 1) Vehicle RC book (commercial/yellow plate), 2) Valid vehicle insurance policy, 3) Fitness certificate, 4) State commercial permit (KA), 5) Owner's Aadhaar card and PAN card."
  },
  {
    question: "Who pays for fuel, maintenance, and toll fees?",
    answer: "We offer flexible models. In the Dry Lease model, Cabigo Fleet or the assigned driver manages day-to-day fuel costs, and tolls are automatically reimbursed by Uber. Mechanical wear-and-tear / maintenance costs are typically shared or managed by the vehicle owner according to our contract schedules."
  },
  {
    question: "How do you ensure my vehicle's safety?",
    answer: "Every vehicle we manage is fitted with high-precision GPS tracking devices. We enforce strict speed limits, geofencing, and shift restrictions. Additionally, we only onboard vetted professional drivers with clean police verification records and verified background histories."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section class="section-padding" id="faq">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-subtitle">Got Questions?</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-desc">Clear answers to help you understand our operational model, payouts, security, and partnership options.</p>
        </div>
        
        <div class="faq-list">
          {FAQ_DATA.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                class={`faq-item reveal ${isActive ? 'active' : ''}`}
              >
                <button 
                  class="faq-question" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <h4>{item.question}</h4>
                  <div class="faq-icon-wrapper">
                    <svg viewBox="0 0 24 24">
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                    </svg>
                  </div>
                </button>
                <div 
                  class="faq-answer" 
                  style={{
                    maxHeight: isActive ? '300px' : '0px',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  <div class="faq-answer-inner">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
