import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#f5f5f5] text-black py-6 px-4 text-center text-sm">
      {t('sections.footer.copyright')}
    </footer>
  );
};

export default Footer;
