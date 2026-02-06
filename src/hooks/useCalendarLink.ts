import { CALENDLY_DISCOVERY_URL, CALENDLY_DIAGNOSTIC_URL } from '../utils/calendar';

type AppointmentType = 'discovery' | 'diagnostic';

const CALENDLY_URLS: Record<AppointmentType, string> = {
  discovery: CALENDLY_DISCOVERY_URL,
  diagnostic: CALENDLY_DIAGNOSTIC_URL,
};

export const useCalendarLink = (type: AppointmentType) => {
  const handleCalendarClick = () => {
    window.open(CALENDLY_URLS[type], '_blank', 'noopener,noreferrer');
  };

  return handleCalendarClick;
};
