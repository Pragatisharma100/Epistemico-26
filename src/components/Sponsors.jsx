import React from 'react';
import sponsor1 from '../assets/sponsor-1.png';
import sponsor2 from '../assets/sponsor-2.png';
import sponsor3 from '../assets/sponsor-3.jpg';
import sponsor4 from '../assets/sponsor-4.png';
import sponsor5 from '../assets/sponsor-5.png';

export default function Sponsors() {
  // 1. Put all your sponsor data in one place
  const sponsorList = [
    { src: sponsor1, name: "The Belgian Waffle Co" },
    { src: sponsor2, name: "Saras" },
    { src: sponsor3, name: "Pinak" },
    { src: sponsor4, name: "Trends" },
    { src: sponsor5, name: "Domino's" },
  ];

  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-brownDark mb-10 uppercase tracking-wide">
          Our Sponsors
        </h2>
        
        <div className="glass-card rounded-3xl p-8 hover:scale-[1.01] transition-transform duration-300">
          {/* 2. Increased max-w and updated grid-cols to show 3 items per row on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center max-w-5xl mx-auto">
            
            {/* 3. Map through the list to display all sponsors automatically */}
            {sponsorList.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-40 h-32 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-4 shadow-sm">
                  <img 
                    src={sponsor.src} 
                    alt={sponsor.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <p className="text-sm font-bold text-brownDark text-center">
                  {sponsor.name}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
