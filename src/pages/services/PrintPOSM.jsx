import React, { useRef, useEffect } from "react";
import { PMG_print_services } from "../../assets";
import { creative_1, creative_2, creative_3, creative_4, creative_5 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion"
function PrintPOSM() {
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
          src={PMG_print_services}
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
          ACTIVATION<br /> IMPACT
          </h1>
        </div>
      </div>
      {/* Print, POSM & Promo Product Section */}
<div className="py-12 px-6 md:px-12 text-white" style={{ backgroundColor: "#2C3075" }}>
  <h2 className="text-3xl font-bold text-center mb-8">
    Print, POSM & Promo Product Sourcing Services
  </h2>
  <p className="text-lg text-center mb-8 font-light">
    Cut costs, go green and get your campaigns to market faster. Simplify your procurement with solutions trusted by global brands.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ul className="list-disc list-inside text-lg font-medium">
      <li>Strategic sourcing</li>
      <li>Procurement operations</li>
      <li>Logistics and fulfilment</li>
    </ul>
    <ul className="list-disc list-inside text-lg font-medium">
      <li>E-Procurement services</li>
      <li>POSM waste management and circular economy</li>
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
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#2C3075" }}>
        Centralised: One point of contact
      </h4>
      <p className="text-black text-lg font-light text-center">
        Get one-stop expert control over your entire marketing procurement process.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#2C3075" }}>
        First-rate: 1,800+ suppliers worldwide
      </h4>
      <p className="text-black text-lg font-light text-center">
        We support your success with our vast global ecosystem of rigorously qualified vendors.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#2C3075" }}>
        Transparent: Long-term cost-savings
      </h4>
      <p className="text-black text-lg font-light text-center">
        We save you money while ensuring all products are sustainable, innovative and compliant.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#2C3075" }}>
        Digital: Apps and tech solutions
      </h4>
      <p className="text-black text-lg font-light text-center">
        Explore our proprietary suite of digital applications and tech-based project solutions that support our core services.
      </p>
    </div>
  </div>
</div>
    </>
  );
}

export default PrintPOSM;