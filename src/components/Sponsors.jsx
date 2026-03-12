import React from 'react';
import sponsor1 from '../assets/sponsor-1.png';
import sponsor2 from '../assets/sponsor-2.png';
import sponsor3 from '../assets/sponsor-3.png';
import sponsor4 from '../assets/sponsor-4.png';
import sponsor5 from '../assets/sponsor-5.png';

export default function Sponsors() {
  const sponsors = [
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
        
        <div className="glass-card rounded-3xl p-6 md:p-10 hover:scale-[1.01] transition-transform duration-300">
          {/* - lg:grid-cols-5 forces 5 items in one line
              - gap-2 reduces the space between the boxes significantly
          */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 place-items-center w-full mx-auto">
            
            {sponsors.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2 w-full">
                {/* Reduced size to w-32 h-28 to ensure all 5 fit in the glass card */}
                <div className="w-32 h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                  <img 
                    src={s.src} 
                    alt={s.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <p className="text-[10px] md:text-xs font-bold text-brownDark text-center leading-tight">
                  {s.name}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
