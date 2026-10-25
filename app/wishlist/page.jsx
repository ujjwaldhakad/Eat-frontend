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
            desc: "Sourdough, garlic butter, fresh garden herbs."
        },
        {
            id: 3,
            name: "The Kitchen Box",
            price: 92,
            category: "Produce Box",
            desc: "14 seasonal vegetables, 4 bunched herbs, 3 recipe cards."
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
                    <p className="basic-page-desc">Items and produce plans you saved for later.</p>
                </div>

                {wishlist.length === 0 ? (
                    <div className="basic-card" style={{ textAlign: 'center', padding: '3rem' }}>
                        <p style={{ color: '#6b7280', marginBottom: '1rem' }}>Your wishlist is empty.</p>
                        <Link href="/boxes" className="basic-btn">Explore Produce Boxes</Link>
                    </div>
                ) : (
                    <div className="basic-grid-3">
                        {wishlist.map(item => (
                            <div key={item.id} className="basic-card">
                                <span className="basic-badge basic-badge-success">{item.category}</span>
                                <h3 style={{ margin: '0.75rem 0 0.5rem 0', fontSize: '1.2rem', color: '#111827' }}>
                                    {item.name}
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '1rem' }}>
                                    {item.desc}
                                </p>
                                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>
                                    ₹{item.price}
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <Link href="/cart" className="basic-btn" style={{ flex: 1, textAlign: 'center' }}>
                                        Move to Cart
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="basic-btn basic-btn-secondary"
                                        style={{ padding: '0.5rem 0.75rem' }}
                                    >
                                        Remove
                                    </button>
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
