import { useState } from "react";
import Layout from "./Layout";

const Category = () => {
  const [Category, setCategory] = useState([
    {
      title: "Electronics",
    },
    {
      title: "Smartphones",
    },
    {
      title: "Furniture",
    },
    {
      title: "Mens",
    },
    {
      title: "Womens",
    },
    {
      title: "Kids Wear",
    },
    {
      title: "Home & Kitchen",
    },
    {
      title: "Beauty & Personal Care",
    },
  ]);
  return (
    <Layout>
      <div className="md:p-16 p-8">
        <div className="md:w-10/12  mx-auto grid md:grid-cols-4 md:gap-16 gap-8">
          {Category.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg flex justify-center items-center flex-col p-8 border rounded-lg hover:bg-orange-600 hover:text-white cursor-pointer"
            >
              <i className="ri-menu-search-line text-6xl"></i>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Category;
