import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-item'>
                <div className='f-section1'>
                    <h1 className='n-title'>EAT<span className='title-dot'>.</span></h1>
                    <p className='f-des'>A small produce box, packed the morning it's ordered. Farm to board, same day. Currently delivering in six cities.</p>
                </div>

                <ul className='f-section2'>
                    <h3 className='f-sections-title'>Produce Boxes</h3>
                    <li id='item'><Link href="/boxes" style={{ color: 'inherit' }}>This week's box</Link></li>
                    <li id='item'><Link href="/boxes" style={{ color: 'inherit' }}>Build your own</Link></li>
                    <li id='item'><Link href="/boxes" style={{ color: 'inherit' }}>Gift a box</Link></li>
                    <li id='item'><Link href="/subscription" style={{ color: 'inherit' }}>Manage subscription</Link></li>
                </ul>

                <ul className='f-section3'>
                    <h3 className='f-sections-title'>Restaurant</h3>
                    <li id='item'><Link href="/restaurant" style={{ color: 'inherit' }}>Terra & Flame</Link></li>
                    <li id='item'><Link href="/restaurant/menu" style={{ color: 'inherit' }}>Full Menu</Link></li>
                    <li id='item'><Link href="/restaurant/story" style={{ color: 'inherit' }}>Our Story</Link></li>
                    <li id='item'><Link href="/restaurant/visit" style={{ color: 'inherit' }}>Visit & Hours</Link></li>
                </ul>

                <ul className='f-section4'>
                    <h3 className='f-sections-title'>Our Growers</h3>
                    <li id='item'><Link href="/recipes" style={{ color: 'inherit' }}>Chef's Recipes</Link></li>
                    <li id='item'><Link href="/careers" style={{ color: 'inherit' }}>Careers at EAT</Link></li>
                    <li id='item'><Link href="/#farmers" style={{ color: 'inherit' }}>Partner Farms</Link></li>
                </ul>

                <ul className='f-section5'>
                    <h3 className='f-sections-title'>Help & Account</h3>
                    <li id='item'><Link href="/faq" style={{ color: 'inherit' }}>FAQ</Link></li>
                    <li id='item'><Link href="/contact" style={{ color: 'inherit' }}>Contact Us</Link></li>
                    <li id='item'><Link href="/address" style={{ color: 'inherit' }}>Delivery Addresses</Link></li>
                    <li id='item'><Link href="/login" style={{ color: 'inherit' }}>Sign In / Register</Link></li>
                </ul>
            </div>
            <hr className='f-hr'></hr>

            <div className='f-end-txt'>
                <p className='end-txt'>© 2026 EAT. All vegetables, no filler.</p>
                <p className='end-txt'>Made near the field, not the warehouse.</p>
            </div>
        </footer>
    )
}

export default Footer