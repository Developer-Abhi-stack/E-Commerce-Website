import { useState } from "react" // Import useState hook from React
import Layout from "./Layout" // Import Layout component


const Order = () => {
  // Define state variable 'orders' and its setter 'setOrders' with initial order data
  const [orders, setOrders] = useState([
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    },
    {
      orderId: '#23233232r',
      customerName: 'er abhishek',
      email: 'abhikum8131@gmail.com',
      mobile: '+91 6201534844',
      product: 'samsung a12',
      amount: 14999,
      date: '24 July, 2024',
      status: 'successful'

    }
  ])
  return (
    <Layout> {/* Render the Layout component */}
    <div>
      <h1 className="text-xl font-semibold">Orders</h1> {/* Heading for the orders table */}
      <div className="mt-6"> {/* Container for the table */}
        <table className="w-full"> {/* Define a full-width table */}
          <thead>
            <tr className="bg-rose-600 text-white"> {/* Table header row with red background and white text */}
              <th className="py-4">Order Id</th>
              <th>Customer&apos;s Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, index) => (
                <tr key={index} className="text-center" style={{
                  background: (index + 1) % 2 === 0 ? 'white' : '#f1f5f9' // Alternating row colors
                }}>
                  <td className="py-4">{order.orderId}</td>
                  <td className="capitalize">{order.customerName}</td> {/* Capitalize customer name */}
                  <td>{order.email}</td>
                  <td>{order.mobile}</td>
                  <td className="capitalize">{order.product}</td> {/* Capitalize product name */}
                  <td>₹{order.amount.toLocaleString()}</td> {/* Format amount with locale string */}
                  <td>{order.date}</td>
                  <td className="capitalize">
                    <select className="p-1 border-2 rounded-md "> {/* Dropdown to change order status */}
                      <option value="pending">Pending</option>
                      <option value="successful">Successful</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="processing">Processing</option>
                      <option value="returned">Returned</option>
                    </select>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
);
}

export default Order; // Export the Order component as default