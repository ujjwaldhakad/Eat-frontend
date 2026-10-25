'use client'
import React, { useState } from 'react'
import BasicNavbar from '@/components/BasicNavbar'
import BasicFooter from '@/components/BasicFooter'
import '@/app/basic-pages.css'

const RecipesPage = () => {
    const [activeRecipe, setActiveRecipe] = useState(null);

    const recipes = [
        {
            id: 1,
            title: "Pan-Charred Carrots with Thyme & Honey",
            time: "20 mins",
            difficulty: "Easy",
            servings: "2-3",
            produce: "Carrots, Fresh Thyme",
            desc: "A quick stovetop char that caramelizes natural root sugars without losing crunch.",
            ingredients: [
                "500g carrots, washed and sliced lengthwise",
                "2 tbsp extra virgin olive oil",
                "1 tbsp wild honey or jaggery syrup",
                "3 sprigs fresh thyme",
                "Flaky sea salt and crushed black pepper"
            ],
            steps: [
                "Heat a heavy skillet or cast iron pan over medium-high heat with olive oil.",
                "Place carrots cut-side down in a single layer. Sear undisturbed for 6-8 minutes until deep brown.",
                "Flip carrots, toss in thyme sprigs and cook for another 4 minutes.",
                "Drizzle honey over the pan, toss once to coat, season with flaky salt and serve warm."
            ]
        },
        {
            id: 2,
            title: "Rustic Sun Gold Tomato & Basil Pasta",
            time: "25 mins",
            difficulty: "Easy",
            servings: "2",
            produce: "Roma Tomatoes, Sweet Basil, Garlic",
            desc: "Tomatoes blistered in a skillet until they burst into an effortless, silky sauce.",
            ingredients: [
                "400g ripe mixed tomatoes, halved",
                "200g pasta (rigatoni or spaghetti)",
                "3 cloves garlic, thinly sliced",
                "Large handful fresh sweet basil leaves",
                "3 tbsp cold-pressed olive oil",
                "Salt and chili flakes to taste"
            ],
            steps: [
                "Boil pasta in salted water until 1 minute before al dente.",
                "In a wide pan, warm olive oil and sliced garlic over medium heat until fragrant (do not burn).",
                "Add halved tomatoes and a pinch of salt. Cook over medium-high heat until tomatoes blister and release juices.",
                "Transfer pasta directly into the sauce with 1/4 cup pasta cooking water. Toss vigorously.",
                "Remove from heat, fold in fresh torn basil leaves, drizzle fresh olive oil and serve."
            ]
        },
        {
            id: 3,
            title: "Crisp Tuscan Kale & Roasted Grain Bowl",
            time: "30 mins",
            difficulty: "Medium",
            servings: "3",
            produce: "Lacinato Kale, Zucchini, Lemon",
            desc: "Hearty seasonal lunch bowl packed with crisp greens, warm quinoa, and lemon-tahini dressing.",
            ingredients: [
                "1 bunch Tuscan kale, stems removed and roughly chopped",
                "1 zucchini, cut into rounds",
                "1 cup cooked quinoa or brown rice",
                "2 tbsp tahini mixed with 2 tbsp warm water and lemon juice",
                "1 tbsp toasted pumpkin or sunflower seeds"
            ],
            steps: [
                "Massage raw kale leaves with a drop of olive oil and a pinch of salt for 2 minutes to tenderize.",
                "Sear zucchini rounds on a dry griddle until marked on both sides.",
                "Assemble warm grains at the base of the bowl, topped with massaged kale and grilled zucchini.",
                "Drizzle lemon-tahini dressing generously over top and finish with toasted seeds."
            ]
        }
    ];

    return (
        <div className="basic-page">
            <BasicNavbar active="recipes" />

            <main className="basic-container">
                <div className="basic-page-header">
                    <h1 className="basic-page-title">Chef's Harvest Recipes</h1>
                    <p className="basic-page-desc">Every box includes recipe cards tailored to that week's harvest. Here are our seasonal favorites.</p>
                </div>

                <div className="basic-grid-3" style={{ marginBottom: '2.5rem' }}>
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="basic-card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="basic-badge basic-badge-success">{recipe.produce}</span>
                            <h2 style={{ fontSize: '1.35rem', margin: '1rem 0 0.5rem 0', color: 'var(--primary-color)' }}>
                                {recipe.title}
                            </h2>
                            <p style={{ color: 'var(--descriptionColor)', fontSize: '0.95rem', marginBottom: '1.25rem', flex: 1, lineHeight: '1.5' }}>
                                {recipe.desc}
                            </p>

                            <div style={{ fontSize: '0.9rem', color: 'var(--pcolor)', marginBottom: '1.25rem', fontWeight: 600 }}>
                                ⏱ {recipe.time} · 🍽 Serves {recipe.servings}
                            </div>

                            <button
                                type="button"
                                onClick={() => setActiveRecipe(activeRecipe === recipe.id ? null : recipe.id)}
                                className="basic-btn"
                                style={{ width: '100%' }}
                            >
                                {activeRecipe === recipe.id ? 'Hide Instructions' : 'View Full Recipe'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Recipe Detail Modal / View */}
                {activeRecipe && (
                    <div className="basic-card" style={{ border: '2px solid var(--pcolor)' }}>
                        {(() => {
                            const r = recipes.find(x => x.id === activeRecipe);
                            return (
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--borderColor)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                        <div>
                                            <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', margin: 0 }}>{r.title}</h2>
                                            <p style={{ color: 'var(--pcolor)', margin: '0.35rem 0 0 0', fontSize: '1rem' }}>{r.desc}</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setActiveRecipe(null)}
                                            className="basic-btn basic-btn-secondary"
                                            style={{ padding: '0.4rem 0.9rem', cursor: 'pointer' }}
                                        >
                                            ✕ Close
                                        </button>
                                    </div>

                                    <div className="basic-grid-2">
                                        <div style={{ background: 'var(--hbgColor)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--pcolor)' }}>Ingredients:</h3>
                                            <ul style={{ paddingLeft: '1.25rem', color: 'var(--primary-color)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                                {r.ingredients.map((ing, i) => (
                                                    <li key={i}>{ing}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div style={{ background: 'var(--hbgColor)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--borderColor)' }}>
                                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--pcolor)' }}>Step-by-Step Instructions:</h3>
                                            <ol style={{ paddingLeft: '1.25rem', color: 'var(--primary-color)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                                                {r.steps.map((step, i) => (
                                                    <li key={i} style={{ marginBottom: '0.65rem' }}>{step}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                )}
            </main>

            <BasicFooter />
        </div>
    )
}

export default RecipesPage
