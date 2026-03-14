import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Asset Imports - Leadership
import gargiSharmaImg from "../assets/team/CAS Heads/gargi-sharma.jpg";
import himanshiRathoreImg from "../assets/team/CAS Heads/himanshi-rathore.jpg";

// Asset Imports - Committee Heads
import preetiRawatImg from "../assets/team/CAS Heads/preeti-rawat.jpg";
import soniKumariImg from "../assets/team/CAS Heads/soni kumari.jpg";
import anushkaNepalpuriImg from "../assets/team/CAS Heads/anushka-nepalpuri.jpg";
import isheikaPanwarImg from "../assets/team/CAS Heads/isheika-panwar.jpg";
import ananyaMewaraImg from "../assets/team/CAS Heads/ananya-mewara.jpg";
import aayushiTakImg from "../assets/team/CAS Heads/aayushi-tak.jpg";
import namrataSinghImg from "../assets/team/CAS Heads/namrata-singh.jpg";
import dishaChhipaImg from "../assets/team/CAS Heads/disha-chhipa.jpg";
import sonakshiReniyaImg from "../assets/team/CAS Heads/sonakshi-reniya.jpg";

const leadership = [
  { name: "GARGI SHARMA", role: "PRESIDENT", phone: "6375378484", image: gargiSharmaImg },
  { name: "HIMANSHI RATHORE", role: "VICE PRESIDENT", phone: "8690219281", image: himanshiRathoreImg }
];

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
      { name: "DISHA CHHIPA", phone: "8824578432", image: dishaChhipaImg }
    ]
  },
  {
    committee: "LITERARY COMMITTEE",
    members: [
      { name: "ISHEIKA PANWAR", phone: "9680599608", image: isheikaPanwarImg },
      { name: "ANANYA MEWARA", phone: "8118815761", image: ananyaMewaraImg },
    ]
  },
  {
    committee: "CULTURAL COMMITTEE",
    members: [
      { name: "AAYUSHI TAK", phone: "9664008184", image: aayushiTakImg },
      { name: "NAMRATA SINGH", phone: "8000961678", image: namrataSinghImg },
      { name: "SONAKSHI RENIYA", phone: "CONTACT HEADS", image: sonakshiReniyaImg }
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
      <main className="max-w-6xl mx-auto px-4 pt-44 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brownDark font-samarkan drop-shadow-sm uppercase tracking-widest">CONTACT US</h1>
        </div>

        {/* Leadership Section - Centered and Aesthetic */}
        <div className="flex flex-col items-center mb-16">
          <div className="glass-card p-8 rounded-2xl border-2 border-brownMid/30 max-w-2xl w-full">
            <h2 className="text-[16px] text-center font-bold text-brownMid tracking-[0.3em] mb-8 uppercase border-b-2 border-brownDark/10 pb-2 font-samarkan">
              CAS HEAD 
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              {leadership.map((leader, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-full border-4 border-brownDark/20 overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500 bg-white/20">
                    <img src={leader.image} alt={leader.name} style={imgStyle} />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-[13px] font-bold text-brownDark uppercase tracking-wider">{leader.name}</h3>
                    <p className="text-[10px] text-brownMid font-extrabold tracking-tighter uppercase mb-2">{leader.role}</p>
                    <a href={`tel:${leader.phone}`} className="text-[11px] bg-brownDark/10 px-3 py-1 rounded-full text-brownDark font-bold hover:bg-brownDark hover:text-white transition-all">
                      {leader.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactSections.map((section, i) => (
            <div key={i} className="glass-card p-6 rounded-xl hover:bg-white/50 transition-colors duration-300 border-2 border-brownMid/20">
              <h2 className="text-[14px] text-center font-bold text-brownMid tracking-[0.2em] mb-6 uppercase border-b border-brownDark/10 pb-2 font-samarkan">
                {section.committee}
              </h2>
              <div className="flex flex-col gap-6">
                {section.members.map((m, j) => (
                  <div key={j} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full border-2 border-brownDark/20 overflow-hidden shadow-sm group-hover:scale-105 transition-transform bg-white/20">
                      <img src={m.image} alt={m.name} style={imgStyle} />
                    </div>
                    <div>
                      <h3 className="text-[12px] font-bold text-brownDark leading-tight uppercase tracking-wider">
                        {m.name}
                      </h3>
                      <a href={`tel:${m.phone}`} className="text-[11px] text-brownMid font-bold mt-1 block hover:text-brownDark transition-colors">
                        PHONE: {m.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
