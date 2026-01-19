import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import WavyDivider from '../layout/WavyDivider';

const ProblemSection: React.FC = () => {
  const { t } = useTranslation();

  const handleDiagnosticClick = () => {
    // TODO: Add booking functionality
  };

  const painPoints = [
    t('sections.problem.points.tooManyTopics'),
    t('sections.problem.points.decisionsWithoutEffect'),
    t('sections.problem.points.stagnatingProjects'),
    t('sections.problem.points.highMentalLoad'),
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('sections.problem.heading')}
          </h2>
          <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
            {painPoints.map((point, index) => (
              <li key={index} className="text-lg md:text-xl">
                • {point}
              </li>
            ))}
          </ul>
          <p className="text-xl md:text-2xl font-semibold text-center mb-8">
            {t('sections.problem.conclusion')}
          </p>
          <div className="flex justify-center">
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

