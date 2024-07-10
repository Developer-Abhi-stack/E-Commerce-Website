import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Layout component to structure the admin dashboard page
const Layout = ({ children }) => {
  // State to manage the width of the sidebar
  const [size, setSize] = useState(280);
  const [mobileSize, setMobileSize] = useState(0);
  // State to manage the visibility of the account menu
  const [accountMenu, setAccountMenu] = useState(false);

  // Array of menu items for the sidebar
  const menus = [
    {
      label: "Dashboard",
      icon: <i className="ri-dashboard-line mr-2"></i>,
      path: "/admin/dashboard",
    },
    {
      label: "Products",
      icon: <i className="ri-shopping-cart-line mr-2"></i>,
      path: "/admin/products",
    },
    {
      label: "Orders",
      icon: <i className="ri-shape-line mr-2"></i>,
      path: "/admin/orders",
    },
    {
      label: "Payments",
      icon: <i className="ri-money-rupee-circle-line mr-2"></i>,
      path: "/admin/payments",
    },
    {
      label: "Settings",
      icon: <i className="ri-settings-4-line mr-2"></i>,
      path: "/admin/settings",
    },
    {
      label: "Logout",
      icon: <i className="ri-logout-circle-r-line mr-2"></i>,
      path: "/admin/logout",
    },
  ];

  // Hook to get the current location object
  const location = useLocation();
  console.log(location);

  return (
    <>
      {/* For Desktop View */}
      <div className="md:block hidden">
        {/* Sidebar */}
        <aside
          className="fixed bg-indigo-500 h-full top-0 left-0 overflow-hidden"
          style={{
            width: size, // Dynamic width based on state
            transition: "0.3s", // Smooth transition for resizing
          }}
        >
          <div className="flex flex-col">
            {
              // Loop through menu items and create a Link for each
              menus.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.path}
                  className="text-gray-50 text-[17.5px] p-4 hover:bg-rose-600 hover:text-white"
                  style={{
                    background:
                      location.pathname === menu.path
                        ? "#e11d48"
                        : "transparent", // Highlight the active menu
                  }}
                >
                  {menu.icon}
                  {menu.label}
                </Link>
              ))
            }
          </div>
        </aside>

        {/* Main content area */}
        <section
          className="bg-gray-100 h-screen"
          style={{
            marginLeft: size, // Adjust margin to accommodate sidebar
            transition: "0.3s", // Smooth transition for resizing
          }}
        >
          {/* Navigation bar */}
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              {/* Sidebar toggle button */}
              <button
                onClick={() => setSize(size === 280 ? 0 : 280)} // Toggle sidebar width between 280px and 0px
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white h-8 w-8"
              >
                <i className="ri-menu-2-line text-xl font-semibold"></i>
              </button>
              <h1 className="text-md font-semibold">ShopName</h1>
            </div>

            <div>
              {/* Account menu button */}
              <button className="relative">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/avt.png"
                  onClick={() => setAccountMenu(!accountMenu)}
                />
                {/* Account menu */}
                {accountMenu && (
                  <div className="absolute top-18 right-0 p-5 bg-white shadow-2xl rounded-md">
                    <div>
                      <h1 className="text-lg font-semibold">Er. Abhishek</h1>
                      <p className="text-gray-500">abhikum8131@gmail.com</p>
                      <div className="h-px bg-gray-300 my-4"></div>
                      <button>
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          {/* Content passed as children */}
          <div className="p-6">{children}</div>
        </section>
      </div>

      {/* For Mobile View */}
      <div className="md:hidden block">
        {/* Sidebar */}
        <aside
          className="fixed bg-indigo-500 z-50 h-full top-0 left-0 overflow-hidden"
          style={{
            width: mobileSize, // Dynamic width based on state
            transition: "0.3s", // Smooth transition for resizing
          }}
        >
          <div className="flex flex-col">
            <button className="text-left mx-4 mt-4"
            onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)}>
              <i className="ri-close-circle-line mr-2 text-white text-xl"></i>
            </button>
            {
              // Loop through menu items and create a Link for each
              menus.map((menu, index) => (
                <Link
                  key={index}
                  to={menu.path}
                  className="text-gray-50 p-4 hover:bg-rose-600 hover:text-white"
                  style={{
                    background:
                      location.pathname === menu.path
                        ? "#e11d48"
                        : "transparent", // Highlight the active menu
                  }}
                >
                  {menu.icon}
                  {menu.label}
                </Link>
              ))
            }
          </div>
        </aside>

        {/* Main content area */}
        <section
          className="bg-gray-100 h-screen"
        >
          {/* Navigation bar */}
          <nav className="bg-white p-6 shadow flex items-center justify-between sticky top-0 left-0">
            <div className="flex gap-4 items-center">
              {/* Sidebar toggle button */}
              <button
                onClick={() => setMobileSize(mobileSize === 0 ? 280 : 0)} // Toggle sidebar width between 280px and 0px
                className="bg-gray-50 hover:bg-indigo-600 hover:text-white h-8 w-8"
              >
                <i className="ri-menu-2-line text-xl font-semibold"></i>
              </button>
              <h1 className="text-md font-semibold">ShopName</h1>
            </div>

            <div>
              {/* Account menu button */}
              <button className="relative">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/avt.png"
                  onClick={() => setAccountMenu(!accountMenu)}
                />
                {/* Account menu */}
                {accountMenu && (
                  <div className="absolute top-18 right-0 p-5 bg-white shadow-2xl rounded-md">
                    <div>
                      <h1 className="text-lg font-semibold">Er. Abhishek</h1>
                      <p className="text-gray-500">abhikum8131@gmail.com</p>
                      <div className="h-px bg-gray-300 my-4"></div>
                      <button>
                        <i className="ri-logout-circle-r-line mr-2"></i>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </nav>
          {/* Content passed as children */}
          <div className="p-6">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Layout;
