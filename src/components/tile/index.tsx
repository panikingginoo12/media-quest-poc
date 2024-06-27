import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';
import { roboto_condensed } from '@/utils/fonts';

import PostTypeLeague from '../post-types/league';
import PostType from '../post-types/type';

type League = string
type Type = string

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

const Tile = ({ read, img, description = '', leagues, types, date, author }: TileProps) => {
  return (
    <div className='w-[380px] min-h-[346px] bg-light-000 dark:bg-dark-main rounded-[14px] p-2.5 flex flex-col gap-2 overflow-hidden hover:dark:bg-dark-002 transition-[background-color] cursor-pointer'>
      <div className="relative">
        <Image src={img.src} alt={img.alt} width={380} height={220} />
      </div>
      <div className={cn('flex flex-col p-1 gap-1', roboto_condensed.className)}>
        <span className='text-dark-003 dark:text-light-main font-medium text-[17px]'>{description}</span>
        <div className="flex gap-[3px] items-center">
          <div className="flex gap-[3px]">
            {
              leagues?.map((league) => (
                <span key={league}>
                  <PostTypeLeague league={league} />
                </span>
              ))
            }
          </div>
          <div className="flex gap-[3px]">
            {
              types?.map((type) => (
                <span key={type}>
                  <PostType type={type} />
                </span>
              ))
            }
          </div>
          <span className='text-dark-000 dark:text-light-003 fark uppercase text-xs ml-[3px] font-semibold'>
            {date} | {author}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tile