'use client';

import { testimonials } from '@/data/experience';

export default function TestimonialMarquee() {
  const cards = [...testimonials, ...testimonials]; // Double for seamless loop

  return (
    <div className="overflow-hidden py-4 group">
      <div
        className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ ['--marquee-duration' as string]: '40s', width: 'max-content' }}
      >
        {cards.map((t, i) => (
          <div
            key={i}
            className="w-[350px] md:w-[400px] shrink-0 p-6 md:p-8 rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/15 transition-all duration-300"
          >
            <p
              className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic"
              style={{ fontFamily: 'var(--font-accent)' }}
            >
              {t.quote}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center text-xs text-[var(--color-text-muted)]">
                {t.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {t.author}
                  {t.isPlaceholder && (
                    <span className="ml-2 text-[10px] text-[var(--color-accent)] uppercase tracking-wider">
                      Placeholder
                    </span>
                  )}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
