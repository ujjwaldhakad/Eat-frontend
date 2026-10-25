'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const LoginPage = () => {
    const [mode, setMode] = useState('login'); // 'login' or 'signup'
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(mode === 'login' ? `Welcome back, ${form.email}!` : `Account created for ${form.name}!`);
    };

    return (
        <div className="basic-page">
            <BasicNavbar />

            <main className="basic-container" style={{ maxWidth: '520px', padding: '4rem 1.5rem' }}>
                <div className="basic-card" style={{ border: '1px solid var(--borderColor)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-color)', margin: '0 0 0.5rem 0' }}>
                            EAT Account
                        </h1>
                        <p style={{ color: 'var(--pcolor)', fontSize: '0.95rem', margin: 0 }}>
                            Manage your farm subscriptions & dining bookings
                        </p>
                    </div>

                    <div style={{ display: 'flex', borderBottom: '1px solid var(--borderColor)', marginBottom: '1.75rem' }}>
                        <button
                            type="button"
                            onClick={() => setMode('login')}
                            style={{
                                flex: 1,
                                padding: '0.85rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: mode === 'login' ? '3px solid var(--pcolor)' : 'none',
                                fontWeight: mode === 'login' ? 800 : 500,
                                color: mode === 'login' ? 'var(--pcolor)' : 'var(--descriptionColor)',
                                fontSize: '1.05rem',
                                cursor: 'pointer'
                            }}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode('signup')}
                            style={{
                                flex: 1,
                                padding: '0.85rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: mode === 'signup' ? '3px solid var(--pcolor)' : 'none',
                                fontWeight: mode === 'signup' ? 800 : 500,
                                color: mode === 'signup' ? 'var(--pcolor)' : 'var(--descriptionColor)',
                                fontSize: '1.05rem',
                                cursor: 'pointer'
                            }}
                        >
                            Create Account
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        {mode === 'signup' && (
                            <div className="basic-form-group">
                                <label className="basic-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="basic-input"
                                    placeholder="e.g. Dana Reed"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        <div className="basic-form-group">
                            <label className="basic-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="basic-input"
                                placeholder="name@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        {mode === 'signup' && (
                            <div className="basic-form-group">
                                <label className="basic-label">Phone Number (For morning SMS alert)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="basic-input"
                                    placeholder="+91 98765 43210"
                                    value={form.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        )}

                        <div className="basic-form-group">
                            <label className="basic-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="basic-input"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>

                        {mode === 'login' && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', color: 'var(--descriptionColor)' }}>
                                    <input type="checkbox" style={{ accentColor: 'var(--pcolor)' }} /> Remember me
                                </label>
                                <a href="#" style={{ color: 'var(--pcolor)', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        )}

                        <button type="submit" className="basic-btn" style={{ width: '100%', padding: '0.85rem', fontSize: '1.05rem' }}>
                            {mode === 'login' ? 'Sign In to EAT' : 'Register Subscription Account'}
                        </button>
                    </form>

                    <p style={{ fontSize: '0.82rem', color: 'var(--descriptionColor)', marginTop: '1.75rem', textAlign: 'center', lineHeight: '1.5' }}>
                        By continuing, you agree to EAT Terms of Service and Farm-Direct Harvest Policy.
                    </p>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default LoginPage
