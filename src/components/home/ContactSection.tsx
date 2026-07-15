'use client';

import ContactForm from '@/components/contact/ContactForm';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <div id="contact" className="relative pt-24 pb-12 md:pt-32 md:pb-12 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] overflow-hidden">
      {/* Background glow for the end of the site */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[var(--color-accent)]/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-6">
            What's Next?
          </p>
          <h2
            className="text-5xl md:text-7xl lg:text-9xl font-bold text-[var(--color-text-primary)] mb-8 uppercase tracking-tighter"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-text-primary)] to-[var(--color-text-muted)]">TALK</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm currently available for freelance work and open to new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mb-24 md:mb-32">
          {/* Info - Left side on desktop */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Direct Contact
              </h3>
              <a
                href="mailto:sanketmistry.codes@gmail.com"
                className="text-xl md:text-2xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 break-all"
              >
                sanketmistry.codes@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
                Socials
              </h3>
              <div className="flex flex-col gap-4 items-start">
                <a
                  href="https://www.linkedin.com/in/sanket-mistry-666164287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] group-hover:after:w-full after:transition-all after:duration-300">
                    LinkedIn
                  </span>
                  <svg className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Sanketmis208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                >
                  <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] group-hover:after:w-full after:transition-all after:duration-300">
                    GitHub
                  </span>
                  <svg className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form - Right side on desktop */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="bg-[var(--color-bg-secondary)] p-8 md:p-12 rounded-2xl border border-[var(--color-border)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 blur-[50px] pointer-events-none" />
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 relative z-10" style={{ fontFamily: 'var(--font-display)' }}>
                Send a message
              </h3>
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Pseudo-footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] text-sm text-[var(--color-text-muted)] gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Link
              href="/"
              className="text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sanket <span className="text-[var(--color-accent)]">Mistry</span>
            </Link>
            <p className="hidden md:block w-1 h-1 rounded-full bg-[var(--color-border)]"></p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-[var(--color-text-primary)] transition-colors duration-300 flex items-center gap-2 group"
          >
            Back to top
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
