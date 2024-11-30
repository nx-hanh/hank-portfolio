import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { CustomTrigger } from '@/components/sidebar/CustomTrigger';
import LogoText from '@/components/sidebar/LogoText';
import { Link } from '@/lib/i18n';
import { Fragment } from 'react';
import { cn } from '@/lib/utils';
import { getData } from '@/lib/gist';
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem';
import SidebarLinkMenu from '@/components/sidebar/SidebarLinkMenu';

// Menu items.
const navItems = [
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Skills',
    url: '/skills',
  },

  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Experiences',
    url: '/experiences',
  },
];
const defaultLinks = [
  {
    title: 'Github',
    url: 'https://github.com/nx-hanh',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nxhanh/',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/nx.hanh18/',
  },
];

async function AppSidebar() {
  const data = await getData();
  const links = data.social
    ? Object.entries(data.social).map(([key, url]) => ({
        title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the title
        url: url as string,
      }))
    : defaultLinks;

  return (
    <Sidebar collapsible="icon" className="py-10 px-6">
      <SidebarHeader>
        <LogoText />
      </SidebarHeader>
      <SidebarContent>
        <SidebarLinkMenu items={navItems} />
      </SidebarContent>
      <SidebarFooter className="flex flex-row">
        {links.map((link, index) => (
          <Fragment key={index}>
            <Link href={link.url} target="_blank" rel="noreferrer">
              <span
                className={cn(
                  'opacity-60',
                  'hover:opacity-100 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#93faba] hover:via-[#8ceed6] hover:to-[#82e0f980]'
                )}
              >
                {link.title}
              </span>
            </Link>
            {index !== defaultLinks.length - 1 && (
              <span key={index} className="mx-2">
                ǀ
              </span>
            )}
          </Fragment>
        ))}
      </SidebarFooter>
      <CustomTrigger />
    </Sidebar>
  );
}

export default AppSidebar;
