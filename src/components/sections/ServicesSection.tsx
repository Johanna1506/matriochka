import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../ui/Icon';
import Button from '../ui/Button';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDiscoveryClick = () => {
    navigate('/rdv-decouverte');
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

  const desktopServices = [
    { key: 'audit', titleKey: 'sections.services.audit.title' },
    { key: 'structuring', titleKey: 'sections.services.structuring.title' },
    { key: 'rightHand', titleKey: 'sections.services.rightHand.title' },
  ] as const;

  return (
    <>
      <section className="bg-[#f5f5f5] text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            {t('sections.services.heading')}
          </h2>
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
          <div className="hidden lg:block space-y-12 mb-12">
            {desktopServices.map((service) => {
              const bullets = t(`sections.services.desktop.${service.key}.bullets`, { returnObjects: true }) as string[];
              const duration = t(`sections.services.desktop.${service.key}.duration`);
              const benefit = t(`sections.services.desktop.${service.key}.benefit`);
              return (
                <div key={service.key} className="max-w-3xl">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {t(service.titleKey)}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {bullets.map((bullet, i) => (
                      <li key={i} className="text-base md:text-lg">• {bullet}</li>
                    ))}
                  </ul>
                  <p className="text-sm md:text-base font-semibold text-gray-600 mb-4">
                    {duration}
                  </p>
                  <p className="text-base md:text-lg font-medium mb-6">
                    {benefit}
                  </p>
                  <Button
                    variant="primary"
                    onClick={handleDiscoveryClick}
                    ariaLabel={t('aria.discoveryButton')}
                  >
                    {t('sections.services.cta')}
                  </Button>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden flex justify-center">
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

