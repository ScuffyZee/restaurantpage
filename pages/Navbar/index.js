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
  
    
  
  <header className="text-gray-400 body-font bg-gray-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link href="/">
    <Image
      src="/ramenlogo.png"
      alt="Logo"
      width={100}
      height={70}
    />
  </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
      <Link href="/">
      <div className="mr-5 hover:text-orange-500 transition-colors cursor-pointer">Home</div>
       </Link>
       <Link href="/About">  
      <div className="mr-5 hover:text-orange-500 transition-colors cursor-pointer">About Us</div>
       </Link>
      <Link href="/menu">
      <div className="mr-5 hover:text-orange-500 transition-colors cursor-pointer">Menu</div>
      </Link>
        <Link href="/Team">
      <div className="mr-5 hover:text-orange-500 transition-colors cursor-pointer">Team</div>
       </Link>
       <Link href="/FAQS">
      <div className="mr-5 hover:text-orange-500 transition-colors cursor-pointer">FAQS</div>
       </Link>
       <Link href="/Blog">
      <div className="mr-5 hover:text-orange-500 transition-colors cursor-pointer">Blog</div>
       </Link>
      
       
       
      
    </nav>
    <button onClick={scrollToBookSection} className="inline-flex items-center bg-orange-600 text-white border-0 py-2 px-4 focus:outline-none hover:bg-orange-700 rounded text-base mt-4 md:mt-0 transition-colors">
      Book a Table
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  );
};

export default Navbar;




