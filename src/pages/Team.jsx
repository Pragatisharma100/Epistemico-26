import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Asset Imports
import aayushiTakImg from "../assets/team/CAS Heads/aayushi-tak.jpg";
import ananyaMewaraImg from "../assets/team/CAS Heads/ananya-mewara.jpg";
import anushkaNepalpuriImg from "../assets/team/CAS Heads/anushka-nepalpuri.jpg";
import isheikaPanwarImg from "../assets/team/CAS Heads/isheika-panwar.jpg";
import namrataSinghImg from "../assets/team/CAS Heads/namrata-singh.jpg";
import preetiRawatImg from "../assets/team/CAS Heads/preeti-rawat.jpg";
import sakshiFauzdarImg from "../assets/team/CAS Heads/sakshi-fauzdar.jpg";
import sonakshiReniyaImg from "../assets/team/CAS Heads/sonakshi-reniya.jpg";
import soniKumariImg from "../assets/team/CAS Heads/soni kumari.jpg";
import budhilataImg from "../assets/team/CAS Subheads/budhilata.jpg";
import devanshiParasharImg from "../assets/team/CAS Subheads/devanshi-parashar.jpg";
import kirtiSarohiyaImg from "../assets/team/CAS Subheads/kirti-sarohiya.jpg";
import kritikaDadhichImg from "../assets/team/CAS Subheads/kritika-dadhich.jpg";
import kumkumRathoreImg from "../assets/team/CAS Subheads/kumkum-rathore.jpg";
import tanishkaSahuImg from "../assets/team/Technical Team/tanishka-sahu.jpg";
import tishaLalchandaniImg from "../assets/team/Technical Team/tisha-lalchandani.jpg";
import shwetaJacobImg from "../assets/team/Technical Team/shweta-jacob.jpg";
import priyanshiAgarwalImg from "../assets/team/Technical Team/priyanshi-agarwal.jpg";
import yashikaMenghaniImg from "../assets/team/Technical Team/yashika-menghani.jpg";
import bhawanaSharmaImg from "../assets/team/Technical Team/bhawana-sharma.jpg";
import anushkaSharmaImg from "../assets/team/Technical Team/anushka-sharma.jpg";
import niteshNayakImg from "../assets/team/Technical Team/nitesh-nayak.jpg";
import shrutiSethiImg from "../assets/team/PR Team/shruti-sethi.jpg";
import priyanshiJainImg from "../assets/team/PR Team/priyanshi-jain.jpg";
import richaShrivastavaImg from "../assets/team/PR Team/richa-shrivastava.png";
import khushiKhatriImg from "../assets/team/Creative Team/khushi-khatri.jpg";
import nandiniRathoreImg from "../assets/team/Creative Team/nandini-kunwar-rathore.jpg";
import palakMarothiyaImg from "../assets/team/Creative Team/palak-marothiya.jpg";
import ridhimaImg from "../assets/team/Creative Team/ridhima-chakraborty.jpg";
import bhavytaImg from "../assets/team/Creative Team/bhavyta-ramawat.jpg";
import dhwaniImg from "../assets/team/Cultural Team/dhwani-jain.jpg";
import ambikaImg from "../assets/team/Cultural Team/ambika-mathur.jpg";
import aayushiRajImg from "../assets/team/Cultural Team/aayushi-rajguru.jpg";
import titikshaImg from "../assets/team/Cultural Team/titiksha.jpg";
import renuImg from "../assets/team/Cultural Team/renu-rathore.jpg";
import ektaImg from "../assets/team/Groundwork Team/ekta-sharma.jpg";
import lavishkaImg from "../assets/team/Groundwork Team/lavishka-rathore.jpg";
import divyanshiImg from "../assets/team/Groundwork Team/divyanshi-sen.jpg";
import rishitaImg from "../assets/team/Groundwork Team/rishita-gurjar.jpg";
import vratikaImg from "../assets/team/Social Media Team/vratika-kumawat.jpg";
import traptiImg from "../assets/team/Social Media Team/trapti-jain.jpg";
import kritiChauhanImg from "../assets/team/Social Media Team/kriti-chauhan.jpg";

const leadership = [
  { name: "GARGI SHARMA", role: "PRESIDENT", image: "https://via.placeholder.com/150" },
  { name: "HIMANSHI RATHORE", role: "VICE PRESIDENT", image: "https://via.placeholder.com/150" }
];

const casCommittees = [
  {
    title: "TECHNICAL COMMITTEE",
    members: [
      { name: "DISHA CHHIPA", role: "HEAD", image: "https://via.placeholder.com/80" },
      { name: "ANUSHKA NEPALPURI", role: "HEAD", image: anushkaNepalpuriImg },
      { name: "KRITIKA DADHICH", role: "SUB-HEAD", image: kritikaDadhichImg }
    ]
  },
  {
    title: "CULTURAL COMMITTEE",
    members: [
      { name: "NAMRATA SINGH", role: "HEAD", image: namrataSinghImg },
      { name: "SONAKSHI RENIYA", role: "HEAD", image: sonakshiReniyaImg },
      { name: "AAYUSHI TAK", role: "HEAD", image: aayushiTakImg },
      { name: "KUMKUM RATHORE", role: "SUB-HEAD", image: kumkumRathoreImg },
      { name: "KIRTI SAROHIYA", role: "SUB-HEAD", image: kirtiSarohiyaImg }
    ]
  },
  {
    title: "INNOVATION COMMITTEE",
    members: [
      { name: "ASTHA SHARMA", role: "HEAD", image: "https://via.placeholder.com/80" },
      { name: "PREETI RAWAT", role: "HEAD", image: preetiRawatImg },
      { name: "SONI KUMARI", role: "HEAD", image: soniKumariImg },
      { name: "HARSHITA GUPTA", role: "SUB-HEAD", image: "https://via.placeholder.com/80" }
    ]
  },
  {
    title: "LITERARY COMMITTEE",
    members: [
      { name: "SAKSHI FAUZDAR", role: "HEAD", image: sakshiFauzdarImg },
      { name: "ANANYA MEWARA", role: "HEAD", image: ananyaMewaraImg },
      { name: "ISHEIKA PANWAR", role: "HEAD", image: isheikaPanwarImg },
      { name: "DEVANSHI PARASHAR", role: "SUB-HEAD", image: devanshiParasharImg },
      { name: "BUDHILATA", role: "SUB-HEAD", image: budhilataImg }
    ]
  }
];

const executiveTeams = [
  {
    title: "TECHNICAL EXECUTIVES",
    members: [
      { name: "TANISHKA SAHU", role: "4TH YEAR", image: tanishkaSahuImg },
      { name: "TISHA LALCHANDANI", role: "4TH YEAR", image: tishaLalchandaniImg },
      { name: "PRAGATI SHARMA", role: "4TH YEAR", image: "https://via.placeholder.com/80" },
      { name: "SHWETA JACOB", role: "4TH YEAR", image: shwetaJacobImg },
      { name: "PRIYANSHI AGARWAL", role: "3RD YEAR", image: priyanshiAgarwalImg },
      { name: "YASHIKA MENGHANI", role: "3RD YEAR", image: yashikaMenghaniImg },
      { name: "BHAWANA SHARMA", role: "4TH YEAR", image: bhawanaSharmaImg },
      { name: "ANUSHKA SHARMA", role: "4TH YEAR", image: anushkaSharmaImg },
      { name: "NITESH NAYAK", role: "4TH YEAR", image: niteshNayakImg },
      { name: "ARSHPREET KAUR", role: "4TH YEAR", image: "https://via.placeholder.com/80" }
    ]
  },
  {
    title: "PUBLIC RELATIONS (PR)",
    members: [
      { name: "SHRUTI SETHI", role: "4TH YEAR", image: shrutiSethiImg },
      { name: "RONAK MEEL", role: "4TH YEAR", image: "https://via.placeholder.com/80" },
      { name: "PRIYANSHI JAIN", role: "4TH YEAR", image: priyanshiJainImg },
      { name: "ANJALI GUPTA", role: "4TH YEAR", image: "https://via.placeholder.com/80" },
      { name: "RICHA SHRIVASTAVA", role: "3RD YEAR", image: richaShrivastavaImg }
    ]
  },
  {
    title: "CREATIVE EXECUTIVES",
    members: [
      { name: "KHUSHI KHATRI", role: "4TH YEAR", image: khushiKhatriImg },
      { name: "NANDINI RATHORE", role: "4TH YEAR", image: nandiniRathoreImg },
      { name: "PALAK MAROTHIYA", role: "3RD YEAR", image: palakMarothiyaImg },
      { name: "RIDHIMA CHAKRABORTY", role: "3RD YEAR", image: ridhimaImg },
      { name: "BHAVYTA RAMAWAT", role: "3RD YEAR", image: bhavytaImg }
    ]
  },
  {
    title: "CULTURAL EXECUTIVES",
    members: [
      { name: "DHWANI JAIN", role: "4TH YEAR", image: dhwaniImg },
      { name: "AMBIKA MATHUR", role: "4TH YEAR", image: ambikaImg },
      { name: "AAYUSHI RAJGURU", role: "4TH YEAR", image: aayushiRajImg },
      { name: "TITIKSHA", role: "3RD YEAR", image: titikshaImg },
      { name: "RENU RATHORE", role: "3RD YEAR", image: renuImg }
    ]
  },
  {
    title: "GROUNDWORK EXECUTIVES",
    members: [
      { name: "EKTA SHARMA", role: "4TH YEAR", image: ektaImg },
      { name: "LAVISHKA RATHORE", role: "4TH YEAR", image: lavishkaImg },
      { name: "DIVYANSHI SEN", role: "3RD YEAR", image: divyanshiImg },
      { name: "GARIMA RAWAT", role: "3RD YEAR", image: "https://via.placeholder.com/80" },
      { name: "RISHITA GURJAR", role: "3RD YEAR", image: rishitaImg }
    ]
  },
  {
    title: "SOCIAL MEDIA / OUTREACH",
    members: [
      { name: "SWATI ANAND", role: "4TH YEAR", image: "https://via.placeholder.com/80" },
      { name: "VRATIKA KUMAWAT", role: "3RD YEAR", image: vratikaImg },
      { name: "TRAPTI JAIN", role: "3RD YEAR", image: traptiImg },
      { name: "ANUSHKA CHOUDHARY", role: "3RD YEAR", image: "https://via.placeholder.com/80" },
      { name: "KRITI CHAUHAN", role: "3RD YEAR", image: kritiChauhanImg }
    ]
  }
];

export default function Team() {
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%'
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* pt-44 creates consistent spacing below navbar */}
      <main className="max-w-6xl mx-auto px-4 pt-44 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brownDark font-samarkan drop-shadow-sm uppercase">EPISTEMICO TEAM'26</h1>
        </div>

        {/* Leadership Section */}
        <div className="flex justify-center gap-6 mb-12">
          {leadership.map((leader, i) => (
            <div key={i} className="glass-card w-48 p-4 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300 border-2 border-brownMid/20">
              <div className="w-24 h-28 rounded-full border-2 border-brownDark/30 mb-3 overflow-hidden shadow-md bg-white/40">
                <img src={leader.image} alt={leader.name} style={imgStyle} />
              </div>
              <h2 className="text-sm font-bold text-brownDark text-center leading-tight">{leader.name}</h2>
              <p className="text-[9px] text-brownMid font-extrabold uppercase tracking-widest mt-1">{leader.role}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-brownDark font-samarkan border-b-2 border-brownDark/20 inline-block px-10">CAS COMMITTEE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {casCommittees.map((committee, i) => (
            <div key={i} className="glass-card p-4 rounded-xl hover:bg-white/50 transition-colors duration-300 border-2 border-brownMid/20">
              <h3 className="text-[11px] text-center font-bold text-brownMid tracking-[0.2em] mb-4 uppercase border-b border-brownDark/5 pb-1">{committee.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {committee.members.map((m, j) => (
                  <div key={j} className="flex flex-col items-center group w-20">
                    <div className="w-14 h-14 rounded-full border-2 border-brownDark/20 mb-2 group-hover:scale-110 transition-transform overflow-hidden shadow-sm bg-white/40">
                      <img src={m.image} alt={m.name} style={imgStyle} />
                    </div>
                    <p className="text-[8px] font-bold text-brownDark text-center leading-tight">{m.name}</p>
                    <p className="text-[7px] text-brownMid font-bold uppercase">({m.role})</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-brownDark font-samarkan border-b-2 border-brownDark/20 inline-block px-10">EXECUTIVE TEAM</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {executiveTeams.map((team, i) => (
            <div key={i} className="glass-card p-4 rounded-xl hover:bg-white/50 transition-colors duration-300 border-2 border-brownMid/20">
              <h3 className="text-[11px] font-bold text-brownMid tracking-[0.2em] mb-4 text-center uppercase border-b border-brownDark/10 pb-1">{team.title}</h3>
              <div className="grid grid-cols-4 gap-3">
                {team.members.map((m, j) => (
                  <div key={j} className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-full border-2 border-brownDark/10 mb-2 bg-white/20 overflow-hidden group-hover:scale-110 transition-transform shadow-sm bg-white/40">
                      <img src={m.image || "https://via.placeholder.com/80"} alt={m.name} style={imgStyle} />
                    </div>
                    <p className="text-[8px] font-bold text-brownDark leading-tight">{m.name}</p>
                    <p className="text-[7px] text-brownMid mt-1 font-bold uppercase">{m.role}</p>
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