import React, { useRef, useEffect } from "react";
import { PMG_digital_marketing } from "../../assets";
import { Link } from "react-router-dom";
import { creative_1, creative_2, creative_3, creative_4, creative_5 } from "../../assets";

import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"; 
function DigitalMarketing() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; // Normal playback speed
    }
  }, []);

  return (
    <>
      <div className="relative w-full h-[50vh] md:h-[90vh]">
        {/* Video Background */}
        <video
          ref={videoRef}
          src={PMG_digital_marketing}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            ENGAGEMENT <br /> IMPACT
          </h1>
        </div>
      </div>

      {/* Digital Marketing Services Section */}
      <div className="py-12 px-6 md:px-12 text-white" style={{ backgroundColor: "#CF7629" }}>
        <h2 className="text-3xl font-bold text-center mb-8">
          Digital Marketing Services
        </h2>
        <p className="text-lg text-center mb-8 font-light">
          Personalised digital marketing that delivers more than just clicks. We help you connect, engage and convert across all platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="list-disc list-inside text-lg font-medium">
          <li>Affiliate marketing</li>
  <li>Brand management</li>
  <li>Content marketing</li>
  <li>Digital media campaigns</li>
  <li>Social media monitoring</li>
  <li>
  Digital PR
  </li>
  <li>E-commerce marketing</li>
  <li>Website management</li>
          </ul>
          <ul className="list-disc list-inside text-lg font-medium">
            <li>Email marketing</li>
            <li>Influencer/KOL marketing</li>
            <li>SEO/SEM</li>
            <li>Social media marketing</li>
            <li>Social media monitoring</li>
            <li>  <Link
      to="/video-production"
      className="underline hover:text-gray-300"
    >
      Video production
    </Link></li>
            <li>Website development</li>
            <li>Website management</li>
          </ul>
        </div>
      </div>

        {/* Swiper Slider Section */}

        <div className="py-8 bg-gray-100">
 
 <div className="container mx-auto px-4">
   <Swiper
     modules={[Pagination, Navigation, Autoplay]}
     pagination={{ clickable: true }}
     autoplay={{ delay: 3000 }}
     loop={true}
     spaceBetween={30}
     breakpoints={{
       640: { slidesPerView: 1 },
       768: { slidesPerView: 2 },
       1024: { slidesPerView: 3 },
     }}
   >
     {[creative_1, creative_2, creative_3, creative_4, creative_5].map((img, index) => (
       <SwiperSlide key={index}>
         <div className="relative group overflow-hidden rounded-xl shadow-lg">
           {/* Image */}
           <img
             src={img}
             alt={`Creative Work ${index + 1}`}
             className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
           />

           {/* Sliding text (from bottom) */}
           <motion.div
             initial={{ y: "100%", opacity: 0 }}
             whileHover={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, ease: "easeOut" }}
             className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 group-hover:block"
           >
             <h3 className="text-white text-lg font-semibold text-center">
               Creative Work {index + 1}
             </h3>
           </motion.div>
         </div>
       </SwiperSlide>
     ))}
   </Swiper>
 </div>
</div>

{/* Additional Content Section */}
<div className="py-12 px-6 md:px-20 text-white text-center">
  <div className="space-y-10">
    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#CF7629" }}>
        Disruptive: Scroll-stopping content engagement
      </h4>
      <p className="text-black text-lg font-light text-center">
        Let’s cut through the noise and spark conversations with inventive storytelling that hooks and retains.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#CF7629" }}>
        Omnichannel: Unified brand experience
      </h4>
      <p className="text-black text-lg font-light text-center">
        Bridging you to your audience everywhere, we keep your brand voice consistent across all online and digital touchpoints.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#CF7629" }}>
        Measurable: Analytics-fuelled success
      </h4>
      <p className="text-black text-lg font-light text-center">
        We dive deep into the data to define our strategy and continuously rewire for maximum effectiveness.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#CF7629" }}>
        Agile: Change ready by design
      </h4>
      <p className="text-black text-lg font-light text-center">
        We stay on top of digital marketing innovations and adopt those that provide real value.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#CF7629" }}>
        Digital: Apps and tech solutions
      </h4>
      <p className="text-black text-lg font-light text-center">
        Explore our proprietary suite of digital applications and tech-based project solutions that support our core services.
      </p>
    </div>
  </div>
</div>    </>
  );
}

export default DigitalMarketing;