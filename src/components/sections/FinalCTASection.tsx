import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import WavyDivider from '../layout/WavyDivider';
import Button from '../ui/Button';
import logoBlack from '../../assets/images/logo_black.png'

const FinalCTASection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoveryClick = () => {
    navigate('/rdv-decouverte');
  };

  return (
    <>
      <WavyDivider variant="white" />
      <section className="bg-[#F5F5F5] text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('sections.finalCTA.desktop.heading')}
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {t('sections.finalCTA.desktop.paragraph')}
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {t('sections.finalCTA.desktop.subheading')}
              </h3>
              <Button
                variant="primary"
                onClick={handleDiscoveryClick}
                ariaLabel={t('aria.discoveryButton')}
                className="mb-4"
              >
                {t('sections.finalCTA.cta')}
              </Button>
              <p className="text-sm md:text-base text-gray-600">
                {t('sections.finalCTA.desktop.additionalInfo')}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={logoBlack}
                alt={t('aria.logo')}
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;
