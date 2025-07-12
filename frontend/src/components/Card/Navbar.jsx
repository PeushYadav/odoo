import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Auth from "../Auth/Auth"; // Adjust path if it's in another folder

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
          isScrolled ? "shadow-md" : ""
        } bg-white/30 text-black dark:bg-black/40 dark:text-white`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-base font-semibold transition hover:text-blue-500 hover:scale-110"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1 rounded-md w-64 bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Right buttons */}
          <div className="flex items-center space-x-4">
            {/* 🛒 Add to Cart button */}
            <button className="hidden md:flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-1.5 px-3 rounded-md text-sm transition">
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>

            {/* 🔐 Desktop Login button */}
            <button
              onClick={() => setShowAuth(true)}
              className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md text-sm transition"
            >
              Login
            </button>

            {/* ☰ Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden text-inherit focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col space-y-4 px-6 py-4 bg-white/30 dark:bg-black/40 md:hidden transition-all duration-300">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium transition hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}

            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 text-sm"
            />

            <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md text-sm">
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => setShowAuth(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-sm"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};
