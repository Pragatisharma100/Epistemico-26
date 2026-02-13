import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" }, // Added Gallery option
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card flex items-center justify-between px-8 py-4 rounded-full border-2 border-brownMid/30 shadow-2xl backdrop-blur-xl bg-white/40"
      >
        {/* Brand Section */}
        <div className="flex flex-col items-start">
          <h1 className="font-samarkan text-3xl text-brownDark leading-none tracking-wider">
            epistemico
          </h1>
          <span className="font-samarkan text-[10px] text-brownMid tracking-[0.2em] mt-1 uppercase">
            Vasudhaiva Kutumbakam
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative group py-1"
              >
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isActive ? "text-brownDark" : "text-brownMid group-hover:text-brownDark"
                }`}>
                  {link.name}
                </span>
                
                {/* Catchy Animated Underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-brownDark"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {!isActive && (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brownMid transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Updated Action Button Name */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brownDark text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter shadow-lg hover:bg-brownMid transition-colors"
        >
          Book Passes
        </motion.button>
      </motion.div>
    </nav>
  );
}