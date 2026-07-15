import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/sanket-mistry-666164287/', label: 'LinkedIn' },
  { href: 'https://github.com/Sanketmis208', label: 'GitHub' },
  { href: 'mailto:sanketmistry.codes@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          <div className="md:max-w-sm">
            <Link
              href="/"
              className="relative block w-40 h-12 md:w-48 md:h-14 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/logo_transparent_v2.png"
                alt="Sanket Mistry Logo"
                fill
                className="object-contain object-left scale-150 origin-left"
              />
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
              Full Stack Developer building fast, polished products.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Sanket Mistry. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Designed &amp; built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
