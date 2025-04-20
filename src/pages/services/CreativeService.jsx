import React, { useRef, useEffect } from "react";
import { PMG_creative_services } from "../../assets";
import { Link } from "react-router-dom";
import { creative_1, creative_2, creative_3, creative_4, creative_5 } from "../../assets";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Swiper modules
import { motion } from "framer-motion"

function CreativeService() {
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
          src={PMG_creative_services}
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
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center font-serif">
            CONCEPTUAL <br /> IMPACT
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-red-500 py-12 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8 font-sans">
          Creative Services
        </h2>
        <p className="text-lg text-white text-justify mb-8 font-light font-mono">
          Creativity is at the forefront of everything we do. We fuse the power
          of imagination with data-driven insights to build real connections
          across Asia Pacific. From ideation to execution, our services deliver
          results that matter — on brand, on time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="list-disc list-inside text-white text-justify font-medium font-sans">
            <li>Marketing campaign strategy</li>
            <li>Creative conceptualisation and development</li>
            <li>Graphic design services</li>
            <li>Brand messaging strategy</li>
            <li>Copywriting and copy-editing</li>
          </ul>
          <ul className="list-disc list-inside text-white text-justify font-medium font-sans">
            <li>
              <Link to="/our-services/digital-marketing" className="underline hover:text-gray-300">
                Content creation
              </Link>
            </li>
            <li>
              <Link to="/our-services/digital-marketing" className="underline hover:text-gray-300">
                UX/UI design
              </Link>
            </li>
            <li>
              <Link to="/our-services/digital-marketing" className="underline hover:text-gray-300">
                Website/Digital copy and design
              </Link>
            </li>
            <li>
              <Link to="/our-services/digital-marketing" className="underline hover:text-gray-300">
                App content and design
              </Link>
            </li>
            <li>Translation services</li>
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
{/* Creative Pillars Section */}
<div className="py-12 bg-white px-6 md:px-20 text-center">
  <div className="space-y-10">
    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#ee3c25" }}>
        On the pulse: Data-powered campaigns
      </h4>
      <p className="text-gray-700 text-lg font-light">
        We build our creative strategy around your audience’s motivations, founded on market research and empathy.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#ee3c25" }}>
        Top class: High-value creative leadership
      </h4>
      <p className="text-gray-700 text-lg font-light">
        With outsized creativity, we employ a concept-led, forward-thinking approach to conveying your brand message effectively.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#ee3c25" }}>
        On the mark: Persuasive messaging, powerful design
      </h4>
      <p className="text-gray-700 text-lg font-light">
        Count on our multidisciplinary creative experts to influence brand perception and drive desired action.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#ee3c25" }}>
        Collaborative: Your trusted brand advocates
      </h4>
      <p className="text-gray-700 text-lg font-light">
        We proactively align our ideas and process with your goals; adaptable yet brand compliant.
      </p>
    </div>

    <div>
      <h4 className="text-3xl font-bold mb-2 font-serif" style={{ color: "#ee3c25" }}>
        Digital: Apps and tech solutions
      </h4>
      <p className="text-gray-700 text-lg font-light">
        Explore our proprietary suite of digital applications and tech-based project solutions that support your campaign goals.
      </p>
    </div>
  </div>
  <div className="mt-12">
    <p className="text-lg font-semibold" style={{ color: "#212121" }}>
      Strike the right chord with high-impact creative precision marketing.
    </p>
  </div>
</div>



    </>
  );
}

export default CreativeService;