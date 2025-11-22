import React from 'react'
import MenuCarousel from '../../components/MenuCarousel'

export default function index() {
  const mainDishes = [
    {
      category: "APPETIZERS",
      title: "Spring Rolls",
      description: "Crispy spring rolls filled with fresh vegetables and served with sweet chili sauce.",
      price: "$8.99",
      image: "/springroll.jpg"
    },
    {
      category: "PASTA",
      title: "Truffle Carbonara",
      description: "Creamy pasta with truffle oil, crispy pancetta, and fresh parmesan cheese.",
      price: "$24.99",
      image: "https://dummyimage.com/800x600/4ecdc4/ffffff&text=Carbonara"
    },
    {
      category: "SEAFOOD",
      title: "Grilled Salmon",
      description: "Fresh Atlantic salmon with roasted vegetables and lemon butter sauce.",
      price: "$32.99",
      image: "https://dummyimage.com/800x600/95e1d3/ffffff&text=Salmon"
    },
    {
      category: "MEAT",
      title: "Prime Ribeye Steak",
      description: "12oz ribeye cooked to perfection, served with garlic mashed potatoes.",
      price: "$42.99",
      image: "https://dummyimage.com/800x600/f38181/ffffff&text=Ribeye"
    },
    {
      category: "DESSERTS",
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
      price: "$12.99",
      image: "https://dummyimage.com/800x600/aa96da/ffffff&text=Lava+Cake"
    },
    {
      category: "BEVERAGES",
      title: "Artisan Cocktails",
      description: "Handcrafted cocktails made with premium spirits and fresh ingredients.",
      price: "$14.99",
      image: "https://dummyimage.com/800x600/fcbad3/ffffff&text=Cocktails"
    }
  ]


  const sides = [
    {
      category: "SIDES",
      title: "Garlic Mashed Potatoes",
      description: "Creamy mashed potatoes with roasted garlic and butter.",
      price: "$6.99",
      image: "/mashedpotatoes.jpg"
    },
    {
      category: "SIDES",
      title: "Grilled Vegetables",
      description: "Seasonal vegetables grilled to perfection with herbs.",
      price: "$7.99",
      image: "/grilledveg.jpg"
    },
    {
      category: "SIDES",
      title: "Cold Salad",
      description: "Crisp romaine lettuce with parmesan and croutons.",
      price: "$8.99",
      image: "/coldsalad.jpg"
    },
    {
      category: "SIDES",
      title: "French Fries",
      description: "Crispy golden fries seasoned with sea salt.",
      price: "$5.99",
      image: "/fries.png"
    },
    {
      category: "SIDES",
      title: "Onion Rings",
      description: "Beer-battered onion rings served with dipping sauce.",
      price: "$6.99",
      image: "/onionrings.jpg"
    },
    {
      category: "SIDES",
      title: "Coleslaw",
      description: "Fresh cabbage slaw with tangy dressing.",
      price: "$4.99",
      image: "/coleslaw.jpg"
    }
  ]

  const drinks = [
    {
      category: "DRINKS",
      title: "Artisan Cocktails",
      description: "Handcrafted cocktails made with premium spirits.",
      price: "$14.99",
      image: "/artisancocktails.jpg"
    },
    {
      category: "DRINKS",
      title: "Fresh Lemonade",
      description: "House-made lemonade with fresh lemons and mint.",
      price: "$5.99",
      image: "https://dummyimage.com/800x600/fff68f/ffffff&text=Lemonade"
    },
    {
      category: "DRINKS",
      title: "Iced Coffee",
      description: "Cold brew coffee served over ice.",
      price: "$4.99",
      image: "https://dummyimage.com/800x600/8b4513/ffffff&text=Iced+Coffee"
    },
    {
      category: "DRINKS",
      title: "Red Wine",
      description: "Selection of premium red wines.",
      price: "$12.99",
      image: "https://dummyimage.com/800x600/722f37/ffffff&text=Red+Wine"
    },
    {
      category: "DRINKS",
      title: "Smoothies",
      description: "Fresh fruit smoothies with your choice of flavors.",
      price: "$7.99",
      image: "/fruitshake.jpg"
    },
    {
      category: "DRINKS",
      title: "Craft Beer",
      description: "Selection of local craft beers on tap.",
      price: "$8.99",
      image: "/draftbeer.jpg"
    }
  ]

  const desserts = [
    {
      category: "DESSERTS",
      title: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice cream.",
      price: "$12.99",
      image: "https://dummyimage.com/800x600/aa96da/ffffff&text=Lava+Cake"
    },
    {
      category: "DESSERTS",
      title: "Tiramisu",
      description: "Classic Italian dessert with espresso-soaked ladyfingers.",
      price: "$10.99",
      image: "https://dummyimage.com/800x600/c9ada7/ffffff&text=Tiramisu"
    },
    {
      category: "DESSERTS",
      title: "New York Cheesecake",
      description: "Creamy cheesecake with graham cracker crust.",
      price: "$11.99",
      image: "https://dummyimage.com/800x600/ffe5b4/ffffff&text=Cheesecake"
    },
    {
      category: "DESSERTS",
      title: "Crème Brûlée",
      description: "Rich custard with caramelized sugar topping.",
      price: "$9.99",
      image: "https://dummyimage.com/800x600/ffd700/ffffff&text=Creme+Brulee"
    },
    {
      category: "DESSERTS",
      title: "Apple Pie",
      description: "Warm apple pie served with vanilla ice cream.",
      price: "$8.99",
      image: "https://dummyimage.com/800x600/cd853f/ffffff&text=Apple+Pie"
    },
    {
      category: "DESSERTS",
      title: "Gelato",
      description: "Italian-style ice cream in assorted flavors.",
      price: "$7.99",
      image: "https://dummyimage.com/800x600/98d8c8/ffffff&text=Gelato"
    }
  ]

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">Our Full Menu</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Explore our complete selection of delicious dishes</p>
          </div>
          
          <MenuCarousel title="Main Dishes" items={mainDishes} />
          <MenuCarousel title="Sides" items={sides} />
          <MenuCarousel title="Drinks" items={drinks} />
          <MenuCarousel title="Desserts" items={desserts} />
        </div>
      </section>
    </div>
  )
}
