import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const scrollToBookSection = () => {
    const bookSection = document.getElementById('book-section');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    } else if (router.pathname !== '/') {
      // If not on home page, navigate there first
      router.push('/#book-section');
    }
  };
  return (
  
    
  
  <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link href="/">
    <Image
      src="/ramenlogo.png"
      alt="Logo"
      width={100}
      height={70}
    />
  </Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href="/">
      <div class="mr-5 hover:text-gray-900">Home</div>
       </Link>
       <Link href="/About">  
      <div class="mr-5 hover:text-gray-900">About Us</div>
       </Link>
      <Link href="/menu">
      <div class="mr-5 hover:text-gray-900">Menu</div>
      </Link>
        <Link href="/Team">
      <div class="mr-5 hover:text-gray-900">Team</div>
       </Link>
       <Link href="/FAQS">
      <div class="mr-5 hover:text-gray-900">FAQS</div>
       </Link>
       <Link href="/Blog">
      <div class="mr-5 hover:text-gray-900">Blog</div>
       </Link>
      
       
       
      
    </nav>
    <button onClick={scrollToBookSection} class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Book a Table
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  );
};

export default Navbar;




