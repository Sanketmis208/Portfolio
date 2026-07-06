'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`} className="group block" data-cursor="view">
        <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/20 transition-all duration-500">
          {/* Image area */}
          <div
            className="aspect-[16/9] w-full relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}12, ${project.color}06, var(--color-bg-secondary))`,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-8xl md:text-9xl font-bold opacity-[0.06] text-[var(--color-text-primary)] select-none"
                style={{ fontFamily: 'var(--font-display)' }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ duration: 0.5 }}
              >
                {project.title.split(' ')[0]}
              </motion.div>
            </div>
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full glass text-[var(--color-text-secondary)]">
                {project.category}
              </span>
            </div>
            {/* Year */}
            <div className="absolute top-4 right-4">
              <span className="text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                {project.year}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-80" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3
              className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">{project.tagline}</p>
            <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
              {project.resultLine}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)]/10 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="text-[10px] px-3 py-1 text-[var(--color-text-muted)]">
                  +{project.techStack.length - 5}
                </span>
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium">
              <span>Explore</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
