import React from "react";
import Hero from "../Components/Hero";
import about from "../assets/about.jpg";
import { motion } from "framer-motion"; // Import Framer Motion
import { digitalmarketing, print, retail, video, creative, event, PMG_client_logos_mobile } from "../assets";

const Home = () => {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left: About Image */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={about}
                alt="About Grandsphere Productions"
                className="rounded-lg w-2/3 lg:w-3/4 h-auto mx-auto transition duration-300 transform hover:scale-105"
              />
            </motion.div>

            {/* Right: About Text */}
            <motion.div
              className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E3A8A] font-lato">
                Welcome to <span className="text-[#FFC107]">Grandsphere Productions</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                Grandsphere Productions is a premier professional management and event 
                planning agency dedicated to crafting unforgettable experiences. 
                We specialize in corporate events, brand activations, and 
                integrated marketing solutions.
              </p>
              <p className="mt-3 text-base sm:text-lg text-gray-700">
                From concept to execution, we ensure every detail is handled with 
                excellence, making your events stand out.
              </p>
              <div className="mt-6">
                <a
                  href="/about-us"
                  className="px-6 py-3 text-base sm:text-lg font-semibold text-white 
                  bg-gradient-to-r from-blue-600 to-purple-500 hover:from-purple-500 hover:to-blue-600 
                  rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-20">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1E3A8A] mb-4">
      Our Services
    </h2>
    <p className="text-lg sm:text-xl text-center text-gray-600 mb-12">
      From concept to campaign, all in one place.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Creative Services",
          path: "/services/creative-service",
          image: creative,
          description: "Bring your ideas to life with our innovative design and branding solutions.",
        },
        {
          title: "Digital Marketing",
          path: "/services/digital-marketing",
          image: digitalmarketing,
          description: "Boost your online presence with targeted campaigns and SEO strategies.",
        },
        {
          title: "Event Management",
          path: "/services/event-management",
          image: event,
          description: "Plan and execute unforgettable events tailored to your needs.",
        },
        {
          title: "Print POSM & Promo Product Sourcing",
          path: "/services/print-posm-promo-product-sourcing",
          image: print,
          description: "High-quality print materials and promotional products to elevate your brand.",
        },
        {
          title: "Retail Channel Management",
          path: "/services/retail-channel-management",
          image: retail,
          description: "Streamline your retail operations with our expert management solutions.",
        },
        {
          title: "Video Production",
          path: "/services/video-production",
          image: video,
          description: "Create compelling video content to captivate your audience.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="relative overflow-hidden rounded-md">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold text-[#1E3A8A] mt-4 mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{service.description}</p>
          <a
            href={service.path}
            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 px-4 py-2 rounded-lg transition duration-300"
          >
            Learn More
          </a>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1E3A8A] mb-4">
            Our Clients
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-8">
            Trusted by leading brands across industries.
          </p>
          <div className="flex justify-center">
            <img
              src={PMG_client_logos_mobile}
              alt="PMG Client Logos"
              className="w-full max-w-4xl object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;