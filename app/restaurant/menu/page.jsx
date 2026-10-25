"use client"
import React from 'react'
import Link from 'next/link'
import { Menu } from '@/components/Icons'
import { useState } from 'react'

const page = () => {

    //open menu for responsive 
    const [menuOpen, setMenuOpen] = useState(false);
    const [openBox, setOpenBox] = useState(false);


    return (
        <div>
            {/* menu page section 1 */}
            <div className='main-header darkness'>

                {/* navbar  */}
                <nav className={`navbar rest-nav ${openBox ? "rest-nav-hidden" : ""}`}>
                    <Link href="/" className='n-title'>EAT<span className='title-dot'>.</span></Link>
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Menu />
                    </button>


                    <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                        <Link href="/restaurant#specialties" className='nav-item'>Specialties</Link>
                        <Link href="/restaurant/menu" className='nav-item'>Menu</Link>
                        <Link href="/restaurant/story" className='nav-item'>Our Story</Link>
                        <Link href="/restaurant/visit" className='nav-item'>Visit Us</Link>
                        <Link href="/restaurant" className='rest-btn'>Book a Table</Link>
                    </div>
                </nav>

                {/* navbar second section */}
                <div className='rest-hero'>
                    <p className='rest-p1'> • Fresh ingredients, happy plates</p>
                    <h1 className='rest-title' >Good Food. </h1>
                    <h1 className='rest-title t2' >Good Mood</h1>
                    <p className='rest-description'>Seasonal favourites, made fresh and served with a little extra love. Find your next feel-good bite.</p>
                    <div className='rest-hero-btns'>
                        <button onClick={() => setOpenBox(true)} className="rest-btn-hero">Explore the menu</button>
                        <button className="rest-btn-hero">Hours & location</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default page