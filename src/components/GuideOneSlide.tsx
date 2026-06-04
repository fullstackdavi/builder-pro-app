import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import Badge from './Badge';
import GlassCard from './GlassCard';
import { Globe, ArrowRight } from 'lucide-react';

export default function GuideOneSlide() {
  const { containerRef, triggerRef } = useGsapReveal();

  return (
    <section 
      ref={triggerRef}
      className="slide-section min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24"
      data-page="2"
    >
      <div 
        ref={containerRef}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <div className="space-y-8 order-2 md:order-1">
          <Badge>GUIA 01 DE 03</Badge>
          
          <div className="gsap-reveal flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl bg-[#3B6FFF]/10 border border-[#3B6FFF]/20 flex items-center justify-center text-[#3B6FFF]">
                <Globe size={32} />
             </div>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Seusite.ai <span className="text-xl align-top text-[#8A9BC4] font-normal">&reg;</span>
             </h2>
          </div>

          <p className="text-xl md:text-2xl text-[#F0F4FF] font-medium leading-relaxed gsap-reveal">
             Do zero ao site profissional: sem código, sem agência.
          </p>
          
          <p className="text-base text-[#8A9BC4] font-light leading-relaxed gsap-reveal">
            A maioria das pessoas acha que criar um site bom é caro ou complicado. Com IA, não é mais. Este guia mostra o caminho exato.
          </p>

          <ul className="space-y-4 pt-4 gsap-reveal">
            {[
                'Estrutura de site que converte',
                'Ferramentas de IA para cada etapa',
                'Copys que vendem',
                'Como entregar sites para clientes'
            ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#F0F4FF]">
                    <ArrowRight size={18} className="text-[#3B6FFF]" />
                    <span className="font-light">{item}</span>
                </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2 gsap-reveal">
            <GlassCard className="p-8 md:p-12 group holographic hover:scale-[1.02]">
                {/* Holographic background noise for card */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B6FFF] to-[#00F0FF] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full space-y-8 justify-between">
                    <div>
                        <div className="text-[#00F0FF] text-sm tracking-widest font-mono uppercase mb-4">Seu Acesso</div>
                        <h3 className="text-2xl font-bold font-sans">Guia Completo Seusite.ai</h3>
                        <p className="text-[#8A9BC4] mt-2 font-light">Acesse o portal e comece a construir seu primeiro projeto hoje mesmo.</p>
                    </div>
                    
                    <a 
                        href="https://guia-ai-app.vercel.app/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 bg-white text-[#0A1128] rounded-xl font-medium tracking-wide hover:bg-[#F0F4FF] transition-colors"
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
