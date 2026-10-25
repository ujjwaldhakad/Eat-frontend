'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { ShoppingBag, Wishlist, Menu } from './Icons'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


const Navbar = () => {

    //open menu for responsive  
    const [menuOpen, setMenuOpen] = useState(false);


    // use gsap for animatios
    useGSAP(() => {
        const tl = gsap.timeline();  //A timeline has been used so that each element plays one by one.
        ScrollTrigger.create({
            trigger: "body",
            start: "top -10",

            onEnter: () => {
                gsap.to(".navbar", {
                    backdropFilter: "blur(5px)",
                    duration: 0.3,
                });
            },

            onLeaveBack: () => {
                gsap.to(".navbar", {
                    backdropFilter: "blur(0px)",
                    duration: 0.3,
                });
            },
        });

        tl.from(".n-title , .nav-item", {
            y: -50,
            opacity: 0.2,
            stagger: 0.5,
        })

        // Split the selected text into individual characters.
        // Example: "WORLD" → W, O, R, L, D
        const split = SplitText.create(".header-title, .header-title-2", {
            type: "chars",
        });

        // Runs when the mouse enters a character.
        // e.currentTarget = the exact character currently being hovered.
        const handleMouseEnter = (e) => {
            gsap.to(e.currentTarget, {
                scale: 1.4,
                duration: 0.3,
            });
        };

        // Runs when the mouse leaves a character.
        // Reset only the hovered character back to its original size.
        const handleMouseLeave = (e) => {
            gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
            });
        };

        // Add mouse events to every individual character.
        // This makes each letter animate independently.
        split.chars.forEach((char) => {
            char.addEventListener("mouseenter", handleMouseEnter);
            char.addEventListener("mouseleave", handleMouseLeave);
        });
    });



    return (
        <div className='main-header'>

            {/* navbar  */}
            <nav className='navbar'>
                <Link href="/" className='n-title'>EAT<span className='title-dot'>.</span></Link>
                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <Menu />
                </button>


                <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                    <Link href="/cart" className='nav-item'><ShoppingBag /></Link>
                    <Link href="/wishlist" className='nav-item'><Wishlist /></Link>
                    <Link href="/restaurant" className='nav-item'>Restaurant</Link>
                    <Link href="/contact" className='nav-item'>Contact</Link>
                    <Link href="/address" className='nav-item'>Address</Link>
                    <Link href="/login" className='nav-item'>Login</Link>
                </div>
            </nav>

            {/* navbar second section */}
            <div className='header-hero'>
                <p className='header-p1'> Farm to board, same day</p>
                <h1 className='header-title' >Cooked today.</h1>
                <h1 className='header-title-2'>Picked <span className='header-title'>today.</span></h1>
                <p className='header-description'>Seasonal vegetables and a chef's plan, boxed at dawn and on your board before dinner. No cold storage, no <br />shortcuts.</p>
            </div>
        </div>
    )
}

export default Navbar   