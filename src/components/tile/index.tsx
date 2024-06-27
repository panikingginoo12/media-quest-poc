import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';
import { roboto_condensed } from '@/utils/fonts';
import eyeIcon from '@public/assets/images/dark/white-eye-icon-small.svg';

import PostTypeLeague from '../post-types/league';
import PostType from '../post-types/type';

type League = string;
type Type = string;

interface TileProps {
  read?: boolean;
  img: {
    src: string;
    alt: string;
  };
  description?: string;
  leagues?: League[];
  types?: Type[];
  date?: string;
  author?: string;
}

const Tile = ({
  read = true,
  img,
  description = '',
  leagues,
  types,
  date,
  author,
}: TileProps) => {
  return (
    <div
      className={cn(
        'flex',
        'min-h-[346px]',
        'w-[380px]',
        'cursor-pointer',
        'flex-col',
        'gap-2',
        'overflow-hidden',
        'rounded-[14px]',
        'bg-light-000',
        'p-2.5',
        'transition-colors',
        'border',
        'border-light-main',
        'hover:border-blue-003',
        'hover:bg-blue-001',

        'dark:bg-dark-main',
        'hover:dark:border-light-main',
        'hover:dark:bg-dark-002'
      )}
    >
      <div className="relative">
        <Image src={img.src} alt={img.alt} width={380} height={220} />

        {read && (
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-x-1 rounded-[5px] bg-dark-003/80 px-1.5 py-[5px] backdrop-blur-[5px]">
            <Image
              src={eyeIcon}
              alt={'already read identifier'}
              width={16}
              height={16}
            />
            <span
              className={cn(
                roboto_condensed.className,
                'text-[15px] font-extrabold uppercase leading-none text-light-000'
              )}
            >
              Read
            </span>
          </div>
        )}
      </div>
      <div
        className={cn('flex flex-col gap-1 p-1', roboto_condensed.className)}
      >
        <span className="text-[17px] font-medium text-dark-003 dark:text-light-main">
          {description}
        </span>
        <div className="flex items-center gap-[3px]">
          <div className="flex gap-[3px]">
            {leagues?.map((league) => (
              <span key={league}>
                <PostTypeLeague league={league} />
              </span>
            ))}
          </div>
          <div className="flex gap-[3px]">
            {types?.map((type) => (
              <span key={type}>
                <PostType type={type} />
              </span>
            ))}
          </div>
          <span className="fark ml-[3px] text-xs font-semibold uppercase text-dark-000 dark:text-light-003">
            {date} | {author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tile;
