import React from 'react';
import { TypingHero } from '../components/TypingHero';
import { ProcessSlider } from '../components/ProcessSlider';
import { ServicePillars } from '../components/ServicePillars';
import { AboutSection } from '../components/AboutSection';

export const Home: React.FC = () => {
  return (
    <>
      <TypingHero />
      <ProcessSlider />
      <ServicePillars />
      <AboutSection />
    </>
  );
};

export default Home;
