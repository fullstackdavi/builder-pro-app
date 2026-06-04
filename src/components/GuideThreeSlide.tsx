import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import Badge from './Badge';
import GlassCard from './GlassCard';
import { Rocket, ArrowRight } from 'lucide-react';

export default function GuideThreeSlide() {
  const { containerRef, triggerRef } = useGsapReveal();

  return (
    <section 
      ref={triggerRef}
      className="slide-section min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24"
      data-page="4"
    >
      <div 
        ref={containerRef}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <div className="space-y-8 order-2 md:order-1">
          <Badge>GUIA 03 DE 03</Badge>
          
          <div className="gsap-reveal flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl bg-[#8B3FFF]/10 border border-[#8B3FFF]/20 flex items-center justify-center text-[#8B3FFF]">
                <Rocket size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Micro SaaS Pro <span className="text-xl align-top text-[#8A9BC4] font-normal">&reg;</span>
             </h2>
          </div>

          <p className="text-xl md:text-2xl text-[#F0F4FF] font-medium leading-relaxed gsap-reveal">
             Do zero ao produto no ar.
          </p>
          
          <p className="text-base text-[#8A9BC4] font-light leading-relaxed gsap-reveal">
            Ter a ideia é o começo. Executar e vender é onde a maioria trava.
          </p>

          <ul className="space-y-4 pt-4 gsap-reveal">
            {[
                'Validar ideias',
                'Criar usando IA',
                'Montar funil',
                'Escalar receita recorrente'
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#F0F4FF]">
                    <ArrowRight size={18} className="text-[#8B3FFF]" />
                    <span className="font-light">{item}</span>
                </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2 gsap-reveal relative group perspective-1000">
            {/* Holographic Rocket */}
            <div className="absolute -top-16 -right-8 z-20 text-[#8B3FFF] opacity-60 mix-blend-screen group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:scale-110 transition-all duration-1000 drop-shadow-[0_0_20px_rgba(139,63,255,0.8)]">
                <Rocket size={80} strokeWidth={1} className="transform rotate-45" />
            </div>

            <GlassCard className="p-8 md:p-12 group-hover:border-[#8B3FFF]/30">
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B3FFF]/10 to-transparent pointer-events-none"></div>
                <div className="relative z-10 flex flex-col h-full space-y-8">
                    <div>
                        <div className="text-[#00F0FF] text-sm tracking-widest font-mono uppercase mb-4">Seu Acesso</div>
                        <h3 className="text-2xl font-bold font-sans text-white">Guia Micro SaaS Pro</h3>
                        <p className="text-[#8A9BC4] mt-2 font-light">A metodologia completa para lançar e faturar.</p>
                    </div>
                    
                    <a 
                        href="https://curso-saas-rosy.vercel.app/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 bg-transparent border border-[#8B3FFF] text-white rounded-xl font-medium tracking-wide hover:bg-[#8B3FFF]/20 transition-all shadow-[0_0_15px_rgba(139,63,255,0.2)]"
                    >
                        Acessar Material <ArrowRight size={18} />
                    </a>
                </div>
            </GlassCard>
        </div>
      </div>
    </section>
  );
}
