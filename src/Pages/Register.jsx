import { Link } from "react-router-dom";
import registerImage from "../assets/images/jungfraujoch1.jpg";

export default function Register() {
  return (
    <section className="container mx-auto text-center" data-aos="fade-up">
      <div className="w-full px-6 mt-2">
        <div
          className="relative p-10 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${registerImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-xl" style={{ filter: "brightness(0.5)" }}></div>

          <div className="relative w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md my-10">
            <div className="flex justify-center">
              <h1 className="text-2xl font-semibold text-black">Create your account</h1>
            </div>

            <form className="">
              <div className="mt-4">
                <label htmlFor="username" className="block text-sm text-black text-left">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 bg-white border rounded-lg focus:border-gray-200 focus:ring-lime-700 border-black focus:outline-none focus:ring focus:ring-opacity-40"
                  autoComplete="username"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm text-black text-left">
                  Email
                </label>
              </div>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 bg-white border rounded-lg focus:border-gray-200 focus:ring-lime-700 border-black focus:outline-none focus:ring focus:ring-opacity-40"
                autoComplete="email"
              />

              <div className="mt-4">
                <label htmlFor="password" className="block text-sm text-black text-left">
                  Password
                </label>
              </div>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 bg-white border rounded-lg focus:border-gray-200 focus:ring-lime-700 border-black focus:outline-none focus:ring focus:ring-opacity-40"
                autoComplete="new-password"
              />

              <div className="flex items-center mt-4">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="text-gray-800 ml-2 block text-sm">
                  I accept the{" "}
                  <a href="#" className="text-blue-600 font-semibold hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Create Account
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-black hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
