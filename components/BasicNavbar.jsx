'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Wishlist, Menu } from './Icons'

const BasicNavbar = ({ active = '' }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="basic-navbar">
            <Link href="/" className="basic-nav-logo">
                EAT<span>.</span>
            </Link>

            <button
                type="button"
                className="menu-btn"
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-color)',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <Menu />
            </button>

            <ul className={`basic-nav-links ${menuOpen ? 'show' : ''}`}>
                <li><Link href="/cart" aria-label="Cart"><ShoppingBag /></Link></li>
                <li><Link href="/wishlist" aria-label="Wishlist"><Wishlist /></Link></li>
                <li><Link href="/restaurant" className={active === 'restaurant' ? 'active' : ''}>Restaurant</Link></li>
                <li><Link href="/restaurant/menu" className={active === 'menu' ? 'active' : ''}>Menu</Link></li>
                <li><Link href="/boxes" className={active === 'boxes' ? 'active' : ''}>Boxes</Link></li>
                <li><Link href="/recipes" className={active === 'recipes' ? 'active' : ''}>Recipes</Link></li>
                <li><Link href="/subscription" className={active === 'subscription' ? 'active' : ''}>Subscription</Link></li>
                <li><Link href="/faq" className={active === 'faq' ? 'active' : ''}>FAQ</Link></li>
                <li><Link href="/contact" className={active === 'contact' ? 'active' : ''}>Contact</Link></li>
                <li><Link href="/address" className={active === 'address' ? 'active' : ''}>Address</Link></li>
                <li><Link href="/login" className="basic-btn-sm">Login</Link></li>
            </ul>
        </nav>
    )
}

export default BasicNavbar
