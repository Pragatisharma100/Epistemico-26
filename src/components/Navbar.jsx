import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl mb-12">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card flex items-center justify-between px-10 py-4 rounded-full border-2 border-brownMid/30 shadow-2xl backdrop-blur-xl bg-white/40"
      >
        {/* Logo Section */}
        <div className="flex flex-col items-start cursor-default">
          {/* Kept 'epistemico' word as previously styled */}
          <h1 className="font-samarkan text-3xl text-brownDark leading-none tracking-wider">
            epistemico'26
          </h1>
          
          {/* Updated tagline to match 'HOME' style: Uppercase, font-sans, wide tracking */}
          <span className="text-[10px] text-brownMid tracking-[0.3em] mt-1 font-bold uppercase font-sans">
            vasudhaiva kutumbakam
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  isActive ? "text-brownDark" : "text-brownMid hover:text-brownDark"
                }`}
              >
                {link.name}
                {/* Active/Hover underline */}
                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brownDark transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <button className="bg-brownDark text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brownMid transition-colors shadow-md">
          Book Passes
        </button>
      </motion.div>
    </nav>
  );
}