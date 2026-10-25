'use client'
import React from 'react'
import Link from 'next/link'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const StoryPage = () => {
    return (
        <div className="basic-page">
            <BasicNavbar active="restaurant" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Our Story — Terra & Flame</h1>
                    <p className="basic-page-desc">Where seasonal farm produce meets raw, wood-fired hearth cooking.</p>
                </div>

                <div className="basic-card">
                    <h2 className="basic-card-title">The Philosophy of Simple Cooking</h2>
                    <p style={{ color: 'var(--descriptionColor)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
                        Terra & Flame started with a simple frustration: why does food take weeks to travel from a farm through multiple cold-storage warehouses, distributors, and backrooms before reaching a restaurant plate?
                    </p>
                    <p style={{ color: 'var(--descriptionColor)', lineHeight: '1.8', fontSize: '1.05rem', margin: 0 }}>
                        In 2024, our head chefs partnered directly with six independent growers across Sonoma County, Willamette Valley, and Skagit Valley. We eliminated every distributor in between. Vegetables cut from the soil at dawn are brought straight to our open-fire kitchen by afternoon, ready for evening dinner service.
                    </p>
                </div>

                <div className="basic-grid-3" style={{ marginBottom: '2.5rem' }}>
                    <div className="basic-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌱</div>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '0.65rem' }}>No Cold Storage</h3>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                            We do not keep bulk freezers or deep chillers. Our daily pantry is dictated entirely by what our partner farms harvested that very morning.
                        </p>
                    </div>

                    <div className="basic-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔥</div>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '0.65rem' }}>Open Wood Fire</h3>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                            We cook over hardwood charcoal and fruitwood ember. No complicated sauces—just smoke, fire, cold-pressed oils, and sea salt.
                        </p>
                    </div>

                    <div className="basic-card">
                        <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🤝</div>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '0.65rem' }}>Grower Direct</h3>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                            Every vegetable dish can be traced back to a specific grower by name. We pay our farm partners 35% above wholesale market standard.
                        </p>
                    </div>
                </div>

                <div className="basic-card" style={{ background: 'var(--hbgColor)', padding: '2.5rem', textAlign: 'center', border: '1px solid var(--borderColor)' }}>
                    <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Experience Terra & Flame in Person</h2>
                    <p style={{ color: 'var(--descriptionColor)', fontSize: '1rem', marginBottom: '1.75rem' }}>
                        Dinner reservations open 14 days in advance. Casual counter seating also available for walk-ins.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/restaurant" className="basic-btn">Reserve a Table</Link>
                        <Link href="/restaurant/menu" className="basic-btn basic-btn-secondary">Explore Menu</Link>
                    </div>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default StoryPage
