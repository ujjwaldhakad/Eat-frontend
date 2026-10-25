'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const CartPage = () => {
    const [items, setItems] = useState([
        { id: 1, name: "The Table Box (Weekly Plan)", type: "Produce Box", price: 58, quantity: 1 },
        { id: 2, name: "Charred Corn Ribs (Ready-to-eat)", type: "Kitchen Item", price: 320, quantity: 2 },
        { id: 3, name: "Fresh Herb Pack (Organic)", type: "Add-on", price: 40, quantity: 1 }
    ]);

    const updateQty = (id, delta) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    const deliveryFee = subtotal > 0 ? 50 : 0;
    const total = subtotal + deliveryFee;

    return (
        <div className="basic-page">
            <BasicNavbar active="cart" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Shopping Cart</h1>
                    <p className="basic-page-desc">Farm-direct produce & wood-fired kitchen selections.</p>
                </div>

                {items.length === 0 ? (
                    <div className="basic-card" style={{ textAlign: 'center', padding: '3.5rem' }}>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--descriptionColor)', fontSize: '1.1rem' }}>Your shopping bag is currently empty.</p>
                        <Link href="/boxes" className="basic-btn">Browse Harvest Boxes</Link>
                    </div>
                ) : (
                    <div className="basic-grid-2">
                        {/* Items Table */}
                        <div className="basic-card">
                            <h2 className="basic-card-title">Cart Items ({items.length})</h2>
                            <table className="basic-table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <tr key={item.id}>
                                            <td>
                                                <strong style={{ color: 'var(--primary-color)' }}>{item.name}</strong>
                                                <div style={{ fontSize: '0.85rem', color: 'var(--pcolor)' }}>{item.type}</div>
                                            </td>
                                            <td>₹{item.price}</td>
                                            <td>
                                                <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--hbgColor)', border: '1px solid var(--borderColor)', borderRadius: '2rem', padding: '2px 8px' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQty(item.id, -1)}
                                                        style={{ background: 'none', border: 'none', color: 'var(--pcolor)', fontSize: '1.1rem', cursor: 'pointer', padding: '0 6px' }}
                                                    >
                                                        -
                                                    </button>
                                                    <span style={{ padding: '0 6px', fontWeight: 'bold' }}>{item.quantity}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => updateQty(item.id, 1)}
                                                        style={{ background: 'none', border: 'none', color: 'var(--pcolor)', fontSize: '1.1rem', cursor: 'pointer', padding: '0 6px' }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td style={{ color: 'var(--pcolor)', fontWeight: 'bold' }}>₹{item.price * item.quantity}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="basic-btn-secondary"
                                                    style={{ padding: '0.3rem 0.75rem', fontSize: '0.85rem', color: 'var(--hightColor)', cursor: 'pointer' }}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Order Summary */}
                        <div className="basic-card">
                            <h2 className="basic-card-title">Order Summary</h2>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.85rem', color: 'var(--descriptionColor)' }}>
                                <span>Subtotal</span>
                                <strong style={{ color: 'var(--primary-color)' }}>₹{subtotal}</strong>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.85rem', color: 'var(--descriptionColor)' }}>
                                <span>Morning Cold-Chain Delivery</span>
                                <strong style={{ color: 'var(--primary-color)' }}>₹{deliveryFee}</strong>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid var(--borderColor)', margin: '1.25rem 0' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.75rem', fontSize: '1.35rem' }}>
                                <strong style={{ color: 'var(--primary-color)' }}>Total Amount</strong>
                                <strong style={{ color: 'var(--pcolor)' }}>₹{total}</strong>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Promo / Referral Code</label>
                                <div style={{ display: 'flex', gap: '0.65rem' }}>
                                    <input type="text" placeholder="e.g. HARVEST20" className="basic-input" />
                                    <button type="button" className="basic-btn basic-btn-secondary">Apply</button>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="basic-btn"
                                style={{ width: '100%', padding: '0.9rem', fontSize: '1.1rem' }}
                                onClick={() => alert("Order placed successfully! Boxes will dispatch tomorrow morning.")}
                            >
                                Checkout • ₹{total}
                            </button>

                            <p style={{ fontSize: '0.85rem', color: 'var(--descriptionColor)', marginTop: '1.25rem', textAlign: 'center' }}>
                                🍃 100% plastic-free packaging. Hand-picked at dawn.
                            </p>
                        </div>
                    </div>
                )}
            </main>

            <BasicFooter />
        </div>
    )
}

export default CartPage
