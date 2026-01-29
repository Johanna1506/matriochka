import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const LegitimacySection: React.FC = () => {
  const { t } = useTranslation();

  const legitimacyPoints = [
    t('sections.whyMatriochka.legitimacy.points.created'),
    t('sections.whyMatriochka.legitimacy.points.leadership'),
    t('sections.whyMatriochka.legitimacy.points.piloted'),
    t('sections.whyMatriochka.legitimacy.points.decisions'),
  ];

  return (
    <>  
      <WavyDivider variant="black" />
      <section className="bg-[#121212] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('sections.whyMatriochka.legitimacy.heading')}
              </h2>
              <p className="text-lg md:text-xl mb-4">
                {t('sections.whyMatriochka.legitimacy.intro')}
              </p>
              <ul className="space-y-4 mb-6">
                {legitimacyPoints.map((point, index) => (
                  <li key={index} className="text-lg md:text-xl">
                    • {point}
                  </li>
                ))}
              </ul>
              <p className="text-lg md:text-xl">
                {t('sections.whyMatriochka.legitimacy.conclusion')}
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/elsa-plaud.jpeg`}
                alt={t('aria.founderImage')}
                className="w-full max-w-sm h-auto rounded-lg mb-4"
                loading="lazy"
              />
              <p className="text-xl font-bold">
                {t('sections.whyMatriochka.founder.name')}
              </p>
              <p className="text-lg">
                {t('sections.whyMatriochka.founder.title')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegitimacySection;
