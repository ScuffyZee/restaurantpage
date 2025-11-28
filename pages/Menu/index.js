import React from 'react'
import MenuCarousel from '../../components/MenuCarousel'

export default function index() {
  const mainDishes = [
    {
      category: "RAMEN",
      title: "Tonkotsu Ramen",
      description: "Rich pork bone broth with tender chashu pork, soft-boiled egg, and fresh noodles.",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop"
    },
    {
      category: "RAMEN",
      title: "Spicy Miso Ramen",
      description: "Fiery miso broth with ground pork, bamboo shoots, and chili oil.",
      price: "$17.99",
      image: "/SpicyMisoRamen_Square.jpg"
    },
    {
      category: "RAMEN",
      title: "Shoyu Ramen",
      description: "Classic soy sauce broth with chicken, menma, and scallions.",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?w=800&h=600&fit=crop"
    },
    {
      category: "YAKITORI",
      title: "Chicken Yakitori",
      description: "Grilled chicken skewers glazed with sweet teriyaki sauce.",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&h=600&fit=crop"
    },
    {
      category: "YAKITORI",
      title: "Beef Negima",
      description: "Tender beef and scallion skewers with tare sauce.",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&h=600&fit=crop"
    },
    {
      category: "SUSHI",
      title: "Sashimi Platter",
      description: "Fresh assortment of salmon, tuna, and yellowtail sashimi.",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop"
    },
    {
      category: "ROBATA",
      title: "Grilled Mackerel",
      description: "Charcoal-grilled whole mackerel with daikon and ponzu.",
      price: "$18.99",
      image: "/mackerel.jpg"
    },
    {
      category: "DONBURI",
      title: "Gyudon",
      description: "Simmered beef and onions over steamed rice with pickled ginger.",
      price: "$14.99",
      image: "/gyudon.jpg"
    },
    {
      category: "FRIED",
      title: "Karaage",
      description: "Japanese fried chicken with yuzu mayo dipping sauce.",
      price: "$11.99",
      image: "/karaage.webp"
    }
  ]


  const sides = [
    {
      category: "APPETIZERS",
      title: "Edamame",
      description: "Steamed young soybeans with sea salt and sesame.",
      price: "$6.99",
      image: "/edamame.jpg"
    },
    {
      category: "APPETIZERS",
      title: "Takoyaki",
      description: "Crispy octopus balls topped with bonito flakes and takoyaki sauce.",
      price: "$9.99",
      image: "/takoyaki.jpg"
    },
    {
      category: "APPETIZERS",
      title: "Gyoza",
      description: "Pan-fried pork dumplings with ponzu dipping sauce.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop"
    },
    {
      category: "APPETIZERS",
      title: "Agedashi Tofu",
      description: "Lightly fried tofu in savory dashi broth with ginger.",
      price: "$7.99",
      image: "/tofu.jpg"
    },
    {
      category: "APPETIZERS",
      title: "Tempura Platter",
      description: "Assorted shrimp and vegetable tempura with tentsuyu sauce.",
      price: "$13.99",
      image: "/tempura.webp"
    },
    {
      category: "SALADS",
      title: "Seaweed Salad",
      description: "Marinated wakame with sesame seeds and rice vinegar.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&h=600&fit=crop"
    },
    {
      category: "RICE",
      title: "Onigiri Set",
      description: "Three rice balls with salmon, tuna, and pickled plum.",
      price: "$8.99",
      image: "/onigiri.jpg"
    },
    {
      category: "NOODLES",
      title: "Yakisoba",
      description: "Stir-fried noodles with pork, cabbage, and yakisoba sauce.",
      price: "$12.99",
      image: "/yakisoba.webp"
    },
    {
      category: "SIDES",
      title: "Miso Soup",
      description: "Traditional miso soup with tofu, wakame, and scallions.",
      price: "$3.99",
      image: "/miso.jpg"
    }
  ]

  const drinks = [
    {
      category: "SAKE",
      title: "Premium Junmai Sake",
      description: "Smooth and refined sake with fruity notes, served chilled or warm.",
      price: "$12.99",
      image: "/sake.jpg"
    },
    {
      category: "SAKE",
      title: "Sparkling Sake",
      description: "Effervescent sake with delicate bubbles and fresh flavor.",
      price: "$14.99",
      image: "/sakesparkling.webp"
    },
    {
      category: "BEER",
      title: "Asahi Super Dry",
      description: "Crisp and refreshing Japanese lager beer.",
      price: "$7.99",
      image: "/draftbeer.jpg"
    },
    {
      category: "BEER",
      title: "Sapporo Draft",
      description: "Classic Japanese beer with a smooth, balanced taste.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop"
    },
    {
      category: "SHOCHU",
      title: "Barley Shochu",
      description: "Traditional Japanese distilled spirit with rich flavor.",
      price: "$10.99",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&h=600&fit=crop"
    },
    {
      category: "COCKTAILS",
      title: "Yuzu Highball",
      description: "Refreshing yuzu citrus with whisky and soda.",
      price: "$11.99",
      image: "/artisancocktails.jpg"
    },
    {
      category: "TEA",
      title: "Matcha Latte",
      description: "Premium matcha green tea with steamed milk.",
      price: "$6.99",
      image: "/matcha.jpg"
    },
    {
      category: "TEA",
      title: "Sencha Green Tea",
      description: "Traditional Japanese green tea with delicate flavor.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&h=600&fit=crop"
    },
    {
      category: "SOFT DRINKS",
      title: "Ramune Soda",
      description: "Classic Japanese marble soda in assorted flavors.",
      price: "$4.99",
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=800&h=600&fit=crop"
    }
  ]

  const desserts = [
    {
      category: "DESSERTS",
      title: "Mochi Ice Cream",
      description: "Soft mochi wrapped around matcha, mango, and red bean ice cream.",
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop"
    },
    {
      category: "DESSERTS",
      title: "Matcha Cheesecake",
      description: "Creamy green tea cheesecake with white chocolate drizzle.",
      price: "$10.99",
      image: "/matchacheesecake.webp"
    },
    {
      category: "DESSERTS",
      title: "Dorayaki",
      description: "Fluffy pancake sandwich filled with sweet red bean paste.",
      price: "$6.99",
      image: "/dorayaki.webp"
    },
    {
      category: "DESSERTS",
      title: "Taiyaki",
      description: "Fish-shaped waffle filled with custard or red bean.",
      price: "$7.99",
      image: "/taiyaki.jpg"
    },
    {
      category: "DESSERTS",
      title: "Yuzu Sorbet",
      description: "Refreshing Japanese citrus sorbet with a tangy finish.",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop"
    },
    {
      category: "DESSERTS",
      title: "Japanese Cheesecake",
      description: "Light and fluffy soufflé-style cheesecake.",
      price: "$9.99",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop"
    },
    {
      category: "DESSERTS",
      title: "Anmitsu",
      description: "Traditional dessert with agar jelly, sweet beans, and fruit.",
      price: "$8.99",
      image: "/anmitsu.jpg"
    },
    {
      category: "DESSERTS",
      title: "Matcha Tiramisu",
      description: "Japanese twist on classic tiramisu with matcha cream.",
      price: "$11.99",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop"
    },
    {
      category: "DESSERTS",
      title: "Black Sesame Ice Cream",
      description: "Rich and nutty black sesame ice cream with honey drizzle.",
      price: "$7.99",
      image: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=800&h=600&fit=crop"
    }
  ]

  return (
    <div className="bg-gray-900">
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Our Full Menu</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">Explore our complete selection of delicious dishes</p>
          </div>
          
          <MenuCarousel title="Signature Dishes" items={mainDishes} />
          <MenuCarousel title="Small Plates & Appetizers" items={sides} />
          <MenuCarousel title="Sake, Beer & Drinks" items={drinks} />
          <MenuCarousel title="Japanese Desserts" items={desserts} />
        </div>
      </section>
    </div>
  )
}
