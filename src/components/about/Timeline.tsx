'use client';

import { motion } from 'framer-motion';
import { timeline } from '@/data/experience';

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px timeline-line opacity-30" />

      <div className="space-y-12">
        {timeline.map((entry, i) => (
          <motion.div
            key={i}
            className="relative pl-12 md:pl-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Dot */}
            <div className="absolute left-[11px] md:left-[27px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg-primary)]" />

            <div className="flex items-start gap-4">
              <span className="text-xs font-mono text-[var(--color-accent)] shrink-0 pt-1 tabular-nums">
                {entry.year}
              </span>
              <div>
                <h4
                  className="text-base md:text-lg font-bold text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {entry.title}
                </h4>
                <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{entry.subtitle}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
