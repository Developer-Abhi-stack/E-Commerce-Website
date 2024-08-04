// Import the Layout component from the local file system
import Layout from "./Layout";




import { useState } from "react";

// Define a functional component called Home
const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/a.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/b.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/c.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/d.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/e.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/f.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/g.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/h.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/i.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/j.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/k.jpg",
    },
    {
      title: "New blue shirts mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/l.jpg",
    },
  ]);
  return (
    // Return a div containing the Layout component
    <div>
      {/* Use the Layout component to wrap the content */}
      <Layout>
        {/* Inner div containing the homepage content */}
        <div>
          <div className="md:p-16 p-8">
            <h1 className="text-4xl font-bold text-center">All Products</h1>
            <p className="text-center text-gray-600 mx-auto md:w-7/12 mt-6 mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              illum repudiandae ipsa quam non dolore doloremque, in repellat
              laborum, aut nobis porro! Ex, hic. Accusantium exercitationem amet
              maxime distinctio praesentium.
            </p>
            <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-12">
              {products.map((item, index) => (
                <div key={index} className="bg-white shadow-lg border">
                  <img src={item.thumbnail} />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <div className="space-x-2">
                      <span className="font-bold text-lg">
                        ₹{item.price - (item.price * item.discount) / 100}
                      </span>
                      <del>₹{item.price}</del>
                      <span className="text-gray-600">({item.discount}%)</span>
                    </div>
                    <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">
                      Buy Now
                    </button>
                    <button className="bg-rose-500 py-2 w-full rounded text-white font-semibold mt-2">
                    <i className="ri-shopping-cart-line mr-2"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

// Export the Home component as the default export
export default Products;
