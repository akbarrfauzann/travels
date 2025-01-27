import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import swiss1 from "../assets/images/swiss1.webp";

export default function ContactUs() {
  return (
    <section className="w-full" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-center text-black py-6 sm:py-20 px-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4">Contact Us</h1>
            <p className="sm:text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolore?</p>
            <div className="w-16 sm:w-24 h-1 bg-lime-700 mx-auto"></div>
          </div>
        </div>

        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form className="w-full bg-white">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-black" placeholder="Enter your Email" autoComplete="off" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-black" placeholder="Enter your Phone" autoComplete="off" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-black" placeholder="Enter your Name" autoComplete="off" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" className="resize-none w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring focus:ring-black" placeholder="Message" rows="4" autoComplete="off" />
                </div>

                <div>
                  <button type="submit" className="w-full sm:w-auto bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-700 focus:ring-opacity-50">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:col-span-1 flex flex-col justify-center relative bg-cover bg-center p-6 rounded-3xl shadow-md overflow-hidden h-64 sm:h-auto" style={{ backgroundImage: `url(${swiss1})` }}>
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Newsletter</h2>
                <p className="text-white text-sm sm:text-base">Stay updated with our latest news and offers. Subscribe to our newsletter and never miss an update!</p>
                <form action="">
                  <div className="items-center mt-4">
                    <input type="email" id="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black" autoComplete="off" />
                    <button type="submit" className="w-full mt-4 bg-lime-700 text-white py-2 px-4 rounded-lg hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow text-black">
              <div className="flex flex-row items-center mb-3 sm:mb-4">
                <FaPhoneAlt className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-3 sm:mr-4 text-lime-700" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">(+62) 123 456 789</h3>
              </div>
              <p className="font-normal text-gray-500 text-sm sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow text-black">
              <div className="flex flex-row items-center mb-3 sm:mb-4">
                <IoMdMail className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-3 sm:mr-4 text-lime-700" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">mail@gmail.com</h3>
              </div>
              <p className="font-normal text-gray-500 text-sm sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl shadow text-black">
              <div className="flex flex-row items-center mb-3 sm:mb-4">
                <FaLocationDot className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mr-3 sm:mr-4 text-lime-700" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">Bogor, Indonesia</h3>
              </div>
              <p className="font-normal text-gray-500 text-sm sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
