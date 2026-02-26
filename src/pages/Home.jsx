import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Theme from "../components/Theme";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
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