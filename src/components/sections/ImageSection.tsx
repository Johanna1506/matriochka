import React from 'react';
import { useTranslation } from 'react-i18next';

const ImageSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-[#121212] h-[65vh] overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/matriochka-dolls.jpeg`}
          alt={t('aria.matryoshkaImage')}
          className="w-full h-full object-cover object-center grayscale"
          loading="lazy"
        />
      </section>
      {/* <WavyDivider variant="black" rotate /> */}
    </>
  );
};

export default ImageSection;

