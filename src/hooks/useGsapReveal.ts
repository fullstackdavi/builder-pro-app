import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useGsapReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !triggerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.gsap-reveal');
    
    gsap.set(elements, {
      y: 50,
      opacity: 0,
      filter: 'blur(10px)',
      scale: 0.95
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out',
            overwrite: 'auto'
          });
        },
        onLeaveBack: () => {
          gsap.to(elements, {
            y: 50,
            opacity: 0,
            filter: 'blur(10px)',
            scale: 0.95,
            duration: 0.5,
            overwrite: 'auto'
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return { containerRef, triggerRef };
}
