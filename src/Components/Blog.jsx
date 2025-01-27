import ReadMoreText from "../Components/ReadMore.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import swiss1 from "../assets/images/swiss1.jpg";
import swiss2 from "../assets/images/swiss2.jpg";
import swiss3 from "../assets/images/swiss3.jpg";
import jungfraujoch1 from "../assets/images/jungfraujoch1.jpg";

export default function Blog() {
  const longText =
    "Discover the beauty of Switzerland with ease. From the majestic Alps to charming villages, our platform offers a seamless experience to plan your Swiss adventure. Whether you're seeking thrilling outdoor activities, relaxing spa retreats, or cultural explorations, we've got you covered. Enjoy personalized recommendations and expert insights to make the most of your journey through one of Europe's most picturesque destinations.";

  return (
    <section className="container mx-auto px-6 mt-16" data-aos="fade-up">
      <div className="w-full">
        <div className="flex flex-col xl:flex-row justify-around items-center">
          <h1 className="text-3xl xl:text-4xl md:text-2xl sm:text-xl font-bold text-center md:text-left mb-4 xl:mb-0">
            Blog <span className="font-playfair">About</span> Traveling
          </h1>
          <ReadMoreText text={longText} maxLength={150} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <div className="col-span-1 flex flex-col">
            <div className="rounded-xl h-full flex flex-col justify-between border-2 border-slate-200 overflow-hidden">
              <div className="relative h-full">
                <img src={swiss1} alt="Left Image" className="w-full h-60 md:h-full object-cover rounded-xl" loading="lazy" />
                <div className="absolute top-2 right-3 flex items-center px-2 py-1 text-sm font-bold bg-black/20 text-white rounded-full">
                  <IoTimeOutline className="w-4 h-4 mr-2" />
                  <span>6 min read</span>
                </div>
              </div>
              <div className="py-4 px-6 flex flex-col flex-grow justify-between">
                <h2 className="text-xl font-bold">Island with the nature and culture</h2>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Nature</span>
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Weather</span>
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Trips</span>
                  </div>
                  <Link to="/blogDetail" aria-label="Go to Blog Detail" className="ml-4 text-white bg-black rounded-full p-2 hover:bg-white hover:text-black border hover:border-black flex items-center">
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 grid grid-cols-1 grid-rows-2 gap-4">
            <div className="rounded-xl h-full flex flex-col justify-between border-2 border-slate-200 overflow-hidden">
              <div className="relative">
                <img src={swiss2} alt="Top Right Image" className="w-full h-36 md:h-60 object-cover rounded-xl" loading="lazy" />
                <div className="absolute top-2 right-3 flex items-center px-2 py-1 text-sm font-bold bg-black/20 text-white rounded-full">
                  <IoTimeOutline className="w-4 h-4 mr-2" />
                  <span>7 min read</span>
                </div>
              </div>
              <div className="py-4 px-6 flex flex-col flex-grow justify-between">
                <h2 className="text-xl font-bold">Weather in Switzerland</h2>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Nature</span>
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Weather</span>
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Trips</span>
                  </div>
                  <button tabIndex="-1" className="ml-4 text-white bg-black rounded-full p-2 hover:bg-white hover:text-black border hover:border-black" aria-label="button">
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-xl h-full flex flex-col justify-between border-2 border-slate-200 overflow-hidden">
              <div className="relative">
                <img src={swiss3} alt="Bottom Right Image" className="w-full h-36 md:h-60 object-cover rounded-xl" loading="lazy" />
                <div className="absolute top-2 right-3 flex items-center px-2 py-1 text-sm font-bold bg-black/20 text-white rounded-full">
                  <IoTimeOutline className="w-4 h-4 mr-2" />
                  <span>7 min read</span>
                </div>
              </div>
              <div className="py-4 px-6 flex flex-col flex-grow justify-between">
                <h2 className="text-xl font-bold">Hiking in mountains</h2>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Nature</span>
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Weather</span>
                    <span className="bg-gray-300 text-black text-sm rounded-md px-2">Trips</span>
                  </div>
                  <button tabIndex="-1" className="ml-4 text-white bg-black rounded-full p-2 hover:bg-white hover:text-black border hover:border-black" aria-label="button">
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-80 mt-6 p-10 bg-cover bg-center bg-no-repeat rounded-xl flex items-center justify-center"
          style={{
            backgroundImage: `url(${jungfraujoch1})`,
          }}
        >
          <div className="text-center">
            <h1 className="text-2xl xl:text-4xl md:text-3xl sm:text-2xl font-bold text-white text-center md:text-left mb-4 xl:mb-0">
              Explore the <span className="font-playfair">Beauty</span> of Switzerland
            </h1>
            <a href="#tours" className="inline-block bg-white text-sm rounded-xl px-8 py-2 mt-8 text-black hover:text-gray-400">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
