import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xl";

  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-blue-500 text-white shadow-lg shadow-amber-500/20",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline: "border border-slate-700 text-slate-300 hover:border-amber-500 hover:text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
