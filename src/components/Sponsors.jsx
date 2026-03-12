import React from 'react';
import sponsor1 from '../assets/sponsor-1.png';
import sponsor2 from '../assets/sponsor-2.png';
import sponsor3 from '../assets/sponsor-3.png';
import sponsor4 from '../assets/sponsor-4.png';
import sponsor5 from '../assets/sponsor-5.png';

export default function Sponsors() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-brownDark mb-10 uppercase tracking-wide">
          Our Sponsors
        </h2>
        
        <div className="glass-card rounded-3xl p-8 hover:scale-[1.01] transition-transform duration-300">
          {/* grid-cols-5 on desktop (lg) forces them into one line */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center w-full mx-auto">
            
            {/* Sponsor 1 */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-32 h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <img src={sponsor1} alt="The Belgian Waffle Co" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[11px] md:text-xs font-bold text-brownDark text-center">The Belgian Waffle Co</p>
            </div>

            {/* Sponsor 2 */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-32 h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <img src={sponsor2} alt="Saras" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[11px] md:text-xs font-bold text-brownDark text-center">Saras</p>
            </div>

            {/* Sponsor 3 */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-32 h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <img src={sponsor3} alt="Pinak" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[11px] md:text-xs font-bold text-brownDark text-center">Pinak</p>
            </div>

            {/* Sponsor 4 */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-32 h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <img src={sponsor4} alt="Trends" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[11px] md:text-xs font-bold text-brownDark text-center">Trends</p>
            </div>

            {/* Sponsor 5 */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="w-32 h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <img src={sponsor5} alt="Domino's" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[11px] md:text-xs font-bold text-brownDark text-center">Domino's</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
