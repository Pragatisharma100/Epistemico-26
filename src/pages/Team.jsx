import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Updated Leadership from CAS 2025 Document
const leadership = [
  { name: "GARGI SHARMA", role: "PRESIDENT", image: "https://via.placeholder.com/150" }, // 
  { name: "HIMANSHI RATHORE", role: "VICE PRESIDENT", image: "https://via.placeholder.com/150" } // 
];

// Updated CAS Committee (Heads and Sub-Heads)
const casCommittees = [
  {
    title: "TECHNICAL COMMITTEE",
    members: [
      { name: "TANISHA JAIN", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "DISHA CHHIPA", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "ANUSHKA NEPALPURI", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "KRITIKA DADHICH", role: "SUB-HEAD", image: "https://via.placeholder.com/80" } // 
    ]
  },
  {
    title: "CULTURAL COMMITTEE",
    members: [
      { name: "NAMRATA SINGH", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "SONAKSHI RENIYA", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "AAYUSHI TAK", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "KUMKUM RATHORE", role: "SUB-HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "KIRTI SAROHIYA", role: "SUB-HEAD", image: "https://via.placeholder.com/80" } // 
    ]
  },
  {
    title: "INNOVATION COMMITTEE",
    members: [
      { name: "ASTHA SHARMA", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "PREETI RAWAT", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "SONI KUMARI", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "HARSHITA GUPTA", role: "SUB-HEAD", image: "https://via.placeholder.com/80" } // 
    ]
  },
  {
    title: "LITERARY COMMITTEE",
    members: [
      { name: "SAKSHI FAUZDAR", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "ANANYA MEWARA", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "ISHEIKA PANWAR", role: "HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "DEVANSHI PARASHAR", role: "SUB-HEAD", image: "https://via.placeholder.com/80" }, // 
      { name: "BUDHILATA", role: "SUB-HEAD", image: "https://via.placeholder.com/80" } // 
    ]
  }
];

// Re-integrated Full Executive Team
const executiveTeams = [
  {
    title: "TECHNICAL EXECUTIVES",
    members: [
      { name: "TANISHKA SAHU", role: "4TH YEAR" }, // 
      { name: "TISHA LALCHANDANI", role: "4TH YEAR" }, // 
      { name: "PRAGATI SHARMA", role: "4TH YEAR" }, // 
      { name: "SHWETA JACOB", role: "4TH YEAR" }, // 
      { name: "PRIYANSHI AGARWAL", role: "3RD YEAR" }, // 
      { name: "YASHIKA MENGHANI", role: "3RD YEAR" }, // 
      { name: "BHAWANA SHARMA", role: "4TH YEAR" }, // 
      { name: "ANUSHKA SHARMA", role: "4TH YEAR" }, // 
      { name: "NITESH NAYAK", role: "4TH YEAR" }, // 
      { name: "ARSHPREET KAUR", role: "4TH YEAR" } // 
    ]
  },
  {
    title: "PUBLIC RELATIONS (PR)",
    members: [
      { name: "SHRUTI SETHI", role: "4TH YEAR" }, // 
      { name: "RONAK MEEL", role: "4TH YEAR" }, // 
      { name: "PRIYANSHI JAIN", role: "4TH YEAR" }, // 
      { name: "ANJALI GUPTA", role: "4TH YEAR" }, // 
      { name: "RICHA SHRIVASTAVA", role: "3RD YEAR" } // 
    ]
  }
];

export default function Team() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-brownDark font-samarkan drop-shadow-sm uppercase">EPISTEMICO TEAM'26</h1>
        </div>

        {/* Leadership Section */}
        <div className="flex justify-center gap-6 mb-12">
          {leadership.map((leader, i) => (
            <div key={i} className="glass-card w-48 p-4 rounded-2xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-28 rounded-full border-2 border-brownDark/30 mb-3 overflow-hidden shadow-md">
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-sm font-bold text-brownDark font-samarkan text-center leading-tight">{leader.name}</h2>
              <p className="text-[9px] text-brownMid font-extrabold uppercase tracking-widest mt-1">{leader.role}</p>
            </div>
          ))}
        </div>

        {/* CAS Committee Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-brownDark font-samarkan border-b-2 border-brownDark/20 inline-block px-10">CAS COMMITTEE</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {casCommittees.map((committee, i) => (
            <div key={i} className="glass-card p-4 rounded-xl hover:bg-white/50 transition-colors duration-300">
              <h3 className="text-[11px] text-center font-bold text-brownMid tracking-[0.2em] mb-4 uppercase border-b border-brownDark/5 pb-1">{committee.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {committee.members.map((m, j) => (
                  <div key={j} className="flex flex-col items-center group w-20">
                    <div className="w-14 h-14 rounded-full border-2 border-brownDark/20 mb-2 group-hover:scale-110 transition-transform overflow-hidden shadow-sm">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[8px] font-bold text-brownDark text-center leading-tight">{m.name}</p>
                    <p className="text-[7px] text-brownMid font-bold uppercase">({m.role})</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Executive Team Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-brownDark font-samarkan border-b-2 border-brownDark/20 inline-block px-10">EXECUTIVE TEAM</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {executiveTeams.map((team, i) => (
            <div key={i} className="glass-card p-4 rounded-xl hover:bg-white/50 transition-colors duration-300">
              <h3 className="text-[11px] font-bold text-brownMid tracking-[0.2em] mb-4 text-center uppercase border-b border-brownDark/10 pb-1">{team.title}</h3>
              <div className="grid grid-cols-4 gap-3">
                {team.members.map((m, j) => (
                  <div key={j} className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-full border-2 border-brownDark/10 mb-2 bg-white/20 overflow-hidden group-hover:scale-110 transition-transform shadow-sm">
                      <img src="https://via.placeholder.com/80" alt={m.name} className="w-full h-full object-cover opacity-50" />
                    </div>
                    <p className="text-[8px] font-bold text-brownDark leading-tight">{m.name}</p>
                    <p className="text-[7px] text-brownMid mt-1 font-bold uppercase">{m.role}</p>
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