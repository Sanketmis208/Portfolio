'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/shared/MagneticButton';
import SectionReveal from '@/components/shared/SectionReveal';

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.04] via-transparent to-[var(--color-accent-secondary)]/[0.04]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <SectionReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-8">
              <motion.div
                className="w-2 h-2 bg-[var(--color-accent)] rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Available for work
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Open to Full Stack
              <br />
              <span className="text-gradient">& Flutter Roles</span>
            </h2>

            <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-lg mx-auto">
              Let&apos;s build something exceptional together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <MagneticButton variant="primary" size="lg" href="/contact">
                Get in Touch
              </MagneticButton>
              <MagneticButton variant="outline" size="lg" href="https://linkedin.com/in/sanketmistry">
                LinkedIn
              </MagneticButton>
              <MagneticButton variant="outline" size="lg" href="/resume.pdf">
                Download CV ↓
              </MagneticButton>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
