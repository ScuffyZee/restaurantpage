import React from 'react'

function index() {
  return (
    <section id="menu-preview-section" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Menu</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our delicious selection of carefully crafted dishes</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400/ff6b6b/ffffff&text=Pasta+Dish" alt="pasta"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">PASTA</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Truffle Carbonara</h1>
                <p className="leading-relaxed mb-3">Creamy pasta with truffle oil, crispy pancetta, and fresh parmesan.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-indigo-500 font-semibold text-xl">$24.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401/4ecdc4/ffffff&text=Seafood+Plate" alt="seafood"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">SEAFOOD</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Grilled Salmon</h1>
                <p className="leading-relaxed mb-3">Fresh Atlantic salmon with roasted vegetables and lemon butter sauce.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-indigo-500 font-semibold text-xl">$32.99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402/95e1d3/ffffff&text=Steak+Entree" alt="steak"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">MEAT</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Prime Ribeye Steak</h1>
                <p className="leading-relaxed mb-3">12oz ribeye cooked to perfection, served with garlic mashed potatoes.</p>
                <div className="flex items-center flex-wrap">
                  <span className="text-indigo-500 font-semibold text-xl">$42.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a 
            href="/menu" 
            className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors duration-200"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default index
