import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactContent from '@/app/contact/components/ContactContent';
import ContactFAQ from '@/app/contact/components/ContactFAQ';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactContent />
        <ContactFAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
