import React from 'react';
import sponsor1 from '../assets/sponsor-1.png';
import sponsor2 from '../assets/sponsor-2.png'; 

export default function Sponsors() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Simple Bold Title */}
        <h2 className="text-3xl font-bold text-center text-brownDark mb-10 uppercase tracking-wide">
          Our Sponsors
        </h2>
        
        <div className="glass-card rounded-3xl p-8 hover:scale-[1.01] transition-transform duration-300">
          {/* Added max-w-2xl and mx-auto here to bring the two items toward the center */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center max-w-2xl mx-auto">
            
            {/* Sponsor 1: The Belgian Waffle Co */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-32 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-4 shadow-sm">
                <img 
                  src={sponsor1} 
                  alt="The Belgian Waffle Co" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <p className="text-sm font-bold text-brownDark text-center">
                The Belgian Waffle Co
              </p>
            </div>

            {/* Sponsor 2: Saras */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-40 h-32 bg-white/30 border border-white/40 rounded-2xl flex items-center justify-center p-4 shadow-sm">
                <img 
                  src={sponsor2} 
                  alt="Saras" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <p className="text-sm font-bold text-brownDark text-center">
                Saras
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
