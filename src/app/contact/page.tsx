import type { Metadata } from 'next';
import KineticHeadline from '@/components/shared/KineticHeadline';
import PageTransition from '@/components/shared/PageTransition';
import SectionReveal from '@/components/shared/SectionReveal';
import CTACards from '@/components/contact/CTACards';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for full-time roles, freelance projects, or internship opportunities.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <KineticHeadline text="LET'S TALK" marqueeWord="CONTACT" />
          <p className="mt-6 text-lg text-[var(--color-text-secondary)] max-w-xl">
            Whether it&apos;s a full-time role, a freelance project, or just a conversation about
            building great products — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <CTACards />
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 border-t border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
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
                      href="mailto:sanket@example.com"
                      className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      sanket@example.com
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
                    Social
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://linkedin.com/in/sanketmistry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://github.com/sanketmistry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
                    Location
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Jaipur, Rajasthan, India
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    Open to remote work worldwide
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-[var(--color-accent)]">
                      Currently Available
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Open to full-time roles, freelance projects, and internships starting
                    immediately.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
