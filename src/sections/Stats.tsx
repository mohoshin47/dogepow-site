import React from 'react';
import { STATS } from '../data/constants';
import { Card } from '../components/Card';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <Card key={idx} className="reveal text-center border-slate-800/50 hover:scale-105 transition-transform duration-500">
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white">
                <span className="text-amber-500">{stat.prefix}</span>
                {stat.value}
                {stat.suffix && <span className="text-sm ml-1 text-blue-400">{stat.suffix}</span>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
