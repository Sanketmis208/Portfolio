'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  images: string[];
}

const PhoneFrame = ({ src, delay = 0, priority = false }: { src: string; delay?: number; priority?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="relative w-full max-w-[300px] aspect-[1/2.1] mx-auto bg-[#1a1a1a] rounded-[45px] p-2.5 shadow-2xl ring-1 ring-white/10"
  >
    {/* Screen */}
    <div className="relative w-full h-full bg-black rounded-[35px] overflow-hidden border border-white/10">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
        <div className="w-1/3 h-5 bg-[#1a1a1a] rounded-b-xl"></div>
      </div>
      <Image 
        src={src} 
        alt="App mockup" 
        fill 
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-top" 
      />
    </div>
  </motion.div>
);

export default function MobileMockupGrid({ images }: Props) {
  if (!images || images.length === 0) return null;

  return (
    <div className="pt-20 pb-20 lg:pb-52 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-secondary)]/50 to-transparent rounded-3xl"></div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 lg:gap-12 lg:translate-y-16">
            {images.filter((_, i) => i % 3 === 0).map((img, i) => (
              <PhoneFrame key={img} src={img} delay={i * 0.1} priority={i === 0} />
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-8 lg:gap-12">
            {images.filter((_, i) => i % 3 === 1).map((img, i) => (
              <PhoneFrame key={img} src={img} delay={0.2 + i * 0.1} priority={i === 0} />
            ))}
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-8 lg:gap-12 lg:translate-y-32 hidden lg:flex">
            {images.filter((_, i) => i % 3 === 2).map((img, i) => (
              <PhoneFrame key={img} src={img} delay={0.4 + i * 0.1} priority={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
