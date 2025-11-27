import React from 'react'

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Our Story',
      description: 'Founded in 2015, Noodle District began with a simple dream: to bring authentic Asian noodle traditions to our community while adding our own creative twist.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Our Philosophy',
      description: 'We believe in honoring traditional recipes while embracing innovation. Every bowl tells a story of quality ingredients, expert craftsmanship, and passion for flavor.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Our Community',
      description: 'More than just a restaurant, Noodle District is a gathering place where friends become family and every meal is a celebration of culture and connection.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Quality First',
      description: 'We source the finest ingredients, make our noodles fresh daily, and never compromise on quality. Every dish is prepared with care and attention to detail.'
    }
  ]

  return (
    <div className="bg-gray-900">
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-bold title-font mb-6 text-white">About Noodle District</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300 mb-4">
              Welcome to Noodle District, where tradition meets innovation in every steaming bowl. We're passionate about crafting exceptional noodle dishes that honor Asian culinary heritage while bringing bold, contemporary flavors to your table.
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">
              From hand-pulled noodles to carefully simmered broths, each dish is a labor of love prepared by our expert culinary team.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mb-20">
            <div className="w-full lg:w-3/4">
              <img 
                className="rounded-lg shadow-2xl w-full h-96 object-cover" 
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&h=600&fit=crop" 
                alt="Noodle District Restaurant"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="flex flex-wrap -m-4">
            {values.map((value, index) => (
              <div key={index} className="p-4 lg:w-1/2">
                <div className="h-full bg-gray-800 rounded-lg p-8 hover:shadow-xl hover:shadow-orange-900/20 transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 mr-4 inline-flex items-center justify-center rounded-full bg-orange-900/50 text-orange-500 flex-shrink-0">
                      {value.icon}
                    </div>
                    <h2 className="text-white text-2xl font-bold">{value.title}</h2>
                  </div>
                  <p className="leading-relaxed text-base text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Experience Noodle District</h2>
            <p className="text-lg text-gray-300 mb-8 lg:w-2/3 mx-auto">
              Join us for an unforgettable dining experience where every bowl is crafted with passion, authenticity, and a commitment to excellence.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/menu" className="inline-flex text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 rounded-lg text-lg transition-colors">
                View Our Menu
              </a>
              <a href="/book" className="inline-flex text-gray-300 bg-gray-700 border-0 py-3 px-8 focus:outline-none hover:bg-gray-600 rounded-lg text-lg transition-colors">
                Make a Reservation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
