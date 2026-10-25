'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const CareersPage = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [applied, setApplied] = useState(false);

    const jobs = [
        {
            id: 1,
            title: "Farm Relations & Sourcing Specialist",
            dept: "Agriculture & Operations",
            location: "On-site (Regional partner farms)",
            type: "Full-Time",
            desc: "Work directly with regional growers across Sonoma and Willamette valleys to plan seasonal plantings and quality grading."
        },
        {
            id: 2,
            title: "Cold-Chain Logistics Coordinator",
            dept: "Supply Chain",
            location: "Central Depot (Delivery Hub 1)",
            type: "Full-Time",
            desc: "Oversee early morning box dispatch, routing algorithms, and zero-plastic temperature maintenance."
        },
        {
            id: 3,
            title: "Sous Chef - Wood Fire & Garden Menu",
            dept: "Terra & Flame Kitchen",
            location: "Restaurant Kitchen",
            type: "Full-Time",
            desc: "Lead charcoal hearth preparation, daily produce receiving, and line execution for high-volume seasonal service."
        },
        {
            id: 4,
            title: "Customer Experience Associate",
            dept: "Support",
            location: "Hybrid / Remote",
            type: "Full-Time",
            desc: "Assist box subscribers with delivery schedules, customization requests, and feedback resolutions."
        }
    ];

    const handleApply = (e) => {
        e.preventDefault();
        setApplied(true);
    };

    return (
        <div className="basic-page">
            <BasicNavbar />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Careers at EAT</h1>
                    <p className="basic-page-desc">Join our team connecting regional organic farms directly to dinner tables.</p>
                </div>

                <div className="basic-card" style={{ marginBottom: '2rem' }}>
                    <h2 className="basic-card-title">Why work with us?</h2>
                    <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '0.95rem' }}>
                        We are building an equitable supply chain that pays farmers above market rates and delivers the cleanest vegetables to households without plastic packaging. We offer competitive pay, health coverage, and a weekly farm produce box for every employee.
                    </p>
                </div>

                <h2 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '1rem' }}>Open Positions ({jobs.length})</h2>

                <div className="basic-grid-2" style={{ marginBottom: '2rem' }}>
                    {jobs.map(job => (
                        <div key={job.id} className="basic-card">
                            <span className="basic-badge basic-badge-success">{job.dept}</span>
                            <h3 style={{ margin: '0.75rem 0 0.25rem 0', fontSize: '1.15rem', color: '#111827' }}>
                                {job.title}
                            </h3>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.75rem' }}>
                                📍 {job.location} · ⏱ {job.type}
                            </div>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                                {job.desc}
                            </p>
                            <button
                                type="button"
                                onClick={() => { setSelectedRole(job.title); setApplied(false); }}
                                className="basic-btn"
                                style={{ width: '100%' }}
                            >
                                Apply for this position
                            </button>
                        </div>
                    ))}
                </div>

                {/* Application Form */}
                {selectedRole && (
                    <div className="basic-card" style={{ border: '2px solid #111827' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h2 className="basic-card-title" style={{ margin: 0 }}>
                                Application: {selectedRole}
                            </h2>
                            <button
                                type="button"
                                onClick={() => setSelectedRole(null)}
                                className="basic-btn-secondary"
                                style={{ padding: '0.35rem 0.75rem', cursor: 'pointer' }}
                            >
                                Cancel
                            </button>
                        </div>

                        {applied ? (
                            <div style={{ padding: '1.5rem', background: '#dcfce7', borderRadius: '4px', color: '#15803d' }}>
                                <strong>Application Submitted!</strong>
                                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
                                    Thank you for applying. Our talent team will review your qualifications and reach out via email.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleApply}>
                                <div className="basic-form-row">
                                    <div className="basic-form-group">
                                        <label className="basic-label">Full Name</label>
                                        <input type="text" required className="basic-input" placeholder="e.g. Dana Reed" />
                                    </div>
                                    <div className="basic-form-group">
                                        <label className="basic-label">Email Address</label>
                                        <input type="email" required className="basic-input" placeholder="name@example.com" />
                                    </div>
                                </div>

                                <div className="basic-form-row">
                                    <div className="basic-form-group">
                                        <label className="basic-label">Phone Number</label>
                                        <input type="tel" required className="basic-input" placeholder="+91 98765 43210" />
                                    </div>
                                    <div className="basic-form-group">
                                        <label className="basic-label">LinkedIn / Portfolio URL</label>
                                        <input type="url" className="basic-input" placeholder="https://linkedin.com/in/..." />
                                    </div>
                                </div>

                                <div className="basic-form-group">
                                    <label className="basic-label">Brief Introduction & Relevant Experience</label>
                                    <textarea rows="4" required className="basic-textarea" placeholder="Tell us why you would be a great fit for EAT..."></textarea>
                                </div>

                                <button type="submit" className="basic-btn">Submit Application</button>
                            </form>
                        )}
                    </div>
                )}
            </main>

            <BasicFooter />
        </div>
    )
}

export default CareersPage
