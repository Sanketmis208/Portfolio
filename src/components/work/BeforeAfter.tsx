'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterProps {
  beforeLabel?: string;
  afterLabel?: string;
  projectColor?: string;
}

export default function BeforeAfter({
  beforeLabel = 'Before',
  afterLabel = 'After',
  projectColor = '#D4A853',
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden select-none border border-[var(--color-border)]"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
      data-cursor="drag"
    >
      {/* Before (full width, underneath) */}
      <div className="absolute inset-0 bg-[var(--color-bg-tertiary)]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-bold opacity-10 text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              Legacy
            </div>
            <p className="text-xs text-[var(--color-text-muted)] mt-2 uppercase tracking-widest">Vanilla JS • Static HTML</p>
          </div>
        </div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* After (clipped to slider position) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${projectColor}15, var(--color-bg-secondary))` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold opacity-15" style={{ fontFamily: 'var(--font-display)', color: projectColor }}>
                Premium
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-2 uppercase tracking-widest">MERN • GSAP • Cloudinary</p>
            </div>
          </div>
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(${projectColor} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }} />
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 cursor-col-resize"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="w-px h-full bg-[var(--color-accent)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[var(--color-bg-primary)]">
            <path d="M5 3L2 8L5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3L14 8L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full glass text-[var(--color-text-secondary)]">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full glass text-[var(--color-text-secondary)]">
          {afterLabel}
        </span>
      </div>
    </div>
  );
}
