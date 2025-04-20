import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion
import { banner, banner_1, banner_3, banner_4} from "../assets";
import "../../public/styles.css";

const Hero = () => {
  const banners = [banner, banner_1, banner_3, banner_4];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[70vh] sm:h-[60vh] md:h-[50vh] lg:h-[90vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
      >
        {banners.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-center bg-black">
              {/* Background Image with Animation */}
              <motion.div
                key={activeIndex} // Reanimate on slide change
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

              {/* Animated Content */}
              <motion.div
                key={activeIndex} // Forces reanimation on slide change
                className="relative z-10 text-center px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Heading Animation */}
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white font-raleway"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  CREATING IMPACT
                </motion.h1>

                {/* Subtext Animation */}
                <motion.p
  className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-200"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
>
  Grandsphere Productions. Empowering brands with innovative marketing solutions.
</motion.p>

               
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
