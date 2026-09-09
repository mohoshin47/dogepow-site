import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  noPadding = false
}) => {
  return (
    <div className={`
      bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem]
      ${noPadding ? '' : 'p-[clamp(1rem,3vw,2.5rem)]'}
      ${hover ? 'hover:border-amber-500/30 hover:bg-slate-800/40 shadow-2xl transition-all duration-500' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};
