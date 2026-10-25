'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "How does the 'Field to door in 24 hours' promise work?",
            a: "Our partner growers begin harvesting at dawn (typically around 5:30 AM). Crates are collected, portioned into compostable paper boxes, and loaded into local delivery vans so they land at your doorstep the very next morning before breakfast."
        },
        {
            q: "Can I swap items if I have an allergy or dislike something?",
            a: "Yes. On 'The Table' and 'The Kitchen' plans, you can log into your account before Monday 8:00 PM and swap any 2 items for other seasonal vegetables currently available in the harvest schedule."
        },
        {
            q: "How do you package vegetables without using plastic?",
            a: "We use recycled unbleached cardboard boxes, compostable vegetable cellulose bags for greens, and unbleached cotton twine for bunched herbs. You can leave the empty boxes outside on your next delivery day for our team to collect and reuse."
        },
        {
            q: "What if I am out of town for a week?",
            a: "You can pause or skip any delivery week with a single click in your Subscription Dashboard. As long as you pause before Sunday midnight, you will not be billed for that week."
        },
        {
            q: "Which cities are you currently delivering to?",
            a: "We currently deliver in 6 cities: Bengaluru, Mumbai, Delhi NCR, Pune, Hyderabad, and Chandigarh."
        },
        {
            q: "Do I need to be awake when the box arrives?",
            a: "No. If you are not available, our delivery partner will safely place the insulated box at your doorstep or with your apartment security gate and send you an immediate SMS notification with a delivery photo."
        },
        {
            q: "How do I make a table reservation for the Terra & Flame restaurant?",
            a: "You can book directly through the Restaurant page by clicking 'Book a Table'. Instant confirmation is provided via SMS without requiring any advance booking fee."
        }
    ];

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="basic-page">
            <BasicNavbar active="faq" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Frequently Asked Questions</h1>
                    <p className="basic-page-desc">Common questions about our produce sourcing, subscription delivery, and packaging.</p>
                </div>

                <div className="basic-card">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                style={{
                                    borderBottom: index === faqs.length - 1 ? 'none' : '1px solid #e5e7eb',
                                    padding: '1rem 0'
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        background: 'none',
                                        border: 'none',
                                        textAlign: 'left',
                                        fontSize: '1.05rem',
                                        fontWeight: 600,
                                        color: '#111827',
                                        cursor: 'pointer',
                                        padding: 0
                                    }}
                                >
                                    <span>{faq.q}</span>
                                    <span style={{ fontSize: '1.25rem', color: '#6b7280', marginLeft: '1rem' }}>
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                {isOpen && (
                                    <p style={{ margin: '0.75rem 0 0 0', color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="basic-card" style={{ background: '#f3f4f6', textAlign: 'center', padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#111827' }}>Still have a question?</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        Our customer support team is happy to help you with orders and subscriptions.
                    </p>
                    <a href="/contact" className="basic-btn">Contact Support Team</a>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default FaqPage
