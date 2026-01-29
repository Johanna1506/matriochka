import React from 'react';
import { WavyDividerProps } from '../types';

const ScallopDivider: React.FC<WavyDividerProps> = ({ variant = 'white', className = '', rotate = false }) => {
  const fillColor = variant === 'white' ? '#f5f5f5' : '#121212';
  const scallopWidth = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? 80 : 40;
  const scallopRadius = scallopWidth / 2; // Rayon = moitié de la largeur pour des demi-cercles parfaits
  const viewBoxWidth = 1200;
  const startY = scallopRadius; // Commence au niveau du rayon
  
  let pathData = `M0,${startY}`; // Commence au niveau du rayon
  
  // Crée les demi-cercles vers le haut, en s'assurant qu'ils s'alignent parfaitement
  const numScallops = Math.ceil(viewBoxWidth / scallopWidth);
  const actualWidth = numScallops * scallopWidth;
  
  for (let i = 0; i < numScallops; i++) {
    const x = i * scallopWidth;
    const nextX = x + scallopWidth;
    // Arc : rx,ry rotation large-arc-flag sweep-flag x,y
    pathData += ` A${scallopRadius},${scallopRadius} 0 0,1 ${nextX},${startY}`;
  }
  
  // Ferme le chemin : descend, va à gauche, remonte
  const bottomY = startY + 90; // Hauteur totale du viewBox
  pathData += ` L${actualWidth},${bottomY} L0,${bottomY} Z`;

  const viewBoxHeight = bottomY;
  const backgroundColor = variant === 'white'  ? '#121212' : '#f5f5f5'
  
  return (
    <div className={`w-full ${className} bg-[${backgroundColor}]`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${actualWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className={`w-full h-20 md:h-24 ${rotate ? 'rotate-180' : ''}`}
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