import { useTranslation } from 'react-i18next';
import { CALENDLY_DISCOVERY_URL, generateCalendarUrl, getDefaultDuration } from '../utils/calendar';

type AppointmentType = 'discovery' | 'diagnostic';

export const useCalendarLink = (type: AppointmentType) => {
  const { t } = useTranslation();

  const handleCalendarClick = () => {
    const url =
      type === 'discovery'
        ? CALENDLY_DISCOVERY_URL
        : generateCalendarUrl({
            title: t('calendar.diagnostic.title'),
            description: t('calendar.diagnostic.description'),
            duration: getDefaultDuration(type),
          });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return handleCalendarClick;
};
