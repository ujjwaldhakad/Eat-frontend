"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, DownArrow } from '@/components/Icons'
import Footer from '@/components/Footer'

const MenuPage = () => {
    // Mobile menu toggle & table booking modal state
    const [menuOpen, setMenuOpen] = useState(false);
    const [openBox, setOpenBox] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");
    const [dietFilter, setDietFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDishes, setSelectedDishes] = useState([]);

    // Table reservation state
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

    const categories = [
        "All",
        "Starters & Hearth Bites",
        "Wood-Fired Mains",
        "Farm Sides & Breads",
        "House Desserts",
        "Beverages & Coolers"
    ];

    const dishes = [
        // Starters
        {
            id: 1,
            name: "Charred Corn Ribs",
            category: "Starters & Hearth Bites",
            diet: "Veg",
            isSignature: true,
            price: 320,
            farm: "Two Rivers Farm",
            desc: "Sweet corn ribs kissed by white charcoal embers, lime crema, ancho chili dust, fresh chopped coriander."
        },
        {
            id: 2,
            name: "Smoked Mushroom Toast",
            category: "Starters & Hearth Bites",
            diet: "Veg",
            isSignature: false,
            price: 380,
            farm: "Alder Hollow",
            desc: "Foraged brown mushrooms, sourdough toast, garlic herb butter, thyme sprigs, cold-pressed olive oil."
        },
        {
            id: 3,
            name: "Roasted Beet & Goat Curd",
            category: "Starters & Hearth Bites",
            diet: "Veg",
            isSignature: false,
            price: 340,
            farm: "Bell & Bramble",
            desc: "Charcoal-baked purple beets, whipped artisan goat curd, pickled mustard seeds, roasted hazelnut crunch."
        },
        {
            id: 4,
            name: "Blistered Shishito Peppers",
            category: "Starters & Hearth Bites",
            diet: "Vegan",
            isSignature: false,
            price: 290,
            farm: "Sonoma County",
            desc: "Cast-iron blistered peppers, flaky sea salt, smoked garlic emulsion, fresh lemon zest."
        },

        // Mains
        {
            id: 5,
            name: "Flame-Roasted Paneer Tikka",
            category: "Wood-Fired Mains",
            diet: "Veg",
            isSignature: true,
            price: 540,
            farm: "Two Rivers Farm",
            desc: "Artisanal dairy paneer, charred bell pepper glaze, fire-roasted shallots, warm garlic butter naan."
        },
        {
            id: 6,
            name: "Wood-Fired Herb Roast Chicken",
            category: "Wood-Fired Mains",
            diet: "Non-Veg",
            isSignature: true,
            price: 690,
            farm: "Willamette Valley",
            desc: "Heritage half-chicken basted in rosemary thyme butter, charred baby leeks, crispy crushed potatoes."
        },
        {
            id: 7,
            name: "Fire Garden Grain Bowl",
            category: "Wood-Fired Mains",
            diet: "Vegan",
            isSignature: false,
            price: 460,
            farm: "Two Rivers Farm",
            desc: "Toasted organic quinoa, wood-roasted autumn squash, tender massaged kale, lemon-tahini dressing."
        },
        {
            id: 8,
            name: "Wood-Oven Margherita Flatbread",
            category: "Wood-Fired Mains",
            diet: "Veg",
            isSignature: false,
            price: 490,
            farm: "Alder Hollow",
            desc: "48-hour fermented crust, San Marzano tomato reduction, whole buffalo mozzarella, garden sweet basil."
        },
        {
            id: 9,
            name: "Smoked Lamb Kebab Skewers",
            category: "Wood-Fired Mains",
            diet: "Non-Veg",
            isSignature: false,
            price: 720,
            farm: "Local Heritage Farm",
            desc: "Coarsely ground spiced lamb grilled over hardwood coals, mint labneh, pickled onions, warm flatbread."
        },
        {
            id: 10,
            name: "Charred Cauliflower Steak",
            category: "Wood-Fired Mains",
            diet: "Vegan",
            isSignature: true,
            price: 480,
            farm: "Skagit Valley",
            desc: "Thick cut cauliflower seared on open hearth, spiced romesco sauce, toasted sliced almonds, pomegranate."
        },

        // Sides & Breads
        {
            id: 11,
            name: "Garlic Butter Naan",
            category: "Farm Sides & Breads",
            diet: "Veg",
            isSignature: false,
            price: 160,
            farm: "In-House Bakery",
            desc: "Leavened flatbread baked directly against clay oven walls, topped with charred garlic & fresh butter."
        },
        {
            id: 12,
            name: "Crispy Rosemary Crushed Potatoes",
            category: "Farm Sides & Breads",
            diet: "Vegan",
            isSignature: false,
            price: 240,
            farm: "Skagit Valley",
            desc: "Baby golden potatoes boiled, gently crushed, fried crisp with garden rosemary and smoked sea salt."
        },
        {
            id: 13,
            name: "Heirloom Farm Tomato Salad",
            category: "Farm Sides & Breads",
            diet: "Vegan",
            isSignature: false,
            price: 260,
            farm: "Two Rivers Farm",
            desc: "Sliced Sun Gold & Roma tomatoes, crisp Persian cucumber, cold-pressed mustard oil, fresh oregano."
        },
        {
            id: 14,
            name: "Charred Greens & Cabbage Toss",
            category: "Farm Sides & Breads",
            diet: "Vegan",
            isSignature: false,
            price: 280,
            farm: "Alder Hollow",
            desc: "Tuscan kale and sweetheart cabbage quickly seared over high flames, lemon vinaigrette, cracked pepper."
        },

        // Desserts
        {
            id: 15,
            name: "Chocolate Flame Cake",
            category: "House Desserts",
            diet: "Veg",
            isSignature: true,
            price: 290,
            farm: "Artisan Chocolate",
            desc: "Warm dark chocolate molten center, house-churned Madagascar vanilla cream, Maldon flaky sea salt."
        },
        {
            id: 16,
            name: "Caramelized Autumn Peaches",
            category: "House Desserts",
            diet: "Veg",
            isSignature: false,
            price: 260,
            farm: "Sonoma Orchard",
            desc: "Stone fruit halves grilled over fruitwood coals, organic jaggery caramel, toasted walnut crumble."
        },
        {
            id: 17,
            name: "Roasted Fig & Ricotta Tart",
            category: "House Desserts",
            diet: "Veg",
            isSignature: false,
            price: 310,
            farm: "Willamette Valley",
            desc: "Crisp butter pastry, sweetened fresh ricotta, honey-glazed black mission figs, fresh lemon thyme."
        },

        // Beverages
        {
            id: 18,
            name: "Smoked Citrus Cooler",
            category: "Beverages & Coolers",
            diet: "Vegan",
            isSignature: true,
            price: 210,
            farm: "Farm Citrus Grove",
            desc: "Charred valencia orange, pressed key lime, garden rosemary sprig, sparkling natural soda."
        },
        {
            id: 19,
            name: "House Iced Peach & Mint Tea",
            category: "Beverages & Coolers",
            diet: "Vegan",
            isSignature: false,
            price: 180,
            farm: "Organic Tea Estate",
            desc: "Slow cold-brewed Nilgiri black tea, ripe orchard peach purée, garden bruised mint leaves."
        },
        {
            id: 20,
            name: "Cucumber Basil Sparkler",
            category: "Beverages & Coolers",
            diet: "Vegan",
            isSignature: false,
            price: 220,
            farm: "Two Rivers Farm",
            desc: "Cold-pressed farm cucumber juice, sweet basil essence, splash of elderflower tonic."
        }
    ];

    // Filter dishes based on category, diet, and search term
    const filteredDishes = dishes.filter(dish => {
        const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
        const matchesDiet = dietFilter === "All"
            || (dietFilter === "Veg" && (dish.diet === "Veg" || dish.diet === "Vegan"))
            || (dietFilter === "Vegan" && dish.diet === "Vegan")
            || (dietFilter === "Non-Veg" && dish.diet === "Non-Veg")
            || (dietFilter === "Signature" && dish.isSignature);
        const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase())
            || dish.desc.toLowerCase().includes(searchQuery.toLowerCase())
            || dish.farm.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesDiet && matchesSearch;
    });

    const toggleDishSelection = (dish) => {
        if (selectedDishes.some(d => d.id === dish.id)) {
            setSelectedDishes(selectedDishes.filter(d => d.id !== dish.id));
        } else {
            setSelectedDishes([...selectedDishes, dish]);
        }
    };

    const tastingTotal = selectedDishes.reduce((sum, d) => sum + d.price, 0);

    const openBookingWithDishes = () => {
        if (selectedDishes.length > 0) {
            const dishNames = selectedDishes.map(d => d.name).join(", ");
            setBookingData(prev => ({
                ...prev,
                specialNotes: `Table pre-selected dishes: ${dishNames}`
            }));
        }
        setOpenBox(true);
    };

    return (
        <div style={{ backgroundColor: 'var(--secondBgColor, #14170f)', color: 'var(--primary-color)', minHeight: '100vh', fontFamily: '"Space Grotesk", sans-serif' }}>

            {/* Table Reservation Modal */}
            {openBox && (
                <div
                    className="rest-book-table"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) handleCloseModal();
                    }}
                >
                    <div className='rest-bookform'>
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
                                    <p className="rest-modal-subtitle">Reserve hearth seating with chef-curated seasonal dishes</p>
                                </div>

                                <div className="rest-form-grid">
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

                                    <div className="rest-form-group">
                                        <label htmlFor="guests">Number of Guests *</label>
                                        <div className="rest-input-wrap">
                                            <select
                                                id="guests"
                                                name="guests"
                                                value={bookingData.guests}
                                                onChange={handleInputChange}
                                            >
                                                <option value="1">1 Person (Counter Dining)</option>
                                                <option value="2">2 Persons (Couple Table)</option>
                                                <option value="3">3 Persons</option>
                                                <option value="4">4 Persons (Standard Table)</option>
                                                <option value="5">5 Persons</option>
                                                <option value="6">6 Persons (Family Hearth)</option>
                                                <option value="8+">8+ Persons (Private Group)</option>
                                            </select>
                                        </div>
                                    </div>

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

                                    <div className="rest-form-group">
                                        <label htmlFor="time">Time Slot *</label>
                                        <div className="rest-input-wrap">
                                            <select
                                                id="time"
                                                name="time"
                                                value={bookingData.time}
                                                onChange={handleInputChange}
                                            >
                                                <optgroup label="Lunch Service">
                                                    <option value="12:30 PM">12:30 PM</option>
                                                    <option value="01:15 PM">01:15 PM</option>
                                                    <option value="02:00 PM">02:00 PM</option>
                                                    <option value="02:45 PM">02:45 PM</option>
                                                </optgroup>
                                                <optgroup label="Dinner Service">
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
                                                <option value="Fireplace Lounge">Open Fireplace Lounge (Warm Hearth)</option>
                                                <option value="Chef's Counter">Chef's Live Counter (Front Row)</option>
                                                <option value="Rooftop Terrace">Rooftop Garden Terrace</option>
                                                <option value="Private Dining">Private Dining Suite</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="rest-form-group full-width">
                                        <label htmlFor="specialNotes">Special Requests & Selected Dishes</label>
                                        <div className="rest-input-wrap">
                                            <textarea
                                                id="specialNotes"
                                                name="specialNotes"
                                                rows="2"
                                                placeholder="Anniversaries, allergies, or pre-ordered dishes..."
                                                value={bookingData.specialNotes}
                                                onChange={handleInputChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="rest-form-footer">
                                    <p className="rest-security-note">🔒 Instant SMS confirmation. No advance fee required.</p>
                                    <div className="rest-form-actions">
                                        <button type="button" onClick={handleCloseModal} className="rest-btn-cancel">
                                            Cancel
                                        </button>
                                        <button type="submit" className="rest-btn-confirm">
                                            Confirm Table Booking
                                        </button>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <div className="rest-booking-success">
                                <div className="rest-success-icon">✓</div>
                                <h2>Table Confirmed!</h2>
                                <p className="rest-success-subtitle">We look forward to welcoming you to Terra & Flame.</p>

                                <div className="rest-booking-summary">
                                    <div className="summary-item">
                                        <span>Confirmation ID:</span>
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
                                        <span>Slot:</span>
                                        <strong>{bookingData.date || 'Today'} at {bookingData.time}</strong>
                                    </div>
                                    <div className="summary-item">
                                        <span>Area:</span>
                                        <strong>{bookingData.seating}</strong>
                                    </div>
                                </div>

                                <div className="rest-success-actions">
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

            {/* Main Header & Navbar */}
            <div className='main-header darkness' style={{ minHeight: '52vh', height: 'auto', paddingBottom: '3rem' }}>
                <nav className={`navbar rest-nav ${openBox ? "rest-nav-hidden" : ""}`}>
                    <Link href="/" className='n-title'>EAT<span className='title-dot'>.</span></Link>
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <Menu />
                    </button>

                    <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                        <Link href="/restaurant#specialties" className='nav-item' onClick={() => setMenuOpen(false)}>Specialties</Link>
                        <Link href="/restaurant/menu" className='nav-item' style={{ color: 'var(--pcolor)' }} onClick={() => setMenuOpen(false)}>Menu</Link>
                        <Link href="/restaurant/story" className='nav-item' onClick={() => setMenuOpen(false)}>Our Story</Link>
                        <Link href="/restaurant/visit" className='nav-item' onClick={() => setMenuOpen(false)}>Visit Us</Link>
                        <button onClick={() => { setMenuOpen(false); setOpenBox(true); }} className='rest-btn'>Book a Table</button>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className='rest-hero' style={{ paddingTop: '5rem', width: '85%' }}>
                    <p className='rest-p1'>• Hardwood Charcoal Hearth & Garden Produce</p>
                    <h1 className='rest-title' style={{ margin: '0 0 0.5rem 0' }}>Restaurant Menu</h1>
                    <p className='rest-description' style={{ transform: 'none', margin: '0.5rem 0 2rem 0', width: 'auto', maxWidth: '42rem' }}>
                        Dishes cooked over open fruitwood embers. Ingredients harvested at dawn from our partner growers and prepared fresh for each sitting.
                    </p>

                    <div className='rest-hero-btns' style={{ flexWrap: 'wrap' }}>
                        <button onClick={() => setOpenBox(true)} className="rest-btn-hero">Book a Table</button>
                        <a href="#menu-catalog" className="rest-btn-hero" style={{ backgroundColor: 'transparent', border: '1px solid var(--borderColor)', color: 'var(--primary-color)', textDecoration: 'none' }}>
                            Browse Dishes <DownArrow />
                        </a>
                    </div>
                </div>
            </div>

            {/* Menu Controls: Search & Category Navigation */}
            <div id="menu-catalog" className="menu-catalog-bar">
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                    {/* Search Bar */}
                    <div style={{ flex: '1', minWidth: '280px', maxWidth: '450px' }}>
                        <input
                            type="text"
                            placeholder="Search dishes, ingredients (e.g. corn, mushroom, paneer)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem 1.2rem',
                                backgroundColor: 'var(--hbgColor)',
                                border: '1px solid var(--borderColor)',
                                borderRadius: '2rem',
                                color: 'var(--primary-color)',
                                fontSize: '0.95rem',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    {/* Dietary Filters */}
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                        {[
                            { label: "All Items", val: "All" },
                            { label: "🌱 Vegetarian", val: "Veg" },
                            { label: "🥬 Vegan", val: "Vegan" },
                            { label: "🍗 Non-Veg", val: "Non-Veg" },
                            { label: "⭐ Chef's Signature", val: "Signature" }
                        ].map(f => (
                            <button
                                key={f.val}
                                onClick={() => setDietFilter(f.val)}
                                style={{
                                    padding: '0.45rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    fontFamily: 'inherit',
                                    backgroundColor: dietFilter === f.val ? 'var(--pcolor)' : 'var(--hbgColor)',
                                    color: dietFilter === f.val ? '#000000' : 'var(--primary-color)',
                                    border: '1px solid var(--borderColor)'
                                }}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Pills Strip */}
                <div style={{ maxWidth: '1200px', margin: '1.5rem auto 0 auto', display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', scrollbarWidth: 'none' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                padding: '0.6rem 1.4rem',
                                borderRadius: '2rem',
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                                backgroundColor: activeCategory === cat ? 'var(--primary-color)' : 'transparent',
                                color: activeCategory === cat ? '#000000' : 'var(--primary-color)',
                                border: activeCategory === cat ? 'none' : '1px solid var(--borderColor)'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Items Grid */}
            <div className="menu-items-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', borderBottom: '1px solid var(--borderColor)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <span style={{ color: 'var(--pcolor)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '1px' }}>
                            {activeCategory.toUpperCase()} ({filteredDishes.length} DISHES)
                        </span>
                        <h2 style={{ fontSize: '2.4rem', color: 'var(--primary-color)', margin: '0.25rem 0 0 0', fontWeight: 800 }}>
                            {activeCategory === "All" ? "Full Seasonal Menu" : activeCategory}
                        </h2>
                    </div>

                    {selectedDishes.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--hbgColor)', padding: '0.6rem 1.25rem', borderRadius: '2rem', border: '1px solid var(--pcolor)' }}>
                            <span style={{ fontSize: '0.9rem', color: 'var(--primary-color)' }}>
                                Pre-Selected: <strong>{selectedDishes.length}</strong> (₹{tastingTotal})
                            </span>
                            <button
                                type="button"
                                onClick={openBookingWithDishes}
                                style={{
                                    backgroundColor: 'var(--pcolor)',
                                    color: '#000000',
                                    border: 'none',
                                    borderRadius: '2rem',
                                    padding: '0.4rem 1rem',
                                    fontWeight: 700,
                                    fontSize: '0.85rem',
                                    cursor: 'pointer'
                                }}
                            >
                                Book Table with Dishes →
                            </button>
                        </div>
                    )}
                </div>

                {filteredDishes.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bgcolor)', borderRadius: '1rem', border: '1px solid var(--borderColor)' }}>
                        <p style={{ color: 'var(--descriptionColor)', fontSize: '1.2rem', marginBottom: '1rem' }}>No dishes matched your current search filters.</p>
                        <button
                            type="button"
                            onClick={() => { setActiveCategory("All"); setDietFilter("All"); setSearchQuery(""); }}
                            style={{
                                backgroundColor: 'var(--pcolor)',
                                color: '#000',
                                border: 'none',
                                borderRadius: '2rem',
                                padding: '0.6rem 1.5rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                            }}
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {filteredDishes.map(dish => {
                            const isSelected = selectedDishes.some(d => d.id === dish.id);
                            return (
                                <div
                                    key={dish.id}
                                    style={{
                                        backgroundColor: 'var(--bgcolor)',
                                        border: isSelected ? '2px solid var(--pcolor)' : '1px solid var(--borderColor)',
                                        borderRadius: '1.25rem',
                                        padding: '1.8rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                                                <span style={{
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                    padding: '0.2rem 0.6rem',
                                                    borderRadius: '2rem',
                                                    backgroundColor: dish.diet === 'Veg' || dish.diet === 'Vegan' ? 'rgba(29, 97, 29, 0.35)' : 'rgba(236, 61, 61, 0.25)',
                                                    color: dish.diet === 'Veg' || dish.diet === 'Vegan' ? '#86efac' : '#fca5a5',
                                                    border: dish.diet === 'Veg' || dish.diet === 'Vegan' ? '1px solid #22c55e' : '1px solid #ef4444'
                                                }}>
                                                    {dish.diet === 'Vegan' ? '🌱 VEGAN' : dish.diet === 'Veg' ? '🌱 VEG' : '🍗 NON-VEG'}
                                                </span>
                                                {dish.isSignature && (
                                                    <span style={{
                                                        fontSize: '0.75rem',
                                                        fontWeight: 700,
                                                        padding: '0.2rem 0.6rem',
                                                        borderRadius: '2rem',
                                                        backgroundColor: 'rgba(255, 106, 0, 0.15)',
                                                        color: 'var(--pcolor)',
                                                        border: '1px solid var(--pcolor)'
                                                    }}>
                                                        🔥 SIGNATURE
                                                    </span>
                                                )}
                                            </div>

                                            <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--pcolor)' }}>
                                                ₹{dish.price}
                                            </span>
                                        </div>

                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', margin: '0 0 0.4rem 0', fontWeight: 700 }}>
                                            {dish.name}
                                        </h3>

                                        <p style={{ color: 'var(--pcolor)', fontSize: '0.85rem', fontWeight: 600, margin: '0 0 0.75rem 0' }}>
                                            📍 Sourced from {dish.farm}
                                        </p>

                                        <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                                            {dish.desc}
                                        </p>
                                    </div>

                                    <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 251, 198, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <button
                                            type="button"
                                            onClick={() => toggleDishSelection(dish)}
                                            style={{
                                                padding: '0.5rem 1.1rem',
                                                borderRadius: '2rem',
                                                fontSize: '0.85rem',
                                                fontWeight: 700,
                                                cursor: 'pointer',
                                                fontFamily: 'inherit',
                                                backgroundColor: isSelected ? 'var(--pcolor)' : 'transparent',
                                                color: isSelected ? '#000000' : 'var(--primary-color)',
                                                border: isSelected ? 'none' : '1px solid var(--borderColor)'
                                            }}
                                        >
                                            {isSelected ? '✓ In Table Order' : '+ Add to Table Order'}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setBookingData(prev => ({
                                                    ...prev,
                                                    specialNotes: `Interested in trying: ${dish.name} (₹${dish.price})`
                                                }));
                                                setOpenBox(true);
                                            }}
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: 'var(--primary-color)',
                                                fontSize: '0.85rem',
                                                cursor: 'pointer',
                                                textDecoration: 'underline',
                                                fontFamily: 'inherit'
                                            }}
                                        >
                                            Book Table →
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Farm Heritage & Quality Banner */}
            <div style={{ backgroundColor: 'var(--hbgColor)', borderTop: '1px solid var(--borderColor)', padding: '3.5rem 2rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <span className="rest-badge" style={{ marginBottom: '1rem' }}>FARM DIRECT ONLY</span>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', fontWeight: 800, margin: '0 0 1rem 0' }}>
                        Picked at Dawn, On the Grill by Night
                    </h2>
                    <p style={{ color: 'var(--descriptionColor)', fontSize: '1.05rem', lineHeight: '1.7', margin: '0 auto 2rem auto', maxWidth: '45rem' }}>
                        Every vegetable on this menu traces back to one of our six grower partners: Dana R. in Sonoma County, Miguel A. in Willamette Valley, and Sarah K. in Skagit Valley. We don't freeze ingredients, and we never use pre-made mixes.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button onClick={() => setOpenBox(true)} className="rest-btn-hero">Reserve Your Table</button>
                        <Link href="/restaurant/story" className="rest-btn-hero" style={{ backgroundColor: 'transparent', border: '1px solid var(--borderColor)', color: 'var(--primary-color)', textDecoration: 'none' }}>
                            Read Our Story
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MenuPage