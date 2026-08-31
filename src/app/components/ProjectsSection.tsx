'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const projects = [
{
  id: 'cloud-migration',
  title: 'Enterprise Cloud Migration',
  client: 'Global Logistics Corp',
  outcome: '60% cost reduction, 99.99% uptime achieved',
  tags: ['AWS', 'Migration', 'Cost Optimization'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_109149a5c-1772178506532.png",
  imageAlt: 'Abstract dark blue cloud computing visualization with glowing data streams and network topology on black background',
  large: true
},
{
  id: 'zero-trust',
  title: 'Zero Trust Security',
  client: 'FinTech Solutions Ltd',
  outcome: 'Zero breaches post-implementation',
  tags: ['Security', 'Zero Trust', 'Compliance'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_131031e15-1773058686870.png",
  imageAlt: 'Dark cybersecurity dashboard with glowing threat detection graphics and network monitoring screens in dim room',
  large: false
},
{
  id: 'erp-deploy',
  title: 'ERP System Deployment',
  client: 'Manufacturing Group Inc',
  outcome: '35% efficiency gain across 8 facilities',
  tags: ['ERP', 'Integration', 'Training'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11a13b86a-1772501061175.png",
  imageAlt: 'Bright modern office with team members working on laptops at shared desks with large data dashboard screens on wall',
  large: false
},
{
  id: 'devops',
  title: 'DevOps Transformation',
  client: 'SaaS Platform Startup',
  outcome: 'Deploy frequency from monthly to daily',
  tags: ['DevOps', 'CI/CD', 'Kubernetes'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17ec421bf-1772186759404.png",
  imageAlt: 'Dark developer workstation with multiple code editor windows showing blue and purple syntax highlighting on large monitors',
  large: true
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
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
}

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef as React.RefObject<HTMLElement>, 0);

  // BENTO GRID AUDIT:
  // 4 cards: [CloudMigration cs-2, ZeroTrust cs-1, ERPDeploy cs-1, DevOps cs-2]
  // Row 1: [col-1-2: CloudMigration cs-2] [col-3: ZeroTrust cs-1]
  // Row 2: [col-1: ERPDeploy cs-1] [col-2-3: DevOps cs-2]
  // Placed 4/4 cards ✓

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="scroll-reveal text-center mb-14">
          <span className="section-eyebrow mb-4 block">
            <span className="w-8 h-px bg-accent inline-block" />
            Case Studies
            <span className="w-8 h-px bg-accent inline-block" />
          </span>
          <h2 className="text-section-xl font-display font-bold text-foreground mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real transformations for real businesses — measurable outcomes you can count on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[320px]">
          {/* Row 1: CloudMigration (col-span-2) + ZeroTrust (col-span-1) */}
          {/* col-1-2: CloudMigration cs-2 */}
          {(() => {
            const p = projects[0];
            const ref = React.createRef<HTMLDivElement>();
            return (
              <ProjectCard key={p.id} project={p} delay={0} colSpan="md:col-span-2" />);

          })()}
          {/* col-3: ZeroTrust cs-1 */}
          <ProjectCard key={projects[1].id} project={projects[1]} delay={80} colSpan="md:col-span-1" />

          {/* Row 2: ERPDeploy (col-span-1) + DevOps (col-span-2) */}
          {/* col-1: ERPDeploy cs-1 */}
          <ProjectCard key={projects[2].id} project={projects[2]} delay={60} colSpan="md:col-span-1" />
          {/* col-2-3: DevOps cs-2 */}
          <ProjectCard key={projects[3].id} project={projects[3]} delay={120} colSpan="md:col-span-2" />
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="btn-outline inline-flex" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
            View All Projects
            <Icon name="ArrowRightIcon" size={18} />
          </Link>
        </div>
      </div>
    </section>);

}

function ProjectCard({
  project,
  delay,
  colSpan




}: {project: typeof projects[0];delay: number;colSpan: string;}) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref as React.RefObject<HTMLElement>, delay);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${colSpan} relative rounded-2xl overflow-hidden group cursor-pointer border border-border`}>

      <AppImage
        src={project.image}
        alt={project.imageAlt}
        fill
        className="object-cover image-zoom"
        sizes="(max-width: 768px) 100vw, 60vw" />

      <div className="absolute inset-0 scrim-dark" />

      {/* Always-visible content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) =>
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full glass-card text-white/80 font-medium">{tag}</span>
          )}
        </div>
        <h3 className="font-display font-semibold text-white text-lg mb-1">{project.title}</h3>
        <p className="text-white/60 text-xs font-medium">{project.client}</p>
      </div>

      {/* Hover reveal: outcome */}
      <div className="absolute inset-0 z-20 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(10,37,64,0.88)' }}>
        <div className="w-full">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="TrophyIcon" size={18} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-wide">Outcome</span>
          </div>
          <p className="text-white font-medium text-base mb-3">{project.outcome}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) =>
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-accent/20 text-accent font-medium">{tag}</span>
            )}
          </div>
          <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
            Read Case Study
            <Icon name="ArrowRightIcon" size={14} />
          </div>
        </div>
      </div>
    </div>);

}
