'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import darkSwitch from 'public/assets/images/dark/dark-mode-switch.svg';
import lightSwitch from 'public/assets/images/light/light-mode-switch.svg';
import React, { useCallback } from 'react';

const ThemeSwitcherButton = () => {
  const { theme, setTheme } = useTheme();

  const handleClick = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className='cursor-pointer p-1 bg-transparent border-none'>
      <Image
        src={theme === 'light' ? lightSwitch : darkSwitch}
        width={34}
        height={22}
        alt='Theme switcher button'
      />
    </button>
  );
};

export default ThemeSwitcherButton;
