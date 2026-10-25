'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const AddressPage = () => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            title: "Home",
            name: "Rahul Sharma",
            line1: "Flat 402, Green Valley Apartments",
            line2: "Indiranagar, 100ft Road",
            city: "Bengaluru",
            pincode: "560038",
            phone: "+91 98765 43210",
            isDefault: true
        },
        {
            id: 2,
            title: "Office",
            name: "Rahul Sharma",
            line1: "Floor 4, Tech Park Campus",
            line2: "Outer Ring Road, Bellandur",
            city: "Bengaluru",
            pincode: "560103",
            phone: "+91 98765 43210",
            isDefault: false
        }
    ]);

    const [showAddForm, setShowAddForm] = useState(false);
    const [newAddress, setNewAddress] = useState({
        title: 'Home',
        name: '',
        line1: '',
        line2: '',
        city: 'Bengaluru',
        pincode: '',
        phone: '',
        isDefault: false
    });

    const handleAdd = (e) => {
        e.preventDefault();
        const item = {
            ...newAddress,
            id: Date.now()
        };
        setAddresses([...addresses, item]);
        setShowAddForm(false);
        setNewAddress({
            title: 'Home',
            name: '',
            line1: '',
            line2: '',
            city: 'Bengaluru',
            pincode: '',
            phone: '',
            isDefault: false
        });
    };

    const deleteAddress = (id) => {
        setAddresses(addresses.filter(a => a.id !== id));
    };

    const setDefault = (id) => {
        setAddresses(addresses.map(a => ({
            ...a,
            isDefault: a.id === id
        })));
    };

    return (
        <div className="basic-page">
            <BasicNavbar active="address" />

            <main className="basic-container">
                <div className="basic-page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h1 className="basic-page-title">Delivery Addresses</h1>
                        <p className="basic-page-desc">Manage your delivery locations for morning box drop-offs.</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowAddForm(!showAddForm)}
                        className="basic-btn"
                    >
                        {showAddForm ? 'Cancel' : '+ Add New Address'}
                    </button>
                </div>

                {showAddForm && (
                    <div className="basic-card" style={{ marginBottom: '2rem' }}>
                        <h2 className="basic-card-title">Add New Address</h2>
                        <form onSubmit={handleAdd}>
                            <div className="basic-form-row">
                                <div className="basic-form-group">
                                    <label className="basic-label">Address Label</label>
                                    <select
                                        className="basic-select"
                                        value={newAddress.title}
                                        onChange={(e) => setNewAddress({ ...newAddress, title: e.target.value })}
                                    >
                                        <option value="Home">Home</option>
                                        <option value="Office">Office</option>
                                        <option value="Parents">Parents</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="basic-form-group">
                                    <label className="basic-label">Recipient Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="basic-input"
                                        placeholder="Full name"
                                        value={newAddress.name}
                                        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Address Line 1 (House/Flat/Building)</label>
                                <input
                                    type="text"
                                    required
                                    className="basic-input"
                                    placeholder="e.g. Flat 101, Sunshine Heights"
                                    value={newAddress.line1}
                                    onChange={(e) => setNewAddress({ ...newAddress, line1: e.target.value })}
                                />
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Address Line 2 (Street/Area/Landmark)</label>
                                <input
                                    type="text"
                                    className="basic-input"
                                    placeholder="e.g. Near Main Market"
                                    value={newAddress.line2}
                                    onChange={(e) => setNewAddress({ ...newAddress, line2: e.target.value })}
                                />
                            </div>

                            <div className="basic-form-row">
                                <div className="basic-form-group">
                                    <label className="basic-label">City</label>
                                    <select
                                        className="basic-select"
                                        value={newAddress.city}
                                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                                    >
                                        <option value="Bengaluru">Bengaluru</option>
                                        <option value="Delhi NCR">Delhi NCR</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Pune">Pune</option>
                                        <option value="Hyderabad">Hyderabad</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                    </select>
                                </div>
                                <div className="basic-form-group">
                                    <label className="basic-label">Postal Code</label>
                                    <input
                                        type="text"
                                        required
                                        className="basic-input"
                                        placeholder="e.g. 560038"
                                        value={newAddress.pincode}
                                        onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="basic-form-group">
                                <label className="basic-label">Contact Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="basic-input"
                                    placeholder="+91 98765 43210"
                                    value={newAddress.phone}
                                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="basic-btn">Save Address</button>
                        </form>
                    </div>
                )}

                <div className="basic-grid-2">
                    {addresses.map(item => (
                        <div key={item.id} className="basic-card" style={{ border: item.isDefault ? '2px solid #16a34a' : '1px solid #e5e7eb' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span className="basic-badge">{item.title}</span>
                                {item.isDefault && (
                                    <span className="basic-badge basic-badge-success">Default Delivery</span>
                                )}
                            </div>

                            <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: '#111827' }}>{item.name}</h3>
                            <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.4', margin: '0 0 0.5rem 0' }}>
                                {item.line1}<br />
                                {item.line2 && <>{item.line2}<br /></>}
                                {item.city} - {item.pincode}
                            </p>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem' }}>
                                Phone: {item.phone}
                            </p>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {!item.isDefault && (
                                    <button
                                        type="button"
                                        onClick={() => setDefault(item.id)}
                                        className="basic-btn-secondary"
                                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem', cursor: 'pointer' }}
                                    >
                                        Set as Default
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => deleteAddress(item.id)}
                                    className="basic-btn-secondary"
                                    style={{ padding: '0.35rem 0.75rem', fontSize: '0.85rem', color: '#dc2626', cursor: 'pointer' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default AddressPage
