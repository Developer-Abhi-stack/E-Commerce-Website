import { useState } from "react"; // Import useState hook from React
import Layout from "./Layout"; // Import Layout component

const Customers = () => {
  // Define state variable 'customers' and its setter 'setCustomers' with initial order data
  const [customers, setCustomers] = useState([
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
    {
      customerName: "er abhishek",
      email: "abhikum8131@gmail.com",
      mobile: "+91 6201534844",
      date: "24 July, 2024",
    },
  ]);
  return (
    <Layout>
      {" "}
      {/* Render the Layout component */}
      <div>
        <h1 className="text-xl font-semibold">Customers</h1>{" "}
        {/* Heading for the orders table */}
        <div className="mt-6">
          {" "}
          {/* Container for the table */}
          <table className="w-full">
            {" "}
            {/* Define a full-width table */}
            <thead>
              <tr className="bg-rose-600 text-white">
                {" "}
                {/* Table header row with red background and white text */}
                <th className="py-4">Customer&apos;s Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={index}
                  className="text-center"
                  style={{
                    background: (index + 1) % 2 === 0 ? "white" : "#f1f5f9", // Alternating row colors
                  }}
                >
                  <td className="capitalize py-4">
                    <div className="flex justify-center gap-4">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="/images/customer.webp"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {customer.customerName}
                        </span>
                        <small className="text-gray-500">{customer.date}</small>
                      </div>
                    </div>
                  </td>{" "}
                  {/* Capitalize customer name */}
                  <td>{customer.email}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Customers; // Export the Order component as default
