'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import darkSwitch from '@public/assets/images/dark/dark-mode-switch.svg';
import lightSwitch from '@public/assets/images/light/light-mode-switch.svg';

const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleClick = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);


  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className='cursor-pointer p-1 bg-transparent border-none'>
      {
        !mounted ? <div className='w-[34px] h-[24px] skeleton rounded-md' aria-label='Loading toggle theme image' role='img' aria-busy='true'>
        </div>
          : <Image
            src={theme === 'light' ? lightSwitch : darkSwitch}
            width={34}
            height={22}
            alt='Theme switcher button'
          />
      }
    </button>
  );
};

export default ThemeSwitcherButton;
