'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const contactDetails = [
  { icon: 'PhoneIcon', label: 'Phone', value: '+1 (212) 555-0192', href: 'tel:+12125550192' },
  { icon: 'EnvelopeIcon', label: 'Email', value: 'hello@infotechinsight.com', href: 'mailto:hello@infotechinsight.com' },
  { icon: 'MapPinIcon', label: 'Address', value: '350 Fifth Avenue, Suite 4200, New York, NY 10118', href: '#' },
  { icon: 'ClockIcon', label: 'Support Hours', value: '24/7 · 365 days a year', href: '#' },
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

export default function ContactSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(contentRef as React.RefObject<HTMLElement>, 100);

  const [formState, setFormState] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            Get In Touch
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Let&apos;s Start the Conversation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell us about your IT challenges. We&apos;ll respond within 2 business hours.
          </p>
        </div>

        <div ref={contentRef} className="scroll-reveal grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Details — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-primary rounded-2xl p-8 border border-white/10">
              <h3 className="font-display font-semibold text-white text-lg mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                      <Icon name={detail.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-medium uppercase tracking-wide mb-0.5">{detail.label}</div>
                      <div className="text-sm text-white/85 group-hover:text-white transition-colors">{detail.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/12125550192"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{ background: '#25D366', color: 'white' }}
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Office hours card */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="ClockIcon" size={18} className="text-accent" />
                Response Commitment
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Critical Issues</span>
                  <span className="font-semibold text-accent">1 hour</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">General Inquiries</span>
                  <span className="font-semibold text-foreground">2 business hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sales Queries</span>
                  <span className="font-semibold text-foreground">Same business day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form — 3 cols */}
          <div className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <Icon name="CheckIcon" size={32} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will respond within 2 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-semibold text-foreground text-lg mb-6">Send us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="input-field"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="input-field"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Your Company Inc."
                    className="input-field"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Service Interest</label>
                  <select
                    className="input-field"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="cloud">Cloud Solutions</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="network">Network Infrastructure</option>
                    <option value="software">Software Development</option>
                    <option value="microsoft">Microsoft 365</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your IT challenge or project..."
                    className="input-field resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Send Message
                  <Icon name="PaperAirplaneIcon" size={18} />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Privacy Policy. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
