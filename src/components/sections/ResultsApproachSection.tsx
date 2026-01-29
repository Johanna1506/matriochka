import React from 'react';
import { useTranslation } from 'react-i18next';

const ResultsApproachSection: React.FC = () => {
  const { t } = useTranslation();

  const resultsApproachPoints = [
    t('sections.whyMatriochka.resultsApproach.points.plan45'),
    t('sections.whyMatriochka.resultsApproach.points.kpi'),
    t('sections.whyMatriochka.resultsApproach.points.fees'),
  ];

  return (
    <>
      <section className="bg-[#121212] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('sections.whyMatriochka.resultsApproach.heading')}
          </h2>
          <ul className="space-y-4 mb-6">
            {resultsApproachPoints.map((point, index) => (
              <li key={index} className="text-lg md:text-xl">
                • {point}
              </li>
            ))}
          </ul>
          <p className="text-lg md:text-xl font-bold mb-2">
            {t('sections.whyMatriochka.resultsApproach.commitment')}
          </p>
          <p className="text-lg md:text-xl">
            {t('sections.whyMatriochka.resultsApproach.commitmentText')}
          </p>
        </div>
      </section>
    </>
  );
};

export default ResultsApproachSection;
