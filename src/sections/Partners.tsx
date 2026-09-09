import React from 'react';
import { PARTNERS } from '../data/constants';

export const Partners: React.FC = () => {
  // Duplicate partners for infinite scroll
  const allPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section id="partners" className="py-20 overflow-hidden relative">
       {/* Gradient Fades for Marquee */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Built On & Tracked With
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
            Trusted by the leading web3 ecosystems
          </p>
        </div>
      </div>

      <div className="flex animate-marquee whitespace-nowrap">
        {allPartners.map((partner, idx) => (
          <div key={idx} className="inline-block px-4">
            <div className="w-48 h-24 glass-card flex items-center justify-center gap-3 p-4 group cursor-pointer">
               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                  <span className="text-slate-400 font-black group-hover:text-amber-500 transition-colors">
                    {partner.name.charAt(0)}
                  </span>
               </div>
               <span className="text-slate-400 font-bold group-hover:text-white transition-colors">
                 {partner.name}
               </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
