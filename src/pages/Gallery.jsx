import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Existing layout components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Using background.jpeg from assets
import bgImage from "../assets/background.jpeg";

const Gallery = () => {
  // Data arrays for photos
  const highlights = Array.from({ length: 10 }, (_, i) => `/gallery-highlight/h${i + 1}.jpg`);
  const guests = ["/gallery-highlight/cg1.jpg", "/gallery-highlight/cg2.jpg"];
  const awards = ["src/public/gallery-highlight/award1.jpg", "src/public/gallery-highlight/award2.JPG","src/public/gallery-highlight/award3.JPG", "src/public/gallery-highlight/award4.jpg","src/public/gallery-highlight/award5.jpg"];
  const mainVideo = "/gallery-highlight/highlight_video.mp4";

  // Brown color matching your Navbar theme
  const navbarBrown = "#4a2c2a"; 

  return (
    <div 
      className="min-h-screen relative font-sans" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover", // ✅ Normal scaling like other pages
        backgroundPosition: "center",
        backgroundAttachment: "scroll" // ✅ Prevents mobile zoom issues
      }} 
    >
      <div className="relative z-10">
        <Navbar />

        {/* 🎬 Hero Section - Height reduced to 50vh to remove the gap */}
        <section className="relative h-[45vh] md:h-[50vh] w-full overflow-hidden flex items-end pb-6 px-8 md:px-20">
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover brightness-90 z-[-1]"
          >
            <source src={mainVideo} type="video/mp4" />
          </video>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* ✅ Reduced text size and simple font */}
            <h1 
                className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase"
                style={{ color: navbarBrown }}
            >
              The Legacy
            </h1>
            <p 
                className="font-bold tracking-wider uppercase mt-1 inline-block text-sm md:text-base"
                style={{ color: navbarBrown }}
            >
              Moments from Epistemico
            </p>
          </motion.div>
        </section>

        {/* 📸 Photo Sliders - Tightened spacing (space-y-10) */}
        <div className="px-4 md:px-16 py-6 space-y-10 pb-20">
          
          {/* Category: Highlights of Function */}
          <div className="group">
            <h2 
                className="text-2xl font-bold mb-4 flex items-center gap-4"
                style={{ color: navbarBrown }}
            >
              <span className="w-1.5 h-6 rounded-sm inline-block" style={{ backgroundColor: navbarBrown }}></span>
              Highlights of Function
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={true}
              breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 4.2 } }}
            >
              {highlights.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    className="rounded-lg overflow-hidden aspect-video border shadow-md bg-white/10"
                    style={{ borderColor: `${navbarBrown}33` }}
                  >
                    <img src={img} alt={`Highlight ${idx + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Category: Chief Guests */}
          <div className="group">
            <h2 
                className="text-2xl font-bold mb-4 flex items-center gap-4"
                style={{ color: navbarBrown }}
            >
              <span className="w-1.5 h-6 rounded-sm inline-block" style={{ backgroundColor: navbarBrown }}></span>
              Chief Guests
            </h2>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={true}
              breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 4.2 } }}
            >
              {guests.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    className="rounded-lg overflow-hidden aspect-video border shadow-md bg-white/10"
                    style={{ borderColor: `${navbarBrown}33` }}
                  >
                    <img src={img} alt="Chief Guest" className="w-full h-full object-cover" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Category: Awards */}
          <div className="group">
            <h2 
                className="text-2xl font-bold mb-4 flex items-center gap-4"
                style={{ color: navbarBrown }}
            >
              <span className="w-1.5 h-6 rounded-sm inline-block" style={{ backgroundColor: navbarBrown }}></span>
              Awards
            </h2>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={true}
              breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 4.2 } }}
            >
              {awards.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div 
                    whileHover={{ scale: 1.03 }} 
                    className="rounded-lg overflow-hidden aspect-video border shadow-md bg-white/10"
                    style={{ borderColor: `${navbarBrown}33` }}
                  >
                    <img src={img} alt="Award" className="w-full h-full object-cover" />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        <Footer />
      </div>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #4a2c2a !important;
          background: rgba(255, 255, 255, 0.7);
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
        }
        .swiper-button-next:after, .swiper-button-prev:after { font-size: 0.8rem !important; }
      `}</style>
    </div>
  );
};

export default Gallery;