import React from 'react';
import { useGsapReveal } from '../hooks/useGsapReveal';
import Badge from './Badge';

export default function CoverSlide() {
  const { containerRef, triggerRef } = useGsapReveal();

  return (
    <section 
      ref={triggerRef}
      className="slide-section min-h-screen w-full flex items-center justify-center p-6 md:p-12 lg:p-24"
      data-page="1"
    >
      <div 
        ref={containerRef}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24"
      >
        <div className="flex-1 space-y-6">
          <Badge>DS Company &reg; &middot; PRODUTO OFICIAL</Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter leading-[1.1] gsap-reveal font-heading">
            Pack{' '}
            <span className="inline-block animate-pulse border border-[#c693ff] bg-[#c59fff] text-[#060B18] px-4 py-1 rounded-xl">Builder</span>{' '}
            Pro <span className="text-xl align-top text-[#8A9BC4] font-normal">&reg;</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#F0F4FF] font-medium leading-relaxed max-w-2xl gsap-reveal">
            Sites, Micro SaaS e renda digital &mdash; tudo num único pack.
          </p>
          
          <p className="text-base md:text-lg text-[#8A9BC4] font-light leading-loose max-w-2xl gsap-reveal">
            Você acabou de garantir acesso a 3 guias que a maioria das pessoas vai demorar meses para descobrir, e você tem tudo agora na palma da sua mão. Não precisa de experiência. Não precisa saber programar. Só precisa seguir o que está aqui.
          </p>

          <div className="flex justify-start gap-4 flex-wrap pt-6 mt-6 border-t border-white/10 gsap-reveal">
            <span className="flex items-center gap-2 text-sm text-[#00F0FF]">
              <span className="text-lg">&✦</span> Criar sites com IA
            </span>
            <span className="flex items-center gap-2 text-sm text-[#00F0FF]">
              <span className="text-lg">&✦</span> 50 prompts validados
            </span>
            <span className="flex items-center gap-2 text-sm text-[#00F0FF]">
              <span className="text-lg">&✦</span> Do zero ao Micro SaaS no ar
            </span>
          </div>
        </div>

        <div className="flex-shrink-0 gsap-reveal">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center p-8 lg:-mt-10 overflow-hidden group hover:border-[#3B6FFF]/50 transition-colors duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B6FFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                    src="https://i.postimg.cc/zfp892Vp/image-(1).png" 
                    alt="Logo" 
                    className="w-full h-auto object-contain relative z-10 brightness-110 drop-shadow-[0_0_30px_rgba(59,111,255,0.4)] transition-transform duration-700 group-hover:scale-105"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
