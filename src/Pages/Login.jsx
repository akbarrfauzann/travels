import { Link } from "react-router-dom";
import loginImage from "../assets/images/jungfraujoch1.jpg";
export default function Login() {
  return (
    <section className="container mx-auto text-center" data-aos="fade-up">
      <div className="w-full px-6 mt-2">
        <div
          className="relative p-10 bg-cover bg-center bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${loginImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-xl" style={{ filter: "brightness(0.5)" }}></div>

          <div className="relative w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md my-10">
            <div className="flex justify-center">
              <h1 className="text-2xl font-semibold text-black">Sign in to your account</h1>
            </div>

            <form>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm text-black text-left">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-gray-200 dark:focus:border-gray-200 focus:ring-lime-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm text-black text-left">
                    Password
                  </label>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 bg-white border rounded-lg dark:border-gray-600 focus:border-gray-200 dark:focus:border-gray-200 focus:ring-lime-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Log In
                </button>
              </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="font-medium text-black hover:underline">
                Create
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
