import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

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
      <section className="bg-[#f5f5f5] text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('sections.role.heading')}
          </h2>
          <div className="lg:hidden">
              <p className="text-xl md:text-2xl mb-8">
                <Trans i18nKey="sections.role.description" components={{ strong: <strong /> }} />
            </p>
            <ul className="space-y-4 mb-8">
              {rolePoints.map((point, index) => (
                <li key={index} className="text-lg md:text-xl text-bold">
                  • {point}
                </li>
              ))}
            </ul>
            <p className="text-xl md:text-2xl font-semibold whitespace-pre-line">
              <Trans i18nKey="sections.role.conclusion" components={{ strong: <strong /> }} />
            </p>
          </div>
          <div className="hidden lg:block mx-auto">
            <p className="text-xl md:text-2xl mb-6">
              <Trans i18nKey="sections.role.desktop.description" components={{ strong: <strong /> }} />
            </p>
            <ul className="space-y-4 mb-6">
              <li className="text-lg md:text-xl">• {t('sections.role.desktop.points.clarifyStakes')}</li>
              <li className="text-lg md:text-xl">• {t('sections.role.desktop.points.transformStrategy')}</li>
              <li className="text-lg md:text-xl">• {t('sections.role.desktop.points.frameArbitratePilot')}</li>
              <li className="text-lg md:text-xl">• {t('sections.role.desktop.points.involveUntilResults')}</li>
            </ul>
            <p className="text-xl md:text-2xl font-semibold whitespace-pre-line">
              <Trans i18nKey="sections.role.desktop.conclusion" components={{ strong: <strong /> }} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoleSection;

