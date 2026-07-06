export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  isPlaceholder?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'GSAP / Framer Motion' },
      { name: 'HTML5 / CSS3' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MongoDB / Mongoose' },
      { name: 'PostgreSQL / Prisma' },
      { name: 'MySQL' },
      { name: 'REST API Design' },
      { name: 'JWT / Auth' },
    ],
  },
  {
    title: 'Mobile',
    icon: '📱',
    skills: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Riverpod' },
      { name: 'go_router' },
      { name: 'iOS / Android Deployment' },
      { name: 'Clean Architecture' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Bitbucket' },
      { name: 'Jira' },
      { name: 'VS Code' },
      { name: 'Xcode' },
      { name: 'Android Studio' },
      { name: 'Figma' },
      { name: 'Vercel' },
      { name: 'Cloudinary' },
      { name: 'Postman' },
      { name: 'Nginx' },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: '2023',
    title: 'Started B.Tech at LNMIIT',
    subtitle: 'Computer & Communication Engineering',
    description:
      'Began my journey in Computer & Communication Engineering at The LNM Institute of Information Technology, Jaipur.',
  },
  {
    year: '2023',
    title: 'Teaching Assistant',
    subtitle: 'LNMIIT',
    description:
      'Served as a TA, discovering that teaching deepened my understanding of fundamentals and pushed me to learn faster.',
  },
  {
    year: '2024',
    title: 'Built LNMIIT Multi-Department Portal',
    subtitle: 'Campus Infrastructure',
    description:
      'Designed and developed a multi-subdomain portal architecture serving multiple campus departments with React and Express.',
  },
  {
    year: '2024',
    title: 'Shipped Florinaa',
    subtitle: 'Client Project — Maulifab Pvt. Ltd.',
    description:
      'Delivered a premium MERN stack platform for a luxury textile exporter, complete with an admin dashboard and GSAP animations.',
  },
  {
    year: '2024',
    title: 'Launched Subcidys',
    subtitle: 'MSME Business Tool',
    description:
      'Built a GST-ready business management platform with Flutter and Node.js, designed for Indian small businesses.',
  },
  {
    year: '2024',
    title: 'Shipped VibeSync',
    subtitle: 'Cross-Platform Music App',
    description:
      'Released a Flutter music streaming app across iOS and macOS with background playback and playlist management.',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"Testimonial from a professor, TA supervisor, or client will go here. Sanket\'s work on the portal was exceptional."',
    author: 'Professor Name',
    role: 'LNMIIT Faculty',
    isPlaceholder: true,
  },
  {
    quote:
      '"A testimonial from the Florinaa/Maulifab client about the quality of work delivered, attention to premium aesthetics, and reliability."',
    author: 'Client Name',
    role: 'Maulifab Pvt. Ltd.',
    isPlaceholder: true,
  },
  {
    quote:
      '"A testimonial from a peer, collaborator, or campus club member about Sanket\'s technical skills and teamwork."',
    author: 'Peer Name',
    role: 'Fellow Developer',
    isPlaceholder: true,
  },
];

export const stats = [
  { value: 3, suffix: '+', label: 'Years Coding' },
  { value: 4, suffix: '', label: 'Projects Shipped' },
  { value: 8, suffix: '+', label: 'Technologies Used' },
  { value: 2, suffix: '', label: 'Production Clients' },
];
