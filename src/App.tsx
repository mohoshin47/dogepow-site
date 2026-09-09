import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Security } from './sections/Security';
import { Stats } from './sections/Stats';
import { Partners } from './sections/Partners';
import { WhyDogPow } from './sections/WhyDogPow';
import { Tokenomics } from './sections/Tokenomics';
import { Roadmap } from './sections/Roadmap';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-amber-500/30 selection:text-amber-500">
      <Navbar />

      <main>
        <Hero />
        <Security />
        <Stats />
        <Partners />
        <WhyDogPow />
        <Tokenomics />
        <Roadmap />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Global Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;
