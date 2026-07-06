'use client';

interface MarqueeTextProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
  separator?: string;
}

export default function MarqueeText({
  text,
  speed = 30,
  reverse = false,
  className = '',
  separator = '✦',
}: MarqueeTextProps) {
  const items = Array.from({ length: 12 }).map((_, i) => (
    <span key={i} className="inline-flex items-center gap-8 mx-4 shrink-0">
      <span>{text}</span>
      <span className="text-[var(--color-accent)] text-sm">{separator}</span>
    </span>
  ));

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ ['--marquee-duration' as string]: `${speed}s` }}
      >
        {items}
        {items}
      </div>
    </div>
  );
}
