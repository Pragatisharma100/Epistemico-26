import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Users, Lightbulb, BookOpen } from "lucide-react";

// 🔹 Dynamic Content
const aboutData = {
  title: "About Epistemico",
  content: `Epistemico is the premier annual techno-cultural fest of GWECA, built upon a strong tradition 
that traces back to the college’s foundation. Marking its 12th edition, the fest has emerged as the institution’s 
most celebrated and eagerly awaited event, curated by the Creative Arts Society. 

Serving as a vibrant blend of technology, culture, and imagination, Epistemico creates a dynamic environment where concepts turn into creations 
and talent takes center stage. Electrifying performances, skill-driven technical contests, and thought-provoking 
engagements combine to deliver an atmosphere filled with energy and exploration. 

Organized through four core domains—Technical, Cultural, Innovation, and Literary—the fest draws enthusiastic participation 
across regions and continues to inspire lasting impact.`
};


export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const iconBounce = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) * 0.02,
      y: (e.clientY - rect.top - rect.height / 2) * 0.02
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">

      {/* About Card - Enhanced with 3D and Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
          perspective: "1200px"
        }}
        className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden group"
      >
        {/* Background gradient layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#a9572f] via-[#c87a4a] to-[#a9572f] opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(169,87,47,0.3)",
              "0 0 40px rgba(169,87,47,0.5)",
              "0 0 20px rgba(169,87,47,0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>

        {/* Content wrapper with glass effect */}
        <motion.div
          className="relative backdrop-blur-md bg-gradient-to-br from-amber-50/55 to-orange-50/55 border-2 border-[#a9572f]/30 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-[#a9572f]/10 rounded-full filter blur-3xl"
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          ></motion.div>

          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 bg-[#7a4a2c]/10 rounded-full filter blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>

          {/* Content - relative z-index for layering */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl font-extrabold font-samarkan mb-2 text-brownDark"
            >
              {aboutData.title}
            </motion.h2>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              className="h-1 w-16 bg-gradient-to-r from-[#a9572f] to-transparent rounded-full mb-6 origin-left"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="mt-4 text-sm md:text-base text-brownMid leading-relaxed font-medium"
            >
              <p className={isExpanded ? "whitespace-pre-line" : "line-clamp-3"}>
                {aboutData.content}
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0 15px 40px rgba(169,87,47,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-[#a9572f] to-[#c87a4a] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/btn"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#7a4a2c] to-[#a9572f] opacity-0 group-hover/btn:opacity-100 transition-opacity"
                layoutId="btn-bg"
              ></motion.span>
              <span className="relative z-10">
                {isExpanded ? "Show Less" : "Learn More"}
              </span>
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}