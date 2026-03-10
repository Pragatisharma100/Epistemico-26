import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import h1 from "../assets/gallery-highlight/h1.jpg";
import h2 from "../assets/gallery-highlight/h2.jpg";
import h3 from "../assets/gallery-highlight/h3.jpg";
import h4 from "../assets/gallery-highlight/h4.jpg";
import h5 from "../assets/gallery-highlight/h5.jpg";
import legacyVideo from "../assets/gallery-highlight/highlight_video.mp4";

const slides = [
  { type: "video", src: legacyVideo },
  { type: "image", src: h1 },
  { type: "image", src: h2 },
  { type: "image", src: h3 },
  { type: "image", src: h4 },
  { type: "image", src: h5 },
];

export default function Featured() {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // State for audio
  const intervalRef = useRef(null);

  const startAuto = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  return (
    <section className="px-4 md:px-8 py-12 pt-40">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold text-brownDark mb-2 flex items-center gap-3"
        >
          Epistemico Highlights
          <a href="/gallery" className="text-[#a9572f] hover:text-[#7a4a2c] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.h3>

        <div className="relative" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="relative rounded-xl overflow-hidden border-2 border-white/10 shadow-lg bg-white/5 h-80 md:h-96">
                {slides[current].type === "video" ? (
                  <>
                    <video 
                      src={slides[current].src} 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      muted={isMuted} // Controlled by state
                      loop 
                      playsInline 
                    />
                    {/* Mute/Unmute Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents triggering other clicks
                        setIsMuted(!isMuted);
                      }}
                      className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all"
                    >
                      {isMuted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9l-5 5H2v-8h2L9 5V9z"></path><path d="M17.07 16.24a5 5 0 0 0 0-8.48"></path></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                      )}
                    </button>
                  </>
                ) : (
                  <img src={slides[current].src} alt={`featured-${current}`} className="w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-4 bottom-4 z-10">
                  <span className="px-3 py-1 text-white bg-[#7a4a2c]/80 rounded-full text-sm font-bold">Highlight</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-full bg-[#7a4a2c] text-white hover:bg-[#a9572f] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === current ? "bg-[#a9572f] w-6" : "bg-[#7a4a2c]/50 w-2 hover:bg-[#7a4a2c]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-full bg-[#7a4a2c] text-white hover:bg-[#a9572f] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
