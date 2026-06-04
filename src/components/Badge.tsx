import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-widest text-[#00F0FF] uppercase mb-8 gsap-reveal">
      {children}
    </span>
  );
}
