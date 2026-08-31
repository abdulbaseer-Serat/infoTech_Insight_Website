'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const badge = useRef<HTMLDivElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const sub = useRef<HTMLParagraphElement>(null);
  const ctas = useRef<HTMLDivElement>(null);
  const stats = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [badge.current, headline.current, sub.current, ctas.current, stats.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = `opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 150 + i * 140);
    });
  }, []);

  const statCards = [
  { value: '500+', label: 'Clients Served', icon: 'UserGroupIcon' },
  { value: '50+', label: 'Projects Delivered', icon: 'RocketLaunchIcon' },
  { value: '25+', label: 'Certified Experts', icon: 'AcademicCapIcon' },
  { value: '15+', label: 'Countries Reached', icon: 'GlobeAltIcon' }];


  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_11b38f162-1767683091191.png"
          alt="Dark server room with glowing blue LED lights and rows of network equipment in a modern data center"
          fill
          priority
          className="object-cover"
          sizes="100vw" />

        {/* Dual gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/95" />
        <div className="absolute inset-0 scrim-left" />
      </div>

      {/* Animated ambient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 blob-primary animate-float pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 blob-secondary pointer-events-none z-0" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 z-0 opacity-10"
      style={{
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />


      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main content — 7 columns */}
          <div className="lg:col-span-7">
            <div ref={badge} className="mb-8">
              <span className="section-eyebrow glass-card px-4 py-2 rounded-full border border-accent/30">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow inline-block" />
                Trusted IT Partner Since 2009
              </span>
            </div>

            <h1 ref={headline} className="text-hero-xl font-display font-bold text-white mb-6 leading-tight">
              Empowering Businesses<br />
              <span className="gradient-text-cyan">Through Technology</span>
            </h1>

            <p ref={sub} className="text-lg text-white/80 max-w-xl font-normal leading-relaxed border-l-2 border-accent/60 pl-5 mb-10">
              Delivering innovative IT solutions, cybersecurity, cloud services, and digital transformation for organizations across the globe.
            </p>

            <div ref={ctas} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
                <Icon name="ChatBubbleLeftRightIcon" size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {['ISO 27001 Certified', 'Microsoft Gold Partner', 'AWS Advanced Tier'].map((badge) =>
              <div key={badge} className="flex items-center gap-2 glass-card px-3 py-1.5 rounded-full text-xs font-medium text-white/80">
                  <Icon name="CheckBadgeIcon" size={14} className="text-accent" />
                  {badge}
                </div>
              )}
            </div>
          </div>

          {/* Stat cards — 5 columns */}
          <div ref={stats} className="lg:col-span-5 grid grid-cols-2 gap-4">
            {statCards.map((stat, i) =>
            <div
              key={stat.label}
              className="glass-card rounded-xl p-5 hover:bg-white/10 transition-colors cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}>

                <div className="flex items-center justify-between mb-3">
                  <Icon name={stat.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </div>
                <div className="stat-counter">{stat.value}</div>
                <div className="text-xs text-white/60 mt-1 font-medium tracking-wide">{stat.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
        <Icon name="ChevronDownIcon" size={20} className="text-white/40" />
      </div>
    </section>);

}
