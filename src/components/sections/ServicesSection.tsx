import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const handleDiscoveryClick = () => {
    // TODO: Add booking functionality
  };

  const services = [
    {
      title: t('sections.services.audit.title'),
      description: t('sections.services.audit.description'),
      duration: t('sections.services.audit.duration'),
    },
    {
      title: t('sections.services.structuring.title'),
      description: t('sections.services.structuring.description'),
      duration: t('sections.services.structuring.duration'),
    },
    {
      title: t('sections.services.rightHand.title'),
      description: t('sections.services.rightHand.description'),
      duration: t('sections.services.rightHand.duration'),
    },
  ];

  return (
    <>
      <WavyDivider variant="white" />
      <section className="bg-white text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('sections.services.heading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 text-black">
                  <Icon name="compass" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg mb-2">
                  {service.description}
                </p>
                <p className="text-sm md:text-base font-semibold text-gray-600">
                  {service.duration}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              variant="primary"
              onClick={handleDiscoveryClick}
              ariaLabel={t('aria.discoveryButton')}
            >
              {t('sections.services.cta')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;

