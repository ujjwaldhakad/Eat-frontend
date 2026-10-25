'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: 'General Question',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="basic-page">
            <BasicNavbar active="contact" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Contact Us</h1>
                    <p className="basic-page-desc">Have a question about your produce box, delivery, or farm sourcing? Get in touch.</p>
                </div>

                <div className="basic-grid-2">
                    {/* Contact Info */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Direct Support</h2>
                        <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                            We reply to all inquiries within 24 hours during harvest days (Monday through Saturday).
                        </p>

                        <div style={{ marginBottom: '1rem' }}>
                            <strong>Customer Support Email:</strong>
                            <div style={{ color: '#16a34a' }}>hello@eatproduce.com</div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <strong>Phone / WhatsApp:</strong>
                            <div>+91 98765 43210 (Mon–Sat, 8 AM – 7 PM)</div>
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <strong>Distribution Hub:</strong>
                            <div style={{ color: '#4b5563' }}>
                                Sector 18, Central Cold Chain Depot,<br />
                                Agricultural Zone, Delivery Hub 1
                            </div>
                        </div>

                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f3f4f6', borderRadius: '4px' }}>
                            <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Currently delivering in:</strong>
                            <p style={{ margin: 0, fontSize: '0.85rem', color: '#4b5563' }}>
                                Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad, and Chandigarh.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Send a Message</h2>

                        {submitted ? (
                            <div style={{ padding: '1.5rem', background: '#dcfce7', borderRadius: '4px', color: '#15803d' }}>
                                <strong>Message received!</strong>
                                <p style={{ margin: '0.5rem 0 1rem 0', fontSize: '0.9rem' }}>
                                    Thank you, {form.name}. Our dispatch team will follow up at {form.email} shortly.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="basic-btn basic-btn-secondary"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="basic-form-group">
                                    <label className="basic-label">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="basic-input"
                                        placeholder="Full name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>

                                <div className="basic-form-group">
                                    <label className="basic-label">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="basic-input"
                                        placeholder="name@example.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>

                                <div className="basic-form-group">
                                    <label className="basic-label">Subject</label>
                                    <select
                                        className="basic-select"
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    >
                                        <option value="General Question">General Question</option>
                                        <option value="Box Delivery Issue">Box Delivery Issue</option>
                                        <option value="Custom Box Request">Custom Box Request</option>
                                        <option value="Restaurant Table Inquiry">Restaurant Table Inquiry</option>
                                        <option value="Farm Partnership">Farm Partnership</option>
                                    </select>
                                </div>

                                <div className="basic-form-group">
                                    <label className="basic-label">Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="basic-textarea"
                                        placeholder="Type your message here..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button type="submit" className="basic-btn" style={{ width: '100%', padding: '0.75rem' }}>
                                    Submit Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default ContactPage
