'use client';
import React, { FC } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import useMousePosition from '@/hooks/use-mouse-position';
import { cn } from '@/lib/utils';

interface BehindMaskProps {
  data: React.ReactNode;
  disable?: boolean;
}

const BehindMask: FC<BehindMaskProps> = ({ data, disable = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = disable ? 0 : isHovered ? 400 : 40;
  const sidebarWidth = 320;
  return (
    <motion.div
      className={cn(
        'bg-foreground text-background absolute inset-0 flex size-full flex-col items-center justify-center rounded-md p-8',
        "[mask-image:url('../../public/mask.svg')] [mask-repeat:no-repeat] [mask-size:40px]"
      )}
      animate={{
        WebkitMaskPosition: `${(x as number) - sidebarWidth - size / 2}px ${(y as number) - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    >
      <div
        className="size-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {data}
      </div>
    </motion.div>
  );
};

export default BehindMask;
