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
      <section className="bg-[#f5f5f5] text-black py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="lg:hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
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
          <div className="hidden lg:block max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {t('sections.howWeWork.desktop.heading')}
            </h2>
            <ol className="space-y-6">
              <li className="text-lg md:text-xl">
                <span className="font-semibold">{t('sections.howWeWork.desktop.steps.step1.title')}</span>
                <p className="mt-2 text-gray-700">{t('sections.howWeWork.desktop.steps.step1.description')}</p>
              </li>
              <li className="text-lg md:text-xl">
                <span className="font-semibold">{t('sections.howWeWork.desktop.steps.step2.title')}</span>
                <p className="mt-2 text-gray-700">{t('sections.howWeWork.desktop.steps.step2.description')}</p>
              </li>
              <li className="text-lg md:text-xl">
                <span className="font-semibold">{t('sections.howWeWork.desktop.steps.step3.title')}</span>
                <p className="mt-2 text-gray-700">{t('sections.howWeWork.desktop.steps.step3.description')}</p>
              </li>
              <li className="text-lg md:text-xl">
                <span className="font-semibold">{t('sections.howWeWork.desktop.steps.step4.title')}</span>
                <p className="mt-2 text-gray-700">{t('sections.howWeWork.desktop.steps.step4.description')}</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWorkSection;

