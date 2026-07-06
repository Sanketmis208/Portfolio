'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/data/experience';

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[var(--color-border)] py-12 md:py-16"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center px-4 md:px-8">
          <div
            className="text-5xl md:text-6xl font-bold text-[var(--color-accent)] mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
          </div>
          <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-widest">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
