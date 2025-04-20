import React, { useRef, useEffect } from "react";
import { PMG_retail_services } from "../../assets";
import { creative_1, creative_2, creative_3, creative_4, creative_5 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion"

function RetailChannelManagement() {
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
          src={PMG_retail_services}
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
          IN-STORE <br /> MANAGEMENT
          </h1>
        </div>
      </div>

      {/* Retail Channel Management Services Section */}
<div className="py-12 px-6 md:px-12 text-white" style={{ backgroundColor: "#522667" }}>
  <h2 className="text-3xl font-bold text-center mb-8">
    Retail Channel Management Services
  </h2>
  <p className="text-lg text-center mb-8 font-light">
    Maximise your retail impact, optimise supply chains and convert customers wherever they shop. Powered by our proprietary technology for smarter, faster retail solutions.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ul className="list-disc list-inside text-lg font-medium">
      <li>Brand ambassador management</li>
      <li>Inventory management</li>
      <li>Mystery shopper services</li>
      <li>Retail activation</li>
      <li>Roadshows</li>
      <li>Visual merchandising</li>
    </ul>
    <ul className="list-disc list-inside text-lg font-medium">
      <li>Channel partnerships</li>
      <li>Interactive Point-of-Sale (POS)</li>
      <li>Promoter management</li>
      <li>Retail planogram mapping</li>
      <li>Store and retail design</li>
      <li>Retail store build-up</li>
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



<div className="py-12 px-6 md:px-20 text-white text-center">
  <div className="space-y-10">
    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#522667" }}>
        Robust network: 13,000 stores and key stakeholders
      </h4>
      <p className="text-black text-lg font-light text-center">
        Enhance your market reach and impact with our strategic, long-term vendor partnerships.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#522667" }}>
        Cost-efficient: Double-digit percentage savings
      </h4>
      <p className="text-black text-lg font-light text-center">
        Leverage our proven track record of yielding consistent savings for our multinational clients.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#522667" }}>
        Hands-on: Comprehensive support where needed
      </h4>
      <p className="text-black text-lg font-light text-center">
        Our dedicated project managers in every location can provide holistic solutions and end-to-end services, as required.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#522667" }}>
        Digital: Apps and tech solutions
      </h4>
      <p className="text-black text-lg font-light text-center">
        Explore our proprietary suite of digital applications and tech-based project solutions that support our retail channel management services.
      </p>
    </div>
  </div>
</div>
    </>
  );
}

export default RetailChannelManagement;