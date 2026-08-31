'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

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

export default function ServicesCTA() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref as React.RefObject<HTMLElement>, 0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className="scroll-reveal relative rounded-3xl overflow-hidden bg-primary border border-white/10 p-12 text-center"
        >
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 blob-primary pointer-events-none" />
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6 border border-accent/30">
              <Icon name="RocketLaunchIcon" size={32} className="text-accent" />
            </div>

            <h2 className="text-section-xl font-display font-bold text-white mb-4">
              Ready to Transform Your IT?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Get a free IT assessment worth $2,500 — no obligation, no sales pressure. Just an honest evaluation of where you stand and how we can help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book Free Assessment
                <Icon name="ArrowRightIcon" size={18} />
              </Link>
              <a
                href="tel:+12125550192"
                className="btn-outline inline-flex"
              >
                <Icon name="PhoneIcon" size={18} />
                Call Us Now
              </a>
            </div>

            <p className="text-white/40 text-sm mt-6">
              Typically responds within 2 business hours · No long-term contracts required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
