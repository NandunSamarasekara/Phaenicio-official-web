import React from 'react';
import { cn } from '../../lib/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'glass-light' | 'glass-dark';
  hoverable?: boolean;
  children: React.ReactNode;
}

export function Card({
  variant = 'glass-light',
  hoverable = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-8 transition-all duration-300',
        variant === 'glass-light' && 'bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm',
        variant === 'glass-dark' && 'bg-[#130A0A]/85 backdrop-blur-xl border border-white/10 shadow-xl',
        variant === 'light' && 'bg-white border border-slate-200 shadow-sm',
        variant === 'dark' && 'bg-[#130A0A] border border-slate-900 shadow-xl',
        hoverable && variant === 'glass-light' && 'hover:border-slate-350 hover:shadow-md hover:-translate-y-0.5',
        hoverable && variant === 'glass-dark' && 'hover:border-white/20 hover:shadow-2xl hover:bg-[#130A0A]/90 hover:-translate-y-0.5',
        hoverable && variant === 'light' && 'hover:border-slate-350 hover:shadow-md hover:-translate-y-0.5',
        hoverable && variant === 'dark' && 'hover:border-slate-800 hover:shadow-2xl hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
