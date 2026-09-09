import React, { useState } from 'react';
import { FAQS } from '../data/constants';
import { Card } from '../components/Card';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Everything <span className="text-amber-500">Explained</span>
          </h2>
          <p className="text-xl text-slate-400">
            Find answers to the most common questions about the DogPow ecosystem.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Card
                key={idx}
                noPadding
                className={`overflow-hidden border-slate-800 transition-all duration-300 ${
                  isOpen ? 'border-amber-500/30 bg-slate-900/80 shadow-2xl shadow-amber-500/5' : ''
                }`}
              >
                {/* Header/Question */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : idx);
                  }}
                  className="w-full p-6 text-left flex items-center justify-between group outline-none cursor-pointer"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pointer-events-none ${
                    isOpen ? 'text-amber-500' : 'text-slate-100 group-hover:text-amber-400'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`flex-shrink-0 w-10 h-10 rounded-2xl border transition-all duration-500 flex items-center justify-center pointer-events-none ${
                    isOpen
                      ? 'rotate-180 border-amber-500/50 bg-amber-500/10 text-amber-500'
                      : 'border-slate-700 bg-slate-800/50 text-slate-400 group-hover:border-slate-500'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer Area */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-slate-800/50">
                    <div className="bg-slate-950/30 p-4 rounded-2xl border border-slate-800/50 mt-4 text-slate-400 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
