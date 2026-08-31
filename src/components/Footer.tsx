import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

const socialLinks = [
  { icon: 'GlobeAltIcon', href: '#', label: 'Website' },
  { icon: 'EnvelopeIcon', href: 'mailto:hello@infotechinsight.com', label: 'Email' },
  { icon: 'PhoneIcon', href: 'tel:+12125550192', label: 'Phone' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <AppLogo size={36} />
            <span className="font-display text-base font-semibold text-foreground tracking-tight">
              InfoTech<span className="text-accent">Insight</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Empowering businesses through technology. Certified experts, 24/7 support, global reach.
          </p>
        </div>

        {/* Right: Links + social */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all duration-200"
              >
                <Icon name={s.icon as Parameters<typeof Icon>[0]['name']} size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} InfoTech Insight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
