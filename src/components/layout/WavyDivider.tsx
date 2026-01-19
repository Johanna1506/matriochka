import React from 'react';
import { WavyDividerProps } from '../types';

const WavyDivider: React.FC<WavyDividerProps> = ({ variant = 'white', className = '' }) => {
  const fillColor = variant === 'white' ? '#FFFFFF' : '#121212';
  const scallopWidth = 60;
  const scallopRadius = scallopWidth / 2;
  const scallopDepth = scallopRadius;
  
  let pathData = 'M0,0';
  
  for (let x = 0; x <= 1200; x += scallopWidth) {
    const centerX = x + scallopRadius;
    const endX = x + scallopWidth;
    pathData += ` Q${centerX},${scallopDepth} ${endX},0`;
  }
  
  pathData += ' L1200,120 L0,120 Z';

  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-20 md:h-24"
        fill={fillColor}
      >
        <path
          d={pathData}
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WavyDivider;

