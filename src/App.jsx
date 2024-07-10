// Import CSS for Remix Icon library
import 'remixicon/fonts/remixicon.css';
// Import components from react-router-dom for routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import the NotFound component
import NotFound from './components/NotFound';
// Import the Product component from the Admin directory
import Product from './components/Admin/Product';
// Import the Order component from the Admin directory
import Order from './components/Admin/Order';

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
          <Route path='products' element={<Product />} />
          {/* Route for the orders page under admin */}
          <Route path='orders' element={<Order />} />
        </Route>
        {/* Fallback route for any undefined paths, rendering the NotFound component */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// Export the App component as the default export of this module
export default App;
