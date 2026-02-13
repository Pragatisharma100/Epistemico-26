import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Asset Imports
import preetiRawatImg from "../assets/team/CAS Heads/preeti-rawat.jpg";
import soniKumariImg from "../assets/team/CAS Heads/soni kumari.jpg";
import anushkaNepalpuriImg from "../assets/team/CAS Heads/anushka-nepalpuri.jpg";
import isheikaPanwarImg from "../assets/team/CAS Heads/isheika-panwar.jpg";
import ananyaMewaraImg from "../assets/team/CAS Heads/ananya-mewara.jpg";
import aayushiTakImg from "../assets/team/CAS Heads/aayushi-tak.jpg";
import namrataSinghImg from "../assets/team/CAS Heads/namrata-singh.jpg";

const contactSections = [
  {
    committee: "INNOVATION COMMITTEE",
    members: [
      { name: "PREETI RAWAT", phone: "9001425841", image: preetiRawatImg },
      { name: "SONI KUMARI", phone: "7877004079", image: soniKumariImg }
    ]
  },
  {
    committee: "TECHNICAL COMMITTEE",
    members: [
      { name: "ANUSHKA NEPALPURI", phone: "7976280650", image: anushkaNepalpuriImg },
      { name: "DISHA CHHIPA", phone: "8824578432", image: "https://via.placeholder.com/80" }
    ]
  },
  {
    committee: "LITERARY COMMITTEE",
    members: [
      { name: "ISHEIKA PANWAR", phone: "9680599608", image: isheikaPanwarImg },
      { name: "ANANYA MEWARA", phone: "8118815761", image: ananyaMewaraImg }
    ]
  },
  {
    committee: "CULTURAL COMMITTEE",
    members: [
      { name: "AAYUSHI TAK", phone: "9664008184", image: aayushiTakImg },
      { name: "NAMRATA SINGH", phone: "8000961678", image: namrataSinghImg }
    ]
  }
];

export default function Contact() {
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%'
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brownDark font-samarkan drop-shadow-sm uppercase">CONTACT US</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactSections.map((section, i) => (
            <div key={i} className="glass-card p-6 rounded-xl hover:bg-white/50 transition-colors duration-300">
              <h2 className="text-[14px] text-center font-bold text-brownMid tracking-[0.2em] mb-6 uppercase border-b border-brownDark/10 pb-2 font-samarkan">
                {section.committee}
              </h2>
              <div className="flex flex-col gap-6">
                {section.members.map((m, j) => (
                  <div key={j} className="flex items-center gap-6 group">
                    <div className="w-20 h-20 rounded-full border-2 border-brownDark/20 overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-white/20">
                      <img src={m.image} alt={m.name} style={imgStyle} />
                    </div>
                    <div>
                      <h3 className="text-[12px] font-bold text-brownDark leading-tight uppercase tracking-wider">
                        {m.name}
                      </h3>
                      <a href={`tel:${m.phone}`} className="text-[11px] text-brownMid font-bold mt-2 block hover:text-brownDark transition-colors">
                        PHONE: {m.phone}
                      </a>
                    </div>
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