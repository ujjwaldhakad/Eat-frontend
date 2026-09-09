'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Menu, DownArrow } from '@/components/Icons'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


const Page = () => {

    //open menu for responsive 
    const [menuOpen, setMenuOpen] = useState(false);
    const [openBox, setOpenBox] = useState(false);


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
    });

    const RateData = [
        {
            id: 1,
            title: "4.9/5",
            Desc: 'Guest rating'
        },
        {
            id: 2,
            title: "₹850+",
            Desc: 'Average dinner'
        },
        {
            id: 3,
            title: "12-11",
            Desc: 'Kitchen hours'
        },
    ]

    const restCardData = [
        {
            "icon": "🔥",
            "title": "Open-Fire Grill",
            "description": "Vegetables, meats and breads kissed by charcoal for a deep, smoky finish without hiding the ingredient.",
            "price": "From ₹420"
        },
        {
            "icon": "🥕",
            "title": "Garden to Plate",
            "description": "Fresh produce, house herbs and bright sauces change with the season so every visit feels a little different.",
            "price": "From ₹320"
        },
        {
            "icon": "🍰",
            "title": "House Desserts",
            "description": "Warm, comforting finishes made in-house, from caramelized fruit to our signature chocolate flame cake.",
            "price": "From ₹240"
        }
    ]

    const btnsName = ["All", "Starters", "Mains", "Desserts", "Drinks"]

    const s4CardsData = [
        {
            "id": "dish",
            "name": "Charred Corn Ribs",
            "description": "Lime crema · chili · coriander",
            "price": 320
        },
        {
            "id": "fish",
            "name": "Smoked Mushroom Toast",
            "description": "Sourdough · garlic butter · herbs",
            "price": 380
        },
        {
            "id": "mish",
            "name": "Flame-Roasted Paneer",
            "description": "Charred vegetables · pepper glaze · naan",
            "price": 540
        },
        {
            "id": "kavu",
            "name": "Herb Roast Chicken",
            "description": "Seasonal greens · jus · crispy potatoes",
            "price": 690
        },
        {
            "id": "zora",
            "name": "Fire Garden Bowl",
            "description": "Roasted grains · vegetables · tahini · herbs",
            "price": 460
        },
        {
            "id": "tavi",
            "name": "Wood-Fired Flatbread",
            "description": "Tomato · mozzarella · basil · chili oil",
            "price": 490
        },
        {
            "id": "nexo",
            "name": "Chocolate Flame Cake",
            "description": "Dark chocolate · vanilla cream · sea salt",
            "price": 290
        },
        {
            "id": "viro",
            "name": "Caramelized Fruit",
            "description": "Seasonal fruit · jaggery caramel · ice cream",
            "price": 260
        },
        {
            "id": "lumi",
            "name": "Smoked Citrus Cooler",
            "description": "Orange · lime · rosemary · soda",
            "price": 210
        },
        {
            "id": "pavo",
            "name": "House Iced Tea",
            "description": "Peach · mint · black tea",
            "price": 180
        }
    ]

    // State for booking form
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '07:30 PM',
        guests: '2',
        seating: 'Main Dining Room',
        specialNotes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingRef, setBookingRef] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prev => ({ ...prev, [name]: value }));
    };

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const ref = 'TF-' + Math.floor(100000 + Math.random() * 900000);
        setBookingRef(ref);
        setIsSubmitted(true);
    };

    const handleCloseModal = () => {
        setOpenBox(false);
        setIsSubmitted(false);
    };

    return (
        <div className="rest-page-wrapper">

            {/* book your table Modal */}
            {openBox && (
                <div 
                    className="rest-book-table" 
                    onClick={(e) => {
                        if (e.target === e.currentTarget) handleCloseModal();
                    }}
                >
                    <div className='rest-bookform'>
                        {/* Cross Button */}
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            className="rest-modal-close"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        {!isSubmitted ? (
                            <form onSubmit={handleBookingSubmit} className="rest-form-content">
                                <div className='rest-box-head'>
                                    <span className="rest-badge">🔥 TERRA & FLAME</span>
                                    <h1 className="rest-modal-title">Reserve Your Table</h1>
                                    <p className="rest-modal-subtitle">Experience artisanal open-fire culinary excellence</p>
                                </div>

                                <div className="rest-form-grid">
                                    {/* Name */}
                                    <div className="rest-form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <div className="rest-input-wrap">
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                placeholder="e.g. Rahul Sharma"
                                                value={bookingData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="rest-form-group">
                                        <label htmlFor="phone">Phone Number *</label>
                                        <div className="rest-input-wrap">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                value={bookingData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="rest-form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <div className="rest-input-wrap">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="rahul@example.com"
                                                value={bookingData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Number of Guests */}
                                    <div className="rest-form-group">
                                        <label htmlFor="guests">Number of Guests *</label>
                                        <div className="rest-input-wrap">
                                            <select
                                                id="guests"
                                                name="guests"
                                                value={bookingData.guests}
                                                onChange={handleInputChange}
                                            >
                                                <option value="1">1 Person (Solo Dining)</option>
                                                <option value="2">2 Persons (Couple)</option>
                                                <option value="3">3 Persons</option>
                                                <option value="4">4 Persons (Standard Table)</option>
                                                <option value="5">5 Persons</option>
                                                <option value="6">6 Persons (Family Table)</option>
                                                <option value="8+">8+ Persons (Party / Event)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="rest-form-group">
                                        <label htmlFor="date">Date *</label>
                                        <div className="rest-input-wrap">
                                            <input
                                                id="date"
                                                name="date"
                                                type="date"
                                                required
                                                value={bookingData.date}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="rest-form-group">
                                        <label htmlFor="time">Time Slot *</label>
                                        <div className="rest-input-wrap">
                                            <select
                                                id="time"
                                                name="time"
                                                value={bookingData.time}
                                                onChange={handleInputChange}
                                            >
                                                <optgroup label="Lunch Slots">
                                                    <option value="12:30 PM">12:30 PM</option>
                                                    <option value="01:15 PM">01:15 PM</option>
                                                    <option value="02:00 PM">02:00 PM</option>
                                                    <option value="02:45 PM">02:45 PM</option>
                                                </optgroup>
                                                <optgroup label="Dinner Slots">
                                                    <option value="07:00 PM">07:00 PM</option>
                                                    <option value="07:30 PM">07:30 PM</option>
                                                    <option value="08:15 PM">08:15 PM</option>
                                                    <option value="09:00 PM">09:00 PM</option>
                                                    <option value="09:45 PM">09:45 PM</option>
                                                    <option value="10:30 PM">10:30 PM</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Seating Preference */}
                                    <div className="rest-form-group full-width">
                                        <label htmlFor="seating">Seating Preference</label>
                                        <div className="rest-input-wrap">
                                            <select
                                                id="seating"
                                                name="seating"
                                                value={bookingData.seating}
                                                onChange={handleInputChange}
                                            >
                                                <option value="Main Dining Room">Main Dining Room (Vibrant & Cozy)</option>
                                                <option value="Fireplace Lounge">Open Fireplace Lounge (Romantic & Warm)</option>
                                                <option value="Chef's Counter">Chef's Live Counter (Front Row Experience)</option>
                                                <option value="Rooftop Terrace">Rooftop Garden Terrace (Under the Stars)</option>
                                                <option value="Private Dining">Private Dining Suite (Intimate & Exclusive)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Special Notes */}
                                    <div className="rest-form-group full-width">
                                        <label htmlFor="specialNotes">Special Requests & Occasion (Optional)</label>
                                        <div className="rest-input-wrap">
                                            <textarea
                                                id="specialNotes"
                                                name="specialNotes"
                                                rows="2"
                                                placeholder="e.g., Anniversary, Birthday celebration, window view, dietary allergies..."
                                                value={bookingData.specialNotes}
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="rest-form-footer">
                                    <p className="rest-security-note">🔒 Instant SMS confirmation. No prepayment required.</p>
                                    <div className="rest-form-actions">
                                        <button type="button" onClick={handleCloseModal} className="rest-btn-cancel">
                                            Cancel
                                        </button>
                                        <button type="submit" className="rest-btn-confirm">
                                            Confirm Reservation
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="rest-booking-success">
                                <div className="rest-success-icon">✨</div>
                                <h2>Reservation Confirmed!</h2>
                                <p className="rest-success-subtitle">We look forward to hosting you at Terra & Flame.</p>

                                <div className="rest-booking-summary">
                                    <div className="summary-item">
                                        <span>Booking ID:</span>
                                        <strong>{bookingRef}</strong>
                                    </div>
                                    <div className="summary-item">
                                        <span>Guest Name:</span>
                                        <strong>{bookingData.name}</strong>
                                    </div>
                                    <div className="summary-item">
                                        <span>Party Size:</span>
                                        <strong>{bookingData.guests} Guest(s)</strong>
                                    </div>
                                    <div className="summary-item">
                                        <span>Date & Time:</span>
                                        <strong>{bookingData.date || 'Today'} at {bookingData.time}</strong>
                                    </div>
                                    <div className="summary-item">
                                        <span>Seating:</span>
                                        <strong>{bookingData.seating}</strong>
                                    </div>
                                    {bookingData.phone && (
                                        <div className="summary-item">
                                            <span>SMS Alert sent to:</span>
                                            <strong>{bookingData.phone}</strong>
                                        </div>
                                    )}
                                </div>

                                <div className="rest-success-actions">
                                    <button 
                                        type="button" 
                                        className="rest-btn-cancel" 
                                        onClick={() => setIsSubmitted(false)}
                                    >
                                        Edit / Book Another
                                    </button>
                                    <button 
                                        type="button" 
                                        className="rest-btn-confirm" 
                                        onClick={handleCloseModal}
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

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
                        <Link href="#" className='nav-item'>Specialties</Link>
                        <Link href="#" className='nav-item'>Menu</Link>
                        <Link href="restaurant" className='nav-item'>Our Story</Link>
                        <Link href="#" className='nav-item'>Visit Us</Link>
                        <button onClick={() => setOpenBox(true)} className='rest-btn'>Book a Table</button>
                    </div>
                </nav>

                {/* navbar second section */}
                <div className='rest-hero'>
                    <p className='rest-p1'> -- Seasonal • Local • Fire-Kissed</p>
                    <h1 className='rest-title' >Good Food. </h1>
                    <h1 className='rest-title t2' >Great company.</h1>
                    <p className='rest-description'>Terra & Flame is a modern neighborhood kitchen where seasonal ingredients meet open-fire cooking, bold flavors, and an easygoing  atmosphere.</p>
                    <div className='rest-hero-btns'>
                        <button onClick={() => setOpenBox(true)} className="rest-btn-hero">Reserve Your Table</button>
                        <button className="rest-btn-hero">Explore the Menu <DownArrow /></button>
                    </div>

                    {/* rest hero data */}
                    <div className='rest-hero-data'>
                        {RateData.map((i, j) => {
                            return (
                                <div key={j}>
                                    <p className='rest-hero-title'>{i.title}</p>
                                    <span className='rest-hero-desc'>{i.Desc}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
            <div className='rest-section-3 '>
                <p className='rest-3-title'>What we're known for</p>
                <div className='rest-3-headings res'>
                    <h3 className='rest-3-heading'>Our specialties</h3>
                    <p className='rest-3-des'>Simple ingredients, serious technique, and dishes designed to make you order “one more for the table.”</p>
                </div>

                <div className="rest-3-cards res">
                    {restCardData.map((i, e) => {
                        return (
                            <div key={e} className='rest-3-card'>
                                <p className='rest-3-card-icon'>{i.icon}</p>
                                <h2 className='rest-3-card-title'>{i.title}</h2>
                                <p className='rest-3-card-des'>{i.description}</p>
                                <p className='rest-3-card-price'>{i.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className="rest-section-4 ">
                <p className='rest-3-title'>A taste of Terra & Flame</p>
                <div className='rest-3-headings res'>
                    <h3 className='rest-3-heading tit'>The menu</h3>
                    <p className='rest-3-des'>Pricing is designed for everything from a quick lunch to a long dinner with friends.</p>
                </div>

                <div className='s4-tags'>
                    {btnsName.map((name, index) => (
                        <button key={index} className='s4-btns'>{name}</button>
                    ))}
                </div>
                <div className='s4-tabs'>
                    {s4CardsData.map((i, e) => {
                        return (
                            <div key={e} className='s4-tab'>
                                <div>
                                    <h2 className='s4-tab-title'>{i.name}</h2>
                                    <p className='s4-tab-des'>{i.description}</p>
                                </div>
                                <p className='s4-tab-price'>{i.price}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className="rest-section-5">
                <div className='rest-5-titles'>
                    <p className='rest-5-title'>Your table is waiting</p>
                    <h1 className='rest-5-sub-title'>Make it a night.</h1>
                    <p className='rest-5-sub-des'>Book ahead for dinner, celebrations, date nights, or simply because good food <br></br>deserves a little planning.</p>
                    <button onClick={() => setOpenBox(true)} className='rest-5-btn'>Book a Table</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page