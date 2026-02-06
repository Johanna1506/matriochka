import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';

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
      <WavyDivider variant="white" />
      <section className="bg-[#f5f5f5] text-black py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {t('sections.services.heading')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col">
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
          <div className="hidden lg:block">
            {desktopServices.map((service, index) => {
              const heading = t(`sections.services.desktop.${service.key}.heading`);
              const bullets = t(`sections.services.desktop.${service.key}.bullets`, { returnObjects: true }) as string[];
              const duration = t(`sections.services.desktop.${service.key}.duration`);
              const benefit = t(`sections.services.desktop.${service.key}.benefit`);
              return (
                <React.Fragment key={service.key}>
                  <div className="max-w-3xl py-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {t('sections.services.heading')}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      {t(service.titleKey)}
                    </h3>
                    <div className="flex items-start gap-2 mb-4">
                      <Icon name="diamond" className="w-5 h-5 mt-0.5 shrink-0" />
                      <p className="text-base md:text-lg font-bold">{heading}</p>
                    </div>
                    <ul className="space-y-2 mb-4 ml-7">
                      {bullets.map((bulletKey, i) => (
                        <li key={i} className="text-base md:text-lg list-disc">
                          <Trans
                            i18nKey={`sections.services.desktop.${service.key}.bullets.${i}`}
                            components={{ strong: <strong /> }}
                          />
                        </li>
                      ))}
                    </ul>
                    <p className="text-base md:text-lg mb-4">{duration}</p>
                    <div className="flex items-start gap-2 mb-8">
                      <Icon name="matryoshka" className="w-5 h-5 mt-0.5 shrink-0" />
                      <p className="text-base md:text-lg">{benefit}</p>
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
                  {index < desktopServices.length - 1 && (
                    <div className="w-screen relative left-1/2 -translate-x-1/2">
                      <WavyDivider variant="black" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;

