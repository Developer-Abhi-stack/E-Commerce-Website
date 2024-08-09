import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <header className="md:w-6/12 mx-auto md:my-16 md:shadow-lg bg-white">
        <img src="images/contact-us.jpg" className="w-full" />
        <div className="p-8">
          <form className="mt-4 space-y-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              type="text"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              placeholder="Enter your message here ....."
              required
            />
          </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#ffc801] hover:bg-white text-white hover:text-[#ffc801] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >Get Quote</button>
            </div>
          </form>
        </div>
      </header>
    </Layout>
  );
};

export default Contact;
