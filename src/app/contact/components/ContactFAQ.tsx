'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const faqs = [
  {
    question: 'How quickly can you respond to a critical IT incident?',
    answer: 'For clients on our Professional or Enterprise plans, we guarantee a 1-hour response time for critical incidents — 24 hours a day, 365 days a year. Our NOC monitors your systems continuously, meaning we often detect and begin resolving issues before you even notice them.',
  },
  {
    question: 'Do you work with businesses outside the USA?',
    answer: 'Yes — we serve clients across 15+ countries with offices in New York, London, and Dubai. For remote managed services, geography is no barrier. We have engineers in multiple time zones ensuring true 24/7 coverage.',
  },
  {
    question: 'What size companies do you typically work with?',
    answer: 'Our sweet spot is companies with 20–500 employees, though we work with organizations ranging from 5-person startups to enterprise clients with 5,000+ users. Our Starter plan is designed for smaller teams; Enterprise plans scale to any size.',
  },
  {
    question: 'How long does a typical IT assessment take?',
    answer: 'Our complimentary IT assessment typically takes 2–5 business days depending on the size of your environment. We conduct remote discovery sessions, review your current documentation, and deliver a detailed findings report with prioritized recommendations.',
  },
  {
    question: 'Can you work alongside our existing IT team?',
    answer: 'Absolutely. Many of our clients have internal IT staff and use us to augment their capabilities — particularly for specialized areas like cybersecurity, cloud architecture, or 24/7 after-hours coverage. We integrate seamlessly as an extension of your team.',
  },
  {
    question: 'Are there long-term contracts?',
    answer: 'Our managed services are offered on 12-month agreements to ensure continuity of service and allow us to build deep knowledge of your environment. However, project-based work (migrations, deployments, assessments) is available without ongoing commitment.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-sm pr-4 leading-snug">{faq.question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${open ? 'bg-accent text-primary rotate-45' : 'bg-muted text-muted-foreground'}`}>
          <Icon name="PlusIcon" size={16} />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

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

export default function ContactFAQ() {
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(listRef as React.RefObject<HTMLElement>, 100);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-12">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            Common Questions
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Can&apos;t find what you&apos;re looking for?{' '}
            <a href="mailto:hello@infotechinsight.com" className="text-accent font-medium hover:underline">
              Email us directly
            </a>
          </p>
        </div>

        <div ref={listRef} className="scroll-reveal space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
