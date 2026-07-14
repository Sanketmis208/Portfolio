export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  techStack: string[];
  resultLine: string;
  problemStatement: string;
  approach: string;
  solution: string;
  backendCapabilities: string[];
  frontendCapabilities: string[];
  hasBeforeAfter: boolean;
  year: string;
  color: string;
  category: string;
  image?: string;
  link?: string;
  githubLink?: string;
  appLink?: string;
  mobileImages?: string[];
}

export const projects: Project[] = [
  {
    slug: 'florinaa',
    title: 'Florinaa',
    tagline: 'Luxury textile & blanket export platform',
    image: '/florinaa.png',
    link: 'https://www.florinaa.com/',
    githubLink: 'https://github.com/Sanketmis208/Florinaa',
    description:
      "A fully custom business website built from the ground up for a commercial client in the home textiles industry. I handled the complete development lifecycle, including responsive frontend development, interactive UI, product showcase pages, catalog downloads, inquiry forms, and performance optimization, resulting in a premium digital experience aligned with the client's brand identity.",
    role: 'Full Stack Developer',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'GSAP', 'Tailwind CSS'],
    resultLine: 'A masterclass in digital luxury: seamlessly blending high-end aesthetics with robust, scalable commerce architecture.',
    problemStatement:
      "Maulifab Pvt. Ltd. needed to transition from a legacy vanilla JS website to a modern, premium platform that could showcase their luxury textile products to international buyers while giving their team full control over content and catalogue management.",
    approach:
      "I designed a complete MERN stack solution with two interfaces: a public-facing premium showcase with GSAP-powered animations and an ivory/gold/charcoal design system, plus a secure admin dashboard for real-time content management. The architecture prioritized image-heavy performance through Cloudinary's optimization pipeline.",
    solution:
      'The final platform features dynamic category linking, catalogue PDF integration, a responsive design system built for luxury aesthetics, and a JWT-authenticated admin panel. The Cloudinary pipeline handles automatic image optimization, cropping, and format conversion for the extensive product catalogue.',
    backendCapabilities: [
      'JWT-authenticated admin dashboard with role-based access',
      'MongoDB schema design for products, categories, and catalogues',
      'Cloudinary media pipeline — upload, transform, optimize',
      'RESTful API architecture with Express middleware',
    ],
    frontendCapabilities: [
      'Ivory/gold/charcoal premium design system',
      'GSAP ScrollTrigger animations throughout',
      'Dynamic product catalogue with category filtering',
      'Fully responsive layout optimized for all viewports',
    ],
    hasBeforeAfter: true,
    year: '2026',
    color: '#D4A853',
    category: 'Web Development',
  },
  {
    slug: 'subcidys',
    title: 'Subcidys',
    tagline: 'GST-ready business management for Indian MSMEs',
    image: '/subcidys.jpg',
    appLink: 'https://play.google.com/store/apps/details?id=com.subcidys.subcidys_mobile&hl=en_IN',
    mobileImages: [
      '/subcidys/1.png',
      '/subcidys/2.png',
      '/subcidys/3.png',
      '/subcidys/4.png',
      '/subcidys/5.png',
      '/subcidys/6.png',
    ],
    description:
      'A comprehensive business management platform built for Indian MSMEs, featuring GST-compliant invoicing, inventory management, and offline support. Built with Flutter using Clean Architecture and Riverpod, backed by Node.js/Express with Prisma ORM.',
    role: 'Full Stack Developer & Mobile Engineer',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'go_router', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    resultLine: 'Empowering small businesses with enterprise-grade tools at MSME-friendly pricing',
    problemStatement:
      'Indian MSMEs struggle with GST compliance and lack affordable, user-friendly business management tools. Most existing solutions are either too complex or too expensive for small business owners.',
    approach:
      'I built a cross-platform Flutter application using Clean Architecture principles with Riverpod for state management. The backend uses Node.js with Prisma ORM for type-safe database operations. The dark-anchor/cream-body UI was designed for extended use without eye strain.',
    solution:
      'Subcidys delivers GST-ready invoice generation, inventory tracking, customer management, and business analytics — all with offline support so MSMEs in areas with unreliable connectivity can keep working.',
    backendCapabilities: [
      'Node.js/Express API with Prisma ORM',
      'PostgreSQL database with optimized queries',
      'GST calculation engine and invoice generation',
      'Offline-first architecture with data sync',
    ],
    frontendCapabilities: [
      'Flutter Clean Architecture with Riverpod state management',
      'Dark-anchor/cream-body UI design system',
      'go_router navigation with deep linking',
      'Offline support with local data persistence',
    ],
    hasBeforeAfter: false,
    year: 'May 2026 - Present',
    color: '#8B5CF6',
    category: '',
  },
  {
    slug: 'lnmiit-portal',
    title: 'LNMIIT Multi-Department Portal',
    tagline: 'Unified portal for campus departments',
    image: '/Lnmiit_Portal.png',
    description:
      "A multi-department web portal for The LNM Institute of Information Technology, featuring a multi-subdomain architecture with per-department API scoping. Built with React frontend and Express/MySQL backend.",
    role: 'Full Stack Developer',
    techStack: ['React', 'Express', 'MySQL', 'REST API', 'JWT', 'Nginx'],
    resultLine: 'Unified campus operations across multiple departments under one scalable architecture',
    problemStatement:
      "LNMIIT's various departments operated on disconnected systems, making it difficult for students and faculty to access department-specific resources.",
    approach:
      'I designed a multi-subdomain architecture where each department gets its own scoped environment while sharing a common authentication and API layer.',
    solution:
      'The portal serves multiple departments through subdomain routing, with per-department API scoping ensuring data isolation. Each department can manage their own content through a shared admin interface.',
    backendCapabilities: [
      'Multi-subdomain architecture with Nginx routing',
      'Per-department API scoping and data isolation',
      'MySQL database with normalized schema design',
      'JWT authentication shared across subdomains',
    ],
    frontendCapabilities: [
      'React SPA with dynamic department theming',
      'Responsive dashboard for department admins',
      'Student-facing resource directory',
      'Event management and notification system',
    ],
    hasBeforeAfter: false,
    year: '2024',
    color: '#3B82F6',
    category: 'Web Development',
  },
  {
    slug: 'dhatuscan',
    title: 'DhatuScan App',
    tagline: 'Advanced mobile scanning solution',
    description:
      'A Flutter-based mobile application designed for efficient scanning and data processing, featuring a clean and intuitive user interface.',
    role: 'Mobile Developer',
    techStack: ['Flutter', 'Dart', 'Camera', 'Image Processing', 'Local Storage'],
    resultLine: 'Shipped a highly performant scanning application across mobile platforms.',
    problemStatement:
      'Existing scanning tools were often slow, inaccurate, or lacked a modern user experience.',
    approach:
      "I leveraged Flutter's cross-platform capabilities along with native camera integrations to create a seamless scanning experience.",
    solution:
      'DhatuScan delivers fast and accurate scanning, local data persistence, and a highly responsive UI — all from one codebase.',
    backendCapabilities: [
      'Image processing pipeline',
      'Local database for scan history',
      'Data export and sharing features',
      'Efficient resource management',
    ],
    frontendCapabilities: [
      'Cross-platform Flutter UI',
      'Custom camera viewfinder interface',
      'Scan result visualization',
      'Real-time feedback and alerts',
    ],
    hasBeforeAfter: false,
    year: '2025',
    color: '#27C93F',
    category: 'MOBILE DEVELOPMENT',
    githubLink: 'https://github.com/Sanketmis208/DhatuScan_App',
    mobileImages: ['/Dhatuscan/1.png', '/Dhatuscan/2.png', '/Dhatuscan/3.png'],
  },
];
