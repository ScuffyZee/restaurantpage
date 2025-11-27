import React from 'react'

export default function index() {
  return (
    <div className="bg-gray-900">
      <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/ramensplash.png" width={720} height={600} />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Savor Every Bite. Savor Every Moment.</h1>
      <p className="mb-8 leading-relaxed text-gray-300"> Welcome to a dining experience where flavor, freshness, and hospitality come together. Whether it's your first visit or your hundredth, every plate is made to impress.   </p>
      <div className="flex justify-center">
        <a href="#menu-preview-section" className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg transition-colors">
          Experience the Flavor <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
