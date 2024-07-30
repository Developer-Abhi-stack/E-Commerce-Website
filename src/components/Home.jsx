// Import the Layout component from the local file system
import Layout from "./Layout";

// Import Swiper and SwiperSlide components from Swiper React
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required Swiper modules
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

// Define a functional component called Home
const Home = () => {
  const [products, setProducts] = useState([
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/a.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/b.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/c.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/d.jpg'
    },{
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/e.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/f.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/g.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/h.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/i.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/j.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/k.jpg'
    },
    {
      title: 'New blue shirts mens',
      price: 1200,
      discount: 15,
      thumbnail: '/products/l.jpg'
    }
  ]);
  return (
    // Return a div containing the Layout component
    <div>
      {/* Use the Layout component to wrap the content */}
      <Layout>
        {/* Inner div containing the homepage content */}
        <div>
          {/* Swiper component with navigation and pagination enabled */}
          <header>
            <Swiper
              navigation={true} // Enable navigation (previous/next buttons)
              modules={[Navigation, Pagination]} // Include Navigation and Pagination modules
              pagination={true} // Enable pagination (dots)
              slidesPerView={1} // Show one slide at a time
            >
              {/* Individual SwiperSlide components containing images */}
              <SwiperSlide>
                <img
                  src="/images/a.jpg"
                  className="w-[100%] h-[400px]"
                  alt="Slide 1"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/b.jpg"
                  className="w-[100%] h-[400px]"
                  alt="Slide 2"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/c.jpg"
                  className="w-[100%] h-[400px]"
                  alt="Slide 3"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/d.jpg"
                  className="w-[100%] h-[400px]"
                  alt="Slide 4"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/e.jpg"
                  className="w-[100%] h-[400px]"
                  alt="Slide 5"
                />
              </SwiperSlide>
            </Swiper>
          </header>
          <h1></h1>

          <div className="md:p-16 p-8">
          <h1 className="text-4xl font-bold text-center">Latest Products</h1>
          <p className="text-center text-gray-600 mx-auto md:w-7/12 mt-6 mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, illum repudiandae ipsa quam non dolore doloremque, in repellat laborum, aut nobis porro! Ex, hic. Accusantium exercitationem amet maxime distinctio praesentium.</p>
            <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-12">
            {
              products.map((item, index) => (
                <div key={index} className="bg-white shadow-lg border">
                  <img src={item.thumbnail} />
                  <div className="p-4"> 
                    <h1 className="text-lg font-semibold">{item.title}</h1>
                    <div className="space-x-2">
                      <span className="font-bold text-lg">₹{item.price - (item.price*item.discount)/100}</span>
                      <del>₹{item.price}</del>
                      <span className="text-gray-600">({item.discount}%)</span>
                    </div>
                    <button className="bg-green-500 py-2 w-full rounded text-white font-semibold">Buy Now</button>
                  </div>
                  </div>
              ))
            }
            </div>
            
          </div>
        </div>
      </Layout>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
