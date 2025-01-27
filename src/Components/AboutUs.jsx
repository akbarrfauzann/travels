import { FaMountain, FaCity, FaHome, FaTrain, FaSpa, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import banda2 from "../assets/images/banda2.jpg";
import swiss2 from "../assets/images/swiss2.jpg";

export default function AboutUs() {
  return (
    <section data-aos="fade-up">
      <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${banda2})` }}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center py-24 px-4">
            <h1 className="text-5xl font-extrabold text-white mb-4">About Us</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Welcome to our Switzerland Travel Agency, where your adventure in the heart of Europe begins! We specialize in curating unforgettable experiences in Switzerland, a country known for its breathtaking landscapes, charming
              cities, and rich culture.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision and Mission</h2>
            <div className="w-24 h-1 bg-lime-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the leading travel agency that transforms Swiss adventures into lifelong memories, setting the standard for exceptional and sustainable tourism in Switzerland.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                We are committed to providing personalized, immersive, and responsible travel experiences that showcase the best of Switzerland, while fostering cultural understanding and preserving the natural beauty of the Swiss
                landscapes for future generations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Why Choose Us?</h2>
            <ul className="space-y-4">
              {["Expert guides with local knowledge", "Tailor-made travel packages", "Safe and comfortable accommodations", "Exclusive access to hidden gems", "24/7 customer support"].map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg className="h-6 w-6 mr-2 text-lime-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img src={swiss2} alt="Swiss landscape" className="rounded-xl shadow-lg" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Discover Swiss Wonders</h2>
          <p className="text-gray-600 mb-6">Switzerland offers a wide array of tourist attractions, from the iconic Matterhorn to the serene beauty of Lake Geneva. Our curated tours cover:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "The stunning Swiss Alps, perfect for skiing and hiking enthusiasts", icon: FaMountain },
              { text: "Historic cities like Zurich, Lucerne, and Bern", icon: FaCity },
              { text: "Picturesque villages such as Zermatt and Interlaken", icon: FaHome },
              { text: "Unforgettable scenic train rides through the Swiss countryside", icon: FaTrain },
              { text: "Luxury wellness retreats in the Swiss mountains", icon: FaSpa },
              { text: "The stunning Swiss Alps, perfect for skiing and hiking enthusiasts", icon: FaMountain },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
                <item.icon className="h-12 w-12 mb-4 animate-fade-in" />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let&apos;s get social</h2>
            <div className="w-24 h-1 bg-lime-700 mx-auto"></div>
            <div className="flex justify-center mt-12 mx-auto gap-8 cursor-pointer">
              <FaFacebookF className="w-6 h-6 text-black hover:bg-white hover:text-blue-500" />
              <FaInstagram className="w-6 h-6 text-black hover:bg-white hover:text-red-400" />
              <FaYoutube className="w-6 h-6 text-black hover:bg-white hover:text-red-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
