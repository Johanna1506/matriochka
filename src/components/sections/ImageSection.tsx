import React from 'react';
import { useTranslation } from 'react-i18next';
import WavyDivider from '../layout/WavyDivider';

const ImageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-[#121212]">
        <div className="max-w-5xl mx-auto">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/matriochka-dolls.jpeg`}
            alt={t('aria.matryoshkaImage')}
            className="w-full h-auto object-cover grayscale"
            loading="lazy"
          />
        </div>
      </section>
      <WavyDivider variant="black" rotate />
    </>
  );
};

export default ImageSection;

