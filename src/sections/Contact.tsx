import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-500/5 blur-[120px] -z-10 rounded-full" />

      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
              Join the <br />
              <span className="text-amber-500 text-gradient">Doge Evolution</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
              DogPow is built by the community, for the community. Connect with us to stay updated on the roadmap and mining launches.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { label: 'Twitter', value: '@DogPowXYZ', color: 'text-blue-400', icon: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
                { label: 'Telegram', value: 'DogPow Community', color: 'text-sky-400', icon: 'M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-18 7a2.25 2.25 0 0 0 .126 4.412l4.93 1.54 1.766 5.301a2.25 2.25 0 0 0 4.254-.147l1.012-3.037 5.16 3.709a2.25 2.25 0 0 0 3.596-1.139l4-16a2.25 2.25 0 0 0-2.822-2.854z' },
                { label: 'Discord', value: 'DogPow Official', color: 'text-indigo-400', icon: 'M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8z' },
                { label: 'Email Support', value: 'hello@dogpow.xyz', color: 'text-amber-400', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map((item, idx) => (
                <Card key={idx} className="p-4 flex items-center gap-4 group border-slate-800/50 hover:bg-slate-900/40">
                  <div className={`w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</div>
                    <div className="text-white font-bold text-xs">{item.value}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="reveal p-8 border-slate-800 shadow-2xl shadow-blue-500/5">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Community Inquiry
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500/30 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500/30 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-white focus:outline-none focus:border-amber-500/30 transition-colors resize-none"
                ></textarea>
              </div>
              <Button variant="primary" fullWidth className="py-5 shadow-2xl shadow-amber-500/20">
                Send Community Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
