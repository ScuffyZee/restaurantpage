import React, { useState } from 'react'

export default function MenuCarousel({ title, items }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(items.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-medium title-font text-white mb-8 text-center">{title}</h2>
      
      {/* Carousel Container */}
      <div className="relative mx-auto overflow-hidden px-12">
        {/* Carousel Items */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-1/3 flex-shrink-0 px-3">
              <div className="bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-900/20 transition-shadow duration-300 h-full">
                <img 
                  className="w-full h-64 object-cover object-center" 
                  src={item.image} 
                  alt={item.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {item.category}
                  </h2>
                  <h1 className="title-font text-xl font-medium text-white mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-4 text-sm text-gray-300">
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-orange-500 font-bold text-xl">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800 border-2 border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-700 transition-colors duration-200 z-10"
        >
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 border-2 border-gray-700 rounded-full p-3 shadow-lg hover:bg-gray-700 transition-colors duration-200 z-10"
        >
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
