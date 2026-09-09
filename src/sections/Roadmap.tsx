import React from 'react';
import { ROADMAP } from '../data/constants';
import { Card } from '../components/Card';

export const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-10 rounded-full" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            The <span className="text-amber-500">Roadmap</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Our strategic vision for the growth and evolution of the DogPow ecosystem through 2027.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/0 via-slate-800 to-amber-500/0 md:-translate-x-1/2" />

          <div className="space-y-12">
            {ROADMAP.map((phase, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-2 border-slate-700 rounded-full z-10 -translate-x-[7.5px] md:-translate-x-1/2 flex items-center justify-center">
                   {phase.status === 'completed' && <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />}
                   {phase.status === 'in-progress' && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]" />}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`reveal ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <span className="text-amber-500 font-black text-sm uppercase tracking-[0.3em] mb-2 block">
                      {phase.phase}
                    </span>
                    <Card className={`group relative border-slate-800/50 hover:border-amber-500/20 transition-all duration-500 ${phase.status === 'in-progress' ? 'bg-amber-500/[0.02] border-amber-500/20' : ''}`}>
                      {phase.status === 'completed' && (
                        <div className="absolute top-4 right-4 text-green-500">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        </div>
                      )}

                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                        {phase.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </Card>
                  </div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
