import React from 'react'

export default function index() {
  return (
    <div>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/ramensplash.png" width={720} height={600} />
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-200">Savor Every Bite. Savor Every Moment.</h1>
      <p class="mb-8 leading-relaxed"> Welcome to a dining experience where flavor, freshness, and hospitality come together. Whether it's your first visit or your hundredth, every plate is made to impress.   </p>
      <div class="flex justify-center">
        <a href="#menu-preview-section" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Experience the Flavor <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
