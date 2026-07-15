'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/projects';
import SectionReveal from '@/components/shared/SectionReveal';
import MagneticButton from '@/components/shared/MagneticButton';

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4 text-center">
            Selected Projects
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-24 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            My Work
          </h2>
        </SectionReveal>

        <div className="flex flex-col gap-32">
          {projects.map((project, i) => (
            <SectionReveal key={project.slug} delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left side info */}
                <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-start space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-medium text-[var(--color-text-muted)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {project.category && (
                      <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-accent)] font-medium">
                        {project.category}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[var(--color-accent)] font-medium text-lg">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="text-[var(--color-text-secondary)] leading-relaxed space-y-4">
                    <p>{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full glass-panel text-[var(--color-text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {project.githubLink && (
                      <MagneticButton variant="outline" href={project.githubLink}>
                        GitHub
                      </MagneticButton>
                    )}
                    {project.link && (
                      <MagneticButton variant="primary" href={project.link}>
                        Website
                      </MagneticButton>
                    )}
                    {project.appLink && (
                      <MagneticButton variant="primary" href={project.appLink}>
                        App Link
                      </MagneticButton>
                    )}
                  </div>
                </div>

                {/* Right side mockup */}
                <div className="lg:col-span-7 order-1 lg:order-2 flex items-center justify-center">
                  {project.mobileImages && project.mobileImages.length >= 3 ? (
                    <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] flex items-center justify-center gap-3 sm:gap-6">
                      {project.mobileImages.slice(0, 3).map((src, idx) => (
                        <motion.div
                          key={idx}
                          className={`relative w-[28%] aspect-[9/19] rounded-[2rem] border-[6px] border-[#1A1A1D] hover:ring-1 hover:ring-[var(--color-accent)] bg-[#1A1A1D] overflow-hidden shadow-2xl transition-all duration-500 ${
                            idx === 1 ? '-translate-y-6 z-10 scale-110 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'opacity-70 z-0'
                          }`}
                          whileHover={{ scale: idx === 1 ? 1.15 : 1.05, opacity: 1, zIndex: 20 }}
                        >
                          {/* Notch simulation */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-inherit rounded-b-xl z-20 transition-colors duration-500" />
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div
                      className="relative w-full aspect-video flex flex-col rounded-2xl overflow-hidden glass-card shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      {/* Window Controls */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]/30 bg-black/20 z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      
                      {/* Image Container */}
                      <div className="relative flex-1 w-full overflow-hidden">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-700 hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-bold opacity-10 text-[var(--color-text-primary)]">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
