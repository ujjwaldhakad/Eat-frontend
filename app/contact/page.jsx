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
                    <p className="basic-page-desc">Questions about harvest sourcing, morning deliveries, or dining tables? Reach out.</p>
                </div>

                <div className="basic-grid-2">
                    {/* Contact Info */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Direct Support</h2>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '1rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                            We reply to all inquiries within 24 hours during harvest days (Monday through Saturday).
                        </p>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <strong style={{ color: 'var(--pcolor)' }}>Customer Support Email:</strong>
                            <div style={{ color: 'var(--primary-color)', fontSize: '1.05rem', marginTop: '0.2rem' }}>hello@eatproduce.com</div>
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <strong style={{ color: 'var(--pcolor)' }}>Phone & WhatsApp Hotline:</strong>
                            <div style={{ color: 'var(--primary-color)', fontSize: '1.05rem', marginTop: '0.2rem' }}>+91 98765 43210 (Mon–Sat, 7 AM – 8 PM)</div>
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <strong style={{ color: 'var(--pcolor)' }}>Central Cold-Chain Dispatch:</strong>
                            <div style={{ color: 'var(--descriptionColor)', marginTop: '0.2rem', lineHeight: '1.5' }}>
                                Sector 18, Central Cold Chain Depot,<br />
                                Agricultural Eco Zone, Hub 1
                            </div>
                        </div>

                        <div style={{ marginTop: '1.75rem', padding: '1.25rem', background: 'var(--hbgColor)', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                            <strong style={{ display: 'block', color: 'var(--primary-color)', marginBottom: '0.4rem' }}>Cities Currently Delivered:</strong>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--descriptionColor)', lineHeight: '1.5' }}>
                                Delhi NCR, Mumbai, Bengaluru, Pune, Hyderabad, and Chandigarh.
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Send a Message</h2>

                        {submitted ? (
                            <div style={{ padding: '2rem', background: 'rgba(29, 97, 29, 0.25)', border: '1px solid var(--mainColor)', borderRadius: '0.75rem', color: '#86efac' }}>
                                <strong style={{ fontSize: '1.2rem', display: 'block', marginBottom: '0.5rem' }}>✓ Message Received</strong>
                                <p style={{ margin: '0 0 1.25rem 0', color: 'var(--primary-color)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                    Thank you, {form.name}. Our dispatch coordinator will reply directly to {form.email} shortly.
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
                                        placeholder="e.g. Dana Reed"
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
                                    <label className="basic-label">Inquiry Subject</label>
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
                                        placeholder="How can we help you today?..."
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button type="submit" className="basic-btn" style={{ width: '100%', padding: '0.85rem' }}>
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
