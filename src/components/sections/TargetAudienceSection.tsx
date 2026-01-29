import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';
import { useCalendarLink } from '../../hooks/useCalendarLink';

const TargetAudienceSection: React.FC = () => {
  const { t } = useTranslation();
  const handleDiagnosticClick = useCalendarLink('diagnostic');

  const audiences = [
    {
      icon: 'abstract-person-1' as const,
      title: t('sections.targetAudience.solopreneur.title'),
      description: t('sections.targetAudience.solopreneur.description'),
    },
    {
      icon: 'abstract-person-2' as const,
      title: t('sections.targetAudience.startup.title'),
      description: t('sections.targetAudience.startup.description'),
    },
    {
      icon: 'abstract-person-3' as const,
      title: t('sections.targetAudience.pme.title'),
      description: t('sections.targetAudience.pme.description'),
    },
  ];

  const desktopAudiences = [
    {
      icon: 'abstract-person-1' as const,
      titleKey: 'sections.targetAudience.desktop.entrepreneur.title',
      problemsKey: 'sections.targetAudience.desktop.entrepreneur.problems',
      solutionKey: 'sections.targetAudience.desktop.entrepreneur.solution',
    },
    {
      icon: 'abstract-person-2' as const,
      titleKey: 'sections.targetAudience.desktop.startup.title',
      problemsKey: 'sections.targetAudience.desktop.startup.problems',
      solutionKey: 'sections.targetAudience.desktop.startup.solution',
    },
    {
      icon: 'abstract-person-3' as const,
      titleKey: 'sections.targetAudience.desktop.pme.title',
      problemsKey: 'sections.targetAudience.desktop.pme.problems',
      solutionKey: 'sections.targetAudience.desktop.pme.solution',
    },
  ];

  return (
    <>
      <WavyDivider variant="black" />
      <section className="bg-[#121212] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t('sections.targetAudience.heading')}
            </h2>
            <div className="flex flex-col gap-8 mb-12">
              {audiences.map((audience, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="mb-4 text-white">
                    <Icon name={audience.icon} className="w-16 h-16" />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-xl md:text-2xl font-bold">{audience.title}</h3>
                    <p className="text-base md:text-lg">{audience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {t('sections.targetAudience.desktop.heading')}
            </h2>
            <div className="flex flex-col gap-10 mb-12">
              {desktopAudiences.map((audience, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-white shrink-0">
                    <Icon name={audience.icon} className="w-16 h-16" />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <h3 className="text-xl md:text-2xl font-bold">{t(audience.titleKey)}</h3>
                    <p className="text-base md:text-lg opacity-90">{t(audience.problemsKey)}</p>
                    <p className="text-base md:text-lg font-medium">{t(audience.solutionKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              onClick={handleDiagnosticClick}
              ariaLabel={t('aria.diagnosticButton')}
            >
              {t('sections.targetAudience.cta')}
            </Button>
          </div>
        </div>
      </section>
      <WavyDivider variant="black" rotate />
    </>
  );
};

export default TargetAudienceSection;

