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
                    <p className="basic-page-desc">Review your selected produce boxes and kitchen items.</p>
                </div>

                {items.length === 0 ? (
                    <div className="basic-card" style={{ textAlign: 'center', padding: '3rem' }}>
                        <p style={{ marginBottom: '1rem', color: '#6b7280' }}>Your cart is currently empty.</p>
                        <Link href="/boxes" className="basic-btn">Browse Boxes</Link>
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
                                                <strong>{item.name}</strong>
                                                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.type}</div>
                                            </td>
                                            <td>₹{item.price}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQty(item.id, -1)}
                                                    style={{ padding: '0.2rem 0.5rem', marginRight: '0.35rem', cursor: 'pointer' }}
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateQty(item.id, 1)}
                                                    style={{ padding: '0.2rem 0.5rem', marginLeft: '0.35rem', cursor: 'pointer' }}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>₹{item.price * item.quantity}</td>
                                            <td>
                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="basic-btn-secondary"
                                                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem', cursor: 'pointer' }}
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

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                <span>Subtotal</span>
                                <strong>₹{subtotal}</strong>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                <span>Delivery Fee</span>
                                <strong>₹{deliveryFee}</strong>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '1rem 0' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                                <strong>Total</strong>
                                <strong>₹{total}</strong>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Promo Code</label>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <input type="text" placeholder="Enter code" className="basic-input" />
                                    <button type="button" className="basic-btn basic-btn-secondary">Apply</button>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="basic-btn"
                                style={{ width: '100%', padding: '0.75rem' }}
                                onClick={() => alert("Order placed successfully (Demo)!")}
                            >
                                Proceed to Checkout (₹{total})
                            </button>

                            <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '1rem', textAlign: 'center' }}>
                                100% farm-direct produce. Cancel or skip any week easily.
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
