import React from 'react';
import sponsor1 from '../assets/sponsor-1.png';
import sponsor2 from '../assets/sponsor-2.png';
import sponsor3 from '../assets/sponsor-3.jpg';
import sponsor4 from '../assets/sponsor-4.png';
import sponsor5 from '../assets/sponsor-5.png';

export default function Sponsors() {
  return (
    <section className="px-2 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-brownDark mb-10 uppercase tracking-wide">
          Our Sponsors
        </h2>
        
        <div className="glass-card rounded-3xl p-4 md:p-8 hover:scale-[1.01] transition-transform duration-300">
          {/* Changed gap to gap-1 and ensured lg:grid-cols-5 is active */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 place-items-center w-full">
            
            {/* Sponsor 1 */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-24 h-20 md:w-32 md:h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                <img src={sponsor1} alt="The Belgian Waffle Co" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-brownDark text-center leading-tight">The Belgian Waffle Co</p>
            </div>

            {/* Sponsor 2 */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-24 h-20 md:w-32 md:h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                <img src={sponsor2} alt="Saras" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-brownDark text-center leading-tight">Saras</p>
            </div>

            {/* Sponsor 3 */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-24 h-20 md:w-32 md:h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                <img src={sponsor3} alt="Pinak" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-brownDark text-center leading-tight">Pinak</p>
            </div>

            {/* Sponsor 4 */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-24 h-20 md:w-32 md:h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                <img src={sponsor4} alt="Trends" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-brownDark text-center leading-tight">Trends</p>
            </div>

            {/* Sponsor 5 */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-24 h-20 md:w-32 md:h-28 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                <img src={sponsor5} alt="Domino's" className="max-w-full max-h-full object-contain" />
              </div>
              <p className="text-[9px] md:text-[11px] font-bold text-brownDark text-center leading-tight">Domino's</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
