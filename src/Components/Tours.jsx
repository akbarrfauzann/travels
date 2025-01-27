import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/images/jungfraujoch1.jpg";
import img2 from "../assets/images/jungfraujoch2.jpg";
import img3 from "../assets/images/lauterbrunnen.jpg";
import lugano from "../assets/images/lugano.jpg";

import "react-multi-carousel/lib/styles.css";

export default function Tours() {
  const [visibleTours, setVisibleTours] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const tours = [
    {
      id: 1,
      name: "Jungfraujoch",
      image: img1,
      price: "$100 / person",
      rating: 4.9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Wengen",
      image: img2,
      price: "$200 / person",
      rating: 4.9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 3,
      name: "Lauterbrunnen",
      image: img3,
      price: "$100 / person",
      rating: 4.9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 4,
      name: "Lugano",
      image: lugano,
      price: "$300 / person",
      rating: 4.5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 5,
      name: "Lugano",
      image: lugano,
      price: "$300 / person",
      rating: 4.5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 6,
      name: "Lugano",
      image: lugano,
      price: "$300 / person",
      rating: 4.5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 7,
      name: "Lugano",
      image: lugano,
      price: "$300 / person",
      rating: 4.5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 8,
      name: "Lugano",
      image: lugano,
      price: "$300 / person",
      rating: 4.5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  function handleClick() {
    if (isExpanded) {
      setVisibleTours(4);
    } else {
      setVisibleTours(tours.length);
    }
    setIsExpanded(!isExpanded);
  }

  return (
    <section className="container mx-auto relative" id="tours">
      <div className="w-full px-6 mb-10" data-aos="fade-up">
        <h1 className="font-bold text-3xl lg:text-4xl md:text-2xl sm:text-xl mb-6">
          Select Your <span className="font-playfair">Adventure</span>
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-2">
          {tours.slice(0, visibleTours).map((tour) => (
            <div className="rounded-3xl h-full flex flex-col justify-between border-2 border-slate-200 overflow-hidden" key={tour.id}>
              <div className="relative">
                <img src={tour.image} alt={tour.name} className="w-full h-72 object-cover rounded-2xl" />
                <div className="absolute top-2 left-3 flex items-center px-2 py-1 text-sm font-bold bg-gray-100 text-black rounded-full">
                  <span>{tour.rating}</span>
                  <FaStar className="ml-1 w-4 h-4 text-yellow-400" />
                </div>
              </div>
              <div className="py-4 px-6 flex flex-col flex-grow justify-between">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">{tour.name}</h2>
                </div>
                <div className="flex items-center justify-between">
                  <span>{tour.price}</span>
                  <Link to="/booking" className="ml-4 text-white bg-black rounded-full p-2 hover:bg-white hover:text-black border hover:border-black" role="button" aria-label="View tour details">
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {tours.length > 4 && (
          <div className="text-center mt-4">
            <button className="text-sm bg-white text-black border-black hover:bg-black hover:text-white border-2 rounded-xl px-4 py-2 mt-2" onClick={handleClick} type="button">
              {isExpanded ? "See Less" : "See All"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
