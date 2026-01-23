import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <motion.header
      className="w-full bg-white/50 backdrop-blur-md border-b-2 border-[#7d1d2a] sticky top-0 z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between gap-3">

        {/* LOGO SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="flex items-center gap-3">

            {/* Logo Image */}
            <motion.img
              src={logo}
              alt="Epistemico Logo"
              className="w-20 h-20 object-contain"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ rotate: 5 }}
            />

            {/* Logo Text */}
            <div className="flex flex-col">
              <motion.div
                className="text-2xl font-bold text-brownDark font-samarkan"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                epistemico
              </motion.div>

              <motion.div
                className="hidden md:block text-[10px] text-brownMid italic font-samarkan"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Vasudhaiva Kutumbakam
              </motion.div>
            </div>

          </Link>
        </motion.div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-semibold text-brownDark">
          <Link to="/" className="hover:text-[#ba6a3a] transition-colors">Home</Link>
          <Link to="/events" className="hover:text-[#ba6a3a] transition-colors">Events</Link>
          <Link to="#" className="hover:text-[#ba6a3a] transition-colors">Gallery</Link>
          <Link to="/team" className="hover:text-[#ba6a3a] transition-colors">Team</Link>
          <Link to="/contact" className="hover:text-[#ba6a3a] transition-colors">Contact</Link>

          <Link
            to="/events"
            className="hidden sm:block px-5 py-1.5 rounded-full bg-[#ba6a3a] text-white text-xs shadow-md hover:scale-105 transition-transform"
          >
            Book Passes
          </Link>
        </nav>

      </div>
    </motion.header>
  );
}
