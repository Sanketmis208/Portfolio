import Link from 'next/link';

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Sanket <span className="text-[var(--color-accent)]">Mistry</span>
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-xs leading-relaxed">
              Full Stack Developer building fast, polished products.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
