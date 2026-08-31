'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    title: 'Discovery & Assessment',
    description: 'We audit your current IT environment, identify gaps, security risks, and opportunities. You receive a detailed findings report within 5 business days.',
    icon: 'MagnifyingGlassIcon',
    duration: '1–2 weeks',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description: 'Our architects design a tailored technology roadmap aligned to your business goals, budget, and timeline — with clear milestones and ROI projections.',
    icon: 'MapIcon',
    duration: '1 week',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Certified engineers execute the plan with minimal disruption to your operations. We use proven methodologies and communicate progress daily.',
    icon: 'WrenchScrewdriverIcon',
    duration: 'Project-based',
  },
  {
    number: '04',
    title: 'Handover & Training',
    description: 'Full documentation, knowledge transfer, and end-user training ensure your team is confident with every new system and process.',
    icon: 'AcademicCapIcon',
    duration: '1 week',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: '24/7 monitoring, proactive maintenance, and dedicated support keep your systems running at peak performance long after go-live.',
    icon: 'LifebuoyIcon',
    duration: 'Continuous',
  },
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

export default function ProcessSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            How We Work
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Our Proven Methodology
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured, transparent process that eliminates surprises and delivers consistent results every time.
          </p>
        </div>

        {/* Horizontal process flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none z-0" />

          {steps.map((step, i) => {
            const ref = useRef<HTMLDivElement>(null);
            useScrollReveal(ref as React.RefObject<HTMLElement>, i * 100);
            return (
              <div
                key={step.number}
                ref={ref}
                className="scroll-reveal relative z-10 bg-card rounded-2xl p-6 border border-border card-hover text-center flex flex-col items-center"
              >
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 relative">
                  <span className="font-display font-bold text-accent text-sm">{step.number}</span>
                  <div className="absolute inset-0 rounded-full border border-accent/30" />
                </div>

                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={step.icon as Parameters<typeof Icon>[0]['name']} size={20} className="text-accent" />
                </div>

                <h3 className="font-display font-semibold text-foreground text-sm mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{step.description}</p>

                <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  <Icon name="ClockIcon" size={12} />
                  {step.duration}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
