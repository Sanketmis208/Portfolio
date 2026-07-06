import SectionReveal from '@/components/shared/SectionReveal';

export default function OffScreenLife() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="max-w-2xl mx-auto border-l-2 border-[var(--color-accent)]/30 pl-8 md:pl-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
              Off Screen
            </p>
            <p
              className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed italic"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              When I&apos;m not coding, you&apos;ll find me on the badminton court, organizing events
              with campus clubs, or getting lost in premium UI/UX explorations that fuel the next
              build.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
