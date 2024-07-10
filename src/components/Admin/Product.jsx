// Import the Layout component from the current directory
import Layout from "./Layout";

// Define a functional component called Product
const Product = () => {
  return (
    // Wrap the content inside the Layout component
    <Layout>
      {/* Main container div for the Product component content */}
      <div>
        {/* Header element to display the "Hello Products" message */}
        <h1>Hello Products</h1>
      </div>
    </Layout>
  );
};

// Export the Product component as the default export of this module
export default Product;
