// Import the Layout component from the current directory
import Layout from "./Layout";

// Define the Dashboard component
const Dashboard = () => {
  // Return the JSX to render
  return (
    // Use the Layout component to wrap the content of the Dashboard
    <Layout>
      <div>
        {/* Heading for the Dashboard page */}
        <h1>Welcome to Dashboard</h1>
      </div>
    </Layout>
  );
};

// Export the Dashboard component as the default export
export default Dashboard;
