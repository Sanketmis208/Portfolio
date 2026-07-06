'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface KineticHeadlineProps {
  text: string;
  marqueeWord?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function KineticHeadline({
  text,
  marqueeWord,
  className = '',
  as: Tag = 'h1',
}: KineticHeadlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const chars = textRef.current.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.02,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const chars = text.split('').map((c, i) => (
    <span key={i} className="char inline-block" style={{ perspective: '1000px' }}>
      {c === ' ' ? '\u00A0' : c}
    </span>
  ));

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {marqueeWord && (
        <div className="absolute inset-0 flex items-center overflow-hidden opacity-[0.03] pointer-events-none select-none">
          <div className="animate-marquee whitespace-nowrap flex" style={{ ['--marquee-duration' as string]: '20s' }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="text-[14vw] md:text-[10vw] font-bold uppercase mx-8 text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {marqueeWord}
              </span>
            ))}
          </div>
        </div>
      )}
      <Tag
        ref={textRef as React.RefObject<HTMLHeadingElement>}
        className="text-[11vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] text-[var(--color-text-primary)] relative z-10"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {chars}
      </Tag>
    </div>
  );
}
