import React, { useRef, useEffect } from "react";
import { PMG_video_services } from "../../assets";
import { creative_1, creative_2, creative_3, creative_4, creative_5 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion"

function VideoProduction() {
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
          src={PMG_video_services}
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
          STORYTELLING <br /> PRODUCTION
          </h1>
        </div>
      </div>

      {/* Video Production Services Section */}
<div className="py-12 px-6 md:px-12 text-white" style={{ backgroundColor: "#991D53" }}>
  <h2 className="text-3xl font-bold text-center mb-8">
    Video Production Services
  </h2>
  <p className="text-lg text-center mb-8 font-light">
    From concept to final cut, we produce resonant stories that amplify your narratives, connect emotionally and turn viewers’ attention into brand trust.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ul className="list-disc list-inside text-lg font-medium">
      <li>2D & 3D animations (GIF/AR/VR)</li>
      <li>Anamorphic videos</li>
      <li>Cinematographic videos</li>
      <li>Brand/Corporate videos</li>
      <li>Testimonials</li>
      <li>Music videos</li>
    </ul>
    <ul className="list-disc list-inside text-lg font-medium">
      <li>CSR/PSA films</li>
      <li>Event videos/Livestreaming advertisements</li>
      <li>Demo/Explainer/Walkthrough videos</li>
      <li>Tutorials/Training videos</li>
      <li>Stop-motion films</li>
      <li>Product videos</li>
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
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#991D53" }}>
        Personalised: Tailored video experiences
      </h4>
      <p className="text-black text-lg font-light text-center">
        Cut through the noise with inventive storytelling that captures attention, inspires deep connections and enhances your brand reputation.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#991D53" }}>
        Seamless mastery: End-to-end direction
      </h4>
      <p className="text-black text-lg font-light text-center">
        We bring expertise in every stage of the process — strategically planning, shooting and polishing your video to perfection with cutting-edge technology.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#991D53" }}>
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

export default VideoProduction;