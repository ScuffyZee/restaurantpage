// components/blog/BlogSection.js
import React from 'react';

// Define the custom colors used in the menu (Tailwind classes)
const ACCENT_GOLD = 'text-yellow-500'; 
const ACCENT_GREEN = 'text-teal-400';  
const BACKGROUND_DARK = 'bg-black-900';
const CARD_DARK = 'bg-gray-800';

const blogPosts = [
   {
        id: 1,
        // ...
        title: 'The Secret to That Creamy Carbonara: Truffle Edition',
        // --- CHANGE THIS LINE ---
        imageSrc: '/carbonara.jpg', 
        alt: 'Creamy Truffle Carbonara',
        link: '/blog/truffle-carbonara-recipe'
    },
    {
        id: 2,
        // ...
        title: 'From Ocean to Plate: Our Sustainable Salmon Sourcing',
        // --- CHANGE THIS LINE ---
        imageSrc: '/salmon.jpeg',
        alt: 'Grilled Salmon Dish',
        link: '/blog/sustainable-salmon'
    },
    {
        id: 3,
        // ...
        title: 'Mixology Magic: Meet the Bartender Behind Our Signature Sips',
        // --- CHANGE THIS LINE ---
        imageSrc: '/cocktail.jpg',
        alt: 'Artisan Cocktail',
        link: '/blog/mixologist-profile'
    }
];

function BlogSection() {
    return (
        <section className={`text-white ${BACKGROUND_DARK} py-16`}>
            <div className="container mx-auto px-4">
                
                <header className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-yellow-500">✨ Our Latest Stories & Recipes</h2>
                    <p className="text-xl text-gray-400 mt-2">Dive deeper into the dishes and drinks that make us unique.</p>
                </header>

                <div className="flex flex-wrap justify-center gap-8">
                    
                    {blogPosts.map(post => (
                        <a 
                            key={post.id}
                            href={post.link}
                            className={`group w-full sm:w-80 md:w-96 lg:w-80 overflow-hidden rounded-lg shadow-xl 
                                       ${CARD_DARK} transition-all duration-300 hover:-translate-y-2`}
                           onMouseEnter={(e) => { 
    // SAFELY CHECK if post.accentColor is defined and is a string
    if (typeof post.accentColor === 'string') {
        const shadowColor = post.accentColor.includes('yellow') 
            ? 'rgba(234, 179, 8, 0.7)' // Yellow/Gold Shadow
            : 'rgba(45, 212, 191, 0.7)'; // Teal/Green Shadow
        
        e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.5), 0 0 10px ${shadowColor}`;
    } else {
        // Fallback for safety if accentColor is missing (e.g., default yellow)
        e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.5), 0 0 10px rgba(234, 179, 8, 0.7)`;
    }
}}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.5)';
                            }}
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={post.imageSrc} 
                                    alt={post.alt} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <span className={`text-sm font-semibold uppercase ${ACCENT_GOLD} block mb-2`}>
                                    {post.category}
                                </span>
                                <h3 className={`text-2xl font-bold leading-tight text-white transition-colors duration-200 ${post.accentColor ? `group-hover:${post.accentColor.split('-')[1]}-300` : 'group-hover:text-yellow-300'}`}>
                                    {post.title}
                                </h3>
                                <p className="mt-3 text-gray-400 text-base">
                                    {post.teaser}
                                </p>
                            </div>

                            <div className="px-5 pb-5 pt-2 border-t border-gray-700">
                                <div className={`text-lg font-semibold transition-colors duration-200 flex items-center ${post.accentColor}`}>
                                    Read the Story 
                                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;