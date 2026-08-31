'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo size={38} onClick={() => {}} />
            <span className="font-display text-lg font-semibold text-white tracking-tight hidden sm:block">
              InfoTech<span className="text-accent">Insight</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link key={link?.href} href={link?.href} className="nav-link">
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get Started
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen
              ? <Icon name="XMarkIcon" size={24} />
              : <Icon name="Bars3Icon" size={24} />
            }
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(10, 37, 64, 0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              className="text-2xl font-semibold text-white hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
