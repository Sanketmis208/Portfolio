import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import PageTransition from '@/components/shared/PageTransition';
import SectionReveal from '@/components/shared/SectionReveal';
import CapabilityPanels from '@/components/work/CapabilityPanels';
import MobileMockupGrid from '@/components/work/MobileMockupGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: project.title,
    description: project.resultLine,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]">
                {project.category}
              </span>
              <span className="text-[10px] text-[var(--color-text-muted)]">{project.year}</span>
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {project.title}
            </h1>
            {(project.link || project.githubLink) && (
              <div className="mt-4 flex items-center gap-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    <span className="font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-4 after:bg-[var(--color-accent)] group-hover:after:w-full after:transition-all after:duration-300">Website Link</span>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    <span className="font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-4 after:bg-[var(--color-accent)] group-hover:after:w-full after:transition-all after:duration-300">GitHub Link</span>
                  </a>
                )}
              </div>
            )}
            <p className="mt-6 text-xl text-[var(--color-text-secondary)] max-w-2xl">
              {project.resultLine}
            </p>

          </SectionReveal>
        </div>
      </section>

      {/* Hero image placeholder - only show if there are no mobileImages */}
      {(!project.mobileImages || project.mobileImages.length === 0) && (
        <section className="pb-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionReveal>
              <div
                className="aspect-[16/8] rounded-2xl overflow-hidden border border-[var(--color-border)] relative"
                style={{
                  background: `linear-gradient(135deg, ${project.color}10, var(--color-bg-secondary), ${project.color}05)`,
                }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} hero`}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span
                      className="text-[15vw] font-bold opacity-[0.04] text-[var(--color-text-primary)] select-none"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title.split(' ')[0]}
                    </span>
                  </div>
                )}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Mobile Mockup Grid */}
      {project.mobileImages && project.mobileImages.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionReveal>
              <h2
                className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                App Interface
              </h2>
            </SectionReveal>
            <MobileMockupGrid images={project.mobileImages} />
          </div>
        </section>
      )}

      {/* Problem / Approach / Solution */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <SectionReveal>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-6">
                Project Overview
              </h3>
              <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed font-light">
                {project.description}
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mr-4">
                Stack:
              </span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-4 py-2 rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>


      {/* Capability Panels */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionReveal>
            <h2
              className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What I Built
            </h2>
          </SectionReveal>
          <CapabilityPanels
            backendCapabilities={project.backendCapabilities}
            frontendCapabilities={project.frontendCapabilities}
          />
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)] mb-4">
            Next Project
          </p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group inline-block"
            data-cursor="view"
          >
            <h2
              className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {nextProject.title}
            </h2>
            <p className="mt-2 text-[var(--color-text-muted)]">{nextProject.tagline}</p>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
