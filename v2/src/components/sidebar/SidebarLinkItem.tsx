'use client';
import React, { FC } from 'react';

import { SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface SidebarLinkItemProps {
  url: string;
  title: string;
  isActive: boolean;
}

const SidebarLinkItem: FC<SidebarLinkItemProps> = ({
  url,
  title,
  isActive,
}) => {
  return (
    <SidebarMenuItem
      className={isActive ? 'animate-grow mb-4 origin-top-left ' : ''}
    >
      <Link href={url}>
        <span
          className={cn(
            'relative inline',
            "after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-[2px] after:w-0 after:content-['']",
            'after:bg-gradient-to-r after:from-[#93faba] after:via-[#8ceed6] after:to-[#82e0f980]',
            'after:transition-[width,left] after:duration-500 after:ease-out',
            'hover:after:w-full focus:after:w-full active:after:w-full',
            isActive && 'after:from-foreground after:to-foreground after:w-full'
          )}
        >
          {title}
        </span>
      </Link>
    </SidebarMenuItem>
  );
};

export default SidebarLinkItem;
