'use client';

import Link from 'next/link';

export default function Providers() {
    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <Link href="/" className="logo">
                        Hazard<span className="logo-accent">Wash</span>
                    </Link>
                    <nav className="nav">
                        <Link href="/">Home</Link>
                        <Link href="#services">Services</Link>
                        <Link href="#contact">Contact</Link>
                        <a href="tel:1300HAZARD" className="phone-link">📞 1300 HAZARD</a>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>For Care Providers</h1>
                        <p className="hero-subtitle">
                            Partner with HazardWash to provide safe, professional pressure washing services for your elderly clients across Brisbane.
                        </p>
                        <div className="cta-group">
                            <a href="#contact" className="btn btn-primary">Partner With Us</a>
                            <a href="#credentials" className="btn btn-secondary">View Credentials</a>
                        </div>
                    </div>
                </section>

                {/* Why Partner */}
                <section className="section">
                    <h2 className="section-title">Why Partner With HazardWash?</h2>
                    <div className="trust-badges">
                        <div className="badge">
                            <div className="badge-icon">📋</div>
                            <h3>CHSP Ready</h3>
                            <p>Fully compliant with Commonwealth Home Support Programme requirements</p>
                        </div>
                        <div className="badge">
                            <div className="badge-icon">💰</div>
                            <h3>Direct Billing</h3>
                            <p>Invoice directly through approved home care packages - no out of pocket for clients</p>
                        </div>
                        <div className="badge">
                            <div className="badge-icon">🛡️</div>
                            <h3>Fully Compliant</h3>
                            <p>ABN, insurance, police check - all documentation available immediately</p>
                        </div>
                        <div className="badge">
                            <div className="badge-icon">⚡</div>
                            <h3>Rapid Response</h3>
                            <p>Priority scheduling for care provider referrals across Brisbane</p>
                        </div>
                    </div>
                </section>

                {/* Services for Providers */}
                <section className="section services">
                    <h2 className="section-title">Services for Your Clients</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Slip Hazard Removal</h3>
                            <ul>
                                <li>Moss and algae elimination</li>
                                <li>Wet surface risk reduction</li>
                                <li>Fall prevention assessment</li>
                                <li>Written hazard report available</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <h3>Access Maintenance</h3>
                            <ul>
                                <li>Driveway and path cleaning</li>
                                <li>Entry and exit point safety</li>
                                <li>Mobility aid friendly surfaces</li>
                                <li>Regular maintenance schedules</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <h3>Care Package Billing</h3>
                            <ul>
                                <li>CHSP approved service</li>
                                <li>HCP direct billing available</li>
                                <li>Detailed invoicing provided</li>
                                <li>Flexible scheduling options</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Credentials */}
                <section className="section" id="credentials">
                    <h2 className="section-title">Our Credentials</h2>
                    <div className="credentials-grid">
                        <div className="credential-item">
                            <div className="credential-icon">📄</div>
                            <div className="credential-info">
                                <h3>ABN</h3>
                                <p>18 865 697 083</p>
                            </div>
                        </div>
                        <div className="credential-item">
                            <div className="credential-icon">🛡️</div>
                            <div className="credential-info">
                                <h3>Public Liability Insurance</h3>
                                <p>$20M coverage - Certificate available on request</p>
                            </div>
                        </div>
                        <div className="credential-item">
                            <div className="credential-icon">✓</div>
                            <div className="credential-info">
                                <h3>Police Check</h3>
                                <p>Current national police clearance - Available on request</p>
                            </div>
                        </div>
                        <div className="credential-item">
                            <div className="credential-icon">🏥</div>
                            <div className="credential-info">
                                <h3>CHSP Compliance</h3>
                                <p>Services aligned with Commonwealth Home Support Programme</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact for Providers */}
                <section className="section contact-section" id="contact">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to partner with HazardWash? Contact us directly to discuss how we can support your clients.
                    </p>
                    <ProviderContactForm />
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="logo" style={{ marginBottom: '1rem' }}>
                        Hazard<span className="logo-accent">Wash</span>
                    </div>
                    <p style={{ fontSize: '18px', marginBottom: '1rem' }}>
                        Serving Brisbane seniors with safe, professional pressure washing services
                    </p>
                    <p style={{ fontSize: '20px', marginBottom: '1rem' }}>
                        📞 <a href="tel:1300HAZARD" style={{ color: 'white', textDecoration: 'none' }}>1300 HAZARD</a>
                    </p>
                    <p style={{ opacity: 0.8 }}>
                        ABN: 18 865 697 083 | Fully Insured | CHSP Approved Provider
                    </p>
                    <p style={{ marginTop: '2rem', fontSize: '16px' }}>
                        © 2026 HazardWash. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}

function ProviderContactForm() {
    return (
        <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
        >
            <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
            <input type="hidden" name="subject" value="New Care Provider Enquiry - HazardWash" />
            <div className="form-group">
                <label htmlFor="org-name">Organisation Name *</label>
                <input type="text" id="org-name" name="org-name" required />
            </div>
            <div className="form-group">
                <label htmlFor="contact-name">Contact Name *</label>
                <input type="text" id="contact-name" name="contact-name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="clients">Approximate Number of Clients</label>
                <select id="clients" name="clients">
                    <option value="">Please select...</option>
                    <option value="1-10">1-10 clients</option>
                    <option value="11-25">11-25 clients</option>
                    <option value="26-50">26-50 clients</option>
                    <option value="50+">50+ clients</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="message">How can we help? *</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your organisation and how HazardWash can support your clients..."
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
        </form>
    );
}