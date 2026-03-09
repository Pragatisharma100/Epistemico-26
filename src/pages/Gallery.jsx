import React, { useRef } from "react";
import { motion } from "framer-motion";

// helper slider component using native overflow scrolling
const ImageSlider = ({ images, navbarBrown, label }) => {
  const containerRef = useRef(null);
  const scrollBy = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };
  return (
    <div className="group">
      <h2
        className="text-3xl font-bold mb-6 flex items-center gap-4 drop-shadow-md"
        style={{ color: navbarBrown }}
      >
        <span
          className="w-2 h-10 rounded-sm inline-block"
          style={{ backgroundColor: navbarBrown }}
        ></span>
        {label}
      </h2>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto snap-x snap-mandatory scroll-smooth py-2"
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw]"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden aspect-video border-2 shadow-xl bg-white/20 backdrop-blur-sm"
                style={{ borderColor: `${navbarBrown}44` }}
              >
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollBy(-300)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/30 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={() => scrollBy(300)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white/30 rounded-full"
        >
          ›
        </button>
      </div>
    </div>
  );
};

// Layout components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Background Asset
import bgImage from "../assets/background.jpeg";

// ✅ 1. Extended Highlights (h1 to h17)
import h1 from "../assets/gallery-highlight/h1.jpg";
import h2 from "../assets/gallery-highlight/h2.jpg";
import h3 from "../assets/gallery-highlight/h3.jpg";
import h4 from "../assets/gallery-highlight/h4.jpg";
import h5 from "../assets/gallery-highlight/h5.jpg";
import h6 from "../assets/gallery-highlight/h6.jpg";
import h7 from "../assets/gallery-highlight/h7.jpg";
import h8 from "../assets/gallery-highlight/h8.jpg";
import h9 from "../assets/gallery-highlight/h9.jpg";
import h10 from "../assets/gallery-highlight/h10.jpg";
import h11 from "../assets/gallery-highlight/h11.jpg";
import h12 from "../assets/gallery-highlight/h12.jpg";
import h13 from "../assets/gallery-highlight/h13.jpg";
import h14 from "../assets/gallery-highlight/h14.jpg";
import h15 from "../assets/gallery-highlight/h15.jpg";
import h16 from "../assets/gallery-highlight/h16.jpg";
import h17 from "../assets/gallery-highlight/h17.jpg";

// ✅ 2. Extended Chief Guests (cg1 to cg5)
import cg1 from "../assets/gallery-highlight/cg1.jpg";
import cg2 from "../assets/gallery-highlight/cg2.jpg";
import cg3 from "../assets/gallery-highlight/cg3.jpeg";
import cg4 from "../assets/gallery-highlight/cg4.jpg";
import cg5 from "../assets/gallery-highlight/cg5.jpg";

// ✅ 3. Awards
import award1 from "../assets/gallery-highlight/award1.jpg";
import award2 from "../assets/gallery-highlight/award2.jpg"; 
import award3 from "../assets/gallery-highlight/award3.jpg";
import award4 from "../assets/gallery-highlight/award4.jpg";
import award5 from "../assets/gallery-highlight/award5.jpg";

import mainVideo from "../assets/gallery-highlight/highlight_video.mp4";

const Gallery = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = useRef(null);
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const highlights = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17];
  const guests = [cg1, cg2, cg3, cg4, cg5];
  const awardsList = [award1, award2, award3, award4, award5];
  const navbarBrown = "#4a2c2a"; 

  return (
    <div 
      className="min-h-screen relative font-sans pt-28" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed" 
      }} 
    >
      <Navbar /> 

      <main className="relative z-10">
        {/* 🎬 Hero Section - Video with Play/Pause Controls */}
        <section className="px-4 md:px-16 mb-12">
          <div className="relative w-full h-[75vh] md:h-[85vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
            <video
              ref={videoRef}
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={mainVideo} type="video/mp4" />
            </video>
            
            {/* Play/Pause Button Overlay */}
            <button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-6 transition-all duration-300 z-20"
            >
              {isPlaying ? (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Bottom Overlay with Text */}
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase text-white">
                  The Legacy
                </h1>
                <p className="font-bold tracking-wider uppercase text-gray-300 text-sm md:text-base">
                  Relive the Epistemico Moments
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 📸 Photo Sliders - Width extended for Group Photos */}
        <div className="px-4 md:px-16 space-y-16 pb-24">
          
          {/* Highlights */}
          <ImageSlider
            images={highlights}
            navbarBrown={navbarBrown}
            label="Highlights of Function"
          />

          {/* Chief Guests */}
          <ImageSlider
            images={guests}
            navbarBrown={navbarBrown}
            label="Chief Guests"
          />

          {/* Awards */}
          <ImageSlider
            images={awardsList}
            navbarBrown={navbarBrown}
            label="Awards"
          />

        </div>
      </main>

      <Footer />


    </div>
  );
};

export default Gallery;
