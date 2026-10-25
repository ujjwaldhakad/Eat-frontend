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
                    <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1rem', marginBottom: '1rem' }}>
                        Terra & Flame started with a simple frustration: why does food take weeks to travel from a farm through multiple cold-storage warehouses, distributors, and backrooms before reaching a restaurant plate?
                    </p>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '1rem', marginBottom: '1rem' }}>
                        In 2024, our head chefs partnered directly with six independent growers in Sonoma County, Willamette Valley, and Skagit Valley. We eliminated every distributor in between. Vegetables cut from the soil at dawn are brought straight to our open-fire kitchen by afternoon, ready for evening dinner service.
                    </p>
                </div>

                <div className="basic-grid-3" style={{ marginBottom: '2rem' }}>
                    <div className="basic-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌱</div>
                        <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.5rem' }}>No Cold Storage</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.5' }}>
                            We do not keep bulk freezers or deep chillers. Our daily pantry is dictated entirely by what our partner farms harvested that very morning.
                        </p>
                    </div>

                    <div className="basic-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔥</div>
                        <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.5rem' }}>Open Wood Fire</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.5' }}>
                            We cook over hardwood charcoal and fruitwood ember. No complicated sauces—just smoke, fire, cold-pressed oils, and sea salt.
                        </p>
                    </div>

                    <div className="basic-card">
                        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤝</div>
                        <h3 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.5rem' }}>Grower Direct</h3>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.5' }}>
                            Every vegetable dish can be traced back to a specific grower by name. We pay our farm partners 35% above wholesale market standard.
                        </p>
                    </div>
                </div>

                <div className="basic-card" style={{ background: '#f3f4f6', padding: '2rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '0.5rem' }}>Experience Terra & Flame in Person</h2>
                    <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                        Dinner reservations open 14 days in advance. Casual counter seating also available for walk-ins.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
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
