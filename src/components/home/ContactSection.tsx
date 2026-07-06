'use client';

import SectionReveal from '@/components/shared/SectionReveal';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactSection() {
  return (
    <div id="contact" className="py-24 md:py-32 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <SectionReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4">
            Contact
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-8 uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s Talk
          </h2>
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-xl mb-16">
            Have a project in mind, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <SectionReveal>
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Send a message
              </h2>
              <ContactForm />
            </div>
          </SectionReveal>

          {/* Info */}
          <SectionReveal delay={0.15}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:sanketmistry.codes@gmail.com"
                    className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    sanketmistry.codes@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
                  Social
                </h3>
                <div className="space-y-3 flex flex-col items-start gap-2">
                  <a
                    href="https://www.linkedin.com/in/sanket-mistry-666164287/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    <span className="font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-4 after:bg-[var(--color-accent)] group-hover:after:w-full after:transition-all after:duration-300">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Sanketmis208"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    <span className="font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-4 after:bg-[var(--color-accent)] group-hover:after:w-full after:transition-all after:duration-300">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
