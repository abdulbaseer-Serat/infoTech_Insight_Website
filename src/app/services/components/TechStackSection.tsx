'use client';

import React, { useEffect, useRef } from 'react';

const technologies = [
  { name: 'Amazon Web Services', category: 'Cloud', abbr: 'AWS' },
  { name: 'Microsoft Azure', category: 'Cloud', abbr: 'Azure' },
  { name: 'Google Cloud Platform', category: 'Cloud', abbr: 'GCP' },
  { name: 'Microsoft 365', category: 'Productivity', abbr: 'M365' },
  { name: 'Cisco Meraki', category: 'Network', abbr: 'Cisco' },
  { name: 'Palo Alto Networks', category: 'Security', abbr: 'PAN' },
  { name: 'CrowdStrike', category: 'Security', abbr: 'CS' },
  { name: 'Kubernetes', category: 'DevOps', abbr: 'K8s' },
  { name: 'Terraform', category: 'DevOps', abbr: 'TF' },
  { name: 'Splunk SIEM', category: 'Security', abbr: 'SIEM' },
  { name: 'VMware', category: 'Virtualization', abbr: 'VMw' },
  { name: 'Fortinet', category: 'Security', abbr: 'FTN' },
];

const categoryColors: Record<string, string> = {
  Cloud: '#06B6D4',
  Productivity: '#0078D4',
  Network: '#1E3A8A',
  Security: '#DC2626',
  DevOps: '#7C3AED',
  Virtualization: '#059669',
};

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
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function TechStackSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(gridRef as React.RefObject<HTMLElement>, 100);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block text-accent">
            <span className="w-8 h-px bg-accent inline-block" />
            Technology Stack
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-white mb-4">
            Tools We Master
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            We are certified partners with the world&apos;s leading technology vendors — ensuring you always get best-in-class solutions.
          </p>
        </div>

        <div ref={gridRef} className="scroll-reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className="glass-card rounded-xl p-5 flex flex-col items-center text-center hover:bg-white/12 transition-all duration-200 group cursor-default"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Abbr badge */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 font-display font-bold text-sm text-white"
                style={{ background: `${categoryColors[tech.category]}22`, border: `1px solid ${categoryColors[tech.category]}44` }}
              >
                <span style={{ color: categoryColors[tech.category] }}>{tech.abbr}</span>
              </div>
              <div className="text-xs font-semibold text-white/80 leading-tight mb-1">{tech.name}</div>
              <div
                className="text-xs font-medium px-2 py-0.5 rounded-full mt-1"
                style={{ background: `${categoryColors[tech.category]}20`, color: categoryColors[tech.category] }}
              >
                {tech.category}
              </div>
            </div>
          ))}
        </div>

        {/* Partner badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {['Microsoft Gold Partner', 'AWS Advanced Tier', 'Cisco Premier Partner', 'Google Cloud Partner', 'ISO 27001 Certified'].map((badge) => (
            <div key={badge} className="glass-card px-5 py-2.5 rounded-full text-sm font-medium text-white/80 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
