import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import CustomCursor from '@/components/layout/CustomCursor';
import LenisProvider from '@/components/layout/LenisProvider';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanketmistry.space'),
  title: {
    default: 'Sanket Mistry — Full Stack Developer & Flutter Engineer',
    template: '%s | Sanket Mistry',
  },
  description:
    'Full Stack Developer (MERN) and Flutter Engineer. Building fast, polished products — from luxury export platforms to GST-ready MSME tools.',
  keywords: [
    'Full Stack Developer',
    'Flutter Engineer',
    'MERN Stack',
    'React',
    'Next.js',
    'Node.js',
    'Portfolio',
    'Sanket Mistry',
  ],
  authors: [{ name: 'Sanket Mistry' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Devil — Portfolio',
    title: 'Sanket "Devil" Mistry — Full Stack Developer & Flutter Engineer',
    description:
      'Building fast, polished products — from luxury export platforms to GST-ready MSME tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanket "Devil" Mistry — Full Stack Developer',
    description: 'Full Stack Developer (MERN) and Flutter Engineer building premium digital products.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col noise">
        {/* Ambient Glassmorphism Background Orbs */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-accent)]/10 blur-[120px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent-secondary)]/10 blur-[150px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
          <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-[var(--color-accent)]/5 blur-[100px] mix-blend-screen opacity-40 animate-pulse" style={{ animationDuration: '10s', animationDelay: '5s' }} />
        </div>
        
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 relative z-0">{children}</main>
        </LenisProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
