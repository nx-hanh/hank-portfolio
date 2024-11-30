import { LanguageSwitcher } from './language-switcher';
import { ThemeSwitcher } from '@/components/navbar/theme-switcher';

import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

export const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold opacity-10">
          {/* {m.app_name()} */}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
