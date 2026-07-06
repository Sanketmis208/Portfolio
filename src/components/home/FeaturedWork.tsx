'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';
import SectionReveal from '@/components/shared/SectionReveal';
import Image from 'next/image';

const featured = projects.filter((p) => ['florinaa', 'subcidys'].includes(p.slug));

export default function FeaturedWork() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Featured Work
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Selected Projects
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.15}>
              <Link href={`/work/${project.slug}`} className="group block" data-cursor="view">
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/20 transition-all duration-500"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project image placeholder or actual image */}
                  <div
                    className="aspect-[16/10] w-full relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                    }}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div
                            className="text-6xl md:text-7xl font-bold opacity-10 text-[var(--color-text-primary)]"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
                          {project.tagline}
                        </p>
                      </div>
                      <span className="text-xs text-[var(--color-text-muted)] shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {project.resultLine}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Project</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
