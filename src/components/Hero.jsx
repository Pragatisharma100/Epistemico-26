import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    // Increased pt-24 to pt-44 to create significant space below the fixed navbar
    <section className="pt-44 pb-12 px-4"> 
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card max-w-5xl mx-auto rounded-[32px] p-6 md:p-8 border-4 border-[#7a4a2c] shadow-xl hover:scale-[1.01] transition-transform duration-300"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
          
          {/* Logo Section */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          >
            <img 
              src={logo} 
              alt="Epistemico Logo" 
              className="w-full h-full object-contain drop-shadow-xl" 
            />
          </motion.div>

          {/* Text Content Section */}
          <div className="flex-1">
            <h2 className="font-samarkan text-6xl md:text-7xl text-brownDark leading-tight mb-2">
              epistemico
            </h2>
            
            <div className="space-y-4">
              <p className="text-3xl md:text-5xl text-brownDark font-extrabold tracking-tight">
                वसुधैव कुटुम्बकम्
              </p>

              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-2xl md:text-3xl font-black text-brownDark font-sans">
                  17<sup className="text-sm">th</sup> & 18<sup className="text-sm">th</sup>
                </p>
                <span className="bg-[#7a4a2c] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                  March 2026
                </span>
              </div>
            </div>

            <p className="mt-6 text-brownMid text-sm md:text-base max-w-xl font-medium leading-relaxed opacity-90">
              "Where heritage meets the future. Join us for a journey of innovation and tradition."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}