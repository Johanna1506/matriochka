import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const HowWeWorkSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    t('sections.howWeWork.steps.step1'),
    t('sections.howWeWork.steps.step2'),
    t('sections.howWeWork.steps.step3'),
    t('sections.howWeWork.steps.step4'),
  ];

  return (
    <>
      <WavyDivider variant="white" />
      <section className="bg-[#f5f5f5] text-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('sections.howWeWork.heading')}
          </h2>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="text-lg md:text-xl">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default HowWeWorkSection;

