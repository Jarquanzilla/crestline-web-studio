import React from 'react';
import { TypingHero } from '../components/TypingHero';
import { ProcessSlider } from '../components/ProcessSlider';
import { SelectedWork } from '../components/SelectedWork';

export const Home: React.FC = () => {
  return (
    <>
      <TypingHero />
      <ProcessSlider />
      <SelectedWork />
    </>
  );
};

export default Home;
