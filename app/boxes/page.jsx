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
        { id: 1, name: "Heirloom Tomatoes", weight: "500g", farm: "Two Rivers Farm", price: 60 },
        { id: 2, name: "Baby Spinach", weight: "250g", farm: "Alder Hollow", price: 35 },
        { id: 3, name: "Crisp Bell Peppers", weight: "400g", farm: "Bell & Bramble", price: 70 },
        { id: 4, name: "Smoked Brown Mushrooms", weight: "200g", farm: "Willamette Valley", price: 55 },
        { id: 5, name: "Sweet Purple Carrots", weight: "500g", farm: "Skagit Valley", price: 45 },
        { id: 6, name: "Fresh Basil & Mint Bundle", weight: "100g", farm: "Alder Hollow", price: 30 },
        { id: 7, name: "Organic Broccoli Florets", weight: "350g", farm: "Two Rivers Farm", price: 65 },
        { id: 8, name: "Zucchini Green", weight: "400g", farm: "Sonoma County", price: 50 }
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
                    <h1 className="basic-page-title">Seasonal Produce Boxes</h1>
                    <p className="basic-page-desc">Harvested at dawn across our 6 grower farms. Packed in plastic-free crates.</p>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid var(--borderColor)', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <button
                        type="button"
                        onClick={() => setTab('current')}
                        className={`basic-btn ${tab === 'current' ? '' : 'basic-btn-secondary'}`}
                        style={{ padding: '0.6rem 1.4rem' }}
                    >
                        This Week's Box
                    </button>
                    <button
                        type="button"
                        onClick={() => setTab('custom')}
                        className={`basic-btn ${tab === 'custom' ? '' : 'basic-btn-secondary'}`}
                        style={{ padding: '0.6rem 1.4rem' }}
                    >
                        Build Your Own Box
                    </button>
                    <button
                        type="button"
                        onClick={() => setTab('gift')}
                        className={`basic-btn ${tab === 'gift' ? '' : 'basic-btn-secondary'}`}
                        style={{ padding: '0.6rem 1.4rem' }}
                    >
                        Gift a Box
                    </button>
                </div>

                {/* Tab 1: Current Box */}
                {tab === 'current' && (
                    <div>
                        <div className="basic-card">
                            <span className="basic-badge basic-badge-success">HARVEST: OCTOBER WEEK 4</span>
                            <h2 style={{ fontSize: '1.75rem', margin: '1rem 0 0.5rem 0', color: 'var(--primary-color)' }}>
                                What's inside this week's harvest
                            </h2>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '1rem', marginBottom: '1.75rem' }}>
                                Grown at Dana R.'s Two Rivers Farm & Miguel A.'s Alder Hollow. Picked before 7:00 AM.
                            </p>

                            <div className="basic-table-wrap">
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
                                            <td><strong style={{ color: 'var(--primary-color)' }}>Roma & Sun Gold Tomatoes</strong></td>
                                            <td style={{ color: 'var(--pcolor)' }}>Sonoma County (Dana R.)</td>
                                            <td style={{ color: 'var(--descriptionColor)' }}>Slow-roasted sauces, fresh salads</td>
                                            <td>650g</td>
                                        </tr>
                                        <tr>
                                            <td><strong style={{ color: 'var(--primary-color)' }}>Tuscan Lacinato Kale</strong></td>
                                            <td style={{ color: 'var(--pcolor)' }}>Willamette Valley (Miguel A.)</td>
                                            <td style={{ color: 'var(--descriptionColor)' }}>Quick pan-sauté, crispy chips</td>
                                            <td>1 bunch</td>
                                        </tr>
                                        <tr>
                                            <td><strong style={{ color: 'var(--primary-color)' }}>Purple & Orange Carrots</strong></td>
                                            <td style={{ color: 'var(--pcolor)' }}>Skagit Valley (Sarah K.)</td>
                                            <td style={{ color: 'var(--descriptionColor)' }}>Charred with honey glaze</td>
                                            <td>500g</td>
                                        </tr>
                                        <tr>
                                            <td><strong style={{ color: 'var(--primary-color)' }}>Fresh Thyme & Rosemary</strong></td>
                                            <td style={{ color: 'var(--pcolor)' }}>Alder Hollow Farm</td>
                                            <td style={{ color: 'var(--descriptionColor)' }}>Herb butter, roasting seasoning</td>
                                            <td>2 bundles</td>
                                        </tr>
                                        <tr>
                                            <td><strong style={{ color: 'var(--primary-color)' }}>Baby Zucchini & Squash</strong></td>
                                            <td style={{ color: 'var(--pcolor)' }}>Two Rivers Farm</td>
                                            <td style={{ color: 'var(--descriptionColor)' }}>Wood-fired grill, pasta toss</td>
                                            <td>400g</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                <Link href="/cart" className="basic-btn" style={{ fontSize: '1.05rem', padding: '0.85rem 2rem' }}>
                                    Order This Week's Box (₹58)
                                </Link>
                                <span style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem' }}>
                                    🚚 Dispatches next morning at 6:30 AM.
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tab 2: Build Your Own */}
                {tab === 'custom' && (
                    <div className="basic-grid-2">
                        <div className="basic-card">
                            <h2 className="basic-card-title">Select Your Vegetables</h2>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                                Pick exactly what you want from this week's harvest fields.
                            </p>

                            {availableItems.map(item => (
                                <div
                                    key={item.id}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '0.9rem 0',
                                        borderBottom: '1px solid rgba(255, 251, 198, 0.15)'
                                    }}
                                >
                                    <div>
                                        <strong style={{ color: 'var(--primary-color)', fontSize: '1.05rem' }}>{item.name}</strong>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--pcolor)' }}>{item.farm} · {item.weight}</div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                                        <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>₹{item.price}</span>
                                        <input
                                            type="checkbox"
                                            checked={!!selectedItems[item.id]}
                                            onChange={() => toggleItem(item.id)}
                                            style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--pcolor)' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="basic-card">
                            <h2 className="basic-card-title">Custom Box Summary</h2>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem' }}>
                                Items selected: <strong style={{ color: 'var(--pcolor)' }}>{Object.values(selectedItems).filter(Boolean).length}</strong>
                            </p>

                            <ul style={{ paddingLeft: '1.25rem', margin: '1.25rem 0', fontSize: '0.95rem', color: 'var(--primary-color)', lineHeight: '1.7' }}>
                                {availableItems.filter(i => selectedItems[i.id]).map(i => (
                                    <li key={i.id}>
                                        {i.name} ({i.weight}) — <span style={{ color: 'var(--pcolor)' }}>₹{i.price}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr style={{ border: 'none', borderTop: '1px solid var(--borderColor)', margin: '1.5rem 0' }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.35rem', marginBottom: '1.75rem' }}>
                                <strong style={{ color: 'var(--primary-color)' }}>Box Total:</strong>
                                <strong style={{ color: 'var(--pcolor)' }}>₹{customTotal}</strong>
                            </div>

                            <button
                                type="button"
                                className="basic-btn"
                                style={{ width: '100%', padding: '0.85rem' }}
                                disabled={customTotal === 0}
                                onClick={() => alert("Custom box added to your cart!")}
                            >
                                Add Custom Box to Cart
                            </button>
                        </div>
                    </div>
                )}

                {/* Tab 3: Gift a Box */}
                {tab === 'gift' && (
                    <div className="basic-card" style={{ maxWidth: '680px' }}>
                        <h2 className="basic-card-title">Send Fresh Produce as a Gift</h2>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '1rem', marginBottom: '1.75rem' }}>
                            Gift an organic chef-curated produce box with a personalized handwritten greeting card.
                        </p>

                        <form onSubmit={(e) => { e.preventDefault(); alert("Gift box scheduled successfully!"); }}>
                            <div className="basic-form-row">
                                <div className="basic-form-group">
                                    <label className="basic-label">Recipient Full Name</label>
                                    <input type="text" required className="basic-input" placeholder="e.g. Priyanshu Mehta" />
                                </div>
                                <div className="basic-form-group">
                                    <label className="basic-label">Recipient Phone Number</label>
                                    <input type="tel" required className="basic-input" placeholder="+91 98765 43210" />
                                </div>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Delivery Address</label>
                                <textarea rows="2" required className="basic-textarea" placeholder="Complete address including apartment and postal code..."></textarea>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Select Box Plan Size</label>
                                <select className="basic-select">
                                    <option value="solo">The Solo Box (₹34) — 5 seasonal vegetables, 2 herbs</option>
                                    <option value="table">The Table Box (₹58) — 8 seasonal vegetables, 3 herbs, recipe card</option>
                                    <option value="kitchen">The Kitchen Box (₹92) — 14 seasonal vegetables, 4 herbs, chef kit</option>
                                </select>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Personal Handwritten Message on Card</label>
                                <textarea rows="3" className="basic-textarea" placeholder="e.g. Enjoy fresh cooking this week! From Amit & Neha..."></textarea>
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
