import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import Badge from './Badge';
import GlassCard from './GlassCard';

export default function NextStepsSlide() {
  const { containerRef, triggerRef } = useGsapReveal();

  return (
    <section 
      ref={triggerRef}
      className="slide-section min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24 pb-32"
      data-page="5"
    >
      <div 
        ref={containerRef}
        className="w-full max-w-6xl mx-auto flex flex-col items-center text-center"
      >
        <Badge>AGORA É COM VOCÊ</Badge>
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 gsap-reveal">
          Por onde começar agora?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          <GlassCard className="p-8 text-left gsap-reveal group hover:-translate-y-2">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-white/5 mb-6 group-hover:from-white/20 group-hover:to-white/10 transition-colors">01</div>
            <h3 className="text-2xl font-bold font-sans mb-4">Micro SaaS One <span className="text-sm font-normal text-[#8A9BC4]">&reg;</span></h3>
            <p className="text-[#8A9BC4] font-light">Escolha uma ideia que faça sentido para você.</p>
          </GlassCard>

          <GlassCard className="p-8 text-left gsap-reveal group hover:-translate-y-2">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#3B6FFF]/20 to-[#3B6FFF]/5 mb-6 group-hover:from-[#3B6FFF]/30 group-hover:to-[#3B6FFF]/10 transition-colors">02</div>
            <h3 className="text-2xl font-bold font-sans mb-4">Seusite.ai <span className="text-sm font-normal text-[#8A9BC4]">&reg;</span></h3>
            <p className="text-[#8A9BC4] font-light">Crie sua primeira página de apresentação.</p>
          </GlassCard>

          <GlassCard className="p-8 text-left gsap-reveal group hover:-translate-y-2">
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#8B3FFF]/20 to-[#8B3FFF]/5 mb-6 group-hover:from-[#8B3FFF]/30 group-hover:to-[#8B3FFF]/10 transition-colors">03</div>
            <h3 className="text-2xl font-bold font-sans mb-4">Micro SaaS Pro <span className="text-sm font-normal text-[#8A9BC4]">&reg;</span></h3>
            <p className="text-[#8A9BC4] font-light">Construa, lance e venda.</p>
          </GlassCard>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 mb-16 gsap-reveal">
            <p className="text-[#8A9BC4] font-light text-lg">
                Esse pack foi criado pelo time <span className="text-white font-medium">DS Company &reg;</span> para encurtar o caminho entre a ideia e a renda real.
            </p>
            <p className="text-[#8A9BC4] font-light text-lg">
                Obrigado por confiar no nosso trabalho.
            </p>
            <p className="text-2xl font-medium text-white italic">
                Agora vai.
            </p>
        </div>

        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-[#8A9BC4] gsap-reveal">
            <div className="flex items-center gap-2">
                <span className="font-mono uppercase tracking-widest text-[#00F0FF] text-xs">Suporte</span>
                <a href="mailto:davi4resende@gmail.com" className="hover:text-white transition-colors">davi4resende@gmail.com</a>
            </div>

            <div className="flex items-center gap-4">
                <span className="font-mono uppercase tracking-widest text-[#00F0FF] text-xs">Instagram</span>
                <a href="https://instagram.com/dscompany1_" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@dscompany1_</a>
                <a href="https://instagram.com/davi._link" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@davi._link</a>
                <a href="https://instagram.com/layon.dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@layon.dev</a>
                <a href="https://instagram.com/lz._page" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@lz._page</a>
            </div>

            <div className="flex items-center gap-2">
                <span className="font-mono uppercase tracking-widest text-[#00F0FF] text-xs">Site</span>
                <a href="https://dscompany1.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">dscompany1.vercel.app</a>
            </div>
        </div>
      </div>
    </section>
  );
}
