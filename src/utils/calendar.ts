export const CALENDLY_DISCOVERY_URL =
  'https://calendly.com/elsa-matriochka-conseil/rdv-decouverte-clone';

export interface CalendarEventParams {
  title: string;
  description: string;
  duration: number;
  startDate?: Date;
}

const DEFAULT_DURATION_DIAGNOSTIC = 60;

export const getDefaultDuration = (type: 'discovery' | 'diagnostic'): number => {
  if (type === 'discovery') {
    return 90;
  }
  return DEFAULT_DURATION_DIAGNOSTIC;
};

export const generateCalendarUrl = (params: CalendarEventParams): string => {
  const {
    title,
    description,
    duration,
    startDate = new Date(),
  } = params;

  const calendarEmail = process.env.REACT_APP_CALENDAR_EMAIL || 'elsa@matriochkaconseil.com';

  const startTime = new Date(startDate);
  const endTime = new Date(startTime.getTime() + duration * 60 * 1000);

  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedStart = formatDate(startTime);
  const encodedEnd = formatDate(endTime);
  const encodedEmail = encodeURIComponent(calendarEmail);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${encodedStart}/${encodedEnd}&details=${encodedDescription}&add=${encodedEmail}`;
};
