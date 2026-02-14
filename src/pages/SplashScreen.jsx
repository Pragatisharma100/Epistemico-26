import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import splashBg from "../assets/splash-screen.jpeg";

const SplashScreen = ({ onEnter }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* BACKGROUND */}
      <img
        src={splashBg}
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center -translate-x-6 px-4 leading-tight">
        {/* TOP TEXT */}
        {/* TOP TEXT */}
        <div className="mt-10 translate-x-4 md:translate-x-0">
          <motion.p
            className="text-2xl md:text-2xl font-extrabold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Creative Arts Society
          </motion.p>

          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-[#4a2c1a] translate-x-2 md:translate-x-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Government Mahila Engineering College, Ajmer
          </motion.h2>

          <motion.p
            className="text-xl md:text-xl font-bold text-[#4a2c1a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Presents
          </motion.p>
        </div>

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-56 md:w-56 lg:w-64 my-2 mx-auto -translate-x-3 md:translate-x-0 -mt-2"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* SANSKRIT (FIXED) */}
        <motion.p
          className="text-4xl font-extrabold text-[#4a2c1a] -mt-9 translate-x-4 md:translate-x-0
"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          वसुधैव कुटुम्बकम्
        </motion.p>

        {/* ENGLISH LINE */}
        <motion.p
          className="text-base font-bold text-[#4a2c1a] mt-1.5 translate-x-4 md:translate-x-0
"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          The World is One Family
        </motion.p>

        {/* DATE */}
        <motion.h2
          className="text-2xl md:text-4xl font-extrabold mt-1 text-[#4a2c1a] translate-x-4 md:translate-x-0
"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          17<sup>th</sup> & 18<sup>th</sup> March 2026
        </motion.h2>

        {/* CLICK HERE */}
        <motion.p
          onClick={onEnter}
          className="mt-1 text-lg font-bold text-[#4a2c1a] cursor-pointer translate-x-4 md:translate-x-0
"
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          whileHover={{ scale: 1.05 }}
        >
          Click Here
        </motion.p>
      </div>
    </div>
  );
};

export default SplashScreen;
