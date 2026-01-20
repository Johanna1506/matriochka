import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';

const FinalCTASection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoveryClick = () => {
    navigate('/rdv-decouverte');
  };

  return (
    <>
      <WavyDivider variant="black" />
      <section className="bg-[#121212] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t('sections.finalCTA.heading')}
              </h2>
              <div className="mb-6">
                <Button
                  variant="primary"
                  onClick={handleDiscoveryClick}
                  ariaLabel={t('aria.discoveryButton')}
                  className="mb-4"
                >
                  {t('sections.finalCTA.cta')}
                </Button>
              </div>
              <p className="text-sm md:text-base text-gray-300">
                {t('sections.finalCTA.additionalInfo')}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="/assets/images/logo_white.png" 
                alt={t('aria.logo')}
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;

