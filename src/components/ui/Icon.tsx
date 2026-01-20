import React from 'react';
import { IconProps } from '../types';

const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const iconClasses = `w-8 h-8 ${className}`;

  switch (name) {
    case 'compass':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'person':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case 'people':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M3 21c0-2.5 2-4.5 4.5-4.5h3C13 16.5 15 18.5 15 21"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="16" cy="7" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M18 21c0-1.5 1-3 2.5-3h1.5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case 'team':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M2 20c0-2 1.5-3.5 3.5-3.5h3C10.5 16.5 12 18 12 20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M17 20c0-2 1.5-3.5 3.5-3.5h1"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="17" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    case 'abstract-person':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>
          <ellipse cx="12" cy="7.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur)" />
          <ellipse cx="12" cy="16" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur)" />
        </svg>
      );
    case 'abstract-person-1':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="blur-1">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>
          <ellipse cx="12" cy="7.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur-1)" />
          <ellipse cx="12" cy="16" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur-1)" />
        </svg>
      );
    case 'abstract-person-2':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="blur-2">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>
          <ellipse cx="8" cy="7.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur-2)" />
          <ellipse cx="8" cy="16" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur-2)" />
          <ellipse cx="16" cy="7.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur-2)" />
          <ellipse cx="16" cy="16" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur-2)" />
        </svg>
      );
    case 'abstract-person-3':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <filter id="blur-3">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>
          <ellipse cx="12" cy="6.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur-3)" />
          <ellipse cx="12" cy="15" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur-3)" />
          <ellipse cx="7" cy="8.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur-3)" />
          <ellipse cx="7" cy="17" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur-3)" />
          <ellipse cx="17" cy="8.5" rx="3.5" ry="4" fill="currentColor" opacity="0.4" filter="url(#blur-3)" />
          <ellipse cx="17" cy="17" rx="5.5" ry="6.5" fill="currentColor" opacity="0.4" filter="url(#blur-3)" />
        </svg>
      );
    case 'matryoshka':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="16" rx="6" ry="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="12" cy="10" rx="5" ry="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="10" cy="6" r="1" fill="currentColor" />
          <circle cx="14" cy="6" r="1" fill="currentColor" />
        </svg>
      );
    case 'diamond':
      return (
        <svg
          className={iconClasses}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2L2 7L12 22L22 7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;

