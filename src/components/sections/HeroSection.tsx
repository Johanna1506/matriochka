import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const handleDiscoveryClick = () => {
    // TODO: Add booking functionality
  };

  return (
    <>
      <section className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <Logo size="large" className="mb-8" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6">
        {t('sections.hero.heading')}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-8 px-4">
        {t('sections.hero.tagline')}
      </p>
      <Button
        variant="primary"
        onClick={handleDiscoveryClick}
        ariaLabel={t('aria.discoveryButton')}
      >
        {t('sections.hero.cta')}
      </Button>
    </section>
      <WavyDivider variant="black" />
    </>
  );
};

export default HeroSection;

