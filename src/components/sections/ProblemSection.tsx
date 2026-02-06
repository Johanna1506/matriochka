import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { useCalendarLink } from '../../hooks/useCalendarLink';

const ProblemSection: React.FC = () => {
  const { t } = useTranslation();
  const handleDiagnosticClick = useCalendarLink('diagnostic');

  const painPoints = [
    t('sections.problem.points.tooManyTopics'),
    t('sections.problem.points.decisionsWithoutEffect'),
    t('sections.problem.points.stagnatingProjects'),
    t('sections.problem.points.highMentalLoad'),
  ];

  return (
    <section className="bg-[#121212] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t('sections.problem.heading')}
            </h2>
            <ul className="space-y-4 mb-8">
              {painPoints.map((point, index) => (
                <li key={index} className="text-lg md:text-xl">
                  • {point}
                </li>
              ))}
            </ul>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              {t('sections.problem.conclusion')}
            </p>
          </div>
          <div className="hidden lg:block max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('sections.problem.desktop.heading')}
            </h2>
            <p className="text-lg md:text-xl mb-4">
              {t('sections.problem.desktop.intro')}
            </p>
            <ul className="space-y-4 mb-6">
              <li className="text-lg md:text-xl text-bold ml-4">• {t('sections.problem.desktop.points.engaging')}</li>
              <li className="text-lg md:text-xl text-bold ml-4">• {t('sections.problem.desktop.points.structuring')}</li>
              <li className="text-lg md:text-xl text-bold ml-4">• {t('sections.problem.desktop.points.complexity')}</li>
              <li className="text-lg md:text-xl text-bold ml-4">• {t('sections.problem.desktop.points.mentalLoad')}</li>
            </ul>
            <p className="text-xl md:text-2xl font-semibold mb-8">
              {t('sections.problem.desktop.conclusion')}
            </p>
          </div>
          <div className="flex justify-start">
            <Button
              variant="secondary"
              onClick={handleDiagnosticClick}
              ariaLabel={t('aria.diagnosticButton')}
            >
              {t('sections.problem.cta')}
            </Button>
          </div>
        </div>
      </section>
  );
};

export default ProblemSection;

