import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import splashBg from "../assets/splash-screen.jpeg";

const SplashScreen = ({ onEnter }) => {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      
      {/* BACKGROUND */}
      <img
        src={splashBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENT */}
      {/* Changed justify-center to justify-between to allow spacers to push content */}
      <div className="absolute inset-0 flex flex-col items-center justify-between text-center px-4 sm:px-8 leading-tight">

        {/* TOP SPACER - Ensures symmetry */}
        <div className="flex-1" />

        {/* TOP TEXT GROUP */}
        <div className="flex flex-col gap-1 md:gap-2">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Creative Arts Society
          </motion.p>

          <motion.h2
            className="text-lg sm:text-xl md:text-3xl font-extrabold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Government Mahila Engineering College, Ajmer
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-bold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Presents
          </motion.p>
        </div>

        {/* LOGO & BUTTON AREA */}
        {/* We wrap these to treat them as a single middle unit */}
        <div className="flex flex-col items-center">
          <motion.img
            src={logo}
            alt="logo"
            className="w-44 sm:w-48 md:w-56 lg:w-64 my-2 md:my-1 mx-auto relative z-10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.button
            onClick={onEnter}
            className="px-6 py-2 border-2 border-[#4a2c1a] text-[#4a2c1a] font-bold rounded-full -mt-4 md:-mt-8 relative z-20"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              backgroundColor: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(3px)"
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.07, backgroundColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
        </div>

        {/* BOTTOM TEXT GROUP */}
        <div className="flex flex-col gap-1">
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            वसुधैव कुटुम्बकम्
          </motion.p>

          <motion.p
            className="text-sm md:text-base font-bold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            The World is One Family
          </motion.p>

          <motion.h2
            className="text-xl sm:text-2xl md:text-4xl font-extrabold mt-1 text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            17<sup>th</sup> & 18<sup>th</sup> March 2026
          </motion.h2>
        </div>

        {/* BOTTOM SPACER - Ensures symmetry */}
        <div className="flex-1" />

      </div>
    </div>
  );
};

export default SplashScreen;
