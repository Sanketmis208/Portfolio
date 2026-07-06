'use client';

import { motion } from 'framer-motion';
import SectionReveal from '@/components/shared/SectionReveal';

interface CapabilityPanelsProps {
  backendCapabilities: string[];
  frontendCapabilities: string[];
}

export default function CapabilityPanels({ backendCapabilities, frontendCapabilities }: CapabilityPanelsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {/* Backend panel */}
      <SectionReveal>
        <motion.div
          className="p-8 md:p-10 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/15 transition-all duration-500 h-full"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
              <span className="text-lg">⚙️</span>
            </div>
            <h3
              className="text-xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              I built the backend
            </h3>
          </div>
          <ul className="space-y-4">
            {backendCapabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0" />
                <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cap}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </SectionReveal>

      {/* Frontend panel */}
      <SectionReveal delay={0.15}>
        <motion.div
          className="p-8 md:p-10 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-secondary)]/15 transition-all duration-500 h-full"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-secondary)]/10 flex items-center justify-center">
              <span className="text-lg">🎨</span>
            </div>
            <h3
              className="text-xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              I built the experience
            </h3>
          </div>
          <ul className="space-y-4">
            {frontendCapabilities.map((cap, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-secondary)] mt-2 shrink-0" />
                <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cap}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </SectionReveal>
    </div>
  );
}
