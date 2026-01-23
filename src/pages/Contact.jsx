import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactData = [
  {
    committee: "CULTURAL COMMITTEE",
    leads: [
      { name: "RUPAK SAXENA", phone: "+91 97850 23978", image: "https://via.placeholder.com/150" },
      { name: "TANVI", phone: "+91 84938 71761", image: "https://via.placeholder.com/150" }
    ]
  },
  {
    committee: "INNOVATION COMMITTEE",
    leads: [
      { name: "RISHIKA SAINI", phone: "+91 6375 022 756", image: "https://via.placeholder.com/150" },
      { name: "ISHITA TIWARI", phone: "+91 91193 65922", image: "https://via.placeholder.com/150" }
    ]
  },
  {
    committee: "TECHNICAL COMMITTEE",
    leads: [
      { name: "SHATAKSHI SAINI", phone: "Contact via Website", image: "https://via.placeholder.com/150" },
      { name: "MANVI SAXENA", phone: "Contact via Website", image: "https://via.placeholder.com/150" }
    ]
  },
  {
    committee: "LITERARY COMMITTEE",
    leads: [
      { name: "ISHITA JOHRI", phone: "Contact via Website", image: "https://via.placeholder.com/150" },
      { name: "KRATI JAIN", phone: "Contact via Website", image: "https://via.placeholder.com/150" }
    ]
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brownDark font-samarkan drop-shadow-sm">
            contact information
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {contactData.map((section, index) => (
            /* Restored the standard glass-card class as requested */
            <div 
              key={index} 
              className="glass-card p-5 rounded-3xl flex flex-col items-center transition-all hover:bg-white/50"
            >
              <h2 className="text-lg font-bold text-brownDark font-samarkan mb-5 border-b border-brownDark/10 inline-block px-4 uppercase">
                {section.committee}
              </h2>
              
              <div className="flex justify-around w-full gap-2">
                {section.leads.map((person, pIdx) => (
                  <div key={pIdx} className="flex flex-col items-center group">
                    {/* Compact pill-shaped image frame */}
                    <div className="w-24 h-32 rounded-[2rem] overflow-hidden border border-brownDark/10 mb-2 shadow-sm transform transition-transform group-hover:scale-105">
                      <img 
                        src={person.image} 
                        alt={person.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[12px] font-bold text-brownDark font-samarkan text-center tracking-tight leading-tight">
                      {person.name}
                    </p>
                    <p className="text-[9px] font-semibold text-brownMid mt-0.5">
                      {person.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}