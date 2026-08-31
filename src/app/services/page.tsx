import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServiceDetailCards from '@/app/services/components/ServiceDetailCards';
import TechStackSection from '@/app/services/components/TechStackSection';
import ProcessSection from '@/app/services/components/ProcessSection';
import ServicesCTA from '@/app/services/components/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServiceDetailCards />
        <ProcessSection />
        <TechStackSection />
        <ServicesCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
