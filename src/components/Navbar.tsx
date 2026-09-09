import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-white text-2xl group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-amber-500/20">
            D
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-white leading-none">
              Doge<span className="text-amber-500">Pow</span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mt-1">
              Mine Today, Earn Tomorrow
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-400 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-slate-950 rounded-full font-black text-sm uppercase tracking-wider hover:bg-amber-500 hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-white/5"
          >
            Buy $DPOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-t border-white/5 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-500 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black text-slate-300 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://raydium.io"
            className="w-full py-5 bg-amber-500 text-white rounded-[2rem] text-center font-black text-xl shadow-2xl shadow-amber-500/20"
            onClick={() => setIsMenuOpen(false)}
          >
            Buy $DPOW Now
          </a>
        </div>
      )}
    </nav>
  );
};
