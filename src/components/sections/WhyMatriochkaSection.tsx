import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const WhyMatriochkaSection: React.FC = () => {
  const { t } = useTranslation();

  const whyPoints = [
    t('sections.whyMatriochka.points.layerByLayer'),
    t('sections.whyMatriochka.points.identifyRoot'),
    t('sections.whyMatriochka.points.stepByStep'),
  ];

  const differentiationPoints = [
    t('sections.whyMatriochka.differentiation.points.background'),
    t('sections.whyMatriochka.differentiation.points.actionablePlan'),
    t('sections.whyMatriochka.differentiation.points.kpiFees'),
  ];

  return (
    <>
      <WavyDivider variant="black" />
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t('sections.whyMatriochka.heading')}
              </h2>
              <ul className="space-y-4 mb-12">
                {whyPoints.map((point, index) => (
                  <li key={index} className="text-lg md:text-xl">
                    • {point}
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                {t('sections.whyMatriochka.differentiation.heading')}
              </h3>
              <ul className="space-y-4">
                {differentiationPoints.map((point, index) => (
                  <li key={index} className="text-lg md:text-xl">
                    • {point}
                  </li>
                ))}
              </ul>
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

export default WhyMatriochkaSection;

