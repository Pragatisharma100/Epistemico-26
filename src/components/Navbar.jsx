import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl mb-12">
      {/* Main Navbar Container */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card flex items-center justify-between px-6 md:px-10 py-4 rounded-full border-2 border-brownMid/30 shadow-2xl backdrop-blur-xl bg-white/40"
      >
        {/* Logo Section - Font style from Code 2 */}
        <div className="flex flex-col items-start cursor-default">
          <h1 className="font-samarkan text-3xl text-brownDark leading-none tracking-wider">
            Epistemico'26
          </h1>
          {/* Tagline: Matches the "HOME" link font style from Code 2 */}
          <span className="text-[10px] text-brownMid tracking-[0.3em] mt-1 font-bold uppercase font-sans">
            vasudhaiva kutumbakam
          </span>
        </div>

        {/* DESKTOP Navigation Links - Animation/Styles from Code 2 */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  isActive
                    ? "text-brownDark"
                    : "text-brownMid hover:text-brownDark"
                }`}
              >
                {link.name}
                {/* Underline effect from Code 2 */}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-brownDark transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Action Button - Styles from Code 2 */}
        <div className="hidden md:block">
          <Link to="/passes">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brownDark text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brownMid transition-colors shadow-md"
            >
              Book Passes
            </motion.button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER - From Code 1 */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-brownDark focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* MOBILE DROPDOWN MENU - From Code 1 with Font Styles from Code 2 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 glass-card rounded-2xl border border-brownMid/30 bg-white/90 backdrop-blur-xl shadow-xl py-6"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-[0.2em] font-sans ${
                    location.pathname === link.path
                      ? "text-brownDark"
                      : "text-brownMid"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/passes" onClick={() => setMenuOpen(false)}>
                <button className="bg-brownDark text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-md">
                  Book Passes
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
