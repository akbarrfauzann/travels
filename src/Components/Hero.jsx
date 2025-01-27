import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import jungfrau1 from "../assets/images/jungfraujoch1.jpg";
import swiss3 from "../assets/images/swiss3.jpg";
import swiss1 from "../assets/images/swiss1.jpg";

export default function Hero() {
  const images = [jungfrau1, swiss3, jungfrau1, swiss1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="container mx-auto text-center" data-aos="fade-up">
      <div className="w-full px-6 mt-2 relative">
        <div
          className="text-white p-10 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold pt-32 tracking-widest">
            <h1 className="leading-tight">
              Let&apos;s make your
              <br />
              <span className="font-playfair">dream come true</span>
            </h1>
          </div>
          <p className="text-md mt-4 font-medium">A place where natural beauty and adventure meet</p>
          <a href="#tours" className="inline-block bg-white text-sm rounded-xl px-8 py-2 mt-8 text-black hover:text-gray-400">
            Book Now
          </a>
          <div className="flex space-x-2 mt-6">
            <button onClick={goToPrevious} className="p-3 bg-transparent border text-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out" aria-label="Previous">
              <FaLongArrowAltLeft className="w-6 h-6 sm:w-3 sm:h-3" />
            </button>
            <button onClick={goToNext} className="p-3 bg-transparent border text-white rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out" aria-label="Next">
              <FaLongArrowAltRight className="w-6 h-6 sm:w-3 sm:h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
