'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const genericItems = [
  'Generic, one-size-fits-all solutions',
  'Slow response times (48+ hours)',
  'Limited certifications and expertise',
  'No dedicated account manager',
  'Reactive, break-fix only approach',
  'Hidden costs and unclear pricing',
];

const infotechItems = [
  'Tailored solutions for your industry',
  '24/7 support with 1-hour SLA response',
  'ISO 27001, Microsoft Gold, AWS Advanced',
  'Dedicated Client Success Manager',
  'Proactive monitoring and prevention',
  'Transparent, predictable pricing',
];

const differentiators = [
  { icon: 'AcademicCapIcon', title: 'Certified Experts', desc: '25+ engineers holding 60+ active certifications across Microsoft, AWS, Cisco, and security frameworks.' },
  { icon: 'ClockIcon', title: '24/7 Support', desc: 'Round-the-clock monitoring and support with guaranteed 1-hour response SLA for critical issues.' },
  { icon: 'ShieldCheckIcon', title: 'Secure by Design', desc: 'Security baked into every solution — not bolted on. Zero-trust architecture and continuous compliance.' },
  { icon: 'ChartBarIcon', title: 'Proven Results', desc: '98% client retention rate. Average 40% reduction in IT incidents within the first 6 months.' },
  { icon: 'UserGroupIcon', title: 'Client-Focused', desc: 'Dedicated account management and quarterly business reviews to align IT with your strategic goals.' },
];

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

export default function WhyChooseUs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const diffRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(comparisonRef as React.RefObject<HTMLElement>, 100);
  useScrollReveal(diffRef as React.RefObject<HTMLElement>, 200);

  return (
    <section id="why-us" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            Why InfoTech Insight
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Not All IT Partners Are Equal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the difference between a generic IT vendor and a dedicated technology partner.
          </p>
        </div>

        {/* Comparison Table */}
        <div ref={comparisonRef} className="scroll-reveal grid md:grid-cols-2 gap-6 mb-14 items-stretch">
          {/* Generic IT Shop */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-lg font-display font-semibold text-muted-foreground mb-8 text-center">
              Typical IT Vendor
            </h3>
            <div className="space-y-5">
              {genericItems.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Icon name="XMarkIcon" size={14} className="text-red-400" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* InfoTech Insight */}
          <div className="bg-primary rounded-2xl p-8 border border-accent/30 shadow-xl relative overflow-hidden">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              Smart Choice
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 blob-primary pointer-events-none" />
            <h3 className="text-lg font-display font-semibold text-white mb-8 text-center mt-3">
              InfoTech Insight
            </h3>
            <div className="space-y-5 relative z-10">
              {infotechItems.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="CheckIcon" size={14} className="text-accent" />
                  </div>
                  <p className="text-white text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div ref={diffRef} className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 border border-border card-hover text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={22} className="text-accent" />
              </div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
