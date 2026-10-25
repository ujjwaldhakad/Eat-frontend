'use client'
import React from 'react'
import Link from 'next/link'

const BasicNavbar = ({ active = '' }) => {
    return (
        <nav className="basic-navbar">
            <Link href="/" className="basic-nav-logo">
                EAT<span>.</span>
            </Link>

            <ul className="basic-nav-links">
                <li><Link href="/" className={active === 'home' ? 'active' : ''}>Home</Link></li>
                <li><Link href="/restaurant" className={active === 'restaurant' ? 'active' : ''}>Restaurant</Link></li>
                <li><Link href="/restaurant/menu" className={active === 'menu' ? 'active' : ''}>Menu</Link></li>
                <li><Link href="/boxes" className={active === 'boxes' ? 'active' : ''}>Boxes</Link></li>
                <li><Link href="/recipes" className={active === 'recipes' ? 'active' : ''}>Recipes</Link></li>
                <li><Link href="/subscription" className={active === 'subscription' ? 'active' : ''}>Subscription</Link></li>
                <li><Link href="/faq" className={active === 'faq' ? 'active' : ''}>FAQ</Link></li>
                <li><Link href="/contact" className={active === 'contact' ? 'active' : ''}>Contact</Link></li>
                <li><Link href="/address" className={active === 'address' ? 'active' : ''}>Address</Link></li>
                <li><Link href="/wishlist" className={active === 'wishlist' ? 'active' : ''}>Wishlist</Link></li>
                <li><Link href="/cart" className={active === 'cart' ? 'active' : ''}>Cart</Link></li>
                <li><Link href="/login" className="basic-btn-sm">Login</Link></li>
            </ul>
        </nav>
    )
}

export default BasicNavbar
