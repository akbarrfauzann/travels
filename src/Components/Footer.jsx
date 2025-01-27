import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container mx-auto bg-gray-50 mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:p-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-semibold whitespace-nowrap mb-2 md:text-left">Travels</h1>
            <p className=" md:text-left text-gray-500">Discover the Wonders of Switzerland with Us.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">About us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Our guide
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">FAQ</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline ">
                    Personal trip
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Group trip
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Tour payments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Further Information</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Terms of use
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Health &amp; Safety
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Travels
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-500">
              <FaFacebookF />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-400 ms-5">
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>

            <a href="#" className="text-gray-500 hover:text-red-600 ms-5">
              <FaYoutube />
              <span className="sr-only">Youtube channel</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
