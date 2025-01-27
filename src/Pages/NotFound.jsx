import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="text-6xl font-bold mb-4">404</div>
      <div className="text-3xl font-semibold mb-2">Page Not Found</div>
      <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-white bg-black rounded-lg px-4 py-2 hover:bg-gray-800" aria-label="Go to Home">
        Go to Home
      </Link>
    </div>
  );
}
