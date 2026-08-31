import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from '@/app/components/HeroSection';
import StatsBar from '@/app/components/StatsBar';
import ServicesSection from '@/app/components/ServicesSection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import ProjectsSection from '@/app/components/ProjectsSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import TeamSection from '@/app/components/TeamSection';
import PricingSection from '@/app/components/PricingSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <WhyChooseUs />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
