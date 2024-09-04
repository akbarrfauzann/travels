import { useRef } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Tours() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselRef = useRef();

  const handlePrevious = () => {
    if (carouselRef.current) carouselRef.current.previous(0);
  };

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next(0);
  };

  const tours = [
    {
      id: 1,
      name: "Jungfraujoch",
      image: "/src/assets/images/jungfraujoch1.jpg",
      price: "$100 / person",
      rating: 4.9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Wengen",
      image: "/src/assets/images/jungfraujoch2.jpg",
      price: "$200 / person",
      rating: 4.9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 3,
      name: "Lauterbrunnen",
      image: "/src/assets/images/lauterbrunnen.jpg",
      price: "$100 / person",
      rating: 4.9,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
      id: 4,
      name: "Lugano",
      image: "/src/assets/images/lugano.jpg",
      price: "$300 / person",
      rating: 4.5,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section className="container mx-auto relative">
      <div className="w-full px-6 mb-10">
        <h1 className="font-bold text-3xl lg:text-4xl md:text-2xl sm:text-xl mb-6">
          Select Your <span className="font-playfair">Adventure</span>
        </h1>
        <span className="flex gap-x-2 items-center justify-end">
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-md" aria-label="Previous" onClick={handlePrevious}>
            <IoIosArrowDropleft />
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-md" aria-label="Next" onClick={handleNext}>
            <IoIosArrowDropright />
          </button>
        </span>
        <Carousel partialVisbile={false} swipeable={true} draggable={false} ssr={true} infinite arrows={false} keyBoardControl={true} renderButtonGroupOutside={true} responsive={responsive} ref={carouselRef}>
          {tours.map((tour) => (
            <div className="rounded-3xl h-full flex flex-col justify-between border-2 border-slate-200 overflow-hidden mx-1" key={tour.id}>
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
                  <Link to="/tourDetail" className="ml-4 text-white bg-black rounded-full p-2 hover:bg-white hover:text-black border hover:border-black" role="button" aria-label="View tour details">
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
