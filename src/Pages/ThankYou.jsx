import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="text-center p-8 bg-white">
        <FaCheckCircle className="w-16 h-16 mx-auto mb-4 text-lime-700" />
        <h1 className="text-3xl font-playfair font-bold mb-4">Thank You</h1>
        <p className="text-xl mb-6">Your booking has been confirmed.</p>
        <Link to="/" className="inline-block bg-black hover:bg-white text-white hover:text-black border border-black font-bold py-2 px-4 rounded-lg transition-colors duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
