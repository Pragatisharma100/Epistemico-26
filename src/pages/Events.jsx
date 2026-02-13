import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import your local images
import techImg from "../assets/tech.jpeg"; 
import culturalImg from "../assets/cultural.jpg";
import innovationImg from "../assets/innovation.jpeg";
import literaryImg from "../assets/literary.jpg";

const eventsData = [
  {
    title: "Technical Committee",
    description: "Gear up for an exhilarating Tech Quiz that transcends the ordinary, testing not just what you know, but how well you apply it.",
    image: techImg
  },
  {
    title: "Cultural Committee",
    description: "Elevate your voice and join the symphony of emotions at 'HARMONY HYPE,' where singing isn't just an art; it's a journey through the soul.",
    image: culturalImg
  },
  {
    title: "Innovation Committee",
    description: "कला akriti : Indulge in a canvas of love as 'कला akriti' unveils cultural expressions, each stroke whispering tales of passion.",
    image: innovationImg
  },
  {
    title: "Literary Committee",
    description: "LITERARY HEAVEN: Escape to 'Literary Heaven', a celestial space where books are gateways and words from constellations.",
    image: literaryImg
  }
];

export default function Events() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* pt-44 creates the space between navbar and content */}
      <main className="max-w-7xl mx-auto px-4 pt-44 pb-12">
        <h1 className="text-4xl font-extrabold text-center text-brownDark font-samarkan mb-12 drop-shadow-md">
          Fest Events
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {eventsData.map((event, index) => (
            <div key={index} className="glass-card group rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-xl flex flex-col h-full border-2 border-brownMid/20">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-2 left-3 text-lg font-bold text-white font-samarkan leading-tight">
                  {event.title}
                </h3>
              </div>
              <div className="p-3 flex-grow">
                <p className="text-[11px] text-brownMid leading-snug italic">
                  "{event.description}"
                </p>
              </div>
              <div className="p-3 border-t border-white/20">
                <button className="w-full py-1.5 rounded-full bg-[#a9572f] text-white font-bold text-[10px] uppercase tracking-wider hover:bg-[#8b4524] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}