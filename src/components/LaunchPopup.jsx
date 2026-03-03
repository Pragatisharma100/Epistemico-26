import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function LaunchPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup once when component mounts
    setShowPopup(true);
  }, []);

  return (
    <AnimatePresence>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative z-10 max-w-md w-full"
          >
            {/* Gradient background orbs */}
            <motion.div
              className="absolute -top-20 -left-20 w-40 h-40 bg-[#a9572f]/5 rounded-full blur-3xl"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#7a4a2c]/5 rounded-full blur-3xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            ></motion.div>

            {/* Content */}
            <div className="relative bg-gradient-to-br from-[#a9572f]/10 via-[#7a4a2c]/8 to-[#a9572f]/10 backdrop-blur-md border-2 border-[#a9572f]/40 rounded-3xl p-8 md:p-10 shadow-2xl">
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white hover:text-yellow-200 transition-colors"
              >
                <X size={28} />
              </motion.button>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-center font-samarkan text-white drop-shadow-lg mb-4"
              >
                Upcoming Epistemico
              </motion.h2>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl md:text-3xl text-white font-bold text-center mb-6 drop-shadow-lg"
              >
                Are u excited guys? 🎉
              </motion.p>

              {/* Date */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-white font-semibold text-center mb-8 drop-shadow-lg"
              >
                Epistemico – 17 & 18 March 2026
              </motion.p>

              {/* Animated border effect */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-[#e6a86e] to-transparent"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(169,87,47,0.6)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPopup(false)}
                className="w-full mt-8 py-3 bg-gradient-to-r from-[#a9572f] to-[#c87a4a] text-white font-bold text-lg rounded-full hover:shadow-lg transition-all"
              >
                Let's Go! 🚀
              </motion.button>

              {/* Decorative text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xs text-yellow-100/70 text-center mt-4"
              >
                Vasudhaiva Kutumbakam - The World is One Family
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
