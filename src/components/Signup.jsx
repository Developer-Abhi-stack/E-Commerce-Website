import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  return (
    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
      <img src="/images/signup.jpg" />
      <div className="flex flex-col justify-center md:p-16 p-4">
        <h1 className="text-4xl font-bold">New User</h1>
        <p className="text-lg text-gray-600">
          Create your account to start shopping.
        </p>
        <form className="mt-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordType}
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() =>
                setPasswordType(
                  passwordType === "password" ? "text" : "password"
                )
              }
              className="absolute top-8 right-1 hover:text-blue-500 w-8 h-8 rounded-full hover:bg-gray-300"
            >
              {passwordType === "password" ? (
                <i className="ri-eye-fill"></i>
              ) : (
                <i className="ri-eye-off-fill"></i>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#d268cc] hover:bg-white text-white hover:text-[#d268cc] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-2">
            Already have an account ? <Link to="/login" className="text-blue-600 font-semibold">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
