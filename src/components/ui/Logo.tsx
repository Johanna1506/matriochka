import React from 'react';
import { useTranslation } from 'react-i18next';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const { t } = useTranslation();
  const ariaLabel = t('aria.logo');

  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  const textSizeClasses = {
    small: 'text-[8px]',
    medium: 'text-xs',
    large: 'text-sm',
  };

  const iconSizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-black flex flex-col items-center justify-center ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <div className={`text-white ${textSizeClasses[size]} font-bold text-center px-2 leading-tight`}>
        Matriochka
      </div>
      <div className={`text-white ${textSizeClasses[size]} font-bold text-center px-2 leading-tight`}>
        Conseil
      </div>
      <svg
        className={`${iconSizeClasses[size]} mt-1`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="18" rx="6" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="11" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <ellipse cx="12" cy="6" rx="4" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="5" r="0.8" fill="currentColor" />
        <circle cx="14" cy="5" r="0.8" fill="currentColor" />
      </svg>
    </div>
  );
};

export default Logo;

