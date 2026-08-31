'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const team = [
{
  name: 'James Whitfield',
  role: 'CEO & Founder',
  certifications: ['CISSP', 'PMP'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16be102c1-1784116214042.png",
  imageAlt: 'Professional man in navy suit with confident expression in modern office environment',
  linkedin: '#'
},
{
  name: 'Anika Sharma',
  role: 'Head of Cybersecurity',
  certifications: ['CISSP', 'CEH', 'CISM'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_163f17ff0-1772583938291.png",
  imageAlt: 'Professional woman in business attire with focused expression in tech office setting',
  linkedin: '#'
},
{
  name: 'Robert Chen',
  role: 'Cloud Architecture Lead',
  certifications: ['AWS SA Pro', 'Azure Expert'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19e9497eb-1763293691311.png",
  imageAlt: 'Professional Asian man in business casual attire smiling in modern tech office',
  linkedin: '#'
},
{
  name: 'Elena Marchetti',
  role: 'DevOps & Infrastructure',
  certifications: ['CKA', 'Google Professional'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aaf46fcd-1773137917081.png",
  imageAlt: 'Professional woman with warm smile in business attire in bright modern workspace',
  linkedin: '#'
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

export default function TeamSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);

  return (
    <section id="team" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            Our People
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            The Experts Behind Your Success
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            25+ certified professionals with deep expertise across every technology domain we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => {
            const cardRef = useRef<HTMLDivElement>(null);
            useScrollReveal(cardRef as React.RefObject<HTMLElement>, i * 80);
            return (
              <div
                key={member.name}
                ref={cardRef}
                className="scroll-reveal bg-card rounded-2xl overflow-hidden border border-border card-hover group">

                <div className="relative h-64 overflow-hidden">
                  <AppImage
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    className="object-cover object-top image-zoom"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <a
                    href={member.linkedin}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-4 py-2 rounded-full text-xs font-medium text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">

                    <Icon name="LinkIcon" size={12} />
                    LinkedIn
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.certifications.map((cert) =>
                    <span key={cert} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium border border-border">
                        {cert}
                      </span>
                    )}
                  </div>
                </div>
              </div>);

          })}
        </div>
      </div>
    </section>);

}
