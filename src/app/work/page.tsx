import type { Metadata } from 'next';
import KineticHeadline from '@/components/shared/KineticHeadline';
import PageTransition from '@/components/shared/PageTransition';
import MarqueeText from '@/components/shared/MarqueeText';
import StatBar from '@/components/work/StatBar';
import ProjectCard from '@/components/work/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects — from luxury export platforms to cross-platform mobile apps.',
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <KineticHeadline text="SELECTED WORK" marqueeWord="PROJECTS" />
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-xl">
            Production projects across web and mobile — each one shipped, not shelved.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <StatBar />
        </div>
      </section>

      {/* Project grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <MarqueeText
        text="LET'S BUILD SOMETHING"
        speed={20}
        className="py-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-text-muted)] border-y border-[var(--color-border)]"
      />
    </PageTransition>
  );
}
