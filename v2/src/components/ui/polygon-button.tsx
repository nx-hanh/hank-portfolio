'use client';
import React, { useState } from 'react';
import { motion, MotionProps } from 'framer-motion';

import { cn } from '@/lib/utils';

interface PolyButtonProps extends MotionProps {
  size?: 'small' | 'medium' | 'large';
  borderColor?: string;
  borderSize?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const sizeValues = {
  small: 50,
  medium: 100,
  large: 150,
};

const PolygonButton: React.FC<PolyButtonProps> = ({
  className,
  size = 'medium',
  children,
  disabled = false,
  borderColor = '#00AA86',
  borderSize = 2,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const sizeValue = sizeValues[size];
  const polygonPoints = `
    ${sizeValue / 2} 1, 
    ${sizeValue - 1} ${sizeValue / 4}, 
    ${sizeValue - 1} ${(3 * sizeValue) / 4}, 
    ${sizeValue / 2} ${sizeValue - 1}, 
    1 ${(3 * sizeValue) / 4}, 
    1 ${sizeValue / 4}
  `;

  return (
    <motion.button
      className={cn(
        'relative flex items-center justify-center overflow-hidden focus:outline-none',
        className
      )}
      {...props}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      style={{
        width: sizeValue,
        height: sizeValue,
      }}
    >
      <motion.svg
        width={sizeValue}
        height={sizeValue}
        viewBox={`0 0 ${sizeValue} ${sizeValue}`}
        className="absolute inset-0"
      >
        <motion.polygon
          className="scale-90 stroke-current"
          fill="transparent"
          stroke={borderColor}
          strokeWidth={borderSize}
          points={polygonPoints}
          animate={{
            strokeDashoffset: isHovering ? 0 : 1000, // Draw on hover, disappear on unhover
          }}
          transition={{
            duration: 3, // Smooth transition for both hover and unhover
            ease: 'easeInOut',
          }}
          style={{
            strokeDasharray: 1000, // Length of the polygon's path (for stroke animation)
            strokeLinecap: 'round', // Round the stroke ends
            strokeLinejoin: 'miter', // Use miter join for the corners
          }}
        />
      </motion.svg>
      <React.Fragment>{children}</React.Fragment>
    </motion.button>
  );
};

PolygonButton.displayName = 'PolygonButton';

export default PolygonButton;
