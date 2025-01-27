import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container mx-auto">
      <nav className="bg-white w-full h-12 sticky top-0 flex items-center justify-between z-50">
        <div className="w-full">
          <div className="flex h-full mx-auto px-6 justify-between items-center">
            <a href="/" className="text-1xl font-bold">
              Travels
            </a>
            <ul className="flex items-center gap-x-4 lg:gap-8 max-lg:hidden">
              <li>
                <Link to="/" className="text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm">
                  About us
                </Link>
              </li>
              <li>
                <HashLink to="/#tours" className="text-sm">
                  Booking
                </HashLink>
              </li>
              <li>
                <Link to="/contact" className="text-sm">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-3 max-lg:hidden">
              <Link to="/login" className="text-sm text-black font-medium">
                Login
              </Link>
              <Link to="/register" className="text-sm bg-black text-white font-medium border rounded-lg px-4 py-2 hover:bg-white hover:text-black hover:border-black">
                Register
              </Link>
            </div>
            <button className="lg:hidden" onClick={toggleMenu} aria-label="Open Menu">
              <FiAlignRight />
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className={`${menuOpen ? "max-h-screen" : "max-h-0"} overflow-hidden flex-col items-start absolute top-full left-0 w-full bg-white rounded-md shadow-xl py-4 lg:hidden transition-all duration-300 ease-in-out`}>
            <li className="w-full px-6 py-2 hover:bg-gray-100">
              <a href="#" className="text-sm block">
                Home
              </a>
            </li>
            <li className="w-full px-6 py-2 hover:bg-gray-100">
              <a href="#" className="text-sm block">
                About us
              </a>
            </li>
            <li className="w-full px-6 py-2 hover:bg-gray-100">
              <a href="#tours" className="text-sm block">
                Booking
              </a>
            </li>
            <li className="w-full px-6 py-2 hover:bg-gray-100">
              <a href="#" className="text-sm block">
                FAQ
              </a>
            </li>
            <li className="w-full px-6 py-2">
              <div className="flex space-x-4">
                <button className="text-sm text-black font-medium">
                  <Link to="/login">Login</Link>
                </button>
                <button className="text-sm bg-black text-white font-medium border rounded-lg px-4 py-2 hover:bg-white hover:text-black hover:border-black">
                  <Link to="/register">Register</Link>
                </button>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
