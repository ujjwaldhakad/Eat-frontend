'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const WishlistPage = () => {
    const [wishlist, setWishlist] = useState([
        {
            id: 1,
            name: "The Solo Box",
            price: 34,
            category: "Produce Box",
            desc: "5 seasonal vegetables, 2 bunched herbs, 1 chef recipe card."
        },
        {
            id: 2,
            name: "Smoked Mushroom Toast",
            price: 380,
            category: "Kitchen Specialty",
            desc: "Sourdough, garlic butter, fresh garden herbs kissed by charcoal flame."
        },
        {
            id: 3,
            name: "The Kitchen Box",
            price: 92,
            category: "Produce Box",
            desc: "14 seasonal vegetables, 4 bunched herbs, 3 recipe cards for a full household."
        }
    ]);

    const removeFromWishlist = (id) => {
        setWishlist(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="basic-page">
            <BasicNavbar active="wishlist" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">My Wishlist</h1>
                    <p className="basic-page-desc">Produce plans and wood-fire kitchen dishes you saved for later.</p>
                </div>

                {wishlist.length === 0 ? (
                    <div className="basic-card" style={{ textAlign: 'center', padding: '3.5rem' }}>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>Your wishlist is currently empty.</p>
                        <Link href="/boxes" className="basic-btn">Explore Produce Boxes</Link>
                    </div>
                ) : (
                    <div className="basic-grid-3">
                        {wishlist.map(item => (
                            <div key={item.id} className="basic-card" style={{ display: 'flex', flexDirection: 'column' }}>
                                <div>
                                    <span className="basic-badge">{item.category}</span>
                                    <h3 style={{ margin: '1rem 0 0.5rem 0', fontSize: '1.35rem', color: 'var(--primary-color)' }}>
                                        {item.name}
                                    </h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--descriptionColor)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                                        {item.desc}
                                    </p>
                                </div>

                                <div style={{ marginTop: 'auto' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--pcolor)', marginBottom: '1.25rem' }}>
                                        ₹{item.price}
                                    </div>
                                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                                        <Link href="/cart" className="basic-btn" style={{ flex: 1, textAlign: 'center' }}>
                                            Add to Cart
                                        </Link>
                                        <button
                                            type="button"
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="basic-btn basic-btn-secondary"
                                            style={{ padding: '0.6rem 1rem', color: 'var(--hightColor)' }}
                                            aria-label="Remove item"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <BasicFooter />
        </div>
    )
}

export default WishlistPage
