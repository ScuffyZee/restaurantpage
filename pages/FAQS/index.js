import React from 'react'

function index() {
  return (
    <div className="bg-gray-900">
      <section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Frequently Asked Questions
    </h1>
    <div class="flex flex-wrap justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-900/50 text-orange-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">Do you offer home delivery?</h2>
          <p className="leading-relaxed text-base text-gray-300">Yes, we do! You can place your order directly through our website or via trusted food delivery platforms like Swiggy and Zomato. We ensure that all dishes are packed with care and delivered promptly, so you can enjoy restaurant-quality food in the comfort of your home.</p>
          <a className="mt-3 text-orange-500 inline-flex items-center hover:text-orange-400 transition-colors cursor-pointer">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
     
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-orange-900/50 text-orange-500 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>  
        </div>  
        <div className="flex-grow pl-6">
          <h2 className="text-white text-lg title-font font-medium mb-2">How can I book a table?</h2>
          <p className="leading-relaxed text-base text-gray-300">Booking a table is simple and quick. Just head over to our reservation page, choose your preferred date and time, and confirm your booking in a few clicks. You receive a confirmation instantly. Prefer to speak with someone? You can also call us directly.</p>
          <a className="mt-3 text-orange-500 inline-flex items-center hover:text-orange-400 transition-colors cursor-pointer">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default index

