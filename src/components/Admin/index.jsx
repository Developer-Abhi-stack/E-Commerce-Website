import { useState } from "react";

const Admin = () => {
  // State to manage the width of the sidebar
  const [size, setSize] = useState(280);
  // State to manage the visibility of the account menu
  const [accountMenu, setAccountMenu] = useState(false);

  return (
    <div>
      {/* Sidebar */}
      <aside
        className="fixed bg-indigo-500 h-full top-0 left-0"
        style={{
          width: size, // Dynamic width based on state
          transition: "0.3s", // Smooth transition for resizing
        }}
      ></aside>

      {/* Main content area */}
      <section
        className="bg-gray-100 h-screen"
        style={{
          marginLeft: size, // Adjust margin to accommodate sidebar
          transition: "0.3s", // Smooth transition for resizing
        }}
      >
        {/* Navigation bar */}
        <nav className="bg-white p-6 shadow flex items-center justify-between">
          <div className="flex gap-4 items-center">
            {/* Sidebar toggle button */}
            <button
              onClick={() => setSize(size === 280 ? 0 : 280)}
              className="bg-gray-50 hover:bg-indigo-600 hover:text-white h-8 w-8"
            >
              <i className="ri-menu-2-line text-xl font-semibold"></i>
            </button>
            <h1 className="text-md font-semibold">ShopName</h1>
          </div>

          <div>
            {/* Account menu button */}
            <button className="relative">
              <img className="w-10 h-10 rounded-full" src="./images/avt.png" onClick={() => setAccountMenu(!accountMenu)} />
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
      </section>
    </div>
  );
};

export default Admin;
