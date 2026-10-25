'use client'
import React from 'react'
import Link from 'next/link'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const VisitPage = () => {
    return (
        <div className="basic-page">
            <BasicNavbar active="restaurant" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Visit Terra & Flame</h1>
                    <p className="basic-page-desc">Location, kitchen hours, parking, and dining guidelines.</p>
                </div>

                <div className="basic-grid-2">
                    {/* Location & Contact */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Location & Contact</h2>
                        <div style={{ marginBottom: '1.25rem' }}>
                            <strong style={{ display: 'block', color: '#111827', marginBottom: '0.25rem' }}>Restaurant Address:</strong>
                            <p style={{ color: '#4b5563', margin: 0, lineHeight: '1.5' }}>
                                Terra & Flame Hearth Kitchen<br />
                                44 Heritage Mill Lane, Near Old Town Square<br />
                                Central Arts & Dining District
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <strong style={{ display: 'block', color: '#111827', marginBottom: '0.25rem' }}>Direct Line:</strong>
                            <p style={{ color: '#4b5563', margin: 0 }}>
                                +91 98765 43210 / (080) 2345-6789
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <strong style={{ display: 'block', color: '#111827', marginBottom: '0.25rem' }}>Email Inquiries:</strong>
                            <p style={{ color: '#16a34a', margin: 0 }}>
                                reservations@terraflame.com
                            </p>
                        </div>

                        <div style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px' }}>
                            <strong style={{ fontSize: '0.9rem' }}>Valet Parking:</strong>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0.25rem 0 0 0' }}>
                                Complimentary valet service available at the front entrance during all dinner hours.
                            </p>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Kitchen Hours</h2>

                        <table className="basic-table" style={{ marginTop: '0.5rem' }}>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Lunch Service</th>
                                    <th>Dinner Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Tuesday – Friday</strong></td>
                                    <td>12:30 PM – 3:30 PM</td>
                                    <td>7:00 PM – 11:00 PM</td>
                                </tr>
                                <tr>
                                    <td><strong>Saturday & Sunday</strong></td>
                                    <td>12:00 PM – 4:00 PM</td>
                                    <td>6:30 PM – 11:30 PM</td>
                                </tr>
                                <tr>
                                    <td><strong>Monday</strong></td>
                                    <td colSpan="2" style={{ color: '#dc2626' }}>
                                        Closed for Farm Harvesting & Maintenance
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div style={{ marginTop: '1.5rem' }}>
                            <Link href="/restaurant" className="basic-btn" style={{ width: '100%', textAlign: 'center' }}>
                                Book a Table Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Dining Policies */}
                <div className="basic-card">
                    <h2 className="basic-card-title">Dining Guidelines</h2>
                    <div className="basic-grid-3">
                        <div>
                            <strong style={{ color: '#111827' }}>Dress Code:</strong>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
                                Smart casual. We encourage comfortable attire suitable for an open wood-fire hearth atmosphere.
                            </p>
                        </div>
                        <div>
                            <strong style={{ color: '#111827' }}>Walk-in Seating:</strong>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
                                Our counter bar seats 14 walk-in guests on a first-come, first-served basis every evening.
                            </p>
                        </div>
                        <div>
                            <strong style={{ color: '#111827' }}>Dietary & Allergies:</strong>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
                                Vegetarian, vegan, and gluten-conscious preparations are clearly marked across all seasonal menus.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default VisitPage
