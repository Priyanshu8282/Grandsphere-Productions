import React from "react";
import { motion } from "framer-motion";

function OurWork() {
  const works = [
    {
      title: "Creative Campaigns",
      description: "Innovative designs and concepts that captivate audiences.",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to boost your online presence.",
    },
    {
      title: "Event Management",
      description: "Seamlessly executed events that leave lasting impressions.",
    },
    {
      title: "Print & POSM",
      description: "High-quality print and promotional materials for your brand.",
    },
    {
      title: "Retail Channel Management",
      description: "Optimized retail strategies to maximize your reach.",
    },
    {
      title: "Video Production",
      description: "Engaging video content that tells your story.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#1E3A8A] mb-6">
          Our Work
        </h2>
        <p className="text-lg sm:text-xl text-center text-gray-700 mb-12">
          Explore our portfolio of projects that showcase creativity, innovation, and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {works.map((work, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-[#1E3A8A] text-white rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] text-center mb-2">{work.title}</h3>
              <p className="text-sm text-gray-600 text-center">{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;