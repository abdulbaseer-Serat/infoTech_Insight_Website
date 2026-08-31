'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 299,
    annualPrice: 249,
    description: 'Perfect for small businesses getting started with managed IT.',
    features: [
      'Up to 10 users',
      'Microsoft 365 management',
      'Basic security monitoring',
      'Business hours support (8am–6pm)',
      'Monthly health reports',
      'Remote helpdesk',
    ],
    notIncluded: ['24/7 SOC monitoring', 'Dedicated account manager', 'On-site support'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    monthlyPrice: 799,
    annualPrice: 649,
    description: 'The complete IT package for growing mid-market companies.',
    features: [
      'Up to 50 users',
      'Everything in Starter',
      '24/7 SOC security monitoring',
      'Cloud management (AWS/Azure)',
      'Dedicated account manager',
      'Quarterly business reviews',
      'On-site support (2x/month)',
      '1-hour SLA response',
    ],
    notIncluded: ['Custom development', 'Multi-site enterprise'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Tailored solutions for large organizations with complex needs.',
    features: [
      'Unlimited users',
      'Everything in Professional',
      'Custom software development',
      'Multi-site network management',
      'Dedicated engineering team',
      'White-glove onboarding',
      'Custom SLA agreements',
      'Executive IT advisory',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    featured: false,
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

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(cardsRef as React.RefObject<HTMLElement>, 100);

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            Transparent Pricing
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Simple, Predictable Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Scale up or down as your business grows.
          </p>
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 bg-muted rounded-full p-1.5 border border-border">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-primary text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Annual
              <span className="text-xs bg-accent/20 text-accent px-1.5 py-0.5 rounded-full font-semibold">-20%</span>
            </button>
          </div>
        </div>

        <div ref={cardsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-300 ${
                plan.featured
                  ? 'pricing-card-featured bg-primary border-accent' :'bg-card border-border card-hover'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display font-bold text-xl mb-2 ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed ${plan.featured ? 'text-white/70' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                {plan.monthlyPrice === 0 ? (
                  <div className={`text-3xl font-display font-bold ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                    Custom
                  </div>
                ) : (
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-display font-bold ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm mb-2 ${plan.featured ? 'text-white/60' : 'text-muted-foreground'}`}>/month</span>
                  </div>
                )}
                {plan.monthlyPrice > 0 && annual && (
                  <div className="text-xs text-accent font-medium mt-1">Billed annually · Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr</div>
                )}
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <Icon name="CheckIcon" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className={`text-sm ${plan.featured ? 'text-white/85' : 'text-muted-foreground'}`}>{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-40">
                    <Icon name="XMarkIcon" size={16} className="flex-shrink-0 mt-0.5 text-muted-foreground" />
                    <span className={`text-sm line-through ${plan.featured ? 'text-white/50' : 'text-muted-foreground'}`}>{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.featured
                    ? 'bg-accent text-primary hover:bg-cyan-300' :'bg-primary text-white hover:bg-secondary'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include a 30-day money-back guarantee. Need something custom?{' '}
          <Link href="/contact" className="text-accent font-medium hover:underline">Talk to our team</Link>
        </p>
      </div>
    </section>
  );
}
