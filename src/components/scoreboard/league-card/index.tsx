'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { roboto_condensed } from '@/utils/fonts';
import basketball from '@public/assets/images/dark/sports-ball/basketball-ball.png';
import volleyball from '@public/assets/images/dark/sports-ball/volleyball-ball.png';
import nba from '@public/assets/images/logos/nba.png';
import pba from '@public/assets/images/logos/pba.png';
import uaap from '@public/assets/images/logos/uaap.png';

type LeagueCardProps = {
  league: 'pba' | 'nba' | 'uaap';
};

const LeagueCard: React.FC<LeagueCardProps> = ({ league }) => {
  const [hover, setHover] = useState(false);

  let imageSrc;
  let leagueName;
  let dimentions;
  let ball;

  switch (league) {
    case 'pba':
      imageSrc = pba;
      leagueName = 'PBA';
      dimentions = {
        w: 49,
        h: 21,
      };
      ball = basketball;
      break;

    case 'nba':
      imageSrc = nba;
      leagueName = 'NBA';
      dimentions = {
        w: 16,
        h: 35,
      };
      ball = basketball;

      break;

    case 'uaap':
      imageSrc = uaap;
      leagueName = 'UAAP';
      dimentions = {
        w: 30,
        h: 36,
      };
      ball = volleyball;
      break;

    default:
      return <></>;
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        'relative flex h-[84px] w-[80px] cursor-pointer flex-col gap-y-2 overflow-hidden rounded-lg bg-light-main px-2.5 py-2 dark:bg-light-main/[8%]'
      )}
      role="button"
      aria-roledescription="Button to toggle teams scores"
      aria-label={leagueName}
    >
      {hover ? (
        <span
          className={cn(
            roboto_condensed.className,
            'grid flex-1 place-content-center text-[13px] font-semibold dark:text-yellow-main'
          )}
        >{`EXPAND >>`}</span>
      ) : (
        <>
          <span
            className={cn(
              roboto_condensed.className,
              'z-[3] text-xl font-semibold leading-none dark:text-light-main'
            )}
          >
            {leagueName}
          </span>
          <div className="z-[2] flex flex-1 items-center">
            <Image
              src={imageSrc}
              alt={league}
              width={dimentions.w}
              height={dimentions.h}
            />
          </div>
          <div className="absolute bottom-0 right-0 z-[1] translate-x-[38%] translate-y-[35%]">
            <Image src={ball} alt={`${league} ball`} width={80} height={80} />
          </div>
        </>
      )}
    </div>
  );
};

export default LeagueCard;
