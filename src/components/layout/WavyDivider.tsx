import React from 'react';
import { WavyDividerProps } from '../types';

const ScallopDivider: React.FC<WavyDividerProps> = ({ variant = 'white', className = '' }) => {
  const fillColor = variant === 'white' ? '#FFFFFF' : '#121212';
  const scallopWidth = 60;
  const scallopRadius = scallopWidth / 2;
  
  let pathData = 'M0,30'; // Commence au milieu à gauche
  
  // Crée les demi-cercles vers le haut
  for (let x = 0; x <= 1200; x += scallopWidth) {
    const centerX = x + scallopRadius;
    // Arc : rx,ry rotation large-arc-flag sweep-flag x,y
    pathData += ` A${scallopRadius},${scallopRadius} 0 0,1 ${x + scallopWidth},30`;
  }
  
  // Ferme le chemin : descend, va à gauche, remonte
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

export default ScallopDivider;