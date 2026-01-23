import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SplashScreen from "./pages/SplashScreen";

/* 🔹 Page transition variants */
const pageVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

/* 🔹 Animated Routes Wrapper */
function AnimatedRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* HOME / SPLASH */}
        <Route
          path="/"
          element={
            showSplash ? (
              <SplashScreen onEnter={() => setShowSplash(false)} />
            ) : (
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Home />
              </motion.div>
            )
          }
        />

        {/* EVENTS */}
        <Route
          path="/events"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Events />
            </motion.div>
          }
        />

        {/* TEAM */}
        <Route
          path="/team"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Team />
            </motion.div>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Contact />
            </motion.div>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
