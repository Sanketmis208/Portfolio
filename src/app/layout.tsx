import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/layout/CustomCursor';
import LenisProvider from '@/components/layout/LenisProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
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
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
