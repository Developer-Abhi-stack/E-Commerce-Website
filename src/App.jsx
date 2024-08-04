// Import CSS for Remix Icon library to use icons
import 'remixicon/fonts/remixicon.css';
// Import components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'animate.css';
// Import the NotFound component for handling 404 errors
import NotFound from './components/NotFound';
// Import the Product component from the Admin directory for managing products
import Products from './components/Admin/Products';
// Import the Order component from the Admin directory for managing orders
import Order from './components/Admin/Order';
// Import the Dashboard component from the Admin directory for the admin dashboard
import Dashboard from './components/Admin/Dashboard';
// Import the Customers component from the Admin directory for managing customers
import Customers from './components/Admin/Customers';
// Import the Payments component from the Admin directory for managing payments
import Payments from './components/Admin/Payments';
// Import the Settings component from the Admin directory for managing settings
import Settings from './components/Admin/Settings';
// Import the Admin component for admin authentication
import Admin from './components/Admin';
// Import the Home component for the home page
import Home from './components/Home';
// Import the Products component for the products page
import Product from './components/Products';
// Import the Category component for the category page
import Category from './components/Category';
import Login from './components/Login';
import Signup from './components/Signup';

// Define the main App component
const App = () => {
  return (
    // Use BrowserRouter to enable client-side routing
    <BrowserRouter>
      {/* Define the Routes for the application */}
      <Routes>
        {/* Define the route for the home page */}
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/category' element={<Category />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* Define a nested route for the admin section */}
        <Route path='/admin'>
          {/* Route for the products page under admin */}
          <Route path='products' element={<Products />} />
          {/* Route for the orders page under admin */}
          <Route path='orders' element={<Order />} />
          {/* Route for the dashboard page under admin */}
          <Route path='dashboard' element={<Dashboard />} />
          {/* Route for the customers page under admin */}
          <Route path='customers' element={<Customers />} />
          {/* Route for the payments page under admin */}
          <Route path='payments' element={<Payments />} />
          {/* Route for the settings page under admin */}
          <Route path='settings' element={<Settings />} />
          {/* Route for the admin authentication page */}
          <Route path='auth' element={<Admin />} />
        </Route>
        {/* Fallback route for any undefined paths, rendering the NotFound component */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export the App component as the default export of this module
export default App;
