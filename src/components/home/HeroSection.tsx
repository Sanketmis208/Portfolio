'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RubiksCube from './RubiksCube';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Animate intro line
      gsap.fromTo(
        '.hero-intro',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power4.out' }
      );

      // Animate the marquee background
      gsap.fromTo(
        '.hero-marquee',
        { opacity: 0 },
        { opacity: 0.04, duration: 1.5, delay: 0.3, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heroWords = 'SHIPPING PRODUCTS'.split('');

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen w-full flex items-center pt-20">
        {/* Background marquee text */}
        <div className="hero-marquee absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none opacity-0">
          <div className="animate-marquee whitespace-nowrap flex" style={{ ['--marquee-duration' as string]: '15s' }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="text-[18vw] font-bold uppercase mx-8 text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                BUILDING
              </span>
            ))}
          </div>
        </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex items-center relative z-30 pointer-events-none">
        {/* Left: Text */}
        <div className="space-y-8 w-full lg:w-1/2">
          <div className="overflow-hidden">
            <motion.h1
              className="text-[13vw] md:text-[8vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              BUILDING
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="text-[13vw] md:text-[8vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] text-gradient"
              style={{ fontFamily: 'var(--font-display)' }}
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              DIGITAL PRODUCTS
            </motion.h1>
          </div>

          <motion.p
            className="hero-intro text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg leading-relaxed opacity-0"
          >
            Hi, I&apos;m <span className="text-[var(--color-text-primary)] font-medium">Sanket Mistry</span> — a Full Stack Developer &amp; Flutter Engineer building fast, scalable web and mobile applications with clean architecture and exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 pt-4 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/work"
              className="px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg-primary)] rounded-full text-sm font-semibold hover:shadow-[0_0_30px_rgba(192,255,115,0.3)] transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="/contact"
              className="px-7 py-3.5 border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-full text-sm font-semibold hover:bg-[var(--color-bg-secondary)] transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen Interactive 3D Rubik's Cube */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <RubiksCube />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      </div>
    </section>
  );
}
