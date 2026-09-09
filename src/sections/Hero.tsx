import React, { useState } from 'react';
import { TOKEN_INFO } from '../data/constants';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    if (TOKEN_INFO.ca.includes('Coming Soon')) return;
    navigator.clipboard.writeText(TOKEN_INFO.ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCAComingSoon = TOKEN_INFO.ca.toLowerCase().includes('soon') || TOKEN_INFO.ca.includes('xxxx');

  return (
    <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-amber-500/10 blur-[120px] -z-10 rounded-full" />
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-500/10 blur-[80px] -z-10 rounded-full" />

      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content */}
        <div className="lg:col-span-7 text-center lg:text-left reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-amber-500 font-black text-xs uppercase tracking-widest mb-6 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Next-Gen Community Mining
          </div>

          <h1 className="text-white mb-6">
            The Power of the <br />
            <span className="text-gradient">Doge Community</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
             <div className="h-[2px] w-8 bg-amber-500/50 hidden md:block"></div>
             <div className="text-xl md:text-2xl font-bold text-slate-300 tracking-wider uppercase">
                Mine Today, <span className="text-amber-500">Earn Tomorrow</span>
             </div>
             <div className="h-[2px] w-8 bg-amber-500/50 hidden md:block"></div>
             <div className="relative group">
                <div className="absolute -inset-1 bg-blue-500/50 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <span className="relative text-[10px] bg-slate-950 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30 font-black tracking-normal">AI POWERED</span>
             </div>
          </div>

          <p className="text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            DogPow is the first meme-token on Solana powered by community mining.
            Fair launch, transparent allocation, and real utility for the $DPOW holders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <Button variant="primary" className="text-lg px-10 py-4 w-full sm:w-auto">
              Start Mining Now
            </Button>
            <Button variant="outline" className="text-lg px-10 py-4 w-full sm:w-auto">
              View Chart
            </Button>
          </div>

          {/* Contract Address Box */}
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-1.5 rounded-2xl flex items-center gap-3">
              <div className="flex-1 px-4 py-2 text-slate-500 font-mono text-xs truncate">
                {isCAComingSoon ? 'Contract Address — Coming Soon' : TOKEN_INFO.ca}
              </div>
              <button
                onClick={copyCA}
                disabled={isCAComingSoon}
                className={`px-4 py-2 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  isCAComingSoon
                    ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-800 hover:bg-slate-700 text-white cursor-pointer active:scale-95'
                }`}
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Copied
                  </span>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mascot / Visual Element */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center reveal">
          <div className="relative w-full max-w-[400px] aspect-square">
             {/* The "Core" Sphere */}
             <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
             <div className="absolute inset-4 bg-slate-900/40 backdrop-blur-2xl border border-amber-500/20 rounded-full flex items-center justify-center animate-float shadow-2xl shadow-amber-500/10">
                <div className="relative">
                   <div className="text-9xl filter drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">🐕</div>
                   <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full -z-10 animate-pulse" />
                </div>
             </div>

             {/* Floating Elements */}
             <div className="absolute -top-10 right-0 w-24 h-24 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl flex items-center justify-center text-4xl animate-float-delayed shadow-xl">💎</div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] flex items-center justify-center text-5xl animate-float shadow-xl">🚀</div>
             <div className="absolute top-1/2 -left-20 w-16 h-16 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl flex items-center justify-center text-2xl animate-float-delayed">⚡</div>
          </div>
        </div>
      </div>
    </section>
  );
};
