import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import ImageSection from '../components/sections/ImageSection';
import RoleSection from '../components/sections/RoleSection';
import TargetAudienceSection from '../components/sections/TargetAudienceSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyMatriochkaSection from '../components/sections/WhyMatriochkaSection';
import LegitimacySection from '../components/sections/LegitimacySection';
import ResultsApproachSection from '../components/sections/ResultsApproachSection';
import HowWeWorkSection from '../components/sections/HowWeWorkSection';
import FinalCTASection from '../components/sections/FinalCTASection';
import WavyDivider from '../components/layout/WavyDivider';

const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <WavyDivider variant="white" />
      <ImageSection />
      <RoleSection />
      <TargetAudienceSection />
      <ServicesSection />
      <WhyMatriochkaSection />
      <HowWeWorkSection />
      <LegitimacySection />
      <ResultsApproachSection />
      <FinalCTASection />
    </main>
  );
};

export default HomePage;

