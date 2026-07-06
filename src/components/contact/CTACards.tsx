'use client';

import { motion } from 'framer-motion';
import SectionReveal from '@/components/shared/SectionReveal';

const ctaCards = [
  {
    title: 'Full-time Roles',
    description: 'Looking for a dedicated full stack engineer for your team? I bring MERN + Flutter expertise and a shipped-product mindset.',
    cta: 'Get in touch',
    href: 'mailto:sanket@example.com?subject=Full-time Opportunity',
    icon: '🏢',
    accent: 'var(--color-accent)',
  },
  {
    title: 'Freelance Projects',
    description: 'Have a project that needs building from scratch? From web platforms to mobile apps, I ship end-to-end.',
    cta: 'Discuss a project',
    href: 'mailto:sanket@example.com?subject=Freelance Project',
    icon: '🚀',
    accent: 'var(--color-accent-secondary)',
  },
  {
    title: 'Internships',
    description: 'Open to summer and semester internships where I can contribute meaningfully and grow alongside your team.',
    cta: 'Send a message',
    href: 'mailto:sanket@example.com?subject=Internship Inquiry',
    icon: '🎓',
    accent: '#3B82F6',
  },
];

export default function CTACards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ctaCards.map((card, i) => (
        <SectionReveal key={card.title} delay={i * 0.1}>
          <motion.a
            href={card.href}
            className="block p-6 md:p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/20 transition-all duration-500 h-full group"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="w-full h-1 rounded-full mb-6"
              style={{ background: card.accent }}
            />
            <span className="text-2xl">{card.icon}</span>
            <h3
              className="text-lg font-bold text-[var(--color-text-primary)] mt-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {card.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {card.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: card.accent }}>
              <span>{card.cta}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </motion.a>
        </SectionReveal>
      ))}
    </div>
  );
}
