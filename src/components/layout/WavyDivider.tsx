import React from 'react';
import { WavyDividerProps } from '../types';

const scallopWidth = 60;
const scallopRadius = scallopWidth / 2;
const numScallops = 100;
const actualWidth = numScallops * scallopWidth;
const viewBoxHeight = scallopRadius * 2;

const ScallopDivider: React.FC<WavyDividerProps> = ({ variant = 'white', className = '', rotate = false }) => {
  const fillColor = variant === 'white' ? '#f5f5f5' : '#121212';
  const backgroundColor = variant === 'white' ? '#121212' : '#f5f5f5';

  let pathData = `M0,${scallopRadius}`;
  for (let i = 0; i < numScallops; i++) {
    const nextX = (i + 1) * scallopWidth;
    pathData += ` A${scallopRadius},${scallopRadius} 0 0,1 ${nextX},${scallopRadius}`;
  }
  pathData += ` L${actualWidth},${viewBoxHeight} L0,${viewBoxHeight} Z`;

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ backgroundColor }} aria-hidden="true">
      <svg
        viewBox={`0 0 ${actualWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid slice"
        className={`w-full h-8 block ${rotate ? 'rotate-180' : ''}`}
        fill={fillColor}
      >
        <path d={pathData} fill={fillColor} />
      </svg>
    </div>
  );
};

export default ScallopDivider;
