import React from 'react';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ImageSection from './components/sections/ImageSection';
import RoleSection from './components/sections/RoleSection';
import TargetAudienceSection from './components/sections/TargetAudienceSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyMatriochkaSection from './components/sections/WhyMatriochkaSection';
import HowWeWorkSection from './components/sections/HowWeWorkSection';
import FinalCTASection from './components/sections/FinalCTASection';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ImageSection />
      <RoleSection />
      <TargetAudienceSection />
      <ServicesSection />
      <WhyMatriochkaSection />
      <HowWeWorkSection />
      <FinalCTASection />
    </main>
  );
};

export default App;
