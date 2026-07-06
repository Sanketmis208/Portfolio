'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function JourneySection() {
  const journeyText =
    "I started with HTML, CSS, and JavaScript—the fundamentals that sparked my interest in web development.That curiosity led me to React, Node.js, the MERN stack, and eventually Flutter, where I discovered the excitement of building high-performance cross-platform applications. Today, I enjoy creating scalable web and mobile applications, turning ideas into polished products that solve real-world problems.Whether I'm developing full-stack web applications or crafting intuitive mobile experiences, my goal remains the same: build software that is fast, reliable, and genuinely useful—not just impressive in a demo.";
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const words = containerRef.current.querySelectorAll('.word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const words = journeyText.split(' ').map((word, i) => (
    <span key={i} className="word inline-block mr-[0.35em] text-[var(--color-text-primary)]">
      {word}
    </span>
  ));

  return (
    <section className="py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-12">
            The Journey
          </p>
          <div
            ref={containerRef}
            className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {words}
          </div>
        </div>
      </div>
    </section>
  );
}
