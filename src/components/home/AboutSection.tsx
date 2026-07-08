'use client';

import Image from 'next/image';
import MagneticButton from '@/components/shared/MagneticButton';
import SectionReveal from '@/components/shared/SectionReveal';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';

export default function AboutSection() {
  const techStack = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 
    'Tailwind CSS', 'Flutter', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <div id="about" className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Profile Image */}
              <div className="lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-colors duration-500 shadow-[0_0_40px_rgba(192,255,115,0.1)] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Image
                    src="/profile.png"
                    alt="Sanket Mistry"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Accent Glow behind */}
                  <div className="absolute -inset-4 bg-[var(--color-accent)]/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-start space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4 font-semibold">
                    About Me
                  </p>
                  <h2
                    className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-accent)]">Sanket Mistry</span>
                  </h2>
                </div>

                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                  I&apos;m Sanket Mistry, a software engineer passionate about building products that are fast, scalable, and genuinely useful. I enjoy taking ideas from a blank canvas to production, whether it&apos;s a real-time collaboration platform, an AI-powered application, or a polished cross-platform mobile app. My focus is on writing clean, maintainable code while creating intuitive user experiences that solve real problems.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <MagneticButton variant="primary" href="/resume.pdf">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Download Resume
                    </span>
                  </MagneticButton>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Capabilities
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Skills & Technologies
            </h2>
          </SectionReveal>
          <SkillsGrid />
        </div>
      </section>



      {/* Experience */}
      <section className="pt-16 pb-8 md:pt-24 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Experience
            </h2>
          </SectionReveal>
          <Timeline />
        </div>
      </section>
    </div>
  );
}
