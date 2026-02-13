// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Theme from "../components/Theme";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen"> {/* Removed specific bg-center classes to use global CSS */}
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;