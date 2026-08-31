'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const serviceDetails = [
{
  id: 'cybersecurity',
  title: 'Cybersecurity',
  icon: 'ShieldCheckIcon',
  tagline: 'Protect. Detect. Respond.',
  description: 'Our cybersecurity practice delivers comprehensive protection across your entire attack surface. From initial vulnerability assessments to 24/7 SOC operations, we implement zero-trust architectures that stop threats before they become incidents.',
  deliverables: [
  'Vulnerability Assessment & Penetration Testing',
  'Security Information & Event Management (SIEM)',
  'Zero Trust Network Architecture',
  'Incident Response & Forensics',
  'Compliance (ISO 27001, SOC 2, GDPR)',
  'Security Awareness Training'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d99478f4-1767684103988.png",
  imageAlt: 'Dark cybersecurity operations center with multiple glowing monitors showing network threat maps',
  stat: '0 breaches',
  statLabel: 'for clients on our SOC plan',
  color: '#06B6D4'
},
{
  id: 'cloud',
  title: 'Cloud Solutions',
  icon: 'CloudIcon',
  tagline: 'Migrate. Optimize. Scale.',
  description: 'We design and implement multi-cloud strategies that reduce costs, improve resilience, and accelerate your development velocity. Our AWS, Azure, and GCP certified architects handle everything from initial assessment to ongoing managed cloud operations.',
  deliverables: [
  'Cloud Readiness Assessment',
  'Migration Planning & Execution',
  'Infrastructure as Code (Terraform)',
  'FinOps & Cost Optimization',
  'Managed Cloud Operations',
  'Disaster Recovery & Business Continuity'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14072585a-1772997598024.png",
  imageAlt: 'Abstract blue planet earth with glowing network connections and data streams on dark background',
  stat: '60%',
  statLabel: 'average cloud cost reduction',
  color: '#0891B2'
},
{
  id: 'consulting',
  title: 'IT Consulting',
  icon: 'PresentationChartLineIcon',
  tagline: 'Strategize. Align. Execute.',
  description: 'Our technology advisors work alongside your leadership to build IT strategies that directly support business outcomes. We translate technical complexity into clear roadmaps with measurable milestones and ROI targets.',
  deliverables: [
  'IT Strategy & Roadmap Development',
  'Digital Transformation Planning',
  'Technology Stack Assessment',
  'Vendor Selection & Negotiation',
  'IT Budget Optimization',
  'Executive Technology Advisory (vCTO)'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e21ded5-1767484483486.png",
  imageAlt: 'Modern bright office with business professionals analyzing data dashboards on large screens during strategic meeting',
  stat: '3x',
  statLabel: 'faster IT project delivery',
  color: '#1E3A8A'
},
{
  id: 'network',
  title: 'Network Infrastructure',
  icon: 'SignalIcon',
  tagline: 'Design. Deploy. Monitor.',
  description: 'Enterprise-grade network infrastructure that keeps your business running at peak performance. Our Cisco and Juniper certified engineers design, deploy, and manage networks that scale from 10 to 10,000 endpoints across multiple locations.',
  deliverables: [
  'Network Design & Architecture',
  'SD-WAN Deployment & Management',
  'Wireless Infrastructure (Wi-Fi 6)',
  '24/7 NOC Monitoring',
  'Network Security & Segmentation',
  'WAN Optimization'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18e53ab24-1785663168245.png",
  imageAlt: 'Blue-lit server rack corridor in modern enterprise data center with fiber optic cables and LED indicators',
  stat: '99.99%',
  statLabel: 'uptime SLA guaranteed',
  color: '#06B6D4'
},
{
  id: 'software',
  title: 'Software Development',
  icon: 'CodeBracketIcon',
  tagline: 'Build. Integrate. Ship.',
  description: 'Custom software solutions built with modern architectures that integrate seamlessly with your existing systems. From enterprise portals to mobile applications, our development team delivers production-ready software on time and within budget.',
  deliverables: [
  'Custom Web Application Development',
  'API Design & Integration',
  'Mobile App Development (iOS/Android)',
  'Legacy System Modernization',
  'Database Architecture & Optimization',
  'Quality Assurance & Testing'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ec421bf-1772186759404.png",
  imageAlt: 'Dark developer workstation with multiple monitors showing code editor with blue syntax highlighting',
  stat: '40+',
  statLabel: 'custom apps delivered',
  color: '#1D4ED8'
},
{
  id: 'microsoft',
  title: 'Microsoft 365',
  icon: 'WindowIcon',
  tagline: 'Deploy. Secure. Collaborate.',
  description: 'As a Microsoft Gold Partner, we deliver complete Microsoft 365 deployments that transform how your team works. From initial licensing to security hardening and end-user training, we ensure maximum adoption and ROI from your Microsoft investment.',
  deliverables: [
  'Microsoft 365 Tenant Setup & Migration',
  'Exchange Online & Teams Deployment',
  'SharePoint Intranet Development',
  'Microsoft Defender Security Configuration',
  'Intune Device Management (MDM)',
  'End-User Training & Adoption Programs'],

  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a13b86a-1772501061175.png",
  imageAlt: 'Modern workspace with laptop showing productivity dashboard and collaboration tools on bright desk',
  stat: '400+',
  statLabel: 'M365 users managed',
  color: '#0078D4'
}];


function useScrollReveal(ref: React.RefObject<HTMLElement | null>, delay = 0) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('hidden-state', 'scroll-reveal');
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => el.classList.remove('hidden-state'), delay);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function ServiceDetailCards() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {serviceDetails.map((service, i) => {
          const isEven = i % 2 === 0;
          const cardRef = useRef<HTMLDivElement>(null);
          useScrollReveal(cardRef as React.RefObject<HTMLElement>, 0);

          return (
            <div
              key={service.id}
              ref={cardRef}
              id={service.id}
              className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              {/* Image side */}
              <div className={`relative rounded-2xl overflow-hidden h-80 lg:h-96 group ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover image-zoom"
                  sizes="(max-width: 1024px) 100vw, 50vw" />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                {/* Stat overlay */}
                <div className="absolute bottom-6 left-6 glass-card rounded-xl p-4">
                  <div className="text-2xl font-display font-bold text-accent">{service.stat}</div>
                  <div className="text-xs text-white/70 mt-0.5">{service.statLabel}</div>
                </div>
              </div>

              {/* Content side */}
              <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${service.color}18`, border: `1px solid ${service.color}35` }}>
                  <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={24} style={{ color: service.color }} />
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2 block">{service.tagline}</span>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="ClipboardDocumentListIcon" size={16} className="text-accent" />
                  Key Deliverables
                </h4>
                <ul className="space-y-2 mb-8">
                  {service.deliverables.map((item) =>
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Icon name="CheckIcon" size={15} className="text-accent flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  )}
                </ul>

                <Link href="/contact" className="btn-primary inline-flex">
                  Get a Free Assessment
                  <Icon name="ArrowRightIcon" size={16} />
                </Link>
              </div>
            </div>);

        })}
      </div>
    </section>);
}
