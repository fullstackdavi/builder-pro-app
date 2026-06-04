import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltOptions?: any;
}

export default function GlassCard({ children, className = '', tiltOptions }: GlassCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 5,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
        ...tiltOptions
      });
    }
  }, [tiltOptions]);

  return (
    <div 
      ref={tiltRef} 
      className={`glass-card rounded-2xl relative overflow-hidden transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
