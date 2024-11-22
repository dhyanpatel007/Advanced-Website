import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import { Headphones, Smartphone, Plane, ShoppingBag } from 'lucide-react';

const products = {
  headphones: [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: "$299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
      category: "Over-ear"
    },
    {
      id: 2,
      title: "Sport Earbuds",
      price: "$149",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=60",
      category: "In-ear"
    },
    {
      id: 3,
      title: "Gaming Headset",
      price: "$199",
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=60",
      category: "Gaming"
    },
    {
      id: 4,
      title: "Studio Monitors",
      price: "$399",
      image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&auto=format&fit=crop&q=60",
      category: "Professional"
    }
  ],
  smartphones: [
    {
      id: 1,
      title: "Latest Flagship Phone",
      price: "$999",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=60",
      category: "Flagship"
    },
    {
      id: 2,
      title: "Mid-range Wonder",
      price: "$499",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60",
      category: "Mid-range"
    },
    {
      id: 3,
      title: "Budget King",
      price: "$299",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
      category: "Budget"
    },
    {
      id: 4,
      title: "Foldable Future",
      price: "$1499",
      image: "https://images.unsplash.com/photo-1578345218746-50a229b3d0f9?w=800&auto=format&fit=crop&q=60",
      category: "Foldable"
    }
  ],
  fashion: [
    {
      id: 1,
      title: "Designer Jacket",
      price: "$199",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop&q=60",
      category: "Outerwear"
    },
    {
      id: 2,
      title: "Premium Sneakers",
      price: "$129",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=60",
      category: "Footwear"
    },
    {
      id: 3,
      title: "Luxury Watch",
      price: "$499",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&auto=format&fit=crop&q=60",
      category: "Accessories"
    },
    {
      id: 4,
      title: "Designer Bag",
      price: "$299",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=60",
      category: "Bags"
    }
  ]
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=2000&auto=format&fit=crop&q=60"
            alt="Hero background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            PATELS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Your Premium Shopping Destination
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center space-x-8"
          >
            <div className="text-center">
              <Headphones className="w-12 h-12 mb-2 mx-auto" />
              <span>Audio</span>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 mb-2 mx-auto" />
              <span>Phones</span>
            </div>
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 mb-2 mx-auto" />
              <span>Fashion</span>
            </div>
            <div className="text-center">
              <Plane className="w-12 h-12 mb-2 mx-auto" />
              <span>Travel</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Sections */}
      <CategorySection id="headphones" title="Premium Headphones" products={products.headphones} />
      <CategorySection id="smartphones" title="Latest Smartphones" products={products.smartphones} />
      <CategorySection id="fashion" title="Fashion Outlet" products={products.fashion} />

      {/* Flight Booking Section */}
      <section id="flights" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8">Book Your Next Adventure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="From"
                className="bg-gray-700 text-white rounded-lg px-4 py-2"
              />
              <input
                type="text"
                placeholder="To"
                className="bg-gray-700 text-white rounded-lg px-4 py-2"
              />
              <input
                type="date"
                className="bg-gray-700 text-white rounded-lg px-4 py-2"
              />
              <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors">
                Search Flights
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About PATELS</h3>
              <p className="text-gray-400">Your premium shopping destination for electronics, fashion, and travel.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#headphones">Headphones</a></li>
                <li><a href="#smartphones">Smartphones</a></li>
                <li><a href="#fashion">Fashion</a></li>
                <li><a href="#flights">Flights</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@patels.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Shopping Ave</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white rounded-l-lg px-4 py-2 flex-1"
                />
                <button className="bg-blue-600 text-white rounded-r-lg px-4 py-2 hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 PATELS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;