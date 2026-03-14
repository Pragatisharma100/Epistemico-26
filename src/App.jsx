import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Page Imports
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
import Gallery from "./pages/Gallery";
import Passes from "./pages/Passes";

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
      {/* The key={location.pathname} is essential for Framer Motion to detect route changes */}
      <Routes location={location} key={location.pathname}>
        {/* 🔹 SPLASH SCREEN */}
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
              <SplashScreen onEnter={() => navigate("/home")} />
            </motion.div>
          }
        />

        {/* 🔹 HOME PAGE */}
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

        {/* 🔹 GALLERY PAGE */}
        <Route
          path="/gallery"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Gallery />
            </motion.div>
          }
        />

        {/* 🔹 EVENTS & CATEGORIES */}
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
          path="/innovation"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Innovation />
            </motion.div>
          }
        />
        <Route
          path="/innovation/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <InnovationDetail />
            </motion.div>
          }
        />

        {/* TECHNICAL */}
        <Route
          path="/technical"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Technical />
            </motion.div>
          }
        />
        <Route
          path="/technical/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <TechnicalDetail />
            </motion.div>
          }
        />

        {/* LITERARY */}
        <Route
          path="/literary"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Literary />
            </motion.div>
          }
        />
        <Route
          path="/literary/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
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
              transition={{ duration: 0.4 }}
            >
              <Cultural />
            </motion.div>
          }
        />
        <Route
          path="/cultural/:id"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <CulturalDetail />
            </motion.div>
          }
        />

        {/* TEAM & CONTACT */}
        <Route
          path="/team"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Team />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Contact />
            </motion.div>
          }
        />

        {/* 🔹 PASSES PAGE */}
        <Route
          path="/passes"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <Passes />
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
