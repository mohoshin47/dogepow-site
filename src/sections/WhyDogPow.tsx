import React from 'react';
import { COMPARISON } from '../data/constants';
import { Card } from '../components/Card';

export const WhyDogPow: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Why DogPow?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            DogPow isn't just another meme coin. It's a community-first ecosystem built on the speed of Solana with a fairer distribution model.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center reveal">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                A Fairer Approach to <br />
                <span className="text-amber-500 text-gradient">Meme Coin Distribution</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                While most projects reserve massive portions for VCs or team members, DogPow shifts the power back to the community with a 60% mining and community allocation.
              </p>
              <ul className="space-y-5">
                {[
                  'Community mining rewards program',
                  'Sustainable long-term tokenomics',
                  'Transparent development roadmap',
                  'Solana blockchain efficiency'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-200 text-lg group">
                    <div className="w-8 h-8 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/50 transition-all duration-300">
                      <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Full-Width Style Comparison Card */}
            <Card className="p-0 overflow-hidden border-amber-500/20 shadow-2xl shadow-amber-500/5">
              <div className="bg-slate-900/80 p-8 border-b border-slate-800">
                <h4 className="text-2xl font-black text-white flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                  DPOW vs. The Industry
                </h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-800">
                      <th className="p-8 text-slate-500 font-bold uppercase tracking-widest text-xs">Comparison Metric</th>
                      <th className="p-8 text-amber-500 font-black bg-amber-500/[0.03]">DogPow</th>
                      <th className="p-8 text-slate-500 font-bold uppercase tracking-widest text-xs">Standard Meme Coins</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {COMPARISON.map((row, idx) => (
                      <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="p-8 text-slate-300 font-bold">{row.name}</td>
                        <td className="p-8 bg-amber-500/[0.03] text-white">
                          {typeof row.dogpow === 'boolean' ? (
                            row.dogpow ? (
                              <div className="flex items-center gap-2 text-green-500 font-black">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                YES
                              </div>
                            ) : 'NO'
                          ) : <span className="font-black">{row.dogpow}</span>}
                        </td>
                        <td className="p-8 text-slate-500 font-medium">
                          {typeof row.others === 'boolean' ? (
                            row.others ? 'Yes' : (
                              <div className="flex items-center gap-2 opacity-30">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/></svg>
                                NO
                              </div>
                            )
                          ) : row.others}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
