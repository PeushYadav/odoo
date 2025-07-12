import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Search, Leaf, User } from "lucide-react";
import Auth from "../Auth/Auth"; // Adjust path if it's in another folder

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Categories", href: "#categories" },
  { name: "Products", href: "#products" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About", href: "#about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "shadow-lg bg-white/90" : "bg-white/70"
        } text-gray-800`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">ReWear</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-base font-medium transition-all duration-300 hover:text-green-600 hover:scale-105 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full pl-10 pr-4 py-2 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          {/* Right buttons */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart button */}
            <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-2xl text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <ShoppingCart size={18} />
              <span>Cart</span>
            </button>

            {/* Login button */}
            <button
              onClick={() => setShowAuth(true)}
              className="hidden md:inline-flex items-center space-x-2 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-4 rounded-2xl text-sm transition-all duration-300 transform hover:scale-105"
            >
              <User size={18} />
              <span>Login</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col space-y-4 px-6 py-4 bg-white/95 backdrop-blur-md md:hidden transition-all duration-300 border-t border-gray-200">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium transition-all duration-300 hover:text-green-600 hover:pl-2"
              >
                {item.name}
              </a>
            ))}

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-2xl text-sm transition-all duration-300">
              <ShoppingCart size={20} />
              <span>Shopping Cart</span>
            </button>

            <button
              onClick={() => setShowAuth(true)}
              className="flex items-center justify-center space-x-2 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-4 rounded-2xl text-sm transition-all duration-300"
            >
              <User size={20} />
              <span>Login</span>
            </button>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};
