import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-item'>
                <div className='f-section1'>
                    <h1 className='n-title'>EAT<span className='title-dot'>.</span></h1>
                    <p className='f-des'>A small produce box, packed the morning it's ordered. Currently delivering in six cities.</p>
                </div>
                <ul className='f-section2'>
                    <h3 className='f-sections-title'>Boxes</h3>
                    <li id='item'><Link href="/boxes" style={{ color: 'inherit' }}>This week's box</Link></li>
                    <li id='item'><Link href="/boxes" style={{ color: 'inherit' }}>Build your own</Link></li>
                    <li id='item'><Link href="/boxes" style={{ color: 'inherit' }}>Gift a box</Link></li>
                </ul>
                <ul className='f-section3'>
                    <h3 className='f-sections-title'>Our growers</h3>
                    <li id='item'><Link href="/recipes" style={{ color: 'inherit' }}>Recipes</Link></li>
                    <li id='item'><Link href="/careers" style={{ color: 'inherit' }}>Careers</Link></li>
                </ul>
                <ul className='f-section4'>
                    <h3 className='f-sections-title'>FAQ</h3>
                    <li id='item'><Link href="/subscription" style={{ color: 'inherit' }}>Manage subscription</Link></li>
                    <li id='item'><Link href="/faq" style={{ color: 'inherit' }}>FAQ</Link></li>
                    <li id='item'><Link href="/contact" style={{ color: 'inherit' }}>Contact</Link></li>
                </ul>
            </div>
            <hr className='f-hr'></hr>

            <div className='f-end-txt'>
                <p className='end-txt'>© 2026 EAT. All vegetables, no filler.</p>
                <p className='end-txt'>Made near the field, not the EAT .</p>
            </div>
        </div>
    )
}

export default Footer