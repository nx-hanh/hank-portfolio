'use client';
import React, { FC, useEffect, useState } from 'react';

import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem';
import { SidebarMenu } from '@/components/ui/sidebar';
import { usePathname } from '@/lib/i18n';

interface SidebarLinkMenuProps {
  items: { url: string; title: string }[];
}

const SidebarLinkMenu: FC<SidebarLinkMenuProps> = ({ items }) => {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  useEffect(() => {
    setActiveIndex(
      items.findIndex((item) => pathname.includes(item.url)) !== -1
        ? items.findIndex((item) => pathname.includes(item.url))
        : -1
    );
  }, [pathname, items]);
  return (
    <SidebarMenu className="mb-2 flex h-full max-w-full flex-col justify-center overflow-hidden p-2 text-[1.2rem]  font-medium leading-9">
      {items.map((item, index) => (
        <SidebarLinkItem
          url={item.url}
          title={item.title}
          isActive={index === activeIndex}
          key={item.title}
        />
      ))}
    </SidebarMenu>
  );
};

export default SidebarLinkMenu;
