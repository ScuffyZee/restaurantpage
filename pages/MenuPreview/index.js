import React from 'react'

function index() {
  return (
    <section id="menu-preview-section" className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Menu</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">Explore our delicious selection of carefully crafted dishes</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-700 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-900/20 transition-shadow duration-300">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop" alt="pasta"/>
              <div className="p-6 bg-gray-800">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">RAMEN</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Tonkotsu Ramen</h1>
                <p className="leading-relaxed mb-3 text-gray-300">Rich pork bone broth with tender chashu pork, soft-boiled egg, and fresh noodles.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-orange-500 font-semibold text-xl">$16.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-700 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-900/20 transition-shadow duration-300">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/mackerel.jpg" alt="seafood"/>
              <div className="p-6 bg-gray-800">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">ROBATA</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Grilled Mackerel</h1>
                <p className="leading-relaxed mb-3 text-gray-300">Freshly caught charcoal-grilled whole mackerel with daikon and ponzu. 
                </p>
                <div className="flex items-center flex-wrap">
                  <span className="text-orange-500 font-semibold text-xl">$18.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-700 border-opacity-60 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-900/20 transition-shadow duration-300">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="/gyudon.jpg" alt="steak"/>
              <div className="p-6 bg-gray-800">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">DONBURI</h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">Gyudon</h1>
                <p className="leading-relaxed mb-3 text-gray-300">Simmered beef and onions over steamed rice with pickled ginger.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-orange-500 font-semibold text-xl">$14.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a 
            href="/menu" 
            className="inline-flex text-white bg-orange-600 border-0 py-3 px-8 focus:outline-none hover:bg-orange-700 rounded text-lg transition-colors duration-200"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default index
