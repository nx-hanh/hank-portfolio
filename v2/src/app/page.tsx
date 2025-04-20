'use client';
import { useState } from 'react';
import { ChevronRightIcon, MinusIcon } from 'lucide-react';

import BehindMask from '@/components/mask/BehindMask';
import { Link } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function Home() {
  const [disableMask, setDisableMask] = useState<boolean>(false);
  const behindData = (
    <div className="flex max-w-[400px] cursor-default flex-col gap-y-2 text-lg">
      <h1 className="text-6xl font-bold">Hi there!</h1>
      <p>
        <MinusIcon className="inline-block" /> As a freelance developer
        <span className="font-semibold text-blue-500"> now </span>, I specialize
        in creating dynamic and engaging web solutions, combining technical
        expertise with a creative approach to deliver exceptional results.
      </p>
    </div>
  );
  return (
    <main className="relative size-full min-h-svh">
      <BehindMask data={behindData} disable={disableMask} />
      <section className="flex size-full min-h-svh flex-col items-center justify-center rounded-md p-8">
        <div className="flex max-w-[400px] flex-col gap-y-2 text-lg">
          <h1 className="text-6xl font-bold">Hi there!</h1>
          <p>
            <MinusIcon className="inline-block" /> {"I'm a passionate "}
            <span className="font-semibold text-blue-500">
              software engineer
            </span>
            , dedicated to building impactful applications and pushing the
            boundaries of technology with creativity and precision.
          </p>
          <div className="z-50 flex w-full justify-end">
            <Link
              href="/projects"
              className="hover:scale-110"
              onMouseEnter={() => setDisableMask(true)}
              onMouseLeave={() => setDisableMask(false)}
            >
              <span
                className={cn(
                  'relative inline font-medium italic',
                  "after:absolute after:-bottom-1 after:left-0 after:-z-10 after:h-[2px] after:w-0 after:content-['']",
                  'after:bg-gradient-to-r after:from-[#93faba] after:via-[#8ceed6] after:to-[#82e0f980]',
                  'after:transition-[width,left] after:duration-500 after:ease-out',
                  'hover:after:w-full focus:after:w-full active:after:w-full',
                  'hover:bg-gradient-to-r hover:from-[#93faba] hover:via-[#8ceed6] hover:to-[#82e0f980] hover:bg-clip-text hover:text-transparent'
                )}
              >
                Take a look
              </span>
              <ChevronRightIcon className="inline-block" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
