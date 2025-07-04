
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-white tracking-wide">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["All Books", "Add Book",  "Borrow Summary"].map((item) => (
              <a
                key={item}
                href={`#${item.split(" "). join("-").toLowerCase()}`}
                className="text-white hover:text-blue-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm absolute top-16 left-0 w-full">
          <div className="flex flex-col items-center space-y-6 py-6">
            {["All Books", "Add Book",  "Borrow Summary"].map((item) => (
              <a
                key={item}
                href={`#${item.split(" ").join("-").toLowerCase()}`}
                className="text-white text-lg hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
