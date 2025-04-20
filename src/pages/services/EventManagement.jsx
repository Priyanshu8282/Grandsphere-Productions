import React, { useRef, useEffect } from "react";
import { PMG_event_services } from "../../assets";
import { creative_1, creative_2, creative_3, creative_4, creative_5 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion"

function EventManagement() {
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
          src={PMG_event_services}
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
          EXPERIENTIAL <br /> IMPACT
          </h1>
        </div>
      </div>
      {/* Event Management Services Section */}
<div className="py-12 px-6 md:px-12 text-white" style={{ backgroundColor: "#00926B" }}>
  <h2 className="text-3xl font-bold text-center mb-8">
    Event Management Services
  </h2>
  <p className="text-lg text-center mb-8 font-light">
    With tailored solutions for corporate events, brand activations, and occasions, we deliver impactful live, virtual, and hybrid experiences that align with your business goals. Our expertise combines creativity with strategic execution to amplify your brand’s presence across every touchpoint.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ul className="list-disc list-inside text-lg font-medium">
      <li>Corporate events</li>
      <li>MICE events</li>
      <li>Experiential marketing</li>
    </ul>
    <ul className="list-disc list-inside text-lg font-medium">
      <li>Brand experiences and activation</li>
      <li>Lifestyle events</li>
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
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#00926B" }}>
        Insightful: Business-centric, audience-focused strategy
      </h4>
      <p className="text-black text-lg font-light text-center">
        We leverage data-driven strategies to align brand objectives with audience needs, delivering measurable outcomes that enhance your market positioning.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#00926B" }}>
        Experiential: Immersive engagement
      </h4>
      <p className="text-black text-lg font-light text-center">
        We design immersive experiences that integrate creativity and technical precision to strengthen audience engagement and brand connections.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#00926B" }}>
        Compelling: On-brand messaging
      </h4>
      <p className="text-black text-lg font-light text-center">
        Our team creates cohesive narratives that align with your brand identity, ensuring consistent engagement through strategic content planning.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#00926B" }}>
        Innovative: Production excellence
      </h4>
      <p className="text-black text-lg font-light text-center">
        Our award-winning production services combine cutting-edge technology with flawless execution that exceeds expectations.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#00926B" }}>
        Full service: End-to-end management
      </h4>
      <p className="text-black text-lg font-light text-center">
        Our dedicated team manages every detail — from vendor coordination to budget optimisation — ensuring a seamless process and ROI-driven results.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#00926B" }}>
        Digital: Tech-driven solutions
      </h4>
      <p className="text-black text-lg font-light text-center">
        Harness our proprietary digital solutions for real-time analytics, enhanced attendee engagement and optimised logistics.
      </p>
    </div>
  </div>
</div>
    </>
  );
}

export default EventManagement;