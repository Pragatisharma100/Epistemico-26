import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const SplashScreen = ({ onEnter }) => {
  return (
    <div className="splash-epic">

      {/* Light sweep */}
      <div className="splash-sweep" />

      {/* LOGO FIRST */}
      <motion.img
        src={logo}
        alt="Epistemico Logo"
        className="splash-logo-epic"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* TITLE AFTER LOGO */}
      <motion.h1
        className="splash-title-epic"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        Welcome to Epistemico
      </motion.h1>

      {/* SUBTITLE LAST */}
      <motion.p
        className="splash-sub-epic"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        The Annual Cultural & Technical Fest
      </motion.p>

      {/* CLICK HERE BUTTON */}
      <motion.button
        onClick={onEnter}
        className="splash-enter-btn"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Click Here
      </motion.button>

    </div>
  );
};

export default SplashScreen;
