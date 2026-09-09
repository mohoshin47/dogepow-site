import React from 'react';
import { TOKEN_ALLOCATION, TOKEN_INFO } from '../data/constants';
import { Card } from '../components/Card';

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="section-padding bg-slate-950/50">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-slate-400">
            Fixed Supply: <span className="text-amber-500 font-black">{TOKEN_INFO.supply} $DPOW</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Chart Placeholder/Donut */}
          <div className="lg:col-span-5 flex justify-center reveal">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* This is a visual representation of a donut chart using multiple circles */}
              <div className="absolute inset-0 rounded-full border-[30px] border-amber-500/20" />
              <div className="absolute inset-0 rounded-full border-[30px] border-amber-500 border-t-transparent border-l-transparent" style={{ transform: 'rotate(45deg)' }} />
              <div className="absolute inset-0 rounded-full border-[30px] border-blue-500 border-b-transparent border-r-transparent" style={{ transform: 'rotate(-45deg)' }} />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Supply</span>
                <span className="text-3xl font-black text-white">10B</span>
              </div>
            </div>
          </div>

          {/* Allocation Cards */}
          <div className="lg:col-span-7 space-y-6 reveal">
            {TOKEN_ALLOCATION.map((item, idx) => (
              <Card key={idx} className="p-8 border-slate-800/50 flex flex-col md:flex-row items-center gap-6 group">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black shrink-0 shadow-lg"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  {item.percentage}%
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-black text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Strategically reserved to ensure {item.label.toLowerCase()} stability and ecosystem longevity through the 2027 milestone.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 p-8 glass-card border-amber-500/20 text-center reveal">
          <p className="text-slate-400 font-medium">
            <span className="text-amber-500 mr-2">●</span>
            Contract ownership targeted to be renounced post-launch for full community decentralization.
          </p>
        </div>
      </div>
    </section>
  );
};
