import React, { useState } from 'react';
import { LegalModal } from '../components/LegalModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const privacyContent = (
    <div className="space-y-4">
      <p>Your privacy is important to us. It is DogPow's policy to respect your privacy regarding any information we may collect while operating our website.</p>
      <h4 className="text-white font-black mt-6">1. Data Collection</h4>
      <p>We do not collect personal identification information. We may collect non-identifying information such as browser type, language preference, and the date and time of each visitor request to better understand how visitors use the site.</p>
      <h4 className="text-white font-black mt-6">2. Cookies</h4>
      <p>DogPow uses cookies to help identify and track visitors and their website access preferences. You can set your browser to refuse cookies, but some features may not function properly without them.</p>
      <h4 className="text-white font-black mt-6">3. Security</h4>
      <p>The security of your non-identifying information is important to us, but remember that no method of transmission over the Internet is 100% secure.</p>
    </div>
  );

  const termsContent = (
    <div className="space-y-4">
      <p>By accessing the website at dogpow.xyz, you are agreeing to be bound by these terms of service, all applicable laws and regulations.</p>
      <h4 className="text-white font-black mt-6">1. Use License</h4>
      <p>Permission is granted to temporarily download one copy of the materials on DogPow's website for personal, non-commercial transitory viewing only.</p>
      <h4 className="text-white font-black mt-6">2. Disclaimer</h4>
      <p>The materials on DogPow's website are provided on an 'as is' basis. DogPow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
      <h4 className="text-white font-black mt-6">3. Limitations</h4>
      <p>In no event shall DogPow or its suppliers be liable for any damages arising out of the use or inability to use the materials on the website.</p>
    </div>
  );

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-slate-950">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center font-black text-white text-2xl group-hover:rotate-12 transition-transform shadow-lg shadow-amber-500/20">
                D
              </div>
              <span className="text-3xl font-black tracking-tighter text-white">
                Doge<span className="text-amber-500">Pow</span>
              </span>
            </a>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              The first community mining meme-token on Solana. Building a fairer future for the Doge community through transparent tokenomics and AI security.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Telegram', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:border-amber-500/50 hover:text-white transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-slate-400 mask-icon" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Tokenomics', 'Roadmap', 'Partners'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-amber-500 transition-colors text-sm font-bold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Community</h4>
            <ul className="space-y-4">
              {['Twitter', 'Telegram', 'Discord', 'Medium'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-amber-500 transition-colors text-sm font-bold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Stay Informed</h4>
            <p className="text-slate-500 text-sm mb-4 font-medium">Get the latest ecosystem updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-amber-500/30 flex-1"
              />
              <button className="bg-amber-500 text-white px-4 py-2 rounded-xl text-xs font-black uppercase hover:bg-amber-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-bold">
            © 2026 DogPow Ecosystem. All rights reserved.
          </p>
          <div className="flex gap-8">
            <button
              onClick={() => setActiveModal('privacy')}
              className="text-slate-600 hover:text-slate-400 text-sm font-bold transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal('terms')}
              className="text-slate-600 hover:text-slate-400 text-sm font-bold transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        content={privacyContent}
      />
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
        content={termsContent}
      />
    </footer>
  );
};
