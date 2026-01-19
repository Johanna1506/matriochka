import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  ariaLabel,
  className = '',
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onClick) {
        onClick();
      }
    }
  };

  const baseClasses = 'rounded-lg px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = variant === 'primary'
    ? 'bg-black text-white hover:bg-gray-800 focus:ring-black'
    : 'bg-white text-black hover:bg-gray-100 focus:ring-white';

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      tabIndex={0}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

