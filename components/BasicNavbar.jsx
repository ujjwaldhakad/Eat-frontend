'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Wishlist, Menu } from './Icons'

const BasicNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="basic-header-wrapper">
            <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 999 }}>
                <Link href="/" className="n-title">
                    EAT<span className="title-dot">.</span>
                </Link>

                <button
                    type="button"
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <Menu />
                </button>

                <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <Link href="/cart" className="nav-item" aria-label="Cart"><ShoppingBag /></Link>
                    <Link href="/wishlist" className="nav-item" aria-label="Wishlist"><Wishlist /></Link>
                    <Link href="/restaurant" className="nav-item">Restaurant</Link>
                    <Link href="/contact" className="nav-item">Contact</Link>
                    <Link href="/address" className="nav-item">Address</Link>
                    <Link href="/login" className="nav-item">Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default BasicNavbar
