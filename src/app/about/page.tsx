import type { Metadata } from 'next';
import KineticHeadline from '@/components/shared/KineticHeadline';
import PageTransition from '@/components/shared/PageTransition';
import SectionReveal from '@/components/shared/SectionReveal';
import MarqueeText from '@/components/shared/MarqueeText';
import SkillsGrid from '@/components/about/SkillsGrid';
import Timeline from '@/components/about/Timeline';
import TestimonialMarquee from '@/components/about/TestimonialMarquee';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full Stack Developer (MERN) and Flutter Engineer, B.Tech in Computer & Communication Engineering at LNMIIT Jaipur.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <KineticHeadline text="ABOUT ME" marqueeWord="DEVIL" />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m Sanket &quot;Devil&quot; Mistry — a Full Stack Developer specializing in
              MERN and a Flutter Engineer with a knack for shipping polished, production-grade
              products.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Currently pursuing B.Tech in Computer &amp; Communication Engineering at LNMIIT
              Jaipur (2023–27), I balance academic work with real client projects and open-source
              exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 md:py-24">
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

      <MarqueeText
        text="BUILDING PRODUCTS THAT MATTER"
        speed={25}
        className="py-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] border-y border-[var(--color-border)]"
      />

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Journey
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Experience Timeline
            </h2>
          </SectionReveal>
          <Timeline />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
          <SectionReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Kind Words
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Testimonials
            </h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Collecting testimonials from professors, clients, and collaborators — placeholder slots shown below.
            </p>
          </SectionReveal>
        </div>
        <TestimonialMarquee />
      </section>
    </PageTransition>
  );
}
