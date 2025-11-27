import React from 'react'
import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: 'Marcus Chen',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
      description: 'With 15 years of culinary excellence, Marcus brings his innovative techniques and passion for Asian fusion cuisine to every dish.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Martinez',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=400&fit=crop',
      description: 'Sarah\'s expertise in traditional cooking methods and ingredient sourcing ensures every meal exceeds expectations.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Alessandro Romano',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop',
      description: 'Alessandro creates artisanal desserts that blend Italian traditions with modern pastry techniques to delight every palate.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Emily Thompson',
      role: 'Restaurant Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      description: 'Emily ensures seamless operations and exceptional guest experiences with her dedication to hospitality excellence.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'David Park',
      role: 'Sommelier',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      description: 'David curates an exceptional wine collection and guides guests through perfect pairings for an elevated dining experience.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Nina Patel',
      role: 'Head Bartender',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      description: 'Nina crafts signature cocktails with creative flair, combining premium spirits with fresh, seasonal ingredients.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ]

  return (
    <div className="bg-gray-900">
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-bold title-font mb-4 text-white tracking-tight">Meet Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">
              Our passionate culinary experts and hospitality professionals work together to create unforgettable dining experiences.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left bg-gray-800 rounded-lg p-6 hover:shadow-xl hover:shadow-orange-900/20 transition-shadow duration-300">
                  <div className="relative flex-shrink-0 rounded-lg w-48 h-48 overflow-hidden sm:mb-0 mb-4">
                    <img 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      src={member.image}
                    />
                  </div>
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-xl text-white mb-1">{member.name}</h2>
                    <h3 className="text-orange-500 font-semibold mb-3 uppercase text-sm tracking-wider">{member.role}</h3>
                    <p className="mb-4 text-gray-300 leading-relaxed">{member.description}</p>
                    <span className="inline-flex">
                      <a href={member.social.instagram} className="text-gray-400 hover:text-orange-500 transition-colors">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a href={member.social.twitter} className="ml-3 text-gray-400 hover:text-orange-500 transition-colors">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a href={member.social.linkedin} className="ml-3 text-gray-400 hover:text-orange-500 transition-colors">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
