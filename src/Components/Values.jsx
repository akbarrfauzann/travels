import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GoTag } from "react-icons/go";

export default function Values() {
  return (
    <section className="container text-center mx-auto py-14" data-aos="fade-up">
      <div className="w-full">
        <h1 className="text-2xl xl:text-4xl md:text-2xl sm:text-lg font-bold">
          Exclusive <span className="font-playfair">Deals</span> Just for You
        </h1>
        <p className="pt-2 text-gray-500 text-center font-normal px-6">Uncover the best offers designed with your needs in mind.</p>
        <div className="grid gap-6 px-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-items-center mt-10 items-stretch">
          <div className="max-w-sm rounded-lg flex flex-col items-center justify-center space-y-4">
            <span className="flex items-center justify-center mb-4">
              <IoWalletOutline className="w-10 h-10" />
            </span>
            <h2 className="mb-4 text-sm font-bold">Seamless Booking</h2>
            <p className="mb-4 font-normal text-gray-500 text-center">Enjoy a hassle-free booking experience with our simple and intuitive platform.</p>
          </div>

          <div className="max-w-sm rounded-lg flex flex-col items-center justify-center space-y-4">
            <span className="flex items-center justify-center mb-4">
              <HiOutlineUserGroup className=" w-10 h-10" />
            </span>
            <h2 className="mb-4 text-sm font-bold">Best Tour Guide</h2>
            <p className="mb-4 font-normal text-gray-500 text-center">Receive expert guidance and support to make your tours unforgettable.</p>
          </div>

          <div className="max-w-sm rounded-lg flex flex-col items-center justify-center space-y-4">
            <span className="flex items-center justify-center mb-4">
              <GoTag className=" w-10 h-10" />
            </span>
            <h2 className="mb-4 text-sm font-bold">Exclusive Discounts</h2>
            <p className="mb-4 font-normal text-gray-500 text-center">Take advantage of special discounts available only to our valued customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
