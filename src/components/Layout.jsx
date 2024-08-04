import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Layout component to structure the webpage
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // Menu items for navigation
  const menus = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Category", href: "/category" },
    { label: "Contact Us", href: "/contact-us" },
  ];
  const mobileLink = (href) => {
    navigate(href);
    setOpen(false)
  }

  return (
    <div>
      {/* Navigation bar */}
      <nav className="shadow-lg bg-slate-50 sticky top-0 left-0">
        <div className="w-10/12 mx-auto flex justify-between items-center">
          {/* Logo */}
          <img src="/images/logo.png" className="w-20" alt="Logo" />
          <button className="md:hidden" onClick={()=> setOpen(!open)}>
            <i className="ri-menu-3-fill text-3xl"></i>
          </button>
          <ul className="md:flex gap-4 items-center hidden">
            {/* Mapping through menu items to create links */}
            {menus.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:bg-blue-600 py-6 block text-center w-[100px] hover:text-white font-semibold"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Additional links for Login and Sign Up */}
            <Link
              className="hover:bg-blue-600 py-6 block text-center w-[100px] hover:text-white font-semibold"
              to="/login"
            >
              Log in
            </Link>
            <Link
              className="hover:bg-rose-500 block text-center bg-blue-600 py-2 px-5 rounded text-white font-semibold"
              to="/signup"
            >
              Sign Up
            </Link>
          </ul>
        </div>
      </nav>

      {/* Main content */}
      <div>{children}</div>

      {/* Footer section */}
      <footer className="bg-slate-100 py-16">
        <div className="mx-auto w-10/12 grid md:grid-cols-4 gap-8 md:gap-0">
          {/* Shop Details */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">Shop Details</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit maxime praesentium provident nobis nulla odio
              sapiente non, aut nihil earum ut! Placeat doloribus praesentium
              assumenda obcaecati facere quo molestias ipsa.
            </p>
            <img src="/images/logo.png" className="w-28" alt="Logo" />
          </div>

          {/* Website Links */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">Website Links</h1>
            <ul className="space-y-3 font-semibold text-gray-600">
              {menus.map((item, index) => (
                <li key={index}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">Follow Us</h1>
            <ul className="space-y-3 font-semibold text-gray-600">
              <li>
                <Link to="/facebook">Facebook</Link>
              </li>
              <li>
                <Link to="/instagram">Instagram</Link>
              </li>
              <li>
                <Link to="/twitter">Twitter</Link>
              </li>
              <li>
                <Link to="/linkedin">Linkedin</Link>
              </li>
              <li>
                <Link to="/youtube">YouTube</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Form */}
          <div>
            <h1 className="text-3xl font-semibold mb-3">Contact Us</h1>
            <form className="w-full max-w-lg mx-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-600  font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-600 font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      
        <aside className="md:hidden bg-slate-900 fixed shadow-lg top-0 left-0 h-full z-50 overflow-hidden"
        style={{
          width: (open ? 250 : 0),
          transition: '0.5s'
        }}
        >
          <div className="flex flex-col p-8 gap-6">
            {
              menus.map((item, index)=> (
                <button key={index} onClick={()=> mobileLink(item.href)} className="text-white">
                  {item.label}
                </button>
              ))
            }
          </div>
        </aside>
     
    </div>
  );
};

export default Layout;
