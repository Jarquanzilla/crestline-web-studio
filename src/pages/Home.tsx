import React from 'react';
import { TypingHero } from '../components/TypingHero';
import { ProcessSlider } from '../components/ProcessSlider';
import { ServicePillars } from '../components/ServicePillars';

export const Home: React.FC = () => {
  return (
    <>
      <TypingHero />
      <ProcessSlider />
      <ServicePillars />
    </>
  );
};

export default Home;
