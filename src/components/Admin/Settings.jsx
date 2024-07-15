import Layout from "./Layout"; // Importing the Layout component

// Define the Settings component
const Settings = () => {
  return (
    // Use the Layout component to wrap the content
    <Layout>
      <div>
        {/* Display the main heading */}
        <h1>Welcome to Settings Page !</h1>
      </div>
    </Layout>
  );
};

export default Settings; // Export the Settings component as the default export
