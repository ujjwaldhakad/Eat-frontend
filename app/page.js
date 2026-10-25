import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { Tick } from '@/components/Icons'
import Footer from '@/components/Footer'

const page = () => {

  const homefirstSectionData = [
    {
      id: 1,
      title: "Partner farms",
      count: 38
    },
    {
      id: 2,
      title: "Cities delivered",
      count: 6
    },
    {
      id: 3,
      title: "Field to door, max",
      count: "24hr"
    },
    {
      id: 4,
      title: "Plastic packaging",
      count: 0
    },
  ]

  const section2CardData = [
    {
      "id": 1,
      "icon": "🌱",
      "title": "Farm-direct",
      "description": "Every box traces to one grower we've actually stood in the field with — no distributor in between."
    },
    {
      "id": 2,
      "icon": "☀️",
      "title": "Picked at dawn",
      "description": "Vegetables are cut and boxed the same morning, while the field is still cold."
    },
    {
      "id": 3,
      "icon": "⚖️",
      "title": "Chef's ratio",
      "description": "Portioned to a real recipe, not a random assortment — nothing left over, nothing missing."
    },
    {
      "id": 4,
      "icon": "🍃",
      "title": "Zero plastic",
      "description": "Compostable wrap, a paper-lined box, and a knife you already own. That's the whole kit."
    }
  ]

  const plans = [
    {
      id: "solo",
      label: "THE SOLO",
      name: "The Solo",
      price: 34,
      period: "week",
      description: "For one, cooking because you want to — not because you have to.",
      features: [
        "5 seasonal vegetables",
        "2 bunched herbs",
        "1 chef recipe card",
        "Serves 1, about 4–5 meals"
      ],
      buttonText: "CHOOSE THE SOLO",
      popular: false
    },
    {
      id: "table",
      label: "THE TABLE",
      name: "The Table",
      price: 58,
      period: "week",
      description: "The one most people start with — built for two, with leftovers.",
      features: [
        "8 seasonal vegetables",
        "3 bunched herbs",
        "2 chef recipe cards",
        "Serves 2–3, swap any item"
      ],
      buttonText: "CHOOSE THE TABLE",
      popular: true,
      popularText: "MOST POPULAR"
    },
    {
      id: "kitchen",
      label: "THE KITCHEN",
      name: "The Kitchen",
      price: 92,
      period: "week",
      description: "For a full table — a household that actually cooks together.",
      features: [
        "14 seasonal vegetables",
        "4 bunched herbs",
        "3 chef recipe cards",
        "Serves 4–6, priority picks"
      ],
      buttonText: "CHOOSE THE KITCHEN",
      popular: false
    }
  ];

  const farmers = [
    {
      initials: "DR",
      name: "Dana R.",
      farm: "TWO RIVERS FARM",
      location: "SONOMA COUNTY",
      quote: "We pick the morning your box ships. Not the night before.",
      color: "#e3432c",
    },
    {
      initials: "MA",
      name: "Miguel A.",
      farm: "ALDER HOLLOW",
      location: "WILLAMETTE VALLEY",
      quote: "Roots and herbs stay in the ground until an order actually says otherwise.",
      color: "#e99a28",
    },
    {
      initials: "SK",
      name: "Sarah K.",
      farm: "BELL & BRAMBLE",
      location: "SKAGIT VALLEY",
      quote: "Peppers and greens, grown for flavor first — size was never the point.",
      color: "#7fa46b",
    },
  ];

  return (
    <div>
      <Navbar />
      {/* home section 1 */}
      <section className='homefrist-Sections'>
        {homefirstSectionData.map((i, index) => {
          return (
            <div key={index} className='home-first-item'>
              <h1 className='first-s-count'>{i.count}</h1>
              <p className='first-s-title'>{i.title}</p>
            </div>
          )
        })}
      </section>

      {/* home section 2 */}
      <section className='home-s2'>
        <div className='s2-title-sec'>
          <p className='s2-title1'>Four reasons your <br></br>vegetables<br></br>
            usually disappoint you
          </p>
          <p className='s2-title2'>...and the four things we build every box <br></br>  around instead.</p>
        </div>

        <div className='s2-cards'>
          {section2CardData.map((i, index) => {
            return (
              <div key={index} className='s2-card'>
                <p className='s2-card-icon'>{i.icon}</p>
                <h1 className='s2-card-title'>{i.title}</h1>
                <p className='s2-card-des'>{i.description}</p>
              </div>
            )
          })}
        </div>
      </section>
      {/* home section 3 */}
      <section className='home-sec-3'>
        <div className='home-sec3'>
          <h1 className='h-sec3-title'>Pick a size.<br></br> Change it any week.</h1>
          <p className='h-sec3-des'>Every box ships the same morning it's picked<br></br> — the only thing that changes is how much<br></br> lands on your board.</p>
        </div>

        <div className="s3-cards">
          {plans.map((i, d) => {
            return (
              <div
                key={d}
                className={`s3-card ${d === 1 ? "s3-card-special" : ""}`}
              >
                {/* Sirf Card 2 me ye p aayega */}
                {d === 1 && (
                  <p className="s3-card-special-text">
                    Most Popular
                  </p>
                )}

                <p className="s3-card-logo" >{i.label}</p>

                <h1 className="s3-card-title">{i.name}</h1>

                <div className="s3-card-priceweek">
                  <h2 className="s3-card-price">₹{i.price}</h2>
                  <span className="s3-card-week">/{i.period}</span>
                </div>

                <p className="s3-card-description">{i.description}</p>

                {i.features.map((item, index) => (
                  <div key={index} className="feature">
                    <Tick className="s3-card-icon" />
                    <span className="s3-card-list">{item}</span>
                  </div>
                ))}

                <Link href="/cart" className="s3-card-btn">{i.buttonText}</Link>
              </div>
            );
          })}
        </div>
      </section>


      <section className='section-4'>
        <div className='home-sec3'>
          <h1 className='h-sec3-title'>The people <br></br>behind the box</h1>
          <p className='h-sec3-des'>Six growers, no distributor. If a vegetable is in <br></br>your box, you can trace it to a name above.</p>
        </div>

        <div className='s4-cards'>
          {farmers.map((item, index) => (
            <div className="s4-card" key={index}>
              <div
                className="initials"
                style={{ backgroundColor: item.color }}
              >
                {item.initials}
              </div>
              <div className='s4-card-right'>
                <h2 className='s4-card-title'>{item.name}</h2>
                <p className='s4-card-farm'>{item.farm} · {item.location}</p>
                <blockquote className='s4-card-quote'>"{item.quote}"</blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div >
  )
}

export default page