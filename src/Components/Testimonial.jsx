import { FaStar } from "react-icons/fa6";
import jungfraujoch1 from "../assets/images/jungfraujoch1.jpg";
import jungfraujoch2 from "../assets/images/jungfraujoch2.jpg";

const items = [
  {
    id: 1,
    name: "Neil Sims",
    email: "email@gmail.com",
    image: jungfraujoch1,
    rate: 4.9,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Neil Sims",
    email: "email@gmail.com",
    image: jungfraujoch2,
    rate: 4.9,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Neil Sims",
    email: "email@gmail.com",
    image: jungfraujoch1,
    rate: 4.9,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Neil Sims",
    email: "email@gmail.com",
    image: jungfraujoch2,
    rate: 4.9,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Neil Sims",
    email: "email@gmail.com",
    image: jungfraujoch1,
    rate: 4.5,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    name: "Neil Sims",
    email: "email@gmail.com",
    image: jungfraujoch2,
    rate: 4.2,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Testimonial() {
  return (
    <section className="container mx-auto" data-aos="fade-up">
      <div className="w-full px-6 mt-6">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {items.map((item) => (
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-8" key={item.id}>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 ">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full object-cover" src={item.image} alt="Neil image" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                        <p className="text-sm text-gray-500 truncate">{item.email}</p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold px-2 py-1 bg-slate-100 rounded-full ">
                        <span className="text-black">{item.rate}</span>
                        <FaStar className="ml-1 w-4 h-4 text-yellow-300 " />
                      </div>
                    </div>
                  </li>
                  <li className="mt-3 py-3 sm:py-4">
                    <span className="text-sm text-gray-500">{item.text}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
