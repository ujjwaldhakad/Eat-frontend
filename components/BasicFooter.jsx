import React from 'react'
import Link from 'next/link'

const BasicFooter = () => {
    return (
        <footer className="basic-footer">
            <div className="basic-footer-content">
                <div>
                    <strong style={{ color: '#ffffff' }}>EAT Produce & Kitchen</strong>
                    <p style={{ margin: '0.25rem 0 0 0', color: '#9ca3af', fontSize: '0.85rem' }}>
                        Fresh produce directly from partner farms. Delivered within 24 hours.
                    </p>
                </div>
                <ul className="basic-footer-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/boxes">Boxes</Link></li>
                    <li><Link href="/recipes">Recipes</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>
                    © 2026 EAT Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default BasicFooter
