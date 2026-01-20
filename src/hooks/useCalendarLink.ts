import { useTranslation } from 'react-i18next';
import { generateCalendarUrl, getDefaultDuration } from '../utils/calendar';

type AppointmentType = 'discovery' | 'diagnostic';

export const useCalendarLink = (type: AppointmentType) => {
  const { t } = useTranslation();

  const handleCalendarClick = () => {
    const title = t(`calendar.${type}.title`);
    const description = t(`calendar.${type}.description`);
    const duration = getDefaultDuration(type);

    const calendarUrl = generateCalendarUrl({
      title,
      description,
      duration,
    });

    window.open(calendarUrl, '_blank', 'noopener,noreferrer');
  };

  return handleCalendarClick;
};
