import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeBackground from './components/ThreeBackground';
import CoverSlide from './components/CoverSlide';
import GuideOneSlide from './components/GuideOneSlide';
import GuideTwoSlide from './components/GuideTwoSlide';
import GuideThreeSlide from './components/GuideThreeSlide';
import NextStepsSlide from './components/NextStepsSlide';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const lenisRef = useRef<Lenis | null>(null);
  const currentPageRef = useRef(1);

  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  const scrollToSlide = (page: number) => {
    const targetElement = document.querySelector(`.slide-section[data-page="${page}"]`);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement);
    }
  };

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Page Number Observer
    const slides = document.querySelectorAll('.slide-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNum = parseInt(entry.target.getAttribute('data-page') || '1', 10);
            setCurrentPage(pageNum);
          }
        });
      },
      { threshold: 0.5 }
    );

    slides.forEach((slide) => observer.observe(slide));

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        // Only prevent default for arrow keys/page keys to allow normal form interaction if any
        e.preventDefault();
        const next = Math.min(currentPageRef.current + 1, totalPages);
        scrollToSlide(next);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        const prev = Math.max(currentPageRef.current - 1, 1);
        scrollToSlide(prev);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(totalPages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
      lenis.destroy();
    };
  }, []);

  const slideNames = [
    'Apresentação',
    'Seusite.ai ®',
    'Micro SaaS One ®',
    'Micro SaaS Pro ®',
    'Próximos Passos'
  ];

  return (
    <div className="relative text-white selection:bg-[#3B6FFF] selection:text-white">
      <ThreeBackground />
      
      {/* Decorative Gradient Line top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-30 z-50"></div>

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 p-6 md:px-12 flex justify-between items-center z-40">
        <span className="font-sans font-bold text-sm tracking-wider text-[#F0F4FF]">
          DS Company <span className="text-[#00F0FF] font-light">&middot;</span> PACK BUILDER PRO
        </span>
        <div className="hidden md:flex gap-1.5 p-1 rounded-full border border-white/5 bg-white/2 backdrop-blur-md">
          {slideNames.map((name, index) => {
            const pageNum = index + 1;
            const isActive = currentPage === pageNum;
            return (
              <button
                key={pageNum}
                onClick={() => scrollToSlide(pageNum)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#3B6FFF] to-[#8B3FFF] text-white shadow-[0_0_15px_rgba(59,111,255,0.4)]' 
                    : 'text-[#8A9BC4] hover:text-white hover:bg-white/5'
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>
      </header>

      <main className="relative z-10">
        <CoverSlide />
        <GuideOneSlide />
        <GuideTwoSlide />
        <GuideThreeSlide />
        <NextStepsSlide />
      </main>

      {/* Vertical Dot Navigation indicators on the right side */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNum = i + 1;
          const isActive = currentPage === pageNum;
          return (
            <button
              key={pageNum}
              onClick={() => scrollToSlide(pageNum)}
              className="group relative flex items-center justify-end p-2"
              aria-label={`Ir para o slide ${pageNum}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 text-xs font-medium tracking-wider text-[#00F0FF] opacity-0 translate-x-2 bg-gradient-to-r from-[#0A1128] to-[#060B18] px-3 py-1 rounded-md border border-white/10 shadow-lg pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
                {slideNames[i]}
              </span>
              
              {/* Interactive dot container */}
              <span className={`w-3 h-3 rounded-full border transition-all duration-500 flex items-center justify-center ${
                isActive 
                  ? 'border-[#00F0FF] bg-[#00F0FF] scale-125 shadow-[0_0_12px_#00F0FF]' 
                  : 'border-white/20 bg-transparent group-hover:border-[#3B6FFF]/60 group-hover:bg-[#3B6FFF]/25'
              }`}>
                {isActive && <span className="w-1 h-1 bg-[#060B18] rounded-full animate-ping"></span>}
              </span>
            </button>
          );
        })}
      </div>

      {/* Fixed Elements page count overlay */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-2 pointer-events-none mix-blend-screen">
        <div className="font-mono text-sm tracking-widest text-[#8A9BC4]">
          <span className="text-[#F0F4FF] font-medium">{String(currentPage).padStart(2, '0')}</span> / {String(totalPages).padStart(2, '0')}
        </div>
      </div>

      <Footer />
    </div>
  );
}
