import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Simplified floating animation
  const floatingVariants = {
    floating: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "backOut" },
    },
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) * 0.015,
      y: (e.clientY - rect.top - rect.height / 2) * 0.015
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="pt-44 pb-12 px-4 perspective relative overflow-hidden">
      {/* Simplified background orbs - only 1 instead of 2 */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#a9572f]/10 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: mousePosition.y * 0.3,
          rotateY: mousePosition.x * 0.3,
          perspective: "1200px",
          transformStyle: "preserve-3d"
        }}
        className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden group"
      >
        {/* Simplified Background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 opacity-95 group-hover:opacity-100 transition-opacity duration-500"
        ></motion.div>

        {/* Simplified glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#a9572f]/30 via-transparent to-[#a9572f]/30 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md"
        ></motion.div>

        {/* Content wrapper - optimized */}
        <motion.div
          className="relative backdrop-blur-md bg-gradient-to-br from-amber-50/65 to-orange-50/65 border-4 border-[#a9572f]/40 rounded-[32px] p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-500"
          whileHover={{ scale: 1.008, y: -2 }}
          style={{ willChange: "transform" }}
        >
          {/* Single floating orb - optimized */}
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-[#a9572f]/15 rounded-full blur-2xl pointer-events-none"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{ willChange: "transform" }}
          ></motion.div>

          {/* Content with z-index for layering */}
          <div className="relative z-10">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {/* Logo Section - Optimized 3D */}
              <motion.div
                variants={floatingVariants}
                animate="floating"
                whileHover={{ scale: 1.12, rotate: 8 }}
                className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center relative flex-shrink-0"
                style={{ willChange: "transform" }}
              >
                {/* Simplified animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#a9572f]/30 to-transparent rounded-full blur-xl border-2 border-[#a9572f]/20"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ willChange: "transform" }}
                ></motion.div>

                <motion.img
                  src={logo}
                  alt="Epistemico Logo"
                  className="w-full h-full object-contain drop-shadow-lg relative z-10"
                  whileHover={{ boxShadow: "0 0 25px rgba(169,87,47,0.7)" }}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Text Content Section */}
              <motion.div className="flex-1" variants={itemVariants}>
                <motion.h2
                  variants={titleVariants}
                  className="font-samarkan text-6xl md:text-7xl leading-tight mb-2 text-brownDark font-extrabold"
                >
                  epistemico
                </motion.h2>

                <motion.div className="space-y-4" variants={containerVariants} initial="hidden" animate="visible">
                  <motion.p
                    variants={itemVariants}
                    className="text-3xl md:text-5xl text-brownDark font-extrabold tracking-tight"
                  >
                    वसुधैव कुटुम्बकम्
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center md:items-start gap-1"
                  >
                    <motion.p
                      whileHover={{ scale: 1.08 }}
                      className="text-2xl md:text-3xl font-black text-brownDark font-sans"
                    >
                      17<sup className="text-sm">th</sup> & 18<sup className="text-sm">th</sup>
                    </motion.p>
                    <motion.span
                      whileHover={{ 
                        scale: 1.1, 
                        boxShadow: "0 8px 25px rgba(169,87,47,0.6)",
                      }}
                      className="bg-gradient-to-r from-[#a9572f] to-[#c87a4a] text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg"
                      style={{ willChange: "transform" }}
                    >
                      March 2026
                    </motion.span>
                  </motion.div>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="mt-6 text-brownMid text-sm md:text-base max-w-xl font-medium leading-relaxed"
                >
                  "Where heritage meets the future. Join us for a journey of innovation and tradition."
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}