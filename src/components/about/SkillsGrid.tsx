'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data/experience';
import SectionReveal from '@/components/shared/SectionReveal';

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillCategories.map((category, i) => (
        <SectionReveal key={category.title} delay={i * 0.1}>
          <motion.div
            className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/15 transition-all duration-500 h-full"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{category.icon}</span>
              <h3
                className="text-lg font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)] transition-all duration-300 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        </SectionReveal>
      ))}
    </div>
  );
}
