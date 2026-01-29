import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const WhyMatriochkaSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <WavyDivider variant="black" />
      <section className="bg-[#121212] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('sections.whyMatriochka.desktop.heading')}
          </h2>
          <p className="text-lg md:text-xl mb-4">
            {t('sections.whyMatriochka.desktop.paragraph1')}
          </p>
          <p className="text-lg md:text-xl mb-4">
            {t('sections.whyMatriochka.desktop.paragraph2')}
          </p>
          <ul className="space-y-4 mb-6">
            <li className="text-lg md:text-xl">• {t('sections.whyMatriochka.desktop.points.decide')}</li>
            <li className="text-lg md:text-xl">• {t('sections.whyMatriochka.desktop.points.structure')}</li>
            <li className="text-lg md:text-xl">• {t('sections.whyMatriochka.desktop.points.grow')}</li>
          </ul>
          <p className="text-lg md:text-xl">
            {t('sections.whyMatriochka.desktop.conclusion')}
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyMatriochkaSection;
