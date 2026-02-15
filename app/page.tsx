'use client';

import { useState } from 'react';
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          Hazard<span className="logo-accent">Wash</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo" style={{ marginBottom: '1rem' }}>
          Hazard<span className="logo-accent">Wash</span>
        </div>
        <p style={{ fontSize: '18px', marginBottom: '1rem' }}>
          Serving Brisbane seniors with safe, professional pressure washing services
        </p>
        <p style={{ opacity: 0.8 }}>
          ABN: [Your ABN Here] | Fully Insured | CHSP Approved Provider
        </p>
        <p style={{ marginTop: '2rem', fontSize: '16px' }}>
          © 2026 HazardWash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <div className="success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>Your request has been received. We'll contact you shortly.</p>
        <button 
          onClick={() => setIsSubmitted(false)} 
          className="btn btn-primary"
          style={{ marginTop: '2rem' }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
      <div className="form-group">
        <label htmlFor="name">Your Name *</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="service-type">I am a *</label>
        <select id="service-type" name="service-type" required>
          <option value="">Please select...</option>
          <option value="senior">Senior seeking service</option>
          <option value="family">Family member</option>
          <option value="care-provider">Care provider organization</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="suburb">Brisbane Suburb *</label>
        <input type="text" id="suburb" name="suburb" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell us about your needs</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Describe the area needing cleaning, any mobility concerns, or special requirements..."
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit Request'}
      </button>
    </form>
  );
}
export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Safe Pathways for<br />Brisbane Seniors</h1>
            <p className="hero-subtitle">
              Professional pressure washing to prevent slips and maintain independence for elderly residents.
            </p>
            <div className="cta-group">
              <a href="#contact" className="btn btn-primary">Request Service</a>
              <a href="#providers" className="btn btn-secondary">For Care Providers</a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section">
          <h2 className="section-title">Why Choose HazardWash?</h2>
          <div className="trust-badges">
            <div className="badge">
              <div className="badge-icon">🛡️</div>
              <h3>Fully Insured</h3>
              <p>$20M public liability coverage for complete peace of mind</p>
            </div>
            <div className="badge">
              <div className="badge-icon">✓</div>
              <h3>Police Checked</h3>
              <p>All staff undergo comprehensive background verification</p>
            </div>
            <div className="badge">
              <div className="badge-icon">🏥</div>
              <h3>CHSP Approved</h3>
              <p>Registered provider for government-funded care packages</p>
            </div>
            <div className="badge">
              <div className="badge-icon">👴</div>
              <h3>Senior-Focused</h3>
              <p>Respectful, patient service designed for elderly clients</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section services">
          <h2 className="section-title">Our Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Driveway Cleaning</h3>
              <ul>
                <li>Remove moss and algae buildup</li>
                <li>Eliminate slip hazards</li>
                <li>Restore safe vehicle access</li>
                <li>Environmentally friendly process</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Pathway Maintenance</h3>
              <ul>
                <li>Clear walkways of hazards</li>
                <li>Prevent slips and falls</li>
                <li>Improve property access</li>
                <li>Maintain independent living</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Outdoor Safety</h3>
              <ul>
                <li>Patio and deck cleaning</li>
                <li>Steps and entrance ways</li>
                <li>Garden path restoration</li>
                <li>Complete outdoor mobility solutions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form */}
       {/* Contact Form */}
<section className="section contact-section" id="contact">
  <h2 className="section-title">Request a Service</h2>
  <ContactForm />
</section>
      </main>
      <Footer />
    </>
  );
}