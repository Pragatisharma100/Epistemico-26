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
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

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
                  <video src={slides[current].src} className="w-full h-full object-cover" autoPlay muted loop playsInline />
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
