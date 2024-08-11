import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebaseAppConfig from "../util/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseAppConfig);

const Signup = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [formValue, setFormValue] = useState({
    name: " ",
    email: " ",
    password: " ",
  });
  const signup = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      await createUserWithEmailAndPassword(
        auth,
        formValue.email,
        formValue.password
      );
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  const handleOnChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setFormValue({
      ...formValue,
      [name]: value,
    });
    setError(null);
  };
  return (
    <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
      <img src="/images/signup.jpg" />
      <div className="flex flex-col justify-center md:p-16 p-4">
        <h1 className="text-4xl font-bold">New User</h1>
        <p className="text-lg text-gray-600">
          Create your account to start shopping.
        </p>
        <form className="mt-4 space-y-6" onSubmit={signup}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              onChange={handleOnChange}
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
              onChange={handleOnChange}
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
              onChange={handleOnChange}
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
          {loader ? (
            <h1 className="font-semibold text-lg text-gray-600">Loading...</h1>
          ) : (
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#d268cc] hover:bg-white text-white hover:text-[#d268cc] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
          )}
        </form>
        <div className="mt-2">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </div>

        {error && (
          <div className="mt-2 bg-rose-600 flex justify-between items-center text-white p-3 rounded font-semibold animate__animated animate__pulse">
            <p>{error}</p>
            <button onClick={() => setError(null)}>
              <i className="ri-close-fill"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
