export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOutCirc: [0.85, 0, 0.15, 1] as [number, number, number, number],
  gsap: {
    outExpo: 'power4.out',
    outQuart: 'power3.out',
    inOutCirc: 'circ.inOut',
  },
};

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  xslow: 1.2,
};

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo, delay },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE.outExpo, delay },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.outExpo, delay },
  }),
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo, delay },
  }),
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.normal, delayChildren: 0.1 },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE.outExpo },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: DURATION.fast, ease: EASE.outQuart },
  },
};
