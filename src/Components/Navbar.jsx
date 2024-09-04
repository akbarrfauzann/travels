import { FiAlignRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
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
                <a href="#" className="text-sm">
                  Our tours
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-3 max-lg:hidden">
              <button className="text-sm  text-black font-medium">
                <Link to="/login">Login</Link>
              </button>
              <button className="text-sm bg-black text-white font-medium border rounded-lg px-4 py-2 hover:bg-white hover:text-black hover:border-black">
                <Link to="/register">Register</Link>
              </button>
            </div>
            <FiAlignRight className="lg:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
}
