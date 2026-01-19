import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const RoleSection: React.FC = () => {
  const { t } = useTranslation();

  const rolePoints = [
    t('sections.role.points.clarifyStakes'),
    t('sections.role.points.transformStrategy'),
    t('sections.role.points.frameArbitratePilot'),
    t('sections.role.points.involveUntilResults'),
  ];

  return (
    <>
      <WavyDivider variant="white" />
      <section className="bg-white text-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            {t('sections.role.heading')}
          </h2>
          <p className="text-xl md:text-2xl text-center mb-8">
            {t('sections.role.description')}
          </p>
          <ul className="space-y-4 mb-8 max-w-2xl mx-auto">
            {rolePoints.map((point, index) => (
              <li key={index} className="text-lg md:text-xl">
                • {point}
              </li>
            ))}
          </ul>
          <p className="text-xl md:text-2xl font-semibold text-center">
            {t('sections.role.conclusion')}
          </p>
        </div>
      </section>
    </>
  );
};

export default RoleSection;

