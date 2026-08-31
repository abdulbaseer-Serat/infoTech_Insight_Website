'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const offices = [
  {
    city: 'New York',
    country: 'USA',
    address: '350 Fifth Avenue, Suite 4200',
    zip: 'New York, NY 10118',
    phone: '+1 (212) 555-0192',
    email: 'nyc@infotechinsight.com',
    hours: 'Mon–Fri: 8am–6pm EST',
  },
  {
    city: 'London',
    country: 'UK',
    address: '1 Canada Square, Level 32',
    zip: 'London, E14 5AB',
    phone: '+44 20 7946 0192',
    email: 'uk@infotechinsight.com',
    hours: 'Mon–Fri: 9am–5pm GMT',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    address: 'DIFC, Gate Avenue South',
    zip: 'Dubai, UAE',
    phone: '+971 4 555 0192',
    email: 'uae@infotechinsight.com',
    hours: 'Mon–Fri: 9am–6pm GST',
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
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function ContactContent() {
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  useScrollReveal(formRef as React.RefObject<HTMLElement>, 0);
  useScrollReveal(infoRef as React.RefObject<HTMLElement>, 120);

  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '', service: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Contact Form — 2 cols */}
          <div ref={formRef} className="scroll-reveal lg:col-span-2 bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 px-8 text-center">
                <div className="w-20 h-20 rounded-full bg-accent/12 flex items-center justify-center mb-6 animate-pulse-glow">
                  <Icon name="CheckBadgeIcon" size={40} className="text-accent" />
                </div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-3">
                  We&apos;ve Got Your Message!
                </h2>
                <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
                  A member of our team will review your inquiry and reach out within 2 business hours. For urgent matters, call us directly at{' '}
                  <a href="tel:+12125550192" className="text-accent font-medium hover:underline">+1 (212) 555-0192</a>.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' }); }}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="p-8 md:p-10">
                <h2 className="font-display font-bold text-2xl text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">All fields marked with * are required.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="James Wilson"
                        className="input-field"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="james@company.com"
                        className="input-field"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company Inc."
                        className="input-field"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="input-field"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Service of Interest <span className="text-accent">*</span>
                      </label>
                      <select
                        required
                        className="input-field"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                      >
                        <option value="">Select a service...</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="network">Network Infrastructure</option>
                        <option value="software">Software Development</option>
                        <option value="microsoft">Microsoft 365</option>
                        <option value="managed">Managed IT Services</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                        Estimated Budget
                      </label>
                      <select
                        className="input-field"
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      >
                        <option value="">Prefer not to say</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-25k">$5,000 – $25,000</option>
                        <option value="25k-100k">$25,000 – $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Tell Us About Your Project <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder="Describe your IT challenge, current environment, and what you're hoping to achieve..."
                      className="input-field resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon name="PaperAirplaneIcon" size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your information is protected under our{' '}
                    <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
                    We never sell or share your data.
                  </p>
                </form>
              </div>
            )}
          </div>

          {/* Right info column — 1 col */}
          <div ref={infoRef} className="scroll-reveal flex flex-col gap-5">
            {/* Response commitment */}
            <div className="bg-primary rounded-2xl p-6 border border-white/10">
              <h3 className="font-display font-semibold text-white text-base mb-5 flex items-center gap-2">
                <Icon name="BoltIcon" size={18} className="text-accent" />
                Response Commitment
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Critical Incidents', time: '1 hour', color: '#EF4444' },
                  { label: 'General Inquiries', time: '2 hours', color: '#06B6D4' },
                  { label: 'Sales & Proposals', time: 'Same day', color: '#10B981' },
                  { label: 'Project Scoping', time: '1 business day', color: '#F59E0B' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-white/65">{item.label}</span>
                    <span className="text-sm font-semibold" style={{ color: item.color }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office locations */}
            {offices.map((office) => (
              <div key={office.city} className="bg-card rounded-2xl p-5 border border-border card-hover">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{office.city}</h4>
                    <span className="text-xs text-muted-foreground font-medium">{office.country}</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPinIcon" size={16} className="text-accent" />
                  </div>
                </div>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div>{office.address}</div>
                  <div>{office.zip}</div>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-1.5 text-accent hover:underline font-medium">
                    <Icon name="PhoneIcon" size={12} />
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center gap-1.5 text-accent hover:underline font-medium text-xs">
                    <Icon name="EnvelopeIcon" size={12} />
                    {office.email}
                  </a>
                  <div className="text-xs pt-1 flex items-center gap-1.5">
                    <Icon name="ClockIcon" size={11} />
                    {office.hours}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp direct */}
            <a
              href="https://wa.me/12125550192?text=Hi%20InfoTech%20Insight%2C%20I%27d%20like%20to%20discuss%20IT%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl p-5 flex items-center gap-4 transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #128C7E, #25D366)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white text-sm">Chat on WhatsApp</div>
                <div className="text-white/75 text-xs mt-0.5">Typically replies within minutes</div>
              </div>
              <Icon name="ArrowRightIcon" size={18} className="text-white/70 ml-auto flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
