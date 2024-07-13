// Import CSS for Remix Icon library
import 'remixicon/fonts/remixicon.css';
// Import components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the NotFound component
import NotFound from './components/NotFound';
// Import the Product component from the Admin directory
import Products from './components/Admin/Products';
// Import the Order component from the Admin directory
import Order from './components/Admin/Order';
import Dashboard from './components/Admin/Dashboard';
import Customers from './components/Admin/Customers';
import Payments from './components/Admin/Payments';
import Settings from './components/Admin/Settings';
import Admin from './components/Admin';

// Define the main App component
const App = () => {
  return (
    // Use BrowserRouter to enable client-side routing
    <BrowserRouter>
      {/* Define the Routes for the application */}
      <Routes>
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
          {/* Route for the admin page */}
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
