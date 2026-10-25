'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const BoxesPage = () => {
    const [tab, setTab] = useState('current'); // 'current', 'custom', 'gift'

    // Build your own box selections
    const availableItems = [
        { id: 1, name: "Heirloom Tomatoes", weight: "500g", price: 60 },
        { id: 2, name: "Baby Spinach", weight: "250g", price: 35 },
        { id: 3, name: "Crisp Bell Peppers", weight: "400g", price: 70 },
        { id: 4, name: "Button Mushrooms", weight: "200g", price: 55 },
        { id: 5, name: "Sweet Carrots", weight: "500g", price: 45 },
        { id: 6, name: "Fresh Basil & Mint Bundle", weight: "100g", price: 30 },
        { id: 7, name: "Broccoli Florets", weight: "350g", price: 65 },
        { id: 8, name: "Zucchini Green", weight: "400g", price: 50 }
    ];

    const [selectedItems, setSelectedItems] = useState({});

    const toggleItem = (id) => {
        setSelectedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const customTotal = availableItems.reduce((acc, item) => {
        return selectedItems[item.id] ? acc + item.price : acc;
    }, 0);

    return (
        <div className="basic-page">
            <BasicNavbar active="boxes" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Produce Boxes</h1>
                    <p className="basic-page-desc">Harvested at dawn, packed in plastic-free crates, delivered to your door.</p>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem' }}>
                    <button
                        type="button"
                        onClick={() => setTab('current')}
                        className={`basic-btn ${tab === 'current' ? '' : 'basic-btn-secondary'}`}
                        style={{ padding: '0.5rem 1rem' }}
                    >
                        This Week's Box
                    </button>
                    <button
                        type="button"
                        onClick={() => setTab('custom')}
                        className={`basic-btn ${tab === 'custom' ? '' : 'basic-btn-secondary'}`}
                        style={{ padding: '0.5rem 1rem' }}
                    >
                        Build Your Own Box
                    </button>
                    <button
                        type="button"
                        onClick={() => setTab('gift')}
                        className={`basic-btn ${tab === 'gift' ? '' : 'basic-btn-secondary'}`}
                        style={{ padding: '0.5rem 1rem' }}
                    >
                        Gift a Box
                    </button>
                </div>

                {/* Tab 1: Current Box */}
                {tab === 'current' && (
                    <div>
                        <div className="basic-card">
                            <span className="basic-badge basic-badge-success">HARVEST: OCTOBER WEEK 4</span>
                            <h2 style={{ fontSize: '1.4rem', margin: '0.75rem 0 0.5rem 0', color: '#111827' }}>
                                What's inside this week's harvest
                            </h2>
                            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                Grown at Dana R.'s Two Rivers Farm & Miguel A.'s Alder Hollow. Picked before 7:00 AM.
                            </p>

                            <table className="basic-table">
                                <thead>
                                    <tr>
                                        <th>Produce Item</th>
                                        <th>Origin Farm</th>
                                        <th>Best Used For</th>
                                        <th>Portion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Roma & Sun Gold Tomatoes</strong></td>
                                        <td>Sonoma County (Dana R.)</td>
                                        <td>Slow-roasted sauces, fresh salads</td>
                                        <td>650g</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tuscan Lacinato Kale</strong></td>
                                        <td>Willamette Valley (Miguel A.)</td>
                                        <td>Quick pan-sauté, crispy chips</td>
                                        <td>1 bunch</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Purple & Orange Carrots</strong></td>
                                        <td>Skagit Valley (Sarah K.)</td>
                                        <td>Charred with honey glaze</td>
                                        <td>500g</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Fresh Thyme & Rosemary</strong></td>
                                        <td>Alder Hollow Farm</td>
                                        <td>Herb butter, roasting seasoning</td>
                                        <td>2 bundles</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Baby Zucchini & Squash</strong></td>
                                        <td>Two Rivers Farm</td>
                                        <td>Wood-fired grill, pasta toss</td>
                                        <td>400g</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Link href="/cart" className="basic-btn">Order This Week's Box (₹58)</Link>
                                <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>Dispatches next morning at 6:30 AM.</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 2: Build Your Own */}
                {tab === 'custom' && (
                    <div className="basic-grid-2">
                        <div className="basic-card">
                            <h2 className="basic-card-title">Select Your Vegetables</h2>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pick exactly what you want from this week's open harvest fields.
                            </p>

                            {availableItems.map(item => (
                                <div
                                    key={item.id}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0.75rem 0',
                                        borderBottom: '1px solid #f3f4f6'
                                    }}
                                >
                                    <div>
                                        <strong>{item.name}</strong>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Portion: {item.weight}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <span>₹{item.price}</span>
                                        <input
                                            type="checkbox"
                                            checked={!!selectedItems[item.id]}
                                            onChange={() => toggleItem(item.id)}
                                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="basic-card">
                            <h2 className="basic-card-title">Custom Box Summary</h2>
                            <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                                Items selected: {Object.values(selectedItems).filter(Boolean).length}
                            </p>

                            <ul style={{ paddingLeft: '1.25rem', margin: '1rem 0', fontSize: '0.9rem', color: '#374151' }}>
                                {availableItems.filter(i => selectedItems[i.id]).map(i => (
                                    <li key={i.id} style={{ marginBottom: '0.25rem' }}>
                                        {i.name} ({i.weight}) - ₹{i.price}
                                    </li>
                                ))}
                            </ul>

                            <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '1rem 0' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                                <strong>Box Total:</strong>
                                <strong>₹{customTotal}</strong>
                            </div>

                            <button
                                type="button"
                                className="basic-btn"
                                style={{ width: '100%' }}
                                disabled={customTotal === 0}
                                onClick={() => alert("Custom box added to cart!")}
                            >
                                Add Custom Box to Cart
                            </button>
                        </div>
                    </div>
                )}

                {/* Tab 3: Gift a Box */}
                {tab === 'gift' && (
                    <div className="basic-card" style={{ maxWidth: '640px' }}>
                        <h2 className="basic-card-title">Send Fresh Produce as a Gift</h2>
                        <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                            Gift an organic chef-curated produce box with a personalized handwritten card.
                        </p>

                        <form onSubmit={(e) => { e.preventDefault(); alert("Gift box scheduled successfully!"); }}>
                            <div className="basic-form-row">
                                <div className="basic-form-group">
                                    <label className="basic-label">Recipient Name</label>
                                    <input type="text" required className="basic-input" placeholder="e.g. Priyanshu Mehta" />
                                </div>
                                <div className="basic-form-group">
                                    <label className="basic-label">Recipient Phone</label>
                                    <input type="tel" required className="basic-input" placeholder="+91 98765 43210" />
                                </div>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Delivery Address</label>
                                <textarea rows="2" required className="basic-textarea" placeholder="Complete address with pincode"></textarea>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Select Box Plan</label>
                                <select className="basic-select">
                                    <option value="solo">The Solo Box (₹34) - 5 seasonal vegetables, 2 herbs</option>
                                    <option value="table">The Table Box (₹58) - 8 seasonal vegetables, 3 herbs, recipe card</option>
                                    <option value="kitchen">The Kitchen Box (₹92) - 14 seasonal vegetables, 4 herbs, chef kit</option>
                                </select>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Gift Message on Card</label>
                                <textarea rows="3" className="basic-textarea" placeholder="e.g., Happy Housewarming! Enjoy fresh cooking."></textarea>
                            </div>

                            <button type="submit" className="basic-btn">Confirm & Send Gift Box</button>
                        </form>
                    </div>
                )}
            </main>

            <BasicFooter />
        </div>
    )
}

export default BoxesPage
