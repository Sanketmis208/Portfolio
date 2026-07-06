'use client';

import { motion } from 'framer-motion';

export default function DraggableBadge() {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      <motion.div
        drag
        dragConstraints={{ top: -50, bottom: 50, left: -150, right: 150 }}
        dragElastic={0.15}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        whileDrag={{ scale: 1.1, rotate: 10 }}
        className="cursor-grab active:cursor-grabbing select-none"
        data-cursor="drag"
      >
        <div className="px-6 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-primary)] font-medium flex items-center gap-2 shadow-lg hover:border-[var(--color-accent)]/30 transition-colors duration-300">
          <span>Drag me</span>
          <span className="text-lg">👋</span>
        </div>
      </motion.div>
    </div>
  );
}
