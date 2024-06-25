'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const SocialImages = () => {
  const { resolvedTheme } = useTheme();

  const getSocialImage = (platform: string) => {
    return resolvedTheme
      ? `/assets/images/${resolvedTheme}/social-media/footer/${platform}.svg`
      : '';
  }

  const images = [
    { platform: 'fb', alt: 'facebook' },
    { platform: 'twitter', alt: 'twitter' },
    { platform: 'instagram', alt: 'instagram' },
    { platform: 'youtube', alt: 'youtube' },
    { platform: 'tiktok', alt: 'tiktok' },
  ];

  return (
    <div className='flex h-[40px] gap-2'>
      {images.map((image, index) => (
        <div key={index} className="p-1.5">
          {getSocialImage(image.platform) ? (
            <Image src={getSocialImage(image.platform)} width={28} height={28} alt={image.alt} />
          ) : (
            <div className="w-[28px] h-[28px] bg-gray-300 animate-pulse rounded-full" />
          )}
        </div>
      ))}
    </div>
  )
}

export default SocialImages;
