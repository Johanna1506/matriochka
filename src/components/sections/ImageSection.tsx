import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const ImageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-black py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/matryoshka.avif`}
            alt={t('aria.matryoshkaImage')}
            className="w-full h-auto object-cover rounded-lg grayscale"
            loading="lazy"
          />
        </div>
      </section>
      <WavyDivider variant="white" />
    </>
  );
};

export default ImageSection;

