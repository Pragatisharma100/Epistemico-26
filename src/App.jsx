import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Innovation from "./pages/Innovation";
import InnovationDetail from "./pages/InnovationDetail";
import Technical from "./pages/Technical";
import TechnicalDetail from "./pages/TechnicalDetail";
import Literary from "./pages/Literary";
import LiteraryDetail from "./pages/LiteraryDetail";
import Cultural from "./pages/Cultural";
import CulturalDetail from "./pages/CulturalDetail";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import SplashScreen from "./pages/SplashScreen";

/* 🔹 Page transition variants */
const pageVariants = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
};

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        {/* 🔹 SPLASH SCREEN (Root Path) */}
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              {/* Navigate to /home when "Explore" is clicked */}
              <SplashScreen onEnter={() => navigate("/home")} />
            </motion.div>
          }
        />

        {/* 🔹 HOME PAGE (Separate Path for History Support) */}
        <Route
          path="/home"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Home />
            </motion.div>
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

        {/* INNOVATION */}
        <Route
          path="/innovation/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Innovation />
            </motion.div>
          }
        />

        {/* INNOVATION - DETAIL */}
        <Route
          path="/innovation/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <InnovationDetail />
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

        {/* TECHNICAL */}
        <Route
          path="/technical/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Technical />
            </motion.div>
          }
        />

        {/* TECHNICAL - DETAIL */}
        <Route
          path="/technical/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TechnicalDetail />
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

        {/* LITERARY */}
        <Route
          path="/literary/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Literary />
            </motion.div>
          }
        />

        {/* LITERARY - DETAIL */}
        <Route
          path="/literary/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <LiteraryDetail />
            </motion.div>
          }
        />

        {/* CULTURAL */}
        <Route
          path="/cultural"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Cultural />
            </motion.div>
          }
        />

        {/* CULTURAL - DETAIL */}
        <Route
          path="/cultural/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <CulturalDetail />
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