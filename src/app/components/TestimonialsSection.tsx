'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
{
  quote: "InfoTech Insight migrated our entire infrastructure to AWS in 6 weeks with zero downtime. Our IT costs dropped by 58% and performance improved dramatically.",
  name: "Marcus Holloway",
  role: "CTO",
  company: "Apex Logistics Group",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e1073bc1-1767880718853.png",
  rating: 5,
  metric: "58% cost reduction"
},
{
  quote: "Their cybersecurity team identified 12 critical vulnerabilities our previous vendor missed. We passed our SOC 2 Type II audit on the first attempt.",
  name: "Sarah Chen",
  role: "VP of IT Security",
  company: "NovaBridge Financial",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18bcb1615-1772736246602.png",
  rating: 5,
  metric: "SOC 2 Type II passed"
},
{
  quote: "The Microsoft 365 deployment was seamless. 400 users migrated over a weekend with full training. Our productivity has never been higher.",
  name: "David Okafor",
  role: "Operations Director",
  company: "Meridian Healthcare",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_12ea2ce5d-1783784271571.png",
  rating: 5,
  metric: "400 users migrated"
},
{
  quote: "24/7 support is real — not a promise. When we had a critical outage at 2am, their team had us back online in 47 minutes. Exceptional.",
  name: "Priya Nair",
  role: "Head of Technology",
  company: "Starfield Retail",
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b477ad42-1772222744347.png",
  rating: 5,
  metric: "47-min incident resolution"
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
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(gridRef as React.RefObject<HTMLElement>, 100);

  return (
    <section id="testimonials" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 blob-secondary pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block text-accent">
            <span className="w-8 h-px bg-accent inline-block" />
            Client Stories
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">
            98% client retention rate. Here&apos;s why businesses trust us with their critical infrastructure.
          </p>
        </div>

        <div ref={gridRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) =>
          <div
            key={t.name}
            className="glass-card rounded-2xl p-8 flex flex-col gap-5 card-hover"
            style={{ transitionDelay: `${i * 80}ms` }}>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) =>
              <Icon key={j} name="StarIcon" size={16} className="text-accent" variant="solid" />
              )}
              </div>

              {/* Quote */}
              <blockquote className="text-white/85 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metric badge */}
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-3 py-1.5 w-fit">
                <Icon name="TrophyIcon" size={13} className="text-accent" />
                <span className="text-xs font-semibold text-accent">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={t.avatar}
                  alt={`${t.name}, ${t.role} at ${t.company}`}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full" />

                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12 glass-card rounded-2xl py-8 px-6 max-w-md mx-auto">
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) =>
            <Icon key={i} name="StarIcon" size={22} className="text-accent" variant="solid" />
            )}
          </div>
          <div className="text-3xl font-display font-bold text-white">4.9 / 5.0</div>
          <div className="text-white/55 text-sm mt-1">Based on 180+ verified reviews</div>
        </div>
      </div>
    </section>);

}
