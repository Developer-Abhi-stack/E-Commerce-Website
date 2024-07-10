



// Define a functional component called NotFound
const NotFound = () => {
  return (
    // Main container div with Tailwind CSS classes for flexbox, alignment, and styling
    <div className="flex items-center justify-center bg-gray-200 h-screen">
      {/* Header element with text styling to display the 404 error message */}
      <h1 className="text-xl font-semibold">404 | Not Found !</h1>
    </div>
  );
};

// Export the NotFound component as the default export of this module
export default NotFound;
