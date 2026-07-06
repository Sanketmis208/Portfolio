'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function MagneticButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPosition({
      x: (e.clientX - left - width / 2) * 0.3,
      y: (e.clientY - top - height / 2) * 0.3,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const sizeMap = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variantMap = {
    primary:
      'bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-semibold hover:shadow-[0_0_30px_rgba(192,255,115,0.3)]',
    outline:
      'border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]',
  };

  const cls = `${sizeMap[size]} ${variantMap[variant]} rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 ${disabled ? 'opacity-50 pointer-events-none' : ''} ${className}`;

  const inner = href ? (
    href.startsWith('/') || href.startsWith('#') ? (
      <Link href={href} className={cls}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    )
  ) : (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className="inline-flex"
    >
      {inner}
    </motion.div>
  );
}
