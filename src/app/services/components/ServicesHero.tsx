import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden noise-overlay">
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_18b16e7b3-1770945049132.png"
          alt="Close-up of illuminated circuit board with blue and orange LED lights on dark background showing complex electronic pathways"
          fill
          priority
          className="object-cover"
          sizes="100vw" />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/65 to-primary/95" />
        <div className="absolute inset-0 scrim-left" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-36 w-full">
        <div className="max-w-3xl">
          <span className="section-eyebrow mb-5 block text-accent">
            <Icon name="CpuChipIcon" size={16} className="text-accent" />
            Our Services
          </span>
          <h1 className="text-hero-xl font-display font-bold text-white mb-6">
            Technology Services<br />
            <span className="gradient-text-cyan">Built to Last</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl border-l-2 border-accent/60 pl-5">
            End-to-end IT services designed for modern businesses — from frontline cybersecurity to cloud-native architecture, all delivered by certified experts with a single point of accountability.
          </p>
        </div>
      </div>
    </section>);

}
