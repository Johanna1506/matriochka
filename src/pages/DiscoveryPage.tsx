import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import WavyDivider from '../components/layout/WavyDivider';
import Icon from '../components/ui/Icon';
import { useCalendarLink } from '../hooks/useCalendarLink';

const DiscoveryPage: React.FC = () => {
  const { t } = useTranslation();
  const handleBookingClick = useCalendarLink('discovery');

  return (
    <main className="min-h-screen">
      {/* Section 1: Header (fond blanc) */}
      <section className="bg-[#f5f5f5] min-h-[calc(100vh-100px)] flex flex-col items-center justify-center py-16 px-4">
        <img 
          src="/assets/images/logo_black.png" 
          alt={t('aria.logo')}
          className="w-32 h-32 mb-8"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6">
          {t('discoveryPage.header.title')}
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
          {t('discoveryPage.header.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mb-8 px-4">
          {t('discoveryPage.header.description')}
        </p>
        <Button
          variant="primary"
          onClick={handleBookingClick}
          ariaLabel={t('aria.discoveryButton')}
          className="mb-4"
        >
          {t('discoveryPage.header.cta')}
        </Button>
        <p className="text-sm md:text-base text-gray-600">
          {t('discoveryPage.header.disclaimer')}
        </p>
      </section>

      {/* Section 2: Ce que ce RDV vous apporte (fond noir) */}
      <WavyDivider variant="black" />
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('discoveryPage.benefits.heading')}
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto">
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.benefits.points.clarity')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.benefits.points.identifyRoot')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.benefits.points.priorities')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.benefits.points.decisions')}
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Ce RDV est fait pour vous si (fond noir) */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('discoveryPage.targetAudience.heading')}
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto mb-12">
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.targetAudience.points.leader')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.targetAudience.points.alone')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.targetAudience.points.projects')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.targetAudience.points.complexity')}
            </li>
          </ul>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              onClick={handleBookingClick}
              ariaLabel={t('aria.discoveryButton')}
            >
              {t('discoveryPage.targetAudience.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Ce RDV n'est pas (fond blanc) */}
      <WavyDivider variant="black" rotate />
      <section className="bg-[#f5f5f5] text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('discoveryPage.notThis.heading')}
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto mb-8">
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.notThis.points.salesPitch')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.notThis.points.vagueCoaching')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.notThis.points.commitment')}
            </li>
          </ul>
          <div className="flex items-center gap-3 max-w-3xl mx-auto">
            <Icon name="diamond" className="w-6 h-6 text-black" />
            <p className="text-lg md:text-xl font-semibold">
              {t('discoveryPage.notThis.keyMessage')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Pourquoi avec moi (fond blanc) */}
      <section className="bg-[#f5f5f5] text-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('discoveryPage.whyWithMe.heading')}
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto mb-12">
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.whyWithMe.points.background')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.whyWithMe.points.decisions')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.whyWithMe.points.approach')}
            </li>
            <li className="text-lg md:text-xl">
              • {t('discoveryPage.whyWithMe.points.perspective')}
            </li>
          </ul>
          <div className="flex justify-center">
            <Button
              variant="primary"
              onClick={handleBookingClick}
              ariaLabel={t('aria.discoveryButton')}
            >
              {t('discoveryPage.whyWithMe.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Comment ça se passe (fond noir) */}
      <WavyDivider variant="black" />
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('discoveryPage.howItWorks.heading')}
          </h2>
          <ol className="space-y-6 max-w-3xl mx-auto">
            <li className="text-lg md:text-xl">
              {t('discoveryPage.howItWorks.steps.step1')}
            </li>
            <li className="text-lg md:text-xl">
              {t('discoveryPage.howItWorks.steps.step2')}
            </li>
            <li className="text-lg md:text-xl">
              {t('discoveryPage.howItWorks.steps.step3')}
            </li>
            <li className="text-lg md:text-xl">
              {t('discoveryPage.howItWorks.steps.step4')}
              <ul className="ml-6 mt-2 space-y-2">
                <li className="text-lg md:text-xl">
                  {t('discoveryPage.howItWorks.steps.step4a')}
                </li>
                <li className="text-lg md:text-xl">
                  {t('discoveryPage.howItWorks.steps.step4b')}
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Section 7: Final CTA (fond noir) */}
      <section className="bg-black text-white py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            {t('discoveryPage.finalCTA.heading')}
          </h2>
          <div className="flex justify-center mb-4">
            <Button
              variant="secondary"
              onClick={handleBookingClick}
              ariaLabel={t('aria.discoveryButton')}
            >
              {t('discoveryPage.finalCTA.cta')}
            </Button>
          </div>
          <p className="text-sm md:text-base text-gray-300 text-center mb-8">
            {t('discoveryPage.finalCTA.disclaimer')}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm md:text-base text-gray-300">
              <p>{t('discoveryPage.finalCTA.contactQuestion')}</p>
              <a
                href={`mailto:${t('discoveryPage.finalCTA.contactEmail')}`}
                className="text-white hover:underline"
              >
                {t('discoveryPage.finalCTA.contactEmail')}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <img 
                src="/assets/images/logo_white.png" 
                alt={t('aria.logo')}
                className="w-32 h-32"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DiscoveryPage;

