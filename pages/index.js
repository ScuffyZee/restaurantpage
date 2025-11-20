import { useEffect } from "react";
import Hero from "./Hero";
import MenuPreview from "./MenuPreview";
import Book from "./Book";
import Team from "./Team";
import FAQS from "./FAQS";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation
    if (window.location.hash === '#book-section') {
      setTimeout(() => {
        const bookSection = document.getElementById('book-section');
        if (bookSection) {
          bookSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <Hero/>
      <MenuPreview/>
      <Book/>
      <FAQS/>
    </div>
  );
}
