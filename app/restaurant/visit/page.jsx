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
                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', color: 'var(--pcolor)', marginBottom: '0.35rem' }}>Restaurant Address:</strong>
                            <p style={{ color: 'var(--primary-color)', margin: 0, lineHeight: '1.6', fontSize: '1.05rem' }}>
                                Terra & Flame Hearth Kitchen<br />
                                44 Heritage Mill Lane, Near Old Town Square<br />
                                Central Arts & Dining District
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', color: 'var(--pcolor)', marginBottom: '0.35rem' }}>Direct Line:</strong>
                            <p style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.05rem' }}>
                                +91 98765 43210 / (080) 2345-6789
                            </p>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', color: 'var(--pcolor)', marginBottom: '0.35rem' }}>Email Inquiries:</strong>
                            <p style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.05rem' }}>
                                reservations@terraflame.com
                            </p>
                        </div>

                        <div style={{ padding: '1rem', background: 'var(--hbgColor)', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                            <strong style={{ fontSize: '0.95rem', color: 'var(--pcolor)' }}>Valet Parking:</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--descriptionColor)', margin: '0.3rem 0 0 0', lineHeight: '1.5' }}>
                                Complimentary valet service available at the front entrance during all dinner hours.
                            </p>
                        </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="basic-card">
                        <h2 className="basic-card-title">Kitchen Hours</h2>

                        <table className="basic-table" style={{ marginTop: '0.75rem' }}>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Lunch Service</th>
                                    <th>Dinner Service</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong style={{ color: 'var(--primary-color)' }}>Tuesday – Friday</strong></td>
                                    <td>12:30 PM – 3:30 PM</td>
                                    <td style={{ color: 'var(--pcolor)', fontWeight: 'bold' }}>7:00 PM – 11:00 PM</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--primary-color)' }}>Saturday & Sunday</strong></td>
                                    <td>12:00 PM – 4:00 PM</td>
                                    <td style={{ color: 'var(--pcolor)', fontWeight: 'bold' }}>6:30 PM – 11:30 PM</td>
                                </tr>
                                <tr>
                                    <td><strong style={{ color: 'var(--primary-color)' }}>Monday</strong></td>
                                    <td colSpan="2" style={{ color: 'var(--hightColor)', fontWeight: 600 }}>
                                        Closed for Farm Harvesting & Maintenance
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/restaurant" className="basic-btn" style={{ width: '100%', textAlign: 'center', padding: '0.85rem' }}>
                                Book a Table Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Dining Policies */}
                <div className="basic-card">
                    <h2 className="basic-card-title">Dining Guidelines</h2>
                    <div className="basic-grid-3">
                        <div style={{ background: 'var(--hbgColor)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                            <strong style={{ color: 'var(--pcolor)', display: 'block', marginBottom: '0.4rem' }}>Dress Code:</strong>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '0.92rem', margin: 0, lineHeight: '1.6' }}>
                                Smart casual. Comfortable attire suitable for an open wood-fire hearth atmosphere.
                            </p>
                        </div>
                        <div style={{ background: 'var(--hbgColor)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                            <strong style={{ color: 'var(--pcolor)', display: 'block', marginBottom: '0.4rem' }}>Walk-in Seating:</strong>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '0.92rem', margin: 0, lineHeight: '1.6' }}>
                                Our counter bar seats 14 walk-in guests on a first-come, first-served basis every evening.
                            </p>
                        </div>
                        <div style={{ background: 'var(--hbgColor)', padding: '1.25rem', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                            <strong style={{ color: 'var(--pcolor)', display: 'block', marginBottom: '0.4rem' }}>Dietary & Allergies:</strong>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '0.92rem', margin: 0, lineHeight: '1.6' }}>
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
