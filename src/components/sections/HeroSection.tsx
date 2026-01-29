import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';
import logoBlack from '../../assets/images/logo_black.png';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoveryClick = () => {
    navigate('/rdv-decouverte');
  };

  return (
    <>
      <section className="bg-[#f5f5f5] min-h-[calc(100vh-100px)] flex flex-col items-center justify-center py-16 px-4">
      <img 
        src={logoBlack} 
        alt={t('aria.logo')}
        className="w-32 h-32 mb-8"
      />
      <div className="lg:hidden">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-6">
          {t('sections.hero.heading')}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-8 px-4">
          <Trans i18nKey="sections.hero.tagline" components={{ strong: <strong /> }} />
        </p>
        <Button
          variant="primary"
          onClick={handleDiscoveryClick}
          ariaLabel={t('aria.discoveryButton')}
        >
          {t('sections.hero.cta')}
        </Button>
      </div>
      <div className="hidden lg:block text-center max-w-3xl">
        <h1 className="text-4xl xl:text-5xl font-bold text-black mb-4">
          {t('sections.hero.desktop.headingLine1')}
        </h1>
        <h1 className="text-4xl xl:text-5xl font-bold text-black mb-6">
          {t('sections.hero.desktop.headingLine2')}
        </h1>
        <p className="text-lg xl:text-xl text-gray-700 mb-8">
          <Trans i18nKey="sections.hero.desktop.tagline" components={{ strong: <strong /> }} />
        </p>
        <Button
          variant="primary"
          onClick={handleDiscoveryClick}
          ariaLabel={t('aria.discoveryButton')}
        >
          {t('sections.hero.desktop.cta')}
        </Button>
      </div>
    </section>
      <WavyDivider variant="black" />
    </>
  );
};

export default HeroSection;

