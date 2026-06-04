import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import Badge from './Badge';
import GlassCard from './GlassCard';
import { Zap, ArrowRight } from 'lucide-react';

export default function GuideTwoSlide() {
  const { containerRef, triggerRef } = useGsapReveal();

  return (
    <section 
      ref={triggerRef}
      className="slide-section min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24"
      data-page="3"
    >
      <div 
        ref={containerRef}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <div className="order-2 md:order-1 gsap-reveal relative">
            {/* Energetic Particles Simulation via CSS */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00F0FF] rounded-full animate-ping shadow-[0_0_10px_#00F0FF]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse blur-[1px]"></div>
                <div className="absolute top-1/2 -right-4 w-1 h-1 bg-[#3B6FFF] rounded-full animate-ping"></div>
            </div>

            <GlassCard className="p-8 md:p-12 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="relative z-10 flex flex-col h-full space-y-8">
                    <div>
                        <div className="text-[#00F0FF] text-sm tracking-widest font-mono uppercase mb-4">Seu Acesso</div>
                        <h3 className="text-2xl font-bold font-sans text-white">Guia Micro SaaS One</h3>
                        <p className="text-[#8A9BC4] mt-2 font-light">Todas as ideias, prompts e estratégias organizadas para você.</p>
                    </div>
                    
                    <a 
                        href="https://pack-micro-saa-s-one.vercel.app/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 bg-[#3B6FFF] text-white rounded-xl font-medium tracking-wide hover:bg-[#3B6FFF]/80 transition-colors shadow-[0_0_20px_rgba(59,111,255,0.4)]"
                    >
                        Acessar Material <ArrowRight size={18} />
                    </a>
                </div>
            </GlassCard>
        </div>

        <div className="space-y-8 order-1 md:order-2">
          <Badge>GUIA 02 DE 03</Badge>
          
          <div className="gsap-reveal flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center text-[#00F0FF]">
                <Zap size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Micro SaaS One <span className="text-xl align-top text-[#8A9BC4] font-normal">&reg;</span>
             </h2>
          </div>

          <p className="text-xl md:text-2xl text-[#F0F4FF] font-medium leading-relaxed gsap-reveal">
             50 prompts prontos. 30 ideias validadas.
          </p>
          
          <p className="text-base text-[#8A9BC4] font-light leading-relaxed gsap-reveal">
            A parte mais difícil não é construir. É saber o que construir.
          </p>

          <ul className="space-y-4 pt-4 gsap-reveal">
            {[
                '50 prompts organizados',
                '30 ideias validadas',
                'Modelos de monetização',
                'Escolha da ideia ideal'
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#F0F4FF]">
                    <ArrowRight size={18} className="text-[#00F0FF]" />
                    <span className="font-light">{item}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
