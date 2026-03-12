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
    <section className="w-full px-4 py-12">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-brownDark mb-10 uppercase tracking-wide">
          Our Sponsors
        </h2>
        
        {/* glass-card now uses w-full and overflow-x-auto for mobile safety */}
        <div className="glass-card rounded-3xl p-6 md:p-10 transition-transform duration-300 w-full overflow-hidden">
          
          {/* FLEXBOX FORCE: 
              - flex-nowrap: prevents wrapping to a second line
              - justify-between: spreads them out evenly
          */}
          <div className="flex flex-row flex-nowrap justify-between items-start gap-2 md:gap-4 w-full">
            
            {sponsors.map((s, i) => (
              <div key={i} className="flex flex-col items-center flex-1 min-w-0">
                <div className="w-full max-w-[160px] aspect-[4/3] bg-white/30 border border-white/40 rounded-xl md:rounded-2xl flex items-center justify-center p-2 md:p-4 shadow-sm mb-3">
                  <img 
                    src={s.src} 
                    alt={s.name} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <p className="text-[10px] md:text-xs font-bold text-brownDark text-center leading-tight px-1">
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
