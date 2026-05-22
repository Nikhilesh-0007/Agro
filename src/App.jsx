import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import AboutSection from './components/AboutSection';
import CommoditiesSection from './components/CommoditiesSection';
import SegmentsSection from './components/SegmentsSection';
import EthanolClients from './components/EthanolClients';
import FeedClients from './components/FeedClients';
import ExportCountries from './components/ExportCountries';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body text-neutral-charcoal bg-neutral-offwhite min-h-screen antialiased selection:bg-green-primary selection:text-white">
      <Navbar />
      <Hero />
      <StatsStrip />
      <AboutSection />
      <CommoditiesSection />
      <SegmentsSection />
      <EthanolClients />
      <FeedClients />
      <ExportCountries />
      <ContactSection />
      <Footer />
    </div>
  );
}
