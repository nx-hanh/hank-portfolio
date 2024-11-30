import { Fragment } from 'react';

import { fontBungee, fontBungeeOutline } from '@/lib/fonts';
import { getData } from '@/lib/gist';
import { Link } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const defaultName = 'Nguyễn Xuân Hạnh';

const LogoText = async () => {
  const data = await getData();
  const name = data.name || defaultName;

  const ConvertLogoTextData = (text: string) => {
    const short = text
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
    const specialArray = text.split(' ').flatMap((word) => {
      const wordArray = word.split('');
      return wordArray.length > 1
        ? [wordArray[0], wordArray.slice(1).join('')]
        : wordArray;
    });
    return {
      default: text,
      short,
      specialArray,
    };
  };
  const TextData = ConvertLogoTextData(name.toUpperCase());

  return (
    <Link className="flex w-full cursor-pointer flex-col" href="/">
      <SpecialTextDisplay textArray={TextData.specialArray} />
      <span className="opacity-60">Web developer</span>
    </Link>
  );
};
const SpecialTextDisplay = ({ textArray }: { textArray: string[] }) => {
  const lastWordIndex = textArray.length - 3;
  return (
    <div className="pointer-events-none">
      {textArray.map((text, index) => (
        <Fragment key={index}>
          <span
            className={cn(
              'text-3xl',
              index % 2 === 0
                ? fontBungee.className
                : fontBungeeOutline.className
            )}
          >
            {`${text}${index % 2 === 0 ? '' : '  '}`}
          </span>
          {index === lastWordIndex && <br />}
        </Fragment>
      ))}
    </div>
  );
};

export default LogoText;
