import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { FeatureGrid } from './components/FeatureGrid';
import { Gallery } from './components/Gallery';
import { SwitchSection } from './components/SwitchSection';
import { AccordionFeatures } from './components/AccordionFeatures';
import { ProductSlider } from './components/ProductSlider';
import { NewsSection } from './components/NewsSection';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { NavigationDock } from './components/NavigationDock';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // yug's custom handler for opening the modal
  const yugOpenModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main className="w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory scroll-smooth relative overflow-x-hidden supports-[height:100dvh]:h-[100dvh]">
        <Hero />
        <Intro />
        <FeatureGrid />
        <Gallery />
        <SwitchSection />
        <AccordionFeatures />
        <ProductSlider />
        <NewsSection />
        <CTA onContactClick={yugOpenModal} />
        <Footer onContactClick={yugOpenModal} />
      </main>

      <NavigationDock />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;