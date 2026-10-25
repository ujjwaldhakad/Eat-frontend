'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const SubscriptionPage = () => {
    const [plan, setPlan] = useState('The Table (₹58/week)');
    const [status, setStatus] = useState('Active');
    const [pausedWeek, setPausedWeek] = useState(false);

    const togglePause = () => {
        setPausedWeek(!pausedWeek);
    };

    return (
        <div className="basic-page">
            <BasicNavbar active="subscription" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Manage Subscription</h1>
                    <p className="basic-page-desc">Easily adjust your weekly produce box size, skip deliveries, or view billing.</p>
                </div>

                <div className="basic-grid-2">
                    {/* Active Plan Overview */}
                    <div className="basic-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 className="basic-card-title">Current Plan</h2>
                            <span className={`basic-badge ${status === 'Active' ? 'basic-badge-success' : 'basic-badge-warning'}`}>
                                {status}
                            </span>
                        </div>

                        <div style={{ margin: '1rem 0' }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111827' }}>
                                {plan}
                            </div>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                                8 seasonal vegetables + 3 herbs + 2 chef recipe cards.
                            </p>
                        </div>

                        <div style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                            <div>Next Scheduled Dispatch: <strong>Wednesday, 6:30 AM</strong></div>
                            <div>Delivery Status: <strong>{pausedWeek ? 'Paused for this week' : 'Confirmed for dispatch'}</strong></div>
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <button
                                type="button"
                                onClick={togglePause}
                                className="basic-btn basic-btn-secondary"
                            >
                                {pausedWeek ? 'Resume Upcoming Delivery' : 'Skip Next Delivery'}
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    if (confirm("Are you sure you want to cancel your weekly box subscription?")) {
                                        setStatus('Cancelled');
                                    }
                                }}
                                className="basic-btn basic-btn-danger"
                            >
                                Cancel Subscription
                            </button>
                        </div>
                    </div>

                    {/* Change Plan */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Change Box Size</h2>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Switch anytime. Any change takes effect starting next week's morning harvest.
                        </p>

                        <div className="basic-form-group">
                            <label className="basic-label">Select Plan Size</label>
                            <select
                                className="basic-select"
                                value={plan}
                                onChange={(e) => setPlan(e.target.value)}
                            >
                                <option value="The Solo (₹34/week)">The Solo - ₹34/week (1 person, 5 vegetables, 2 herbs)</option>
                                <option value="The Table (₹58/week)">The Table - ₹58/week (2-3 people, 8 vegetables, 3 herbs)</option>
                                <option value="The Kitchen (₹92/week)">The Kitchen - ₹92/week (4-6 people, 14 vegetables, 4 herbs)</option>
                            </select>
                        </div>

                        <div className="basic-form-group">
                            <label className="basic-label">Preferred Delivery Morning</label>
                            <select className="basic-select">
                                <option>Wednesday Morning (6:30 AM - 9:00 AM)</option>
                                <option>Saturday Morning (6:30 AM - 9:00 AM)</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            onClick={() => alert(`Subscription updated to: ${plan}`)}
                            className="basic-btn"
                        >
                            Save Plan Changes
                        </button>
                    </div>
                </div>

                {/* Billing History */}
                <div className="basic-card">
                    <h2 className="basic-card-title">Past Billing Receipts</h2>
                    <table className="basic-table">
                        <thead>
                            <tr>
                                <th>Invoice Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Receipt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2026-10-18</td>
                                <td>The Table Box - Weekly Renewal</td>
                                <td>₹58.00</td>
                                <td><span className="basic-badge basic-badge-success">Paid</span></td>
                                <td><a href="#" style={{ color: '#16a34a' }}>Download PDF</a></td>
                            </tr>
                            <tr>
                                <td>2026-10-11</td>
                                <td>The Table Box - Weekly Renewal</td>
                                <td>₹58.00</td>
                                <td><span className="basic-badge basic-badge-success">Paid</span></td>
                                <td><a href="#" style={{ color: '#16a34a' }}>Download PDF</a></td>
                            </tr>
                            <tr>
                                <td>2026-10-04</td>
                                <td>The Solo Box - Initial Trial</td>
                                <td>₹34.00</td>
                                <td><span className="basic-badge basic-badge-success">Paid</span></td>
                                <td><a href="#" style={{ color: '#16a34a' }}>Download PDF</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default SubscriptionPage
