import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card flex items-center justify-between px-6 py-4 rounded-full border-2 border-brownMid/30 shadow-2xl backdrop-blur-xl bg-white/40"
      >

        {/* Brand */}
        <div className="flex flex-col items-start">
          <h1 className="font-samarkan text-3xl text-brownDark leading-none tracking-wider">
            epistemico
          </h1>
          <span className="font-samarkan text-[10px] text-brownMid tracking-[0.2em] mt-1 uppercase">
            Vasudhaiva Kutumbakam
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link key={link.path} to={link.path} className="relative group py-1">
                <span className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  isActive ? "text-brownDark" : "text-brownMid group-hover:text-brownDark"
                }`}>
                  {link.name}
                </span>

                <motion.div 
                  className="absolute bottom-0 left-0 h-[2px] bg-brownDark"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : 0 }}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-brownDark text-white px-6 py-2 rounded-full text-xs font-bold uppercase shadow-lg hover:bg-brownMid"
        >
          Book Passes
        </motion.button>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          {menuOpen ? (
            <X size={28} onClick={()=>setMenuOpen(false)} className="cursor-pointer text-brownDark"/>
          ) : (
            <Menu size={28} onClick={()=>setMenuOpen(true)} className="cursor-pointer text-brownDark"/>
          )}
        </div>

      </motion.div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 glass-card rounded-2xl border border-brownMid/30 bg-white/90 backdrop-blur-xl shadow-xl py-6"
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={()=>setMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-brownDark"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-brownDark text-white px-6 py-2 rounded-full text-xs font-bold uppercase">
              Book Passes
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
