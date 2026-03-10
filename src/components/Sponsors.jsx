import React from 'react';
import sponsor1 from '../assets/sponsor-1.png';

export default function Sponsors() {
  return (
    <section className="px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-extrabold text-center text-brownDark font-samarkan mb-6">
          Sponsors
        </h2>
        
        <div className="glass-card rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
            
            {/* Box 1: Your imported image */}
            <div className="w-28 h-16 bg-white/20 border border-white/30 rounded-xl overflow-hidden grid place-items-center">
              <img 
                src={sponsor1} 
                alt="Sponsor 1" 
                className="max-w-full max-h-full object-contain p-2" 
              />
            </div>

            {/* Boxes 2-4: Placeholders for now */}
            {[2, 3, 4].map((i) => (
              <div key={i} className="w-28 h-16 bg-white/20 border border-white/30 rounded-xl grid place-items-center text-xs text-brownMid">
                Sponsor Logo
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
