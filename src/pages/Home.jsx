import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Theme from "../components/Theme";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import LaunchPopup from "../components/LaunchPopup";
import EventsPreview from "../components/EventsPreview";

// animated background component
import { motion } from "framer-motion";

const AnimatedBackground = () => (
  <motion.div
    className="absolute inset-0 -z-10"
    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
    transition={{ duration: 20, loop: Infinity, ease: "linear" }}
    style={{
      background: "linear-gradient(90deg, rgba(122,74,44,0.2), rgba(169,87,47,0.2), rgba(122,74,44,0.2))",
      backgroundSize: "200% 200%",
    }}
  />
);

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <LaunchPopup />
      <Navbar />
      <Featured />
      <Hero />
      <EventsPreview />
      <About />
      <Theme />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;