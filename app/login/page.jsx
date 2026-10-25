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
        alert(mode === 'login' ? `Logged in successfully as ${form.email}` : `Account created for ${form.name}`);
    };

    return (
        <div className="basic-page">
            <BasicNavbar />

            <main className="basic-container" style={{ maxWidth: '480px' }}>
                <div className="basic-card" style={{ marginTop: '2rem' }}>
                    <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem' }}>
                        <button
                            type="button"
                            onClick={() => setMode('login')}
                            style={{
                                flex: 1,
                                padding: '0.75rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: mode === 'login' ? '2px solid #111827' : 'none',
                                fontWeight: mode === 'login' ? 700 : 500,
                                color: mode === 'login' ? '#111827' : '#6b7280',
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
                                padding: '0.75rem',
                                background: 'none',
                                border: 'none',
                                borderBottom: mode === 'signup' ? '2px solid #111827' : 'none',
                                fontWeight: mode === 'signup' ? 700 : 500,
                                color: mode === 'signup' ? '#111827' : '#6b7280',
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
                                <label className="basic-label">Phone Number</label>
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
                                    <input type="checkbox" /> Remember me
                                </label>
                                <a href="#" style={{ color: '#16a34a', textDecoration: 'none' }}>Forgot password?</a>
                            </div>
                        )}

                        <button type="submit" className="basic-btn" style={{ width: '100%', padding: '0.75rem' }}>
                            {mode === 'login' ? 'Sign In to EAT' : 'Register Account'}
                        </button>
                    </form>

                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '1.5rem', textAlign: 'center' }}>
                        By continuing, you agree to EAT Terms of Service and Privacy Policy.
                    </p>
                </div>
            </main>

            <BasicFooter />
        </div>
    )
}

export default LoginPage
