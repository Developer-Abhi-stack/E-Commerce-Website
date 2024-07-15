


// Define the Admin functional component
const Admin = () => {
  return (
    // Main container div with flexbox properties and styling
    <div className="flex bg-gray-100 h-screen justify-center items-center">
      {/* Display admin SVG image */}
      <img src="/images/admin.svg" className="w-96 h-96" alt="Admin Console" />
      
      {/* Container for the heading and form */}
      <div>
        {/* Heading of the admin console */}
        <h1 className="text-4xl font-semibold mb-4">Admin Console!</h1>
        
        {/* Form for admin secret input */}
        <form className="flex flex-col gap-4">
          {/* Input field for admin secret */}
          <input
            type="text"
            className="border p-4 rounded-md bg-white w-[450px]"
            placeholder="Enter admin secret"
            required
          />
          {/* Button to submit the form */}
          <button className="p-4 bg-violet-600 w-fit text-white font-semibold rounded-md">
            Access Now
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the Admin component as default
export default Admin;
