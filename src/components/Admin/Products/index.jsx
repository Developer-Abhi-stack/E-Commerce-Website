import { useState } from "react";
import Layout from "../Layout";

const Products = () => {
  // Initialize the state with an array of product objects
  const [products, setProducts] = useState([
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/a.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/b.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/c.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/d.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/e.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/f.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/g.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/h.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/i.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/j.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/k.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/k.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/l.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/m.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/n.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/o.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/p.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/q.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/r.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/s.jpg",
    },
    {
      title: "men&apos;s shirt slim blue",
      price: 4500,
      discount: 20,
      description: "this is best shirt in online market",
      image: "/products/t.jpg",
    },
  ]);
  return (
    <Layout>
      <div>
           {/* Page heading */}
        <h1 className="text-xl font-semibold mb-8">Customers</h1>
        {/* Product grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {products.map((item, index) => (
            <div key={index} className="bg-white rounded-md shadow-lg">
              {/* Product image */}
              <img src={item.image} className="rounded-t-md " />
              <div className="p-4">
                 {/* Product title */}
                <h1 className="text-md font-semibold capitalize">
                  {item.title}
                </h1>
                {/* Product description */}
                <p>{item.description.slice(0, 50)}</p>
                 {/* Product price and discount */}
                <div className="flex gap-2 mt-1">
                  <span>₹{item.price-(item.price*item.discount)/100}</span>
                  <del>₹{item.price}</del>
                  <span className="text-gray-500">₹{item.discount}% off</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
