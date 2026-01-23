import Navbar from "../components/Navbar"; //
import Hero from "../components/Hero"; //
import About from "../components/About"; //
import Footer from "../components/Footer"; //
import Theme from "../components/Theme"; //
import Sponsors from "../components/Sponsors"; //


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pb-10">
        <Hero/>
        <About />
        <Theme />
        <Sponsors />
        <Footer />
      </main>
    </div>
  );
}