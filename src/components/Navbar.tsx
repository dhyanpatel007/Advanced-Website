import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">PATELS</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#headphones" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Headphones</a>
              <a href="#smartphones" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Smartphones</a>
              <a href="#fashion" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Fashion</a>
              <a href="#flights" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Flights</a>
              <button className="text-white p-2 rounded-full hover:bg-gray-700">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#headphones" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Headphones</a>
            <a href="#smartphones" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Smartphones</a>
            <a href="#fashion" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Fashion</a>
            <a href="#flights" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Flights</a>
          </div>
        </div>
      )}
    </nav>
  );
}