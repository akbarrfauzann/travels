import { useState, useEffect } from "react";
import { CiLocationOn, CiBadgeDollar } from "react-icons/ci";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdOutlineGroup } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import swiss1 from "../assets/images/swiss1.webp";

function Booking() {
  const [startDate, setStartDate] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBooking = () => {
    confirm(`Booking confirmed for ${guests} guest(s) from ${startDate}`);
  };

  return (
    <section className="container mx-auto px-6" id="booking" data-aos="fade-up">
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="flex-1 flex flex-col">
          <div className="rounded-md flex flex-col justify-between border-2 border-slate-200 overflow-hidden">
            <div className="px-6 py-4">
              <img src={swiss1} alt="Swiss" className="w-full h-auto rounded-lg" loading="eager" />

              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Jungfraujoch</h2>
                <div className="flex flex-col sm:flex-row sm:space-x-6">
                  <span className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <CiLocationOn className="w-4 h-4 text-gray-500" />
                    <span>Switzerland</span>
                  </span>
                  <span className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <CiBadgeDollar className="w-4 h-4 text-gray-500" />
                    <span>$99 / person</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <MdOutlineGroup className="w-4 h-4 text-gray-500" />
                    <span>2 guests</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mt-4">Description</h3>
                <p className="text-gray-500 text-sm">Discover the magic of Swiss cuisine.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">Reviews (2 reviews)</h3>
            <div className="flex flex-row items-center mt-2 space-x-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="flex items-center gap-1">
                  <FaRegStar className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </div>
            <form action="">
              <div className="relative flex h-10 w-full mt-4">
                <button
                  className="!absolute right-1 top-1 z-10 select-none rounded-md bg-black py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40"
                  type="button"
                  aria-label="Submit form"
                  data-ripple-light="true"
                >
                  Submit
                </button>
                <input
                  name="thoughts"
                  id="thoughts"
                  type="text"
                  className="peer h-full w-full rounded-md border border-black px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="thoughts"
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-600 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
                >
                  Share your thoughts
                </label>
              </div>
            </form>

            <div className="flex gap-4 mt-4">
              <RxAvatar className="w-10 h-10 rounded-full flex-shrink-0" />
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="">
                    <p>Jes Leos</p>
                    <time dateTime="2014-08-16 19:00" className="block text-xs text-gray-600">
                      September 1, 2024
                    </time>
                  </div>
                  <div className="flex items-center gap-1 sm:mt-0">
                    <span>5</span>
                    <FaStar className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="mt-3 text-gray-700 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <RxAvatar className="w-10 h-10 rounded-full flex-shrink-0" />
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div className="">
                    <p>Jese Leos</p>
                    <time dateTime="2014-08-16 19:00" className="block text-xs text-gray-600">
                      September 1, 2024
                    </time>
                  </div>
                  <div className="flex items-center gap-1 sm:mt-0">
                    <span>5</span>
                    <FaStar className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="mt-3 text-gray-700 font-bold">Share your thoughts</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <RxAvatar className="w-10 h-10 rounded-full flex-shrink-0" />
              <div className="w-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <p>Jese Leos</p>
                    <time dateTime="2014-08-16 19:00" className="block text-xs text-gray-600">
                      September 1, 2024
                    </time>
                  </div>
                  <div className="flex items-center gap-1 sm:mt-0">
                    <span>5</span>
                    <FaStar className="w-4 h-4 text-yellow-400" />
                  </div>
                </div>
                <p className="mt-3 text-gray-700 font-bold">Beauty and the Beast is a fantastic movie.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[0.4] rounded-md h-full flex flex-col justify-between border-2 border-slate-200 overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Complete your booking</h2>

            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input id="name" type="text" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-black text-sm" placeholder="Insert your name" autoComplete="off" />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input id="phone" type="tel" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-black text-sm" placeholder="+62 812-3456-7890" autoComplete="off" />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input id="date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-black text-sm" autoComplete="off" />{" "}
            </div>

            <div className="mb-4">
              <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">
                Guests
              </label>
              <input
                id="guests"
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                min="1"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-black"
                autoComplete="off"
              />{" "}
            </div>

            <div className="mb-4 text-sm">
              <div className="flex justify-between border-b pb-2 mb-2">
                <div>
                  <p className="text-gray-700">Price per Person</p>
                  <p className="text-gray-600 text-sm">1 person</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$99</p>
                </div>
              </div>
              <div className="flex justify-between border-b pb-2 mb-2">
                <div>
                  <p className="text-gray-700">Service Charge</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$5</p>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>$104</p>
              </div>
            </div>

            <button onClick={handleBooking} className="w-full bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
