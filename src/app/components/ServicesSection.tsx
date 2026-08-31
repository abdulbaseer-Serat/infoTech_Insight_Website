'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const services = [
{
  id: 'cybersecurity',
  title: 'Cybersecurity',
  description: 'End-to-end security assessments, threat detection, SIEM implementation, and incident response. We protect your infrastructure with zero-trust architecture and 24/7 SOC monitoring.',
  icon: 'ShieldCheckIcon',
  tags: ['SOC', 'Zero Trust', 'Penetration Testing'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d99478f4-1767684103988.png",
  imageAlt: 'Dark cybersecurity operations center with multiple glowing monitors showing network threat maps and security dashboards',
  large: true,
  accent: '#06B6D4'
},
{
  id: 'cloud',
  title: 'Cloud Solutions',
  description: 'Multi-cloud strategy, migration, and managed services across AWS, Azure, and GCP.',
  icon: 'CloudIcon',
  tags: ['AWS', 'Azure', 'GCP'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cfdae944-1767030190306.png",
  imageAlt: 'Abstract blue cloud computing visualization with data streams and network nodes on dark background',
  large: false,
  accent: '#0891B2'
},
{
  id: 'consulting',
  title: 'IT Consulting',
  description: 'Strategic technology advisory, IT roadmapping, and digital transformation planning aligned to your business goals.',
  icon: 'PresentationChartLineIcon',
  tags: ['Strategy', 'Roadmap', 'Digital Transformation'],
  image: '',
  imageAlt: '',
  large: false,
  accent: '#1E3A8A'
},
{
  id: 'network',
  title: 'Network Infrastructure',
  description: 'Enterprise network design, SD-WAN deployment, and 24/7 NOC management ensuring 99.99% uptime across all your sites.',
  icon: 'SignalIcon',
  tags: ['SD-WAN', 'NOC', '99.99% Uptime'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e53ab24-1785663168245.png",
  imageAlt: 'Blue-lit server rack corridor in a modern enterprise data center with network cables and LED indicators',
  large: true,
  accent: '#06B6D4'
},
{
  id: 'software',
  title: 'Software Development',
  description: 'Custom enterprise applications, API integrations, and modern web platforms built with React, Node.js, and cloud-native architectures.',
  icon: 'CodeBracketIcon',
  tags: ['React', 'Node.js', 'Cloud-Native'],
  image: '',
  imageAlt: '',
  large: false,
  accent: '#1D4ED8'
},
{
  id: 'microsoft',
  title: 'Microsoft 365',
  description: 'Full Microsoft 365 deployment, migration, security hardening, and ongoing support for your entire organization.',
  icon: 'WindowIcon',
  tags: ['Teams', 'SharePoint', 'Exchange'],
  image: '',
  imageAlt: '',
  large: false,
  accent: '#0078D4'
}];


function useScrollReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('hidden-state', 'scroll-reveal');
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.classList.remove('hidden-state');
        }, delay);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

function ServiceCardLarge({ service }: {service: typeof services[0];}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref as React.RefObject<HTMLElement>, 0);

  return (
    <div
      ref={ref}
      className="scroll-reveal relative rounded-2xl overflow-hidden border border-border service-card-large group card-hover">

      {service.image &&
      <>
          <AppImage
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover image-zoom opacity-50 group-hover:opacity-60"
          sizes="(max-width: 768px) 100vw, 60vw" />

          <div className="absolute inset-0 scrim-dark" />
        </>
      }
      <div className={`relative z-10 p-8 h-full flex flex-col justify-end ${service.image ? '' : 'bg-primary'}`}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${service.accent}22`, border: `1px solid ${service.accent}44` }}>
          <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={24} className="text-accent" />
        </div>
        <h3 className="text-xl font-display font-semibold text-white mb-3">{service.title}</h3>
        <p className="text-white/75 text-sm leading-relaxed mb-4">{service.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) =>
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70 font-medium">{tag}</span>
          )}
        </div>
        <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors group/link">
          Learn more
          <Icon name="ArrowRightIcon" size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>);

}

function ServiceCardSmall({ service, delay }: {service: typeof services[0];delay: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref as React.RefObject<HTMLElement>, delay);

  return (
    <div
      ref={ref}
      className="scroll-reveal relative rounded-2xl overflow-hidden border border-border service-card-small group card-hover bg-card p-6 flex flex-col">

      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}30` }}>
        <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={22} style={{ color: service.accent }} />
      </div>
      <h3 className="text-base font-display font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {service.tags.map((tag) =>
        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">{tag}</span>
        )}
      </div>
      <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-secondary transition-colors mt-4 group/link">
        Explore
        <Icon name="ArrowRightIcon" size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
      </Link>
    </div>);

}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);

  // BENTO GRID AUDIT:
  // 6 cards: [Cybersecurity cs-2, Cloud cs-1, IT Consulting cs-1, Network cs-2, Software Dev cs-1(fill), Microsoft 365 cs-1(fill)]
  // Row 1: [col-1-2: Cybersecurity cs-2] [col-3: Cloud cs-1]
  // Row 2: [col-1: IT Consulting cs-1] [col-2-3: Network cs-2]
  // Row 3: [col-1: Software Dev cs-1] [col-2-3: Microsoft 365 cs-2(expand)]
  // Wait — Software Dev and Microsoft 365 are both small → expand Microsoft 365 to cs-2
  // Placed 6/6 cards ✓

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            What We Do
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            From cybersecurity to cloud transformation — we deliver end-to-end technology solutions that scale with your business.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: Cybersecurity (large, col-span-2) + Cloud (small, col-span-1) */}
          {/* col-1-2: Cybersecurity cs-2 */}
          <div className="md:col-span-2">
            <ServiceCardLarge service={services[0]} />
          </div>
          {/* col-3: Cloud cs-1 */}
          <div className="md:col-span-1">
            <ServiceCardSmall service={services[1]} delay={100} />
          </div>

          {/* Row 2: IT Consulting (small, col-span-1) + Network (large, col-span-2) */}
          {/* col-1: IT Consulting cs-1 */}
          <div className="md:col-span-1">
            <ServiceCardSmall service={services[2]} delay={80} />
          </div>
          {/* col-2-3: Network cs-2 */}
          <div className="md:col-span-2">
            <ServiceCardLarge service={services[3]} />
          </div>

          {/* Row 3: Software Dev (small, col-span-1) + Microsoft 365 (small expanded to col-span-2) */}
          {/* col-1: Software Dev cs-1 */}
          <div className="md:col-span-1">
            <ServiceCardSmall service={services[4]} delay={60} />
          </div>
          {/* col-2-3: Microsoft 365 cs-2 */}
          <div className="md:col-span-2">
            <ServiceCardSmall service={services[5]} delay={120} />
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary inline-flex" style={{ background: 'var(--primary)', color: 'white' }}>
            View All Services
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
        </div>
      </div>
    </section>);

}
