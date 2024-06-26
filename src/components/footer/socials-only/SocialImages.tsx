'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SocialImages = () => {
  const { resolvedTheme } = useTheme();
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    if (resolvedTheme) {
      setThemeLoaded(true);
    }
  }, [resolvedTheme]);

  const images = [
    { platform: 'fb', alt: 'facebook' },
    { platform: 'twitter', alt: 'twitter' },
    { platform: 'instagram', alt: 'instagram' },
    { platform: 'youtube', alt: 'youtube' },
    { platform: 'tiktok', alt: 'tiktok' },
  ];

  if (!themeLoaded) {
    return (
      <div className='flex h-[40px] gap-2 items-center'>
        {images.map((image, index) => (
          <div key={index} className="p-1.5">
            <div className='w-[28px] h-[28px] skeleton rounded-full'>
              <svg
                className="animate-pulse"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex h-[40px] gap-2 items-center'>
      {images.map((image, index) => (
        <div key={index} className="p-1.5">
          <Image src={`/assets/images/${resolvedTheme}/social-media/footer/${image.platform}.svg`} width={28} height={28} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default SocialImages;
