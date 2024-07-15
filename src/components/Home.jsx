// Import the Layout component from the local file system
import Layout from "./Layout"

// Define a functional component called Home
const Home = () => {
  return (
    // Return a div containing the Layout component
    <div>
        {/* Use the Layout component to wrap the content */}
        <Layout>
            {/* Inner div containing the homepage content */}
            <div>
                {/* Heading for the homepage */}
                <h1>Welcome to Homepage!</h1>
            </div>
        </Layout>
    </div>
  )
}

// Export the Home component as the default export
export default Home
